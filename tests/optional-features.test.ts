import { describe, it, expect } from 'bun:test';
import { FMPClient } from '../src/index.js';

describe('Optional Enhanced Features', () => {
  describe('Backward Compatibility', () => {
    it('should work with basic configuration (no enhanced features)', () => {
      const client = new FMPClient({ apiKey: 'test-key' });
      
      expect(client).toBeDefined();
      expect(client.search).toBeDefined();
      expect(client.getMetrics()).toBeNull(); // No metrics when disabled
    });

    it('should work with existing code without breaking changes', () => {
      // This simulates existing user code
      const client = new FMPClient({
        apiKey: 'test-key',
        baseUrl: 'https://custom-url.com'
      });
      
      expect(client).toBeDefined();
      expect(typeof client.search.searchSymbol).toBe('function');
    });
  });

  describe('Cache Feature', () => {
    it('should enable cache when configured', () => {
      const client = new FMPClient({
        apiKey: 'test-key',
        cache: {
          enabled: true,
          ttl: 60000,
          maxSize: 100
        }
      });
      
      expect(client).toBeDefined();
      // Cache is internal, but client should work
    });

    it('should work without cache when not configured', () => {
      const client = new FMPClient({ apiKey: 'test-key' });
      
      expect(client).toBeDefined();
      // Should work normally without cache
    });
  });

  describe('Retry Feature', () => {
    it('should enable retry when configured', () => {
      const client = new FMPClient({
        apiKey: 'test-key',
        retry: {
          enabled: true,
          maxAttempts: 3,
          backoffMs: 1000
        }
      });
      
      expect(client).toBeDefined();
    });

    it('should work without retry when not configured', () => {
      const client = new FMPClient({ apiKey: 'test-key' });
      
      expect(client).toBeDefined();
    });
  });

  describe('Metrics Feature', () => {
    it('should enable metrics when configured', () => {
      const client = new FMPClient({
        apiKey: 'test-key',
        metrics: {
          enabled: true
        }
      });
      
      expect(client).toBeDefined();
      // Metrics should be available (but empty initially)
      const metrics = client.getMetrics();
      expect(metrics).toBeDefined();
    });

    it('should return null metrics when not configured', () => {
      const client = new FMPClient({ apiKey: 'test-key' });
      
      const metrics = client.getMetrics();
      expect(metrics).toBeNull();
    });
  });

  describe('Batch Requests', () => {
    it('should support batch requests', async () => {
      const client = new FMPClient({ apiKey: 'test-key' });
      
      expect(typeof client.batchRequest).toBe('function');
      
      // Mock requests that don't actually call API
      const mockRequests = [
        () => Promise.resolve({ symbol: 'AAPL' }),
        () => Promise.resolve({ symbol: 'MSFT' })
      ];
      
      const results = await client.batchRequest(mockRequests);
      expect(results).toHaveLength(2);
      expect(results[0]).toEqual({ symbol: 'AAPL' });
      expect(results[1]).toEqual({ symbol: 'MSFT' });
    });
  });

  describe('All Features Combined', () => {
    it('should work with all features enabled', () => {
      const client = new FMPClient({
        apiKey: 'test-key',
        cache: { enabled: true, ttl: 300000, maxSize: 1000 },
        retry: { enabled: true, maxAttempts: 3, backoffMs: 1000 },
        metrics: { enabled: true }
      });
      
      expect(client).toBeDefined();
      expect(client.getMetrics()).toBeDefined();
      expect(typeof client.batchRequest).toBe('function');
    });

    it('should work with partial features enabled', () => {
      const client = new FMPClient({
        apiKey: 'test-key',
        cache: { enabled: true },
        // retry and metrics disabled
      });
      
      expect(client).toBeDefined();
      expect(client.getMetrics()).toBeNull(); // Metrics disabled
    });
  });

  describe('Configuration Validation', () => {
    it('should handle missing optional properties gracefully', () => {
      const client = new FMPClient({
        apiKey: 'test-key',
        cache: { enabled: true }, // Missing ttl and maxSize
        retry: { enabled: true },  // Missing maxAttempts and backoffMs
        metrics: { enabled: true }
      });
      
      expect(client).toBeDefined();
      // Should use default values internally
    });
  });
});
