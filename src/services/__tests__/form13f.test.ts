import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Form13FService } from '../form13f.js';
import { HttpClient } from '../../utils/http-client.js';

describe('Form13FService', () => {
  let form13fService: Form13FService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    form13fService = new Form13FService(mockHttpClient);
  });

  describe('getLatestInstitutionalFilings', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        cik: '0001963967',
        name: 'CPA ASSET MANAGEMENT LLC',
        formType: '13F-HR'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getLatestInstitutionalFilings();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/latest', {});
      expect(result).toBe(mockResponse);
    });

    it('should include parameters when provided', async () => {
      const mockResponse = [{ 
        cik: '0001963967',
        name: 'CPA ASSET MANAGEMENT LLC'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await form13fService.getLatestInstitutionalFilings(0, 100);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/latest', { 
        page: 0, 
        limit: 100 
      });
    });
  });

  describe('getFilingsExtract', () => {
    it('should call correct endpoint with required parameters', async () => {
      const mockResponse = [{ 
        cik: '0001388838',
        symbol: 'CHRD',
        shares: 13280,
        value: 2152290
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getFilingsExtract('0001388838', '2023', '3');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/extract', { 
        cik: '0001388838', 
        year: '2023', 
        quarter: '3' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getFilingsDates', () => {
    it('should call correct endpoint with cik parameter', async () => {
      const mockResponse = [{ 
        date: '2024-09-30',
        year: 2024,
        quarter: 3
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getFilingsDates('0001067983');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/dates', { 
        cik: '0001067983' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getFilingsAnalyticsByHolder', () => {
    it('should call correct endpoint with required parameters', async () => {
      const mockResponse = [{ 
        investorName: 'VANGUARD GROUP INC',
        symbol: 'AAPL',
        weight: 5.4673,
        marketValue: 222572509140
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getFilingsAnalyticsByHolder('AAPL', '2023', '3');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/extract-analytics/holder', { 
        symbol: 'AAPL', 
        year: '2023', 
        quarter: '3' 
      });
      expect(result).toBe(mockResponse);
    });

    it('should include optional parameters when provided', async () => {
      const mockResponse = [{ 
        investorName: 'VANGUARD GROUP INC',
        symbol: 'AAPL'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await form13fService.getFilingsAnalyticsByHolder('AAPL', '2023', '3', 0, 10);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/extract-analytics/holder', { 
        symbol: 'AAPL', 
        year: '2023', 
        quarter: '3',
        page: 0,
        limit: 10
      });
    });
  });

  describe('getHolderPerformanceSummary', () => {
    it('should call correct endpoint with cik parameter', async () => {
      const mockResponse = [{ 
        investorName: 'BERKSHIRE HATHAWAY INC',
        portfolioSize: 40,
        marketValue: 266378900503
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getHolderPerformanceSummary('0001067983');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/holder-performance-summary', { 
        cik: '0001067983' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getHolderIndustryBreakdown', () => {
    it('should call correct endpoint with required parameters', async () => {
      const mockResponse = [{ 
        investorName: 'BERKSHIRE HATHAWAY INC',
        industryTitle: 'ELECTRONIC COMPUTERS',
        weight: 49.7704
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getHolderIndustryBreakdown('0001067983', '2023', '3');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/holder-industry-breakdown', { 
        cik: '0001067983', 
        year: '2023', 
        quarter: '3' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getPositionsSummary', () => {
    it('should call correct endpoint with required parameters', async () => {
      const mockResponse = [{ 
        symbol: 'AAPL',
        investorsHolding: 4805,
        totalInvested: 1613733330618
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getPositionsSummary('AAPL', '2023', '3');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/symbol-positions-summary', { 
        symbol: 'AAPL', 
        year: '2023', 
        quarter: '3' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getIndustryPerformanceSummary', () => {
    it('should call correct endpoint with required parameters', async () => {
      const mockResponse = [{ 
        industryTitle: 'ABRASIVE, ASBESTOS & MISC NONMETALLIC MINERAL PRODS',
        industryValue: 10979226300,
        date: '2023-09-30'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await form13fService.getIndustryPerformanceSummary('2023', '3');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/institutional-ownership/industry-summary', { 
        year: '2023', 
        quarter: '3' 
      });
      expect(result).toBe(mockResponse);
    });
  });
});
