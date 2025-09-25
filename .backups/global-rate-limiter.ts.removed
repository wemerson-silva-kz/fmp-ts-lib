export interface GlobalRateLimitOptions {
  requestsPerMinute?: number;
  requestsPerDay?: number;
  enabled?: boolean;
  onLimitExceeded?: (retryAfter: number) => void;
}

export interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class GlobalRateLimiterInstance {
  private minuteWindow = new Map<string, RateLimitEntry>();
  private dayWindow = new Map<string, RateLimitEntry>();
  
  private requestsPerMinute: number = 300;
  private requestsPerDay: number = 250000;
  private enabled: boolean = true;
  private onLimitExceeded?: (retryAfter: number) => void;

  configure(options: GlobalRateLimitOptions): void {
    this.requestsPerMinute = options.requestsPerMinute || 300;
    this.requestsPerDay = options.requestsPerDay || 250000;
    this.enabled = options.enabled !== false;
    this.onLimitExceeded = options.onLimitExceeded;
  }

  async checkAndIncrement(apiKey: string): Promise<{ allowed: boolean; retryAfter?: number }> {
    if (!this.enabled) {
      return { allowed: true };
    }

    const now = Date.now();
    
    // Check minute limit
    const minuteCheck = this.checkWindow(
      this.minuteWindow,
      apiKey,
      now,
      60 * 1000,
      this.requestsPerMinute
    );

    if (!minuteCheck.allowed) {
      if (this.onLimitExceeded) {
        this.onLimitExceeded(minuteCheck.retryAfter!);
      }
      return minuteCheck;
    }

    // Check day limit
    const dayCheck = this.checkWindow(
      this.dayWindow,
      apiKey,
      now,
      24 * 60 * 60 * 1000,
      this.requestsPerDay
    );

    if (!dayCheck.allowed) {
      if (this.onLimitExceeded) {
        this.onLimitExceeded(dayCheck.retryAfter!);
      }
      return dayCheck;
    }

    // Increment counters atomically
    this.incrementCounter(this.minuteWindow, apiKey, now, 60 * 1000);
    this.incrementCounter(this.dayWindow, apiKey, now, 24 * 60 * 60 * 1000);

    return { allowed: true };
  }

  private checkWindow(
    window: Map<string, RateLimitEntry>,
    key: string,
    now: number,
    windowMs: number,
    limit: number
  ): { allowed: boolean; retryAfter?: number } {
    const entry = window.get(key);
    
    if (!entry || now >= entry.resetTime) {
      return { allowed: true };
    }

    if (entry.count >= limit) {
      return {
        allowed: false,
        retryAfter: Math.ceil((entry.resetTime - now) / 1000)
      };
    }

    return { allowed: true };
  }

  private incrementCounter(
    window: Map<string, RateLimitEntry>,
    key: string,
    now: number,
    windowMs: number
  ): void {
    const entry = window.get(key);
    
    if (!entry || now >= entry.resetTime) {
      window.set(key, {
        count: 1,
        resetTime: now + windowMs
      });
    } else {
      entry.count++;
    }
  }

  getUsage(apiKey: string): {
    minuteUsage: number;
    minuteLimit: number;
    dayUsage: number;
    dayLimit: number;
    minuteResetTime?: number;
    dayResetTime?: number;
  } {
    const minuteEntry = this.minuteWindow.get(apiKey);
    const dayEntry = this.dayWindow.get(apiKey);
    const now = Date.now();

    return {
      minuteUsage: minuteEntry && now < minuteEntry.resetTime ? minuteEntry.count : 0,
      minuteLimit: this.requestsPerMinute,
      dayUsage: dayEntry && now < dayEntry.resetTime ? dayEntry.count : 0,
      dayLimit: this.requestsPerDay,
      minuteResetTime: minuteEntry?.resetTime,
      dayResetTime: dayEntry?.resetTime
    };
  }

  cleanup(): void {
    const now = Date.now();
    
    for (const [key, entry] of this.minuteWindow.entries()) {
      if (now >= entry.resetTime) {
        this.minuteWindow.delete(key);
      }
    }

    for (const [key, entry] of this.dayWindow.entries()) {
      if (now >= entry.resetTime) {
        this.dayWindow.delete(key);
      }
    }
  }

  reset(): void {
    this.minuteWindow.clear();
    this.dayWindow.clear();
  }
}

// Singleton instance
export const GlobalRateLimiter = new GlobalRateLimiterInstance();
