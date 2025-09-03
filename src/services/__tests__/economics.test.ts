import { describe, it, expect, beforeEach, vi } from 'vitest';
import { EconomicsService } from '../economics.js';
import { HttpClient } from '../../utils/http-client.js';

describe('EconomicsService', () => {
  let economicsService: EconomicsService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    economicsService = new EconomicsService(mockHttpClient);
  });

  describe('getTreasuryRates', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        date: '2024-02-29', 
        month1: 5.53, 
        year10: 4.25, 
        year30: 4.38 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await economicsService.getTreasuryRates();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/treasury-rates', {});
      expect(result).toBe(mockResponse);
    });

    it('should include date parameters when provided', async () => {
      const mockResponse = [{ 
        date: '2024-02-29', 
        month1: 5.53, 
        year10: 4.25 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await economicsService.getTreasuryRates('2025-04-24', '2025-07-24');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/treasury-rates', { 
        from: '2025-04-24', 
        to: '2025-07-24' 
      });
    });
  });

  describe('getEconomicIndicators', () => {
    it('should call correct endpoint with name parameter', async () => {
      const mockResponse = [{ 
        name: 'GDP', 
        date: '2024-01-01', 
        value: 28624.069 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await economicsService.getEconomicIndicators('GDP');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/economic-indicators', { name: 'GDP' });
      expect(result).toBe(mockResponse);
    });

    it('should include date parameters when provided', async () => {
      const mockResponse = [{ 
        name: 'GDP', 
        date: '2024-01-01', 
        value: 28624.069 
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await economicsService.getEconomicIndicators('GDP', '2024-07-24', '2025-07-24');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/economic-indicators', { 
        name: 'GDP', 
        from: '2024-07-24', 
        to: '2025-07-24' 
      });
    });
  });

  describe('getEconomicCalendar', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ 
        date: '2024-03-01 03:35:00', 
        country: 'JP', 
        event: '3-Month Bill Auction',
        impact: 'Low'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await economicsService.getEconomicCalendar();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/economic-calendar', {});
      expect(result).toBe(mockResponse);
    });

    it('should include date parameters when provided', async () => {
      const mockResponse = [{ 
        date: '2024-03-01 03:35:00', 
        country: 'JP', 
        event: '3-Month Bill Auction'
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await economicsService.getEconomicCalendar('2025-04-24', '2025-07-24');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/economic-calendar', { 
        from: '2025-04-24', 
        to: '2025-07-24' 
      });
    });
  });

  describe('getMarketRiskPremium', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ 
        country: 'Zimbabwe', 
        continent: 'Africa', 
        countryRiskPremium: 13.17,
        totalEquityRiskPremium: 17.77
      }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await economicsService.getMarketRiskPremium();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/market-risk-premium');
      expect(result).toBe(mockResponse);
    });
  });
});
