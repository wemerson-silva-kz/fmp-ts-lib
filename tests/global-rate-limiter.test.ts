import { describe, it, expect, beforeEach } from 'bun:test';
import { FMPClient } from '../src/index.js';
import { GlobalRateLimiter } from '../src/utils/global-rate-limiter.js';

describe('Global Rate Limiter', () => {
  beforeEach(() => {
    // Reset rate limiter before each test
    GlobalRateLimiter.reset();
  });

  describe('Configuration', () => {
    it('should configure global rate limiter', () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 10,
        requestsPerDay: 1000,
        enabled: true
      });

      const usage = GlobalRateLimiter.getUsage('test-key');
      expect(usage.minuteLimit).toBe(10);
      expect(usage.dayLimit).toBe(1000);
    });
  });

  describe('Rate Limiting Across Multiple Clients', () => {
    it('should share rate limit across multiple client instances', async () => {
      // Configure low limits for testing
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 2,
        requestsPerDay: 100,
        enabled: true
      });

      const client1 = new FMPClient({ apiKey: 'test-key' });
      const client2 = new FMPClient({ apiKey: 'test-key' });

      // First request from client1 should succeed
      const check1 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check1.allowed).toBe(true);

      // Second request from client2 should succeed
      const check2 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check2.allowed).toBe(true);

      // Third request should fail (exceeds limit of 2)
      const check3 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check3.allowed).toBe(false);
      expect(check3.retryAfter).toBeGreaterThan(0);
    });

    it('should track usage correctly', async () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 5,
        requestsPerDay: 100,
        enabled: true
      });

      const client = new FMPClient({ apiKey: 'test-key' });

      // Make some requests
      await GlobalRateLimiter.checkAndIncrement('test-key');
      await GlobalRateLimiter.checkAndIncrement('test-key');

      const usage = client.getGlobalRateLimitUsage();
      expect(usage.minuteUsage).toBe(2);
      expect(usage.dayUsage).toBe(2);
      expect(usage.minuteLimit).toBe(5);
      expect(usage.dayLimit).toBe(100);
    });
  });

  describe('Auto-Retry Behavior', () => {
    it('should calculate correct retry time based on window reset', async () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 1,
        requestsPerDay: 10,
        enabled: true
      });

      // First request should succeed
      const check1 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check1.allowed).toBe(true);

      // Second request should fail with retry time
      const check2 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check2.allowed).toBe(false);
      expect(check2.retryAfter).toBeGreaterThan(0);
      expect(check2.retryAfter).toBeLessThanOrEqual(60); // Should be within 1 minute
    });

    it('should provide consistent retry times for same window', async () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 1,
        requestsPerDay: 10,
        enabled: true
      });

      // Exhaust the limit
      await GlobalRateLimiter.checkAndIncrement('test-key');

      // Multiple checks should return similar retry times
      const check1 = await GlobalRateLimiter.checkAndIncrement('test-key');
      const check2 = await GlobalRateLimiter.checkAndIncrement('test-key');

      expect(check1.allowed).toBe(false);
      expect(check2.allowed).toBe(false);
      
      // Retry times should be within 1 second of each other
      const timeDiff = Math.abs((check1.retryAfter || 0) - (check2.retryAfter || 0));
      expect(timeDiff).toBeLessThanOrEqual(1);
    });
  });

  describe('Different API Keys', () => {
    it('should maintain separate limits for different API keys', async () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 1,
        requestsPerDay: 10,
        enabled: true
      });

      // First API key should be allowed
      const check1 = await GlobalRateLimiter.checkAndIncrement('api-key-1');
      expect(check1.allowed).toBe(true);

      // Second API key should also be allowed (separate limit)
      const check2 = await GlobalRateLimiter.checkAndIncrement('api-key-2');
      expect(check2.allowed).toBe(true);

      // First API key should now be rate limited
      const check3 = await GlobalRateLimiter.checkAndIncrement('api-key-1');
      expect(check3.allowed).toBe(false);

      // But second API key should still be allowed for one more
      const check4 = await GlobalRateLimiter.checkAndIncrement('api-key-2');
      expect(check4.allowed).toBe(false); // Now it's also limited
    });
  });

  describe('Disabled Rate Limiting', () => {
    it('should allow unlimited requests when disabled', async () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 1,
        requestsPerDay: 1,
        enabled: false // Disabled
      });

      // Should allow multiple requests even with limit of 1
      const check1 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check1.allowed).toBe(true);

      const check2 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check2.allowed).toBe(true);

      const check3 = await GlobalRateLimiter.checkAndIncrement('test-key');
      expect(check3.allowed).toBe(true);
    });
  });

  describe('Cleanup', () => {
    it('should clean up expired entries', async () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 5,
        requestsPerDay: 100,
        enabled: true
      });

      // Make a request
      await GlobalRateLimiter.checkAndIncrement('test-key');
      
      let usage = GlobalRateLimiter.getUsage('test-key');
      expect(usage.minuteUsage).toBe(1);

      // Cleanup should not affect current entries
      GlobalRateLimiter.cleanup();
      usage = GlobalRateLimiter.getUsage('test-key');
      expect(usage.minuteUsage).toBe(1);
    });

    it('should reset all limits', async () => {
      FMPClient.configureGlobalRateLimit({
        requestsPerMinute: 5,
        requestsPerDay: 100,
        enabled: true
      });

      // Make some requests
      await GlobalRateLimiter.checkAndIncrement('test-key');
      await GlobalRateLimiter.checkAndIncrement('test-key');

      let usage = GlobalRateLimiter.getUsage('test-key');
      expect(usage.minuteUsage).toBe(2);

      // Reset should clear all usage
      GlobalRateLimiter.reset();
      usage = GlobalRateLimiter.getUsage('test-key');
      expect(usage.minuteUsage).toBe(0);
    });
  });
});
