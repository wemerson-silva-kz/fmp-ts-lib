import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AnalystService } from '../analyst.js';
import { HttpClient } from '../../utils/http-client.js';

describe('AnalystService', () => {
  let analystService: AnalystService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    analystService = new AnalystService(mockHttpClient);
  });

  describe('getAnalystEstimates', () => {
    it('should call correct endpoint with required parameters', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2029-09-28', revenueAvg: 483093000000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getAnalystEstimates('AAPL', 'annual');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/analyst-estimates', { 
        symbol: 'AAPL', 
        period: 'annual' 
      });
      expect(result).toBe(mockResponse);
    });

    it('should include optional parameters when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2029-09-28', revenueAvg: 483093000000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await analystService.getAnalystEstimates('AAPL', 'quarter', 0, 10);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/analyst-estimates', { 
        symbol: 'AAPL', 
        period: 'quarter',
        page: 0,
        limit: 10
      });
    });
  });

  describe('getRatingsSnapshot', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', rating: 'A-', overallScore: 4 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getRatingsSnapshot('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/ratings-snapshot', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', rating: 'A-', overallScore: 4 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await analystService.getRatingsSnapshot('AAPL', 5);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/ratings-snapshot', { 
        symbol: 'AAPL', 
        limit: 5 
      });
    });
  });

  describe('getHistoricalRatings', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', rating: 'A-' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getHistoricalRatings('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/ratings-historical', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getPriceTargetSummary', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', lastMonthCount: 1, lastMonthAvgPriceTarget: 200.75 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getPriceTargetSummary('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/price-target-summary', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getPriceTargetConsensus', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', targetHigh: 300, targetLow: 200, targetConsensus: 251.7 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getPriceTargetConsensus('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/price-target-consensus', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getPriceTargetNews', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', publishedDate: '2025-01-21T01:24:32.000Z', priceTarget: 200.75 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getPriceTargetNews('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/price-target-news', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include optional parameters when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', publishedDate: '2025-01-21T01:24:32.000Z', priceTarget: 200.75 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await analystService.getPriceTargetNews('AAPL', 0, 10);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/price-target-news', { 
        symbol: 'AAPL', 
        page: 0, 
        limit: 10 
      });
    });
  });

  describe('getPriceTargetLatestNews', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ symbol: 'OLN', publishedDate: '2025-02-03T18:23:58.000Z', priceTarget: 32 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getPriceTargetLatestNews();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/price-target-latest-news', {});
      expect(result).toBe(mockResponse);
    });

    it('should include parameters when provided', async () => {
      const mockResponse = [{ symbol: 'OLN', publishedDate: '2025-02-03T18:23:58.000Z', priceTarget: 32 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await analystService.getPriceTargetLatestNews(0, 10);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/price-target-latest-news', { 
        page: 0, 
        limit: 10 
      });
    });
  });

  describe('getStockGrades', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-01-31', gradingCompany: 'Morgan Stanley' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getStockGrades('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/grades', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getHistoricalStockGrades', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-01', analystRatingsBuy: 8 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getHistoricalStockGrades('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/grades-historical', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getStockGradesSummary', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', strongBuy: 1, buy: 29, consensus: 'Buy' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getStockGradesSummary('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/grades-consensus', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getStockGradeNews', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', publishedDate: '2025-01-31T10:11:47.000Z', newGrade: 'Buy' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getStockGradeNews('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/grades-news', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getStockGradeLatestNews', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ symbol: 'PYPL', publishedDate: '2025-02-04T19:18:04.000Z', newGrade: 'Overweight' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await analystService.getStockGradeLatestNews();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/grades-latest-news', {});
      expect(result).toBe(mockResponse);
    });
  });
});
