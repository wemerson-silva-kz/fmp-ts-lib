import { describe, it, expect, beforeEach, vi } from 'vitest';
import { IndexesService } from '../indexes.js';
import { HttpClient } from '../../utils/http-client.js';

describe('IndexesService', () => {
  let indexesService: IndexesService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    indexesService = new IndexesService(mockHttpClient);
  });

  describe('getIndexesList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        symbol: '^TTIN',
        name: 'S&P/TSX Capped Industrials Index',
        exchange: 'TSX',
        currency: 'CAD'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getIndexesList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/index-list');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getIndexQuote', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        symbol: '^GSPC',
        name: 'S&P 500',
        price: 6366.13,
        change: 7.22
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getIndexQuote('^GSPC');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/quote', { symbol: '^GSPC' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getIndexQuoteShort', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        symbol: '^GSPC',
        price: 6366.13,
        change: 7.22,
        volume: 1498664000
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getIndexQuoteShort('^GSPC');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/quote-short', { symbol: '^GSPC' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getAllIndexQuotes', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        symbol: '^DJBGIE',
        price: 4155.76,
        change: 1.09,
        volume: 0
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getAllIndexQuotes();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/batch-index-quotes', {});
      expect(result).toBe(mockResponse);
    });

    it('should include short parameter when provided', async () => {
      const mockResponse = [{ 
        symbol: '^DJBGIE',
        price: 4155.76
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await indexesService.getAllIndexQuotes(true);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/batch-index-quotes', { short: true });
    });
  });

  describe('getHistoricalIndexLight', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        symbol: '^GSPC',
        date: '2025-07-24',
        price: 6365.77,
        volume: 1499302000
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getHistoricalIndexLight('^GSPC');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-price-eod/light', { symbol: '^GSPC' });
      expect(result).toBe(mockResponse);
    });

    it('should include date parameters when provided', async () => {
      const mockResponse = [{ 
        symbol: '^GSPC',
        date: '2025-07-24',
        price: 6365.77
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await indexesService.getHistoricalIndexLight('^GSPC', '2025-04-25', '2025-07-25');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-price-eod/light', { 
        symbol: '^GSPC',
        from: '2025-04-25',
        to: '2025-07-25'
      });
    });
  });

  describe('getSP500Constituents', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        symbol: 'DDOG',
        name: 'Datadog',
        sector: 'Technology',
        dateFirstAdded: '2025-07-09'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getSP500Constituents();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/sp500-constituent');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getNasdaqConstituents', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        symbol: 'ADBE',
        name: 'Adobe Inc.',
        sector: 'Technology',
        founded: '1982-12-01'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getNasdaqConstituents();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/nasdaq-constituent');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getDowJonesConstituents', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        symbol: 'NVDA',
        name: 'Nvidia',
        sector: 'Technology',
        dateFirstAdded: '2024-11-08'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getDowJonesConstituents();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/dowjones-constituent');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getHistoricalSP500', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        dateAdded: 'July 9, 2025',
        addedSecurity: 'Datadog',
        symbol: 'DDOG',
        reason: 'S&P 500 constituent Hewlett Packard Enterprise Co. acquired Juniper Networks.'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await indexesService.getHistoricalSP500();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-sp500-constituent');
      expect(result).toBe(mockResponse);
    });
  });
});
