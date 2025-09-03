import { describe, it, expect, beforeEach, vi } from 'vitest';
import { StatementsService } from '../statements.js';
import { HttpClient } from '../../utils/http-client.js';

describe('StatementsService', () => {
  let statementsService: StatementsService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    statementsService = new StatementsService(mockHttpClient);
  });

  describe('getIncomeStatement', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        revenue: 391035000000, 
        netIncome: 93736000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await statementsService.getIncomeStatement('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/income-statement', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit parameter when provided', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        revenue: 391035000000, 
        netIncome: 93736000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await statementsService.getIncomeStatement('AAPL', 10);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/income-statement', { 
        symbol: 'AAPL', 
        limit: 10 
      });
    });

    it('should include period parameter when provided', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        revenue: 391035000000, 
        netIncome: 93736000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await statementsService.getIncomeStatement('AAPL', 5, 'quarter');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/income-statement', { 
        symbol: 'AAPL', 
        limit: 5, 
        period: 'quarter' 
      });
    });

    it('should include only period when limit is not provided', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        revenue: 391035000000, 
        netIncome: 93736000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await statementsService.getIncomeStatement('AAPL', undefined, 'Q1');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/income-statement', { 
        symbol: 'AAPL', 
        period: 'Q1' 
      });
    });
  });

  describe('getBalanceSheetStatement', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        totalAssets: 364980000000, 
        totalLiabilities: 290020000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await statementsService.getBalanceSheetStatement('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/balance-sheet-statement', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit parameter when provided', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        totalAssets: 364980000000, 
        totalLiabilities: 290020000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await statementsService.getBalanceSheetStatement('AAPL', 8);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/balance-sheet-statement', { 
        symbol: 'AAPL', 
        limit: 8 
      });
    });

    it('should include all parameters when provided', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        totalAssets: 364980000000, 
        totalLiabilities: 290020000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await statementsService.getBalanceSheetStatement('AAPL', 3, 'annual');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/balance-sheet-statement', { 
        symbol: 'AAPL', 
        limit: 3, 
        period: 'annual' 
      });
    });
  });

  describe('getCashFlowStatement', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        operatingCashFlow: 118648000000, 
        freeCashFlow: 99584000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await statementsService.getCashFlowStatement('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/cash-flow-statement', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit parameter when provided', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        operatingCashFlow: 118648000000, 
        freeCashFlow: 99584000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await statementsService.getCashFlowStatement('AAPL', 7);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/cash-flow-statement', { 
        symbol: 'AAPL', 
        limit: 7 
      });
    });

    it('should include all parameters when provided', async () => {
      const mockResponse = [{ 
        date: '2024-09-28', 
        symbol: 'AAPL', 
        operatingCashFlow: 118648000000, 
        freeCashFlow: 99584000000 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await statementsService.getCashFlowStatement('AAPL', 4, 'FY');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/cash-flow-statement', { 
        symbol: 'AAPL', 
        limit: 4, 
        period: 'FY' 
      });
    });
  });
});
