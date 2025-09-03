import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SearchService } from '../search.js';
import { HttpClient } from '../../utils/http-client.js';

describe('SearchService', () => {
  let searchService: SearchService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    searchService = new SearchService(mockHttpClient);
  });

  describe('searchSymbol', () => {
    it('should call correct endpoint with required query parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', name: 'Apple Inc.', currency: 'USD' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await searchService.searchSymbol('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-symbol', { query: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include optional parameters when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', name: 'Apple Inc.', currency: 'USD' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await searchService.searchSymbol('AAPL', 10, 'NASDAQ');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-symbol', { 
        query: 'AAPL', 
        limit: 10, 
        exchange: 'NASDAQ' 
      });
    });
  });

  describe('searchCompanyName', () => {
    it('should call correct endpoint with query parameter', async () => {
      const mockResponse = [{ symbol: 'AAGUSD', name: 'AAG USD', currency: 'USD' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await searchService.searchCompanyName('AA');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-name', { query: 'AA' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('searchByCIK', () => {
    it('should call correct endpoint with CIK parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', companyName: 'Apple Inc.', cik: '0000320193' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await searchService.searchByCIK('320193');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-cik', { cik: '320193' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', companyName: 'Apple Inc.', cik: '0000320193' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await searchService.searchByCIK('320193', 25);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-cik', { 
        cik: '320193', 
        limit: 25 
      });
    });
  });

  describe('searchByCUSIP', () => {
    it('should call correct endpoint with CUSIP parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', companyName: 'Apple Inc.', cusip: '037833100', marketCap: 3542555295744 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await searchService.searchByCUSIP('037833100');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-cusip', { cusip: '037833100' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('searchByISIN', () => {
    it('should call correct endpoint with ISIN parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', name: 'Apple Inc.', isin: 'US0378331005', marketCap: 3427916386000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await searchService.searchByISIN('US0378331005');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-isin', { isin: 'US0378331005' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('companyScreener', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ symbol: 'AAPL', companyName: 'Apple Inc.', marketCap: 3435062313000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await searchService.companyScreener();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/company-screener', undefined);
      expect(result).toBe(mockResponse);
    });

    it('should call correct endpoint with filters', async () => {
      const mockResponse = [{ symbol: 'AAPL', companyName: 'Apple Inc.', marketCap: 3435062313000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const filters = {
        marketCapMoreThan: 1000000,
        sector: 'Technology',
        exchange: 'NASDAQ'
      };

      await searchService.companyScreener(filters);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/company-screener', filters);
    });
  });

  describe('searchExchangeVariants', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', price: 225.46, companyName: 'Apple Inc.' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await searchService.searchExchangeVariants('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/search-exchange-variants', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });
});
