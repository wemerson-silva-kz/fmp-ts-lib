import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ESGService } from '../esg.js';
import { HttpClient } from '../../utils/http-client.js';

describe('ESGService', () => {
  let esgService: ESGService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    esgService = new ESGService(mockHttpClient);
  });

  describe('getESGDisclosures', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        date: '2024-12-28',
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        ESGScore: 52.81,
        environmentalScore: 52.52
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await esgService.getESGDisclosures('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/esg-disclosures', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getESGRatings', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        symbol: 'AAPL',
        cik: '0000320193',
        companyName: 'Apple Inc.',
        industry: 'CONSUMER ELECTRONICS',
        ESGRiskRating: 'B'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await esgService.getESGRatings('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/esg-ratings', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getESGBenchmark', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        fiscalYear: 2023,
        sector: 'APPAREL RETAIL',
        ESGScore: 65.63,
        environmentalScore: 61.36
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await esgService.getESGBenchmark();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/esg-benchmark', {});
      expect(result).toBe(mockResponse);
    });

    it('should include year parameter when provided', async () => {
      const mockResponse = [{ 
        fiscalYear: 2023,
        sector: 'APPAREL RETAIL',
        ESGScore: 65.63
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await esgService.getESGBenchmark('2023');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/esg-benchmark', { year: '2023' });
    });
  });
});
