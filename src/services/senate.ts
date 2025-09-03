import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class SenateService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Senate Trading API - Get senate trading disclosures
   * @param symbol - Stock symbol (optional, e.g., "AAPL")
   */
  async getSenateTrading(symbol?: string): Promise<Array<{
    firstName: string;
    lastName: string;
    office: string;
    link: string;
    dateReceived: string;
    transactionDate: string;
    owner: string;
    ticker: string;
    assetDescription: string;
    assetType: string;
    type: string;
    amount: string;
    comment: string;
  }>> {
    const params: QueryParams = {};
    if (symbol) params.symbol = symbol;
    return this.httpClient.get('/senate-trading', params);
  }

  /**
   * Senate Trading RSS Feed API - Get RSS feed of senate trading
   */
  async getSenateTradinRSSFeed(): Promise<Array<{
    title: string;
    date: string;
    link: string;
  }>> {
    return this.httpClient.get('/senate-trading-rss-feed');
  }

  /**
   * House Trading API - Get house trading disclosures
   * @param symbol - Stock symbol (optional, e.g., "AAPL")
   */
  async getHouseTrading(symbol?: string): Promise<Array<{
    firstName: string;
    lastName: string;
    office: string;
    link: string;
    dateReceived: string;
    transactionDate: string;
    owner: string;
    ticker: string;
    assetDescription: string;
    assetType: string;
    type: string;
    amount: string;
    comment: string;
  }>> {
    const params: QueryParams = {};
    if (symbol) params.symbol = symbol;
    return this.httpClient.get('/house-trading', params);
  }

  /**
   * House Trading RSS Feed API - Get RSS feed of house trading
   */
  async getHouseTradingRSSFeed(): Promise<Array<{
    title: string;
    date: string;
    link: string;
  }>> {
    return this.httpClient.get('/house-trading-rss-feed');
  }

  /**
   * Senate Disclosure API - Get senate disclosure documents
   * @param symbol - Stock symbol (optional, e.g., "AAPL")
   */
  async getSenateDisclosure(symbol?: string): Promise<Array<{
    firstName: string;
    lastName: string;
    office: string;
    link: string;
    dateReceived: string;
    transactionDate: string;
    owner: string;
    ticker: string;
    assetDescription: string;
    assetType: string;
    type: string;
    amount: string;
    comment: string;
  }>> {
    const params: QueryParams = {};
    if (symbol) params.symbol = symbol;
    return this.httpClient.get('/senate-disclosure', params);
  }

  /**
   * House Disclosure API - Get house disclosure documents
   * @param symbol - Stock symbol (optional, e.g., "AAPL")
   */
  async getHouseDisclosure(symbol?: string): Promise<Array<{
    firstName: string;
    lastName: string;
    office: string;
    link: string;
    dateReceived: string;
    transactionDate: string;
    owner: string;
    ticker: string;
    assetDescription: string;
    assetType: string;
    type: string;
    amount: string;
    comment: string;
  }>> {
    const params: QueryParams = {};
    if (symbol) params.symbol = symbol;
    return this.httpClient.get('/house-disclosure', params);
  }
}
