import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ETFMutualFundsService } from '../etf-mutual-funds.js';
import { HttpClient } from '../../utils/http-client.js';

describe('ETFMutualFundsService', () => {
  let etfMutualFundsService: ETFMutualFundsService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    etfMutualFundsService = new ETFMutualFundsService(mockHttpClient);
  });

  describe('getETFHoldings', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ asset: 'AAPL', weightPercentage: 7.2 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await etfMutualFundsService.getETFHoldings('SPY');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/etf/holdings', { symbol: 'SPY' });
    });
  });

  describe('getETFInfo', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'SPY', companyName: 'SPDR S&P 500 ETF' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await etfMutualFundsService.getETFInfo('SPY');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/etf/info', { symbol: 'SPY' });
    });
  });

  describe('getETFList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'SPY', name: 'SPDR S&P 500 ETF' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await etfMutualFundsService.getETFList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/etf/list');
    });
  });
});
