import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class InsiderTradesService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Latest Insider Trading API - Get latest insider trading activity
   * @param date - Date (optional, YYYY-MM-DD format)
   * @param page - Page number (optional, max: 100)
   * @param limit - Number of results (optional, max: 1000)
   */
  async getLatestInsiderTrading(date?: string, page?: number, limit?: number): Promise<Array<{
    filingDate: string;
    transactionDate: string;
    reportingCik: string;
    transactionType: string;
    securitiesOwned: number;
    companyCik: string;
    reportingName: string;
    typeOfOwner: string;
    acquistionOrDisposition: string;
    formType: string;
    securitiesTransacted: number;
    price: number;
    securityName: string;
    link: string;
    symbol: string;
  }>> {
    const params: QueryParams = {};
    if (date) params.date = date;
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/insider-trading/latest', params);
  }

  /**
   * Insider Trading by Symbol API - Get insider trading for specific symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional)
   * @param limit - Number of results (optional)
   */
  async getInsiderTradingBySymbol(symbol: string, page?: number, limit?: number): Promise<Array<{
    filingDate: string;
    transactionDate: string;
    reportingCik: string;
    transactionType: string;
    securitiesOwned: number;
    companyCik: string;
    reportingName: string;
    typeOfOwner: string;
    acquistionOrDisposition: string;
    formType: string;
    securitiesTransacted: number;
    price: number;
    securityName: string;
    link: string;
    symbol: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get(`/insider-trading/${symbol}`, params);
  }

  /**
   * Insider Trading Statistics API - Get insider trading statistics
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getInsiderTradingStatistics(symbol: string): Promise<Array<{
    symbol: string;
    year: number;
    quarter: number;
    purchases: number;
    sales: number;
    purchasesAmount: number;
    salesAmount: number;
    netAmount: number;
  }>> {
    return this.httpClient.get(`/insider-trading-statistics/${symbol}`);
  }

  /**
   * Insider Roster API - Get company insider roster
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getInsiderRoster(symbol: string): Promise<Array<{
    cik: string;
    name: string;
    title: string;
    symbol: string;
  }>> {
    return this.httpClient.get(`/insider-roster/${symbol}`);
  }

  /**
   * Insider Trading by Reporting Person API - Get trading by specific person
   * @param reportingCik - Reporting person CIK (required)
   * @param page - Page number (optional)
   * @param limit - Number of results (optional)
   */
  async getInsiderTradingByPerson(reportingCik: string, page?: number, limit?: number): Promise<Array<{
    filingDate: string;
    transactionDate: string;
    reportingCik: string;
    transactionType: string;
    securitiesOwned: number;
    companyCik: string;
    reportingName: string;
    typeOfOwner: string;
    acquistionOrDisposition: string;
    formType: string;
    securitiesTransacted: number;
    price: number;
    securityName: string;
    link: string;
    symbol: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get(`/insider-trading/person/${reportingCik}`, params);
  }

  /**
   * Insider Trading Summary API - Get insider trading summary
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getInsiderTradingSummary(symbol: string): Promise<Array<{
    symbol: string;
    totalBought: number;
    totalSold: number;
    netActivity: number;
    totalTransactions: number;
    averagePrice: number;
  }>> {
    return this.httpClient.get(`/insider-trading-summary/${symbol}`);
  }
}
