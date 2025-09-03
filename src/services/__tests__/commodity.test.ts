import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CommodityService } from '../commodity.js';
import { HttpClient } from '../../utils/http-client.js';

describe('CommodityService', () => {
  let commodityService: CommodityService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    commodityService = new CommodityService(mockHttpClient);
  });

  describe('getCommoditiesList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'GCUSD', name: 'Gold' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await commodityService.getCommoditiesList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commodities-list');
    });
  });

  describe('getCommodityQuote', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'GCUSD', price: 1950.25 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await commodityService.getCommodityQuote('GCUSD');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/quote', { symbol: 'GCUSD' });
    });
  });

  describe('getAllCommodityQuotes', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'GCUSD', price: 1950.25 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await commodityService.getAllCommodityQuotes();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/batch-commodity-quotes');
    });
  });
});
