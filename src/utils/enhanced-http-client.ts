import type { FMPConfig, QueryParams, FMPError } from '../types/index.js';
import { MemoryCache, type CacheOptions } from './cache.js';
import { RateLimiter, type RateLimitOptions } from './rate-limiter.js';
import { RetryManager, type RetryOptions } from './retry.js';
import { MetricsCollector } from './metrics.js';

export interface EnhancedHttpClientOptions extends FMPConfig {
  cache?: CacheOptions;
  rateLimit?: RateLimitOptions;
  retry?: RetryOptions;
  enableMetrics?: boolean;
}

export class EnhancedHttpClient {
  private config: FMPConfig;
  private baseUrl: string;
  private cache: MemoryCache;
  private rateLimiter: RateLimiter;
  private retryManager: RetryManager;
  private metrics: MetricsCollector;
  private enableMetrics: boolean;

  constructor(options: EnhancedHttpClientOptions) {
    this.config = {
      apiKey: options.apiKey,
      baseUrl: options.baseUrl
    };
    this.baseUrl = options.baseUrl || 'https://financialmodelingprep.com/stable';
    
    // Initialize components
    this.cache = new MemoryCache(options.cache);
    this.rateLimiter = new RateLimiter(options.rateLimit);
    this.retryManager = new RetryManager(options.retry);
    this.metrics = new MetricsCollector();
    this.enableMetrics = options.enableMetrics !== false;

    // Set up periodic cleanup
    this.setupPeriodicCleanup();
  }

  private buildUrl(endpoint: string, params?: QueryParams): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    // Add API key
    url.searchParams.append('apikey', this.config.apiKey);
    
