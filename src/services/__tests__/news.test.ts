import { describe, it, expect, beforeEach, vi } from 'vitest';
import { NewsService } from '../news.js';
import { HttpClient } from '../../utils/http-client.js';

describe('NewsService', () => {
  let newsService: NewsService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    newsService = new NewsService(mockHttpClient);
  });

  describe('getFMPArticles', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ title: 'Test Article', date: '2025-02-04' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await newsService.getFMPArticles();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/fmp-articles', {});
    });
  });

  describe('getStockNews', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ title: 'AAPL News', symbol: 'AAPL' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await newsService.getStockNews('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/stock-news/AAPL', {});
    });
  });
});
