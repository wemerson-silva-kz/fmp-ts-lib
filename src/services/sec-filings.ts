import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class SECFilingsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * SEC Filings API - Get SEC filings for a company
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param type - Filing type (optional, e.g., "10-K", "10-Q", "8-K")
   * @param page - Page number (optional, default: 0)
   */
  async getSECFilings(symbol: string, type?: string, page?: number): Promise<Array<{
    symbol: string;
    fillingDate: string;
    acceptedDate: string;
    cik: string;
    type: string;
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = {};
    if (type) params.type = type;
    if (page !== undefined) params.page = page;
    return this.httpClient.get(`/sec_filings/${symbol}`, params);
  }

  /**
   * RSS SEC Filings API - Get RSS feed of SEC filings
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 50)
   */
  async getRSSSECFilings(page?: number, limit?: number): Promise<Array<{
    title: string;
    date: string;
    link: string;
    cik: string;
    formType: string;
    filingDate: string;
    acceptedDate: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/rss_feed', params);
  }

  /**
   * Form 8-K API - Get 8-K filings
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional, default: 0)
   */
  async getForm8K(symbol: string, page?: number): Promise<Array<{
    symbol: string;
    fillingDate: string;
    acceptedDate: string;
    cik: string;
    type: string;
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    return this.httpClient.get(`/form-8k/${symbol}`, params);
  }

  /**
   * Form 10-K API - Get 10-K filings
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional, default: 0)
   */
  async getForm10K(symbol: string, page?: number): Promise<Array<{
    symbol: string;
    fillingDate: string;
    acceptedDate: string;
    cik: string;
    type: string;
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    return this.httpClient.get(`/form-10k/${symbol}`, params);
  }

  /**
   * Form 10-Q API - Get 10-Q filings
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional, default: 0)
   */
  async getForm10Q(symbol: string, page?: number): Promise<Array<{
    symbol: string;
    fillingDate: string;
    acceptedDate: string;
    cik: string;
    type: string;
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    return this.httpClient.get(`/form-10q/${symbol}`, params);
  }
}
