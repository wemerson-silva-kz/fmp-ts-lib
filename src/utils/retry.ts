export interface RetryOptions {
  maxRetries?: number;
  baseDelay?: number;
  maxDelay?: number;
  exponentialBackoff?: boolean;
  retryCondition?: (error: any) => boolean;
  onRetry?: (error: any, attempt: number) => void;
}

export class RetryError extends Error {
  constructor(
    message: string,
    public readonly attempts: number,
    public readonly lastError: any
  ) {
    super(message);
    this.name = 'RetryError';
  }
}

export class RetryManager {
  private readonly maxRetries: number;
  private readonly baseDelay: number;
  private readonly maxDelay: number;
  private readonly exponentialBackoff: boolean;
  private readonly retryCondition: (error: any) => boolean;
  private readonly onRetry?: (error: any, attempt: number) => void;

  constructor(options: RetryOptions = {}) {
    this.maxRetries = options.maxRetries || 3;
    this.baseDelay = options.baseDelay || 1000; // 1 second
    this.maxDelay = options.maxDelay || 30000;  // 30 seconds
    this.exponentialBackoff = options.exponentialBackoff !== false;
    this.retryCondition = options.retryCondition || this.defaultRetryCondition;
    this.onRetry = options.onRetry;
  }

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    let lastError: any;
    
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        // Don't retry on the last attempt or if retry condition fails
        if (attempt === this.maxRetries || !this.retryCondition(error)) {
          break;
        }

        // Calculate delay
        const delay = this.calculateDelay(attempt);
        
        // Notify about retry
        if (this.onRetry) {
          this.onRetry(error, attempt + 1);
        }

        // Wait before retry
        await this.sleep(delay);
      }
    }

    throw new RetryError(
      `Operation failed after ${this.maxRetries + 1} attempts: ${lastError?.message || 'Unknown error'}`,
      this.maxRetries + 1,
      lastError
    );
  }

  private defaultRetryCondition(error: any): boolean {
    // Retry on network errors, 5xx errors, and rate limiting
    if (error?.code === 'ECONNRESET' || 
        error?.code === 'ENOTFOUND' || 
        error?.code === 'ECONNREFUSED') {
      return true;
    }

    // Retry on HTTP 5xx errors and 429 (rate limited)
    if (error?.response?.status >= 500 || error?.response?.status === 429) {
      return true;
    }

    // Retry on timeout errors
    if (error?.code === 'ETIMEDOUT' || error?.message?.includes('timeout')) {
      return true;
    }

    return false;
  }

  private calculateDelay(attempt: number): number {
    if (!this.exponentialBackoff) {
      return this.baseDelay;
    }

    // Exponential backoff with jitter
    const exponentialDelay = this.baseDelay * Math.pow(2, attempt);
    const jitter = Math.random() * 1000; // Add up to 1 second of jitter
    const delay = Math.min(exponentialDelay + jitter, this.maxDelay);
    
    return Math.floor(delay);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Create a retry wrapper for functions
  static wrap<T extends (...args: any[]) => Promise<any>>(
    fn: T,
    options: RetryOptions = {}
  ): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
    const retryManager = new RetryManager(options);
    
    return (...args: Parameters<T>) => {
      return retryManager.execute(() => fn(...args));
    };
  }
}
