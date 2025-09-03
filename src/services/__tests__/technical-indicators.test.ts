import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TechnicalIndicatorsService } from '../technical-indicators.js';
import { HttpClient } from '../../utils/http-client.js';

describe('TechnicalIndicatorsService', () => {
  let technicalIndicatorsService: TechnicalIndicatorsService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    technicalIndicatorsService = new TechnicalIndicatorsService(mockHttpClient);
  });

  describe('getSMA', () => {
    it('should call correct endpoint with parameters', async () => {
      const mockResponse = [{ date: '2025-02-04', sma: 150.25 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await technicalIndicatorsService.getSMA('AAPL', 20, '1day');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/technical-indicators/sma', { 
        symbol: 'AAPL', 
        periodLength: 20, 
        timeframe: '1day' 
      });
    });
  });

  describe('getRSI', () => {
    it('should call correct endpoint with parameters', async () => {
      const mockResponse = [{ date: '2025-02-04', rsi: 65.5 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await technicalIndicatorsService.getRSI('AAPL', 14, '1day');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/technical-indicators/rsi', { 
        symbol: 'AAPL', 
        periodLength: 14, 
        timeframe: '1day' 
      });
    });
  });

  describe('getMACD', () => {
    it('should call correct endpoint with parameters', async () => {
      const mockResponse = [{ date: '2025-02-04', macd: 2.5, signal: 1.8 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await technicalIndicatorsService.getMACD('AAPL', 12, 26, 9, '1day');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/technical-indicators/macd', { 
        symbol: 'AAPL', 
        fastPeriod: 12,
        slowPeriod: 26,
        signalPeriod: 9,
        timeframe: '1day' 
      });
    });
  });
});
