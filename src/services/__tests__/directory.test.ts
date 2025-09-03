import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DirectoryService } from '../directory.js';
import { HttpClient } from '../../utils/http-client.js';

describe('DirectoryService', () => {
  let directoryService: DirectoryService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    directoryService = new DirectoryService(mockHttpClient);
  });

  describe('getStockList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: '6898.HK', companyName: 'China Aluminum Cans Holdings Limited' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getStockList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/stock-list');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getFinancialStatementSymbolsList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        symbol: '6898.HK', 
        companyName: 'China Aluminum Cans Holdings Limited',
        tradingCurrency: 'HKD',
        reportingCurrency: 'HKD'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getFinancialStatementSymbolsList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/financial-statement-symbol-list');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getCIKList', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ cik: '0002036063', companyName: 'LUZ Capital Partners, LLC' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getCIKList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/cik-list', {});
      expect(result).toBe(mockResponse);
    });

    it('should include parameters when provided', async () => {
      const mockResponse = [{ cik: '0002036063', companyName: 'LUZ Capital Partners, LLC' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await directoryService.getCIKList(0, 1000);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/cik-list', { page: 0, limit: 1000 });
    });
  });

  describe('getSymbolChangesList', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        date: '2025-02-03',
        companyName: 'XPLR Infrastructure, LP',
        oldSymbol: 'NEP',
        newSymbol: 'XIFR'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getSymbolChangesList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/symbol-change', {});
      expect(result).toBe(mockResponse);
    });

    it('should include parameters when provided', async () => {
      const mockResponse = [{ 
        date: '2025-02-03',
        companyName: 'XPLR Infrastructure, LP',
        oldSymbol: 'NEP',
        newSymbol: 'XIFR'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await directoryService.getSymbolChangesList('false', 100);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/symbol-change', { invalid: 'false', limit: 100 });
    });
  });

  describe('getETFList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'GULF', name: 'WisdomTree Middle East Dividend Fund' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getETFList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/etf-list');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getActivelyTradingList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: '6898.HK', name: 'China Aluminum Cans Holdings Limited' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getActivelyTradingList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/actively-trading-list');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getEarningsTranscriptList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        symbol: 'MCUJF',
        companyName: 'Medicure Inc.',
        noOfTranscripts: '16'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getEarningsTranscriptList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/earnings-transcript-list');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getAvailableExchanges', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        exchange: 'AMEX',
        name: 'New York Stock Exchange Arca',
        countryName: 'United States of America',
        countryCode: 'US',
        symbolSuffix: 'N/A',
        delay: 'Real-time'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getAvailableExchanges();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/available-exchanges');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getAvailableSectors', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ sector: 'Basic Materials' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getAvailableSectors();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/available-sectors');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getAvailableIndustries', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ industry: 'Steel' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getAvailableIndustries();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/available-industries');
      expect(result).toBe(mockResponse);
    });
  });

  describe('getAvailableCountries', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ country: 'FK' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await directoryService.getAvailableCountries();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/available-countries');
      expect(result).toBe(mockResponse);
    });
  });
});
