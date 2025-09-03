import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MarketHoursService } from '../market-hours.js';
import { HttpClient } from '../../utils/http-client.js';

describe('MarketHoursService', () => {
  let marketHoursService: MarketHoursService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    marketHoursService = new MarketHoursService(mockHttpClient);
  });

  describe('isMarketOpen', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ isTheStockMarketOpen: true, stockExchangeName: 'NYSE' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await marketHoursService.isMarketOpen();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/is-the-market-open');
    });
  });

  describe('getMarketHoursByExchange', () => {
    it('should call correct endpoint with exchange', async () => {
      const mockResponse = [{ isTheStockMarketOpen: true, stockExchangeName: 'NYSE' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await marketHoursService.getMarketHoursByExchange('NYSE');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/is-the-market-open/NYSE');
    });
  });
});
