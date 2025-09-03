import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CommitmentOfTradersService } from '../commitment-of-traders.js';
import { HttpClient } from '../../utils/http-client.js';

describe('CommitmentOfTradersService', () => {
  let cotService: CommitmentOfTradersService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    cotService = new CommitmentOfTradersService(mockHttpClient);
  });

  describe('getCOTReport', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        symbol: 'KC', 
        date: '2024-02-27 00:00:00', 
        name: 'Coffee (KC)', 
        sector: 'SOFTS',
        openInterestAll: 209453
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await cotService.getCOTReport();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-report', {});
      expect(result).toBe(mockResponse);
    });

    it('should include symbol parameter when provided', async () => {
      const mockResponse = [{ 
        symbol: 'KC', 
        date: '2024-02-27 00:00:00', 
        name: 'Coffee (KC)', 
        sector: 'SOFTS',
        openInterestAll: 209453
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cotService.getCOTReport('KC');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-report', { 
        symbol: 'KC' 
      });
    });

    it('should include date parameters when provided', async () => {
      const mockResponse = [{ 
        symbol: 'KC', 
        date: '2024-02-27 00:00:00', 
        name: 'Coffee (KC)', 
        sector: 'SOFTS',
        openInterestAll: 209453
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cotService.getCOTReport('KC', '2024-01-01', '2024-03-01');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-report', { 
        symbol: 'KC',
        from: '2024-01-01',
        to: '2024-03-01'
      });
    });

    it('should include only date parameters when symbol is not provided', async () => {
      const mockResponse = [{ 
        symbol: 'KC', 
        date: '2024-02-27 00:00:00', 
        name: 'Coffee (KC)', 
        sector: 'SOFTS',
        openInterestAll: 209453
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cotService.getCOTReport(undefined, '2024-01-01', '2024-03-01');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-report', { 
        from: '2024-01-01',
        to: '2024-03-01'
      });
    });
  });

  describe('getCOTAnalysis', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        symbol: 'B6', 
        date: '2024-02-27 00:00:00', 
        name: 'British Pound (B6)', 
        sector: 'CURRENCIES',
        marketSituation: 'Bullish'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await cotService.getCOTAnalysis();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-analysis', {});
      expect(result).toBe(mockResponse);
    });

    it('should include symbol parameter when provided', async () => {
      const mockResponse = [{ 
        symbol: 'B6', 
        date: '2024-02-27 00:00:00', 
        name: 'British Pound (B6)', 
        sector: 'CURRENCIES',
        marketSituation: 'Bullish'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cotService.getCOTAnalysis('B6');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-analysis', { 
        symbol: 'B6' 
      });
    });

    it('should include all parameters when provided', async () => {
      const mockResponse = [{ 
        symbol: 'B6', 
        date: '2024-02-27 00:00:00', 
        name: 'British Pound (B6)', 
        sector: 'CURRENCIES',
        marketSituation: 'Bullish'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cotService.getCOTAnalysis('B6', '2024-01-01', '2024-03-01');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-analysis', { 
        symbol: 'B6',
        from: '2024-01-01',
        to: '2024-03-01'
      });
    });
  });

  describe('getCOTReportList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        symbol: 'NG', 
        name: 'Natural Gas (NG)' 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await cotService.getCOTReportList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/commitment-of-traders-list');
      expect(result).toBe(mockResponse);
    });
  });
});
