import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SenateService } from '../senate.js';
import { HttpClient } from '../../utils/http-client.js';

describe('SenateService', () => {
  let senateService: SenateService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    senateService = new SenateService(mockHttpClient);
  });

  describe('getSenateTrading', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ firstName: 'John', lastName: 'Doe', ticker: 'AAPL' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await senateService.getSenateTrading();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/senate-trading', {});
    });

    it('should include symbol when provided', async () => {
      const mockResponse = [{ firstName: 'John', lastName: 'Doe', ticker: 'AAPL' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await senateService.getSenateTrading('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/senate-trading', { symbol: 'AAPL' });
    });
  });

  describe('getHouseTrading', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ firstName: 'Jane', lastName: 'Smith', ticker: 'MSFT' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await senateService.getHouseTrading();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/house-trading', {});
    });
  });
});
