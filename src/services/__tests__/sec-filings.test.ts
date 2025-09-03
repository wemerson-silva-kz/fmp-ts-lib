import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SECFilingsService } from '../sec-filings.js';
import { HttpClient } from '../../utils/http-client.js';

describe('SECFilingsService', () => {
  let secFilingsService: SECFilingsService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    secFilingsService = new SECFilingsService(mockHttpClient);
  });

  describe('getSECFilings', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'AAPL', type: '10-K', fillingDate: '2025-02-04' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await secFilingsService.getSECFilings('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/sec_filings/AAPL', {});
    });

    it('should include type when provided', async () => {
      const mockResponse = [{ symbol: 'AAPL', type: '10-K' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await secFilingsService.getSECFilings('AAPL', '10-K');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/sec_filings/AAPL', { type: '10-K' });
    });
  });

  describe('getForm10K', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'AAPL', type: '10-K' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await secFilingsService.getForm10K('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/form-10k/AAPL', {});
    });
  });
});
