import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CompanyService } from '../company.js';
import { HttpClient } from '../../utils/http-client.js';

describe('CompanyService', () => {
  let companyService: CompanyService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    companyService = new CompanyService(mockHttpClient);
  });

  describe('getCompanyProfile', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', companyName: 'Apple Inc.', price: 232.8 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getCompanyProfile('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/profile', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getCompanyProfileByCIK', () => {
    it('should call correct endpoint with cik parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', companyName: 'Apple Inc.', cik: '0000320193' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getCompanyProfileByCIK('320193');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/profile-cik', { cik: '320193' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getCompanyNotes', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ cik: '0000320193', symbol: 'AAPL', title: '1.000% Notes due 2022' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getCompanyNotes('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/company-notes', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getStockPeers', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'GPRO', companyName: 'GoPro, Inc.', price: 0.9668 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getStockPeers('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/stock-peers', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getDelistedCompanies', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ symbol: 'BRQSF', companyName: 'Borqs Technologies, Inc.' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getDelistedCompanies();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/delisted-companies', {});
      expect(result).toBe(mockResponse);
    });

    it('should include parameters when provided', async () => {
      const mockResponse = [{ symbol: 'BRQSF', companyName: 'Borqs Technologies, Inc.' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await companyService.getDelistedCompanies(0, 100);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/delisted-companies', { 
        page: 0, 
        limit: 100 
      });
    });
  });

  describe('getEmployeeCount', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', employeeCount: 164000, companyName: 'Apple Inc.' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getEmployeeCount('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/employee-count', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', employeeCount: 164000, companyName: 'Apple Inc.' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await companyService.getEmployeeCount('AAPL', 50);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/employee-count', { 
        symbol: 'AAPL', 
        limit: 50 
      });
    });
  });

  describe('getHistoricalEmployeeCount', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', employeeCount: 164000, periodOfReport: '2024-09-28' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getHistoricalEmployeeCount('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-employee-count', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getMarketCapitalization', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', marketCap: 3500823120000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getMarketCapitalization('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/market-capitalization', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getBatchMarketCapitalization', () => {
    it('should call correct endpoint with symbols parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', marketCap: 3500823120000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getBatchMarketCapitalization('AAPL,MSFT,GOOG');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/market-capitalization-batch', { 
        symbols: 'AAPL,MSFT,GOOG' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getHistoricalMarketCapitalization', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2024-02-29', marketCap: 2784608472000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getHistoricalMarketCapitalization('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-market-capitalization', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include all parameters when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2024-02-29', marketCap: 2784608472000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await companyService.getHistoricalMarketCapitalization('AAPL', 100, '2025-04-24', '2025-07-24');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-market-capitalization', { 
        symbol: 'AAPL', 
        limit: 100, 
        from: '2025-04-24', 
        to: '2025-07-24' 
      });
    });
  });

  describe('getSharesFloat', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', freeFloat: 99.9095, floatShares: 15024290700 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getSharesFloat('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/shares-float', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getAllSharesFloat', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ symbol: '6898.HK', freeFloat: 33.2536, floatShares: 318128880 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getAllSharesFloat();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/shares-float-all', {});
      expect(result).toBe(mockResponse);
    });
  });

  describe('getLatestMergersAcquisitions', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ symbol: 'NLOK', companyName: 'NortonLifeLock Inc.', targetedSymbol: 'ML' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getLatestMergersAcquisitions();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/mergers-acquisitions-latest', {});
      expect(result).toBe(mockResponse);
    });
  });

  describe('searchMergersAcquisitions', () => {
    it('should call correct endpoint with name parameter', async () => {
      const mockResponse = [{ symbol: 'PEGY', companyName: 'Pineapple Energy Inc.' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.searchMergersAcquisitions('Apple');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/mergers-acquisitions-search', { name: 'Apple' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getKeyExecutives', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ title: 'Vice President', name: 'Mr. Michael Fenger', pay: null }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getKeyExecutives('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/key-executives', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include active parameter when provided', async () => {
      const mockResponse = [{ title: 'Vice President', name: 'Mr. Michael Fenger', pay: null }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await companyService.getKeyExecutives('AAPL', 'true');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/key-executives', { 
        symbol: 'AAPL', 
        active: 'true' 
      });
    });
  });

  describe('getExecutiveCompensation', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', nameAndPosition: 'Kate Adams Senior Vice President', total: 26941705 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getExecutiveCompensation('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/governance-executive-compensation', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getExecutiveCompensationBenchmark', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ industryTitle: 'ABRASIVE, ASBESTOS & MISC', averageCompensation: 694313.1666666666 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await companyService.getExecutiveCompensationBenchmark();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/executive-compensation-benchmark', {});
      expect(result).toBe(mockResponse);
    });

    it('should include year parameter when provided', async () => {
      const mockResponse = [{ industryTitle: 'ABRASIVE, ASBESTOS & MISC', averageCompensation: 694313.1666666666 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await companyService.getExecutiveCompensationBenchmark('2024');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/executive-compensation-benchmark', { year: '2024' });
    });
  });
});