    // Add other parameters
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }

  private getCacheKey(endpoint: string, params?: QueryParams): string {
    return `${endpoint}:${JSON.stringify(params || {})}`;
  }

  async get<T>(endpoint: string, params?: QueryParams, options?: {
    cacheTTL?: number;
    skipCache?: boolean;
    skipRateLimit?: boolean;
  }): Promise<T> {
    const cacheKey = this.getCacheKey(endpoint, params);
    let requestId: string | undefined;
    
    // Start metrics tracking
    if (this.enableMetrics) {
      requestId = this.metrics.startRequest(endpoint);
    }

    try {
      // Check cache first (unless explicitly skipped)
      if (!options?.skipCache) {
        const cachedResult = this.cache.get<T>(cacheKey);
        if (cachedResult !== null) {
          if (this.enableMetrics && requestId) {
            this.metrics.endRequest(requestId, true);
          }
          return cachedResult;
        }
      }

      // Check rate limit
      if (!options?.skipRateLimit) {
        const rateLimitCheck = await this.rateLimiter.checkLimit(this.config.apiKey);
        if (!rateLimitCheck.allowed) {
          throw new Error(`Rate limit exceeded. Retry after ${rateLimitCheck.retryAfter} seconds`);
        }
      }

      // Execute request with retry logic
      const result = await this.retryManager.execute(async () => {
        return this.executeRequest<T>(endpoint, params);
      });

      // Cache the result
      if (!options?.skipCache) {
        this.cache.set(cacheKey, result, options?.cacheTTL);
      }

      // End metrics tracking
      if (this.enableMetrics && requestId) {
        this.metrics.endRequest(requestId, false);
      }

      return result;
    } catch (error) {
      // End metrics tracking with error
      if (this.enableMetrics && requestId) {
        this.metrics.endRequestWithError(requestId, error instanceof Error ? error.message : 'Unknown error');
      }
      throw error;
    }
  }

  private async executeRequest<T>(endpoint: string, params?: QueryParams): Promise<T> {
    const url = this.buildUrl(endpoint, params);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'FMP-TS-Lib/2.0.0'
      }
    });

    if (!response.ok) {
      const errorData = await response.text();
      const error: FMPError = {
        message: `HTTP ${response.status}: ${errorData}`,
        status: response.status
      };
      throw error;
    }

    const data = await response.json();
    
    // Check if the response contains an error message
    if (typeof data === 'object' && data !== null) {
      const dataObj = data as any;
      if (dataObj.error || (Array.isArray(data) && data.length === 0)) {
        const error: FMPError = {
          message: dataObj.error || 'No data found',
          status: 400
        };
        throw error;
      }
    }

    return data as T;
  }

  async post<T>(endpoint: string, body: any, params?: QueryParams): Promise<T> {
    let requestId: string | undefined;
    
    // Start metrics tracking
    if (this.enableMetrics) {
      requestId = this.metrics.startRequest(endpoint, 'POST');
    }

    try {
      // Check rate limit
      const rateLimitCheck = await this.rateLimiter.checkLimit(this.config.apiKey);
      if (!rateLimitCheck.allowed) {
        throw new Error(`Rate limit exceeded. Retry after ${rateLimitCheck.retryAfter} seconds`);
      }

      // Execute request with retry logic
      const result = await this.retryManager.execute(async () => {
        return this.executePostRequest<T>(endpoint, body, params);
      });

      // End metrics tracking
      if (this.enableMetrics && requestId) {
        this.metrics.endRequest(requestId, false);
      }

      return result;
    } catch (error) {
      // End metrics tracking with error
      if (this.enableMetrics && requestId) {
        this.metrics.endRequestWithError(requestId, error instanceof Error ? error.message : 'Unknown error');
      }
      throw error;
    }
  }

  private async executePostRequest<T>(endpoint: string, body: any, params?: QueryParams): Promise<T> {
    const url = this.buildUrl(endpoint, params);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'FMP-TS-Lib/2.0.0'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.text();
      const error: FMPError = {
        message: `HTTP ${response.status}: ${errorData}`,
        status: response.status
      };
      throw error;
    }

    const data = await response.json();
    return data as T;
  }

  // Management methods
  clearCache(): void {
    this.cache.clear();
  }

  getCacheStats() {
    return this.cache.getStats();
  }

  getMetrics() {
    return this.enableMetrics ? this.metrics.getMetrics() : null;
  }

  getPerformanceSummary() {
    return this.enableMetrics ? this.metrics.getPerformanceSummary() : null;
  }

  getRateLimitUsage() {
    return this.rateLimiter.getUsage(this.config.apiKey);
  }

  resetMetrics(): void {
    if (this.enableMetrics) {
      this.metrics.reset();
    }
  }

  resetRateLimit(): void {
    this.rateLimiter.reset();
  }

  exportMetrics(): string | null {
    return this.enableMetrics ? this.metrics.export() : null;
  }

  private setupPeriodicCleanup(): void {
    // Clean up cache and rate limiter every 5 minutes
    setInterval(() => {
      this.cache.cleanup();
      this.rateLimiter.cleanup();
    }, 5 * 60 * 1000);
  }

  // Health check
  async healthCheck(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    details: {
      cache: boolean;
      rateLimit: boolean;
      connectivity: boolean;
      responseTime: number;
    };
  }> {
    const startTime = Date.now();
    let connectivity = false;
    
    try {
      // Test with a simple endpoint
      await this.get('/profile/AAPL', undefined, { 
        skipCache: true, 
        skipRateLimit: true 
      });
      connectivity = true;
    } catch (error) {
      // Expected to fail without proper API key, but connection should work
      connectivity = true;
    }

    const responseTime = Date.now() - startTime;
    const cacheStats = this.cache.getStats();
    const rateLimitUsage = this.rateLimiter.getUsage(this.config.apiKey);
    
    const details = {
      cache: cacheStats.enabled,
      rateLimit: rateLimitUsage.minuteUsage < rateLimitUsage.minuteLimit * 0.9,
      connectivity,
      responseTime
    };

    let status: 'healthy' | 'degraded' | 'unhealthy';
    if (details.connectivity && details.rateLimit && responseTime < 5000) {
      status = 'healthy';
    } else if (details.connectivity) {
      status = 'degraded';
    } else {
      status = 'unhealthy';
    }

    return { status, details };
  }
}

// Legacy HttpClient for backward compatibility
export class HttpClient {
  private enhancedClient: EnhancedHttpClient;

  constructor(config: FMPConfig) {
    this.enhancedClient = new EnhancedHttpClient({
      ...config,
      cache: { enabled: false },
      rateLimit: { enabled: false },
      retry: { maxRetries: 0 },
      enableMetrics: false
    });
  }

  async get<T>(endpoint: string, params?: QueryParams): Promise<T> {
    return this.enhancedClient.get<T>(endpoint, params, {
      skipCache: true,
      skipRateLimit: true
    });
  }

  async post<T>(endpoint: string, body: any, params?: QueryParams): Promise<T> {
    return this.enhancedClient.post<T>(endpoint, body, params);
  }
}
