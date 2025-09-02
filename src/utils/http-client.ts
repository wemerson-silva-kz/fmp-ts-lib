import type { FMPConfig, QueryParams, FMPError } from '../types/index.js';
import { GlobalRateLimiter } from './global-rate-limiter.js';
import { MemoryCache } from './cache.js';
import { RetryManager } from './retry.js';
import { MetricsCollector } from './metrics.js';
import { detectWorkingAPI } from './api-detector.js';

export class HttpClient {
  private config: FMPConfig;
  private baseUrl: string;
  private urlDetected: boolean = false;
  
  // Optional enhanced features
  private cache?: MemoryCache;
  private retryManager?: RetryManager;
  private metrics?: MetricsCollector;

  constructor(config: FMPConfig) {
    this.config = config;
    this.baseUrl = config.baseUrl || 'https://financialmodelingprep.com/api/v3';
    
    // Initialize optional features
    if (config.cache?.enabled) {
      this.cache = new MemoryCache({
        ttl: config.cache.ttl || 300000,
        maxSize: config.cache.maxSize || 1000
      });
    }
    
    if (config.retry?.enabled) {
      this.retryManager = new RetryManager({
        maxAttempts: config.retry.maxAttempts || 3,
        backoffMs: config.retry.backoffMs || 1000
      });
    }
    
    if (config.metrics?.enabled) {
      this.metrics = new MetricsCollector();
    }
  }

  private async ensureWorkingURL(): Promise<void> {
    if (!this.urlDetected && !this.config.baseUrl) {
      this.baseUrl = await detectWorkingAPI(this.config.apiKey);
      this.urlDetected = true;
    }
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

  async get<T>(endpoint: string, params?: QueryParams): Promise<T> {
    return this.executeWithFeatures(async () => {
      const url = this.buildUrl(endpoint, params);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'FMP-TS-Lib/1.0.0'
        }
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorData}`);
      }

      const data = await response.json();
      
      // Check if the response contains an error message
      if ((data && typeof data === 'object' && 'error' in data) || (Array.isArray(data) && data.length === 0)) {
        const errorMessage = (data && typeof data === 'object' && 'error' in data) ? String((data as any).error) : 'No data found';
        throw new Error(errorMessage);
      }

      return data as T;
    }, endpoint, params);
  }

  async post<T>(endpoint: string, body: any, params?: QueryParams): Promise<T> {
    return this.executeWithFeatures(async () => {
      const url = this.buildUrl(endpoint, params);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'FMP-TS-Lib/1.0.0'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorData}`);
      }

      const data = await response.json();
      return data as T;
    }, endpoint, params);
  }

  private async executeWithFeatures<T>(
    requestFn: () => Promise<T>,
    endpoint: string,
    params?: QueryParams
  ): Promise<T> {
    // Ensure we have the working URL
    await this.ensureWorkingURL();
    
    const cacheKey = this.cache ? this.getCacheKey(endpoint, params) : null;
    let requestId: string | undefined;
    
    // Start metrics tracking
    if (this.metrics) {
      requestId = this.metrics.startRequest(endpoint);
    }

    try {
      // Check cache first
      if (this.cache && cacheKey) {
        const cachedResult = this.cache.get<T>(cacheKey);
        if (cachedResult !== null) {
          if (this.metrics && requestId) {
            this.metrics.endRequest(requestId, true);
          }
          return cachedResult;
        }
      }

      // Rate limit with auto-retry
      await this.waitForRateLimit();

      // Execute request with optional retry
      const result = this.retryManager 
        ? await this.retryManager.execute(requestFn)
        : await requestFn();

      // Cache the result
      if (this.cache && cacheKey) {
        this.cache.set(cacheKey, result);
      }

      // End metrics tracking
      if (this.metrics && requestId) {
        this.metrics.endRequest(requestId, false);
      }

      return result;
    } catch (error) {
      // End metrics tracking with error
      if (this.metrics && requestId) {
        this.metrics.endRequestWithError(requestId, error instanceof Error ? error.message : 'Unknown error');
      }
      
      if (error instanceof Error) {
        throw {
          message: error.message,
          status: 500
        } as FMPError;
      }
      throw {
        message: 'Unknown error occurred',
        status: 500
      } as FMPError;
    }
  }

  private async waitForRateLimit(): Promise<void> {
    while (true) {
      const rateLimitCheck = await GlobalRateLimiter.checkAndIncrement(this.config.apiKey);
      
      if (rateLimitCheck.allowed) {
        return; // Can proceed
      }
      
      // Rate limit exceeded - wait and retry
      const waitTime = (rateLimitCheck.retryAfter || 60) * 1000;
      console.log(`⏳ Rate limit exceeded. Waiting ${rateLimitCheck.retryAfter}s before retry...`);
      
      await new Promise(resolve => setTimeout(resolve, waitTime));
      // Loop will continue and try again
    }
  }

  private getCacheKey(endpoint: string, params?: QueryParams): string {
    const paramStr = params ? JSON.stringify(params) : '';
    return `${endpoint}:${paramStr}`;
  }

  // Get metrics (if enabled)
  getMetrics() {
    if (!this.metrics) return null;
    
    const baseMetrics = this.metrics.getMetrics();
    const rateLimitUsage = GlobalRateLimiter.getUsage(this.config.apiKey);
    
    return {
      ...baseMetrics,
      rateLimit: rateLimitUsage
    };
  }

  // Batch requests (if cache is enabled for optimization)
  async batchRequest<T>(requests: (() => Promise<T>)[]): Promise<T[]> {
    const results: T[] = [];
    
    for (const request of requests) {
      try {
        const result = await request();
        results.push(result);
      } catch (error) {
        console.error('Batch request failed:', error);
        throw error;
      }
    }
    
    return results;
  }
}

