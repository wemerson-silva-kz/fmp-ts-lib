import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DCFService } from '../dcf.js';
import { HttpClient } from '../../utils/http-client.js';

describe('DCFService', () => {
  let dcfService: DCFService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    dcfService = new DCFService(mockHttpClient);
  });

  describe('getDCFValuation', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        symbol: 'AAPL',
        date: '2025-02-04',
        dcf: 147.2669883190846,
        "Stock Price": 231.795
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await dcfService.getDCFValuation('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/discounted-cash-flow', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getLeveredDCF', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        symbol: 'AAPL',
        date: '2025-02-04',
        dcf: 147.2669883190846,
        "Stock Price": 231.795
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await dcfService.getLeveredDCF('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/levered-discounted-cash-flow', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getCustomDCF', () => {
    it('should call correct endpoint with symbol parameter only', async () => {
      const mockResponse = [{ 
        year: '2029',
        symbol: 'AAPL',
        revenue: 657173266965,
        equityValuePerShare: 195.61
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await dcfService.getCustomDCF('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/custom-discounted-cash-flow', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include custom parameters when provided', async () => {
      const mockResponse = [{ 
        year: '2029',
        symbol: 'AAPL',
        revenue: 657173266965,
        equityValuePerShare: 195.61
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const customParams = {
        revenueGrowthPct: 0.1094119804597946,
        ebitdaPct: 0.31273548388,
        taxRate: 0.14919579658453103
      };

      await dcfService.getCustomDCF('AAPL', customParams);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/custom-discounted-cash-flow', { 
        symbol: 'AAPL',
        ...customParams
      });
    });
  });

  describe('getCustomLeveredDCF', () => {
    it('should call correct endpoint with symbol parameter only', async () => {
      const mockResponse = [{ 
        year: '2029',
        symbol: 'AAPL',
        revenue: 657173266965,
        equityValuePerShare: 207.58
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await dcfService.getCustomLeveredDCF('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/custom-levered-discounted-cash-flow', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include custom parameters when provided', async () => {
      const mockResponse = [{ 
        year: '2029',
        symbol: 'AAPL',
        revenue: 657173266965,
        equityValuePerShare: 207.58
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const customParams = {
        revenueGrowthPct: 0.1094119804597946,
        longTermGrowthRate: 4,
        beta: 1.244
      };

      await dcfService.getCustomLeveredDCF('AAPL', customParams);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/custom-levered-discounted-cash-flow', { 
        symbol: 'AAPL',
        ...customParams
      });
    });
  });
});
