import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class NewsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * FMP Articles API - Get latest FMP articles
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 20)
   */
  async getFMPArticles(page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string;
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/fmp-articles', params);
  }

  /**
   * General News API - Get general market news
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 20)
   */
  async getGeneralNews(page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string;
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/general-news', params);
  }

  /**
   * Stock News API - Get news for specific stock
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 20)
   */
  async getStockNews(symbol: string, page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string;
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get(`/stock-news/${symbol}`, params);
  }

  /**
   * Press Releases API - Get company press releases
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 20)
   */
  async getPressReleases(symbol: string, page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    content: string;
    symbol: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get(`/press-releases/${symbol}`, params);
  }

  /**
   * Crypto News API - Get cryptocurrency news
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 20)
   */
  async getCryptoNews(page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string;
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/news/crypto-latest', params);
  }

  /**
   * Forex News API - Get forex news
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 20)
   */
  async getForexNews(page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string;
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/news/forex', params);
  }

  /**
   * Search News API - Search news by query
   * @param query - Search query (required)
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 20)
   */
  async searchNews(query: string, page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string;
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = { query };
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/news/search', params);
  }
}
