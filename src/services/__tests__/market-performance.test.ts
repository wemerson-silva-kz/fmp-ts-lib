import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MarketPerformanceService } from '../market-performance.js';
import { HttpClient } from '../../utils/http-client.js';

describe('MarketPerformanceService', () => {
  let marketPerformanceService: MarketPerformanceService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    marketPerformanceService = new MarketPerformanceService(mockHttpClient);
  });

  describe('getSectorPerformanceSnapshot', () => {
    it('should call correct endpoint with date', async () => {
      const mockResponse = [{ sector: 'Technology', changesPercentage: 2.5 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await marketPerformanceService.getSectorPerformanceSnapshot('2024-02-01');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/sector-performance-snapshot', { date: '2024-02-01' });
    });
  });

  describe('getMarketGainers', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'AAPL', changesPercentage: 5.2 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await marketPerformanceService.getMarketGainers();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/gainers');
    });
  });
});
