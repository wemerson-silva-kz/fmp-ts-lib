import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ChartService } from '../chart.js';
import { HttpClient } from '../../utils/http-client.js';

describe('ChartService', () => {
  let chartService: ChartService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    chartService = new ChartService(mockHttpClient);
  });

  describe('getStockChartLight', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', price: 232.8, volume: 44489128 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.getStockChartLight('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-price-eod/light', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include date parameters when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', price: 232.8, volume: 44489128 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await chartService.getStockChartLight('AAPL', '2025-04-24', '2025-07-24');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-price-eod/light', { 
        symbol: 'AAPL', 
        from: '2025-04-24', 
        to: '2025-07-24' 
      });
    });
  });

  describe('getStockPriceAndVolume', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', open: 227.2, high: 233.13, close: 232.8 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.getStockPriceAndVolume('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-price-eod/full', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getUnadjustedStockPrice', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', adjOpen: 227.2, adjClose: 232.8 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.getUnadjustedStockPrice('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-price-eod/non-split-adjusted', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getDividendAdjustedPrice', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-04', adjOpen: 227.2, adjClose: 232.8 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.getDividendAdjustedPrice('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-price-eod/dividend-adjusted', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('get1MinChart', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ date: '2025-02-04 15:59:00', open: 233.01, close: 232.79, volume: 720121 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.get1MinChart('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-chart/1min', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include all parameters when provided', async () => {
      const mockResponse = [{ date: '2025-02-04 15:59:00', open: 233.01, close: 232.79, volume: 720121 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await chartService.get1MinChart('AAPL', '2024-01-01', '2024-03-01', false);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-chart/1min', { 
        symbol: 'AAPL', 
        from: '2024-01-01', 
        to: '2024-03-01', 
        nonadjusted: false 
      });
    });
  });

  describe('get5MinChart', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ date: '2025-02-04 15:55:00', open: 232.87, close: 232.79, volume: 1555040 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.get5MinChart('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-chart/5min', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('get15MinChart', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ date: '2025-02-04 15:45:00', open: 232.25, close: 232.79, volume: 2535629 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.get15MinChart('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-chart/15min', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('get30MinChart', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ date: '2025-02-04 15:30:00', open: 232.29, close: 232.79, volume: 3476320 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.get30MinChart('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-chart/30min', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('get1HourChart', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ date: '2025-02-04 15:30:00', open: 232.29, close: 232.37, volume: 15079381 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.get1HourChart('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-chart/1hour', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });

  describe('get4HourChart', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ date: '2025-02-04 12:30:00', open: 231.79, close: 232.37, volume: 23781913 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await chartService.get4HourChart('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/historical-chart/4hour', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });
  });
});
