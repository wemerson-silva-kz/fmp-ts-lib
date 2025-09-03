import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ForexService } from '../forex.js';
import { HttpClient } from '../../utils/http-client.js';

describe('ForexService', () => {
  let forexService: ForexService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    forexService = new ForexService(mockHttpClient);
  });

  describe('getForexList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'EURUSD', name: 'Euro/US Dollar' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await forexService.getForexList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/forex-list');
    });
  });

  describe('getForexQuote', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'EURUSD', price: 1.0850 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await forexService.getForexQuote('EURUSD');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/quote', { symbol: 'EURUSD' });
    });
  });

  describe('getBatchForexQuotes', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'EURUSD', price: 1.0850 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await forexService.getBatchForexQuotes();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/batch-forex-quotes');
    });
  });
});
