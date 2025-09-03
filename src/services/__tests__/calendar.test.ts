import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CalendarService } from '../calendar.js';
import { HttpClient } from '../../utils/http-client.js';

describe('CalendarService', () => {
  let calendarService: CalendarService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn()
    };
    calendarService = new CalendarService(mockHttpClient);
  });

  describe('getDividends', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-10', adjDividend: 0.25 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getDividends('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/dividends', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-02-10', adjDividend: 0.25 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await calendarService.getDividends('AAPL', 50);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/dividends', { 
        symbol: 'AAPL', 
        limit: 50 
      });
    });
  });

  describe('getDividendCalendar', () => {
    it('should call correct endpoint with date range parameters', async () => {
      const mockResponse = [{ symbol: '1D0.SI', date: '2025-02-04', adjDividend: 0.01 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getDividendCalendar('2025-05-21', '2025-08-21');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/dividends-calendar', { 
        from: '2025-05-21', 
        to: '2025-08-21' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getEarnings', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-10-29', epsActual: null }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getEarnings('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/earnings', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2025-10-29', epsActual: null }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await calendarService.getEarnings('AAPL', 200);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/earnings', { 
        symbol: 'AAPL', 
        limit: 200 
      });
    });
  });

  describe('getEarningsCalendar', () => {
    it('should call correct endpoint with date range parameters', async () => {
      const mockResponse = [{ symbol: 'KEC.NS', date: '2024-11-04', epsActual: 3.32 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getEarningsCalendar('2025-05-21', '2025-08-21');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/earnings-calendar', { 
        from: '2025-05-21', 
        to: '2025-08-21' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getIPOCalendar', () => {
    it('should call correct endpoint with date range parameters', async () => {
      const mockResponse = [{ symbol: 'PEVC', date: '2025-02-03', company: 'Pacer Funds Trust' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getIPOCalendar('2025-05-21', '2025-08-21');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/ipos-calendar', { 
        from: '2025-05-21', 
        to: '2025-08-21' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getIPODisclosure', () => {
    it('should call correct endpoint with date range parameters', async () => {
      const mockResponse = [{ symbol: 'SCHM', filingDate: '2025-02-03', cik: '0001454889' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getIPODisclosure('2025-05-21', '2025-08-21');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/ipos-disclosure', { 
        from: '2025-05-21', 
        to: '2025-08-21' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getIPOProspectus', () => {
    it('should call correct endpoint with date range parameters', async () => {
      const mockResponse = [{ symbol: 'ATAK', acceptedDate: '2025-02-03', pricePublicPerShare: 0.78 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getIPOProspectus('2025-05-21', '2025-08-21');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/ipos-prospectus', { 
        from: '2025-05-21', 
        to: '2025-08-21' 
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe('getStockSplits', () => {
    it('should call correct endpoint with symbol parameter', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2020-08-31', numerator: 4, denominator: 1 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getStockSplits('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/splits', { symbol: 'AAPL' });
      expect(result).toBe(mockResponse);
    });

    it('should include limit when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', date: '2020-08-31', numerator: 4, denominator: 1 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await calendarService.getStockSplits('AAPL', 50);

      expect(mockHttpClient.get).toHaveBeenCalledWith('/splits', { 
        symbol: 'AAPL', 
        limit: 50 
      });
    });
  });

  describe('getStockSplitCalendar', () => {
    it('should call correct endpoint with date range parameters', async () => {
      const mockResponse = [{ symbol: 'EYEN', date: '2025-02-03', numerator: 1, denominator: 80 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await calendarService.getStockSplitCalendar('2025-05-21', '2025-08-21');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/splits-calendar', { 
        from: '2025-05-21', 
        to: '2025-08-21' 
      });
      expect(result).toBe(mockResponse);
    });
  });
});
