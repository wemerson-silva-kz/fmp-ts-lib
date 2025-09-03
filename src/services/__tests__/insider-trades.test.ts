import { describe, it, expect, beforeEach, vi } from 'vitest';
import { InsiderTradesService } from '../insider-trades.js';
import { HttpClient } from '../../utils/http-client.js';

describe('InsiderTradesService', () => {
  let insiderTradesService: InsiderTradesService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    insiderTradesService = new InsiderTradesService(mockHttpClient);
  });

  describe('getLatestInsiderTrading', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'AAPL', reportingName: 'John Doe' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await insiderTradesService.getLatestInsiderTrading();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/insider-trading/latest', {});
      expect(result).toBe(mockResponse);
    });
  });

  describe('getInsiderTradingBySymbol', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'AAPL', reportingName: 'John Doe' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await insiderTradesService.getInsiderTradingBySymbol('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/insider-trading/AAPL', {});
    });
  });
});
