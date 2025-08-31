export interface APIMetrics {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  cacheHits: number;
  cacheMisses: number;
  averageResponseTime: number;
  requestsByEndpoint: Map<string, number>;
  errorsByType: Map<string, number>;
  requestsPerHour: number[];
  lastRequestTime?: number;
  startTime: number;
}

export interface RequestMetric {
  endpoint: string;
  method: string;
  startTime: number;
  endTime?: number;
  success?: boolean;
  error?: string;
  cached?: boolean;
  responseTime?: number;
}

export class MetricsCollector {
  private metrics: APIMetrics;
  private activeRequests = new Map<string, RequestMetric>();
  private hourlyBuckets: number[] = new Array(24).fill(0);
  private lastHourUpdate = new Date().getHours();

  constructor() {
    this.metrics = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      cacheHits: 0,
      cacheMisses: 0,
      averageResponseTime: 0,
      requestsByEndpoint: new Map(),
      errorsByType: new Map(),
      requestsPerHour: new Array(24).fill(0),
      startTime: Date.now()
    };
  }

  // Start tracking a request
  startRequest(endpoint: string, method: string = 'GET'): string {
    const requestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    this.activeRequests.set(requestId, {
      endpoint,
      method,
      startTime: Date.now()
    });

    this.metrics.totalRequests++;
    this.updateHourlyStats();
    this.updateEndpointStats(endpoint);

    return requestId;
  }

  // End tracking a request with success
  endRequest(requestId: string, cached: boolean = false): void {
    const request = this.activeRequests.get(requestId);
    if (!request) return;

    const endTime = Date.now();
    const responseTime = endTime - request.startTime;

    request.endTime = endTime;
    request.success = true;
    request.cached = cached;
    request.responseTime = responseTime;

    this.metrics.successfulRequests++;
    this.metrics.lastRequestTime = endTime;

    if (cached) {
      this.metrics.cacheHits++;
    } else {
      this.metrics.cacheMisses++;
    }

    // Update average response time
    this.updateAverageResponseTime(responseTime);

    this.activeRequests.delete(requestId);
  }

  // End tracking a request with error
  endRequestWithError(requestId: string, error: string): void {
    const request = this.activeRequests.get(requestId);
    if (!request) return;

    const endTime = Date.now();
    request.endTime = endTime;
    request.success = false;
    request.error = error;
    request.responseTime = endTime - request.startTime;

    this.metrics.failedRequests++;
    this.metrics.lastRequestTime = endTime;

    // Track error types
    const errorCount = this.metrics.errorsByType.get(error) || 0;
    this.metrics.errorsByType.set(error, errorCount + 1);

    this.activeRequests.delete(requestId);
  }

  // Get current metrics
  getMetrics(): APIMetrics {
    return {
      ...this.metrics,
      requestsByEndpoint: new Map(this.metrics.requestsByEndpoint),
      errorsByType: new Map(this.metrics.errorsByType),
      requestsPerHour: [...this.metrics.requestsPerHour]
    };
  }

  // Get performance summary
  getPerformanceSummary(): {
    successRate: number;
    cacheHitRate: number;
    averageResponseTime: number;
    requestsPerMinute: number;
    uptime: number;
    topEndpoints: Array<{ endpoint: string; count: number }>;
    topErrors: Array<{ error: string; count: number }>;
  } {
    const totalTime = Date.now() - this.metrics.startTime;
    const requestsPerMinute = (this.metrics.totalRequests / (totalTime / 60000));

    const topEndpoints = Array.from(this.metrics.requestsByEndpoint.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([endpoint, count]) => ({ endpoint, count }));

    const topErrors = Array.from(this.metrics.errorsByType.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([error, count]) => ({ error, count }));

    return {
      successRate: this.metrics.totalRequests > 0 
        ? (this.metrics.successfulRequests / this.metrics.totalRequests) * 100 
        : 0,
      cacheHitRate: (this.metrics.cacheHits + this.metrics.cacheMisses) > 0
        ? (this.metrics.cacheHits / (this.metrics.cacheHits + this.metrics.cacheMisses)) * 100
        : 0,
      averageResponseTime: this.metrics.averageResponseTime,
      requestsPerMinute,
      uptime: totalTime,
      topEndpoints,
      topErrors
    };
  }

  // Reset all metrics
  reset(): void {
    this.metrics = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      cacheHits: 0,
      cacheMisses: 0,
      averageResponseTime: 0,
      requestsByEndpoint: new Map(),
      errorsByType: new Map(),
      requestsPerHour: new Array(24).fill(0),
      startTime: Date.now()
    };
    this.activeRequests.clear();
  }

  // Export metrics to JSON
  export(): string {
    const exportData = {
      ...this.getMetrics(),
      requestsByEndpoint: Object.fromEntries(this.metrics.requestsByEndpoint),
      errorsByType: Object.fromEntries(this.metrics.errorsByType),
      exportTime: new Date().toISOString()
    };
    
    return JSON.stringify(exportData, null, 2);
  }

  private updateAverageResponseTime(newResponseTime: number): void {
    const totalSuccessful = this.metrics.successfulRequests;
    if (totalSuccessful === 1) {
      this.metrics.averageResponseTime = newResponseTime;
    } else {
      // Incremental average calculation
      this.metrics.averageResponseTime = 
        ((this.metrics.averageResponseTime * (totalSuccessful - 1)) + newResponseTime) / totalSuccessful;
    }
  }

  private updateEndpointStats(endpoint: string): void {
    const count = this.metrics.requestsByEndpoint.get(endpoint) || 0;
    this.metrics.requestsByEndpoint.set(endpoint, count + 1);
  }

  private updateHourlyStats(): void {
    const currentHour = new Date().getHours();
    
    // Reset hourly buckets if we've moved to a new hour
    if (currentHour !== this.lastHourUpdate) {
      this.hourlyBuckets[currentHour] = 0;
      this.lastHourUpdate = currentHour;
    }
    
    if (this.hourlyBuckets[currentHour] !== undefined) {
      this.hourlyBuckets[currentHour]++;
    }
    this.metrics.requestsPerHour = [...this.hourlyBuckets];
  }
}
