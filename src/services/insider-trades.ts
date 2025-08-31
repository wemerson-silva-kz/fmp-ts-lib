import { getFirstOrItem } from '../utils/index.js';
import type { InsiderTrading, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class InsiderTradesService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get insider trading data for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getInsiderTrading(symbol: string, limit: number = 100): Promise<InsiderTrading[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get<InsiderTrading[]>(`/insider-trading/${symbol}`, params);
  }

  /**
   * Get insider trading RSS feed
   * @param limit - Maximum number of results
   */
  async getInsiderTradingRSSFeed(limit: number = 100): Promise<Array<{
    title: string;
    date: string;
    content: string;
    symbol: string;
    url: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/insider-trading-rss-feed', params);
  }

  /**
   * Get insider roster (list of insiders for a company)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getInsiderRoster(symbol: string): Promise<Array<{
    cik: string;
    ownerCik: string;
    ownerName: string;
    typeOfOwner: string;
    symbol: string;
    companyName: string;
    relationshipWithCompany: string;
  }>> {
    return this.httpClient.get(`/insider-roaster/${symbol}`);
  }

  /**
   * Get insider roster statistics
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getInsiderRosterStatistics(symbol: string): Promise<Array<{
    year: number;
    quarter: number;
    symbol: string;
    cik: string;
    ownerCik: string;
    ownerName: string;
    averageTransactionPrice: number;
    totalBought: number;
    totalSold: number;
    totalTransactions: number;
    netActivity: number;
    netActivityDollarValue: number;
  }>> {
    return this.httpClient.get(`/insider-roaster-statistic/${symbol}`);
  }

  /**
   * Get insider trading by transaction type
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param transactionType - Transaction type ("P-Purchase", "S-Sale", etc.)
   * @param limit - Maximum number of results
   */
  async getInsiderTradingByType(
    symbol: string, 
    transactionType: string,
    limit: number = 100
  ): Promise<InsiderTrading[]> {
    const params: QueryParams = { transactionType, limit };
    return this.httpClient.get<InsiderTrading[]>(`/insider-trading/${symbol}`, params);
  }

  /**
   * Get insider trading summary for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Time period ("1M", "3M", "6M", "1Y")
   */
  async getInsiderTradingSummary(
    symbol: string,
    period: '1M' | '3M' | '6M' | '1Y' = '3M'
  ): Promise<{
    symbol: string;
    period: string;
    totalTransactions: number;
    totalBuyTransactions: number;
    totalSellTransactions: number;
    totalBuyValue: number;
    totalSellValue: number;
    netInsiderActivity: number;
    averageTransactionSize: number;
    uniqueInsiders: number;
    sentiment: 'Bullish' | 'Bearish' | 'Neutral';
  }> {
    const params: QueryParams = { period };
    const result = await this.httpClient.get(`/insider-trading-summary/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get top insider buyers
   * @param limit - Maximum number of results
   */
  async getTopInsiderBuyers(limit: number = 50): Promise<Array<{
    symbol: string;
    companyName: string;
    ownerName: string;
    totalBought: number;
    totalValue: number;
    averagePrice: number;
    transactionCount: number;
    lastTransactionDate: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/insider-trading/top-buyers', params);
  }

  /**
   * Get top insider sellers
   * @param limit - Maximum number of results
   */
  async getTopInsiderSellers(limit: number = 50): Promise<Array<{
    symbol: string;
    companyName: string;
    ownerName: string;
    totalSold: number;
    totalValue: number;
    averagePrice: number;
    transactionCount: number;
    lastTransactionDate: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/insider-trading/top-sellers', params);
  }

  /**
   * Get insider trading by CIK
   * @param cik - Central Index Key of the insider
   * @param limit - Maximum number of results
   */
  async getInsiderTradingByCIK(cik: string, limit: number = 100): Promise<InsiderTrading[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get<InsiderTrading[]>(`/insider-trading/cik/${cik}`, params);
  }

  /**
   * Get insider trading alerts
   * @param minValue - Minimum transaction value
   * @param limit - Maximum number of results
   */
  async getInsiderTradingAlerts(minValue: number = 1000000, limit: number = 100): Promise<Array<{
    symbol: string;
    filingDate: string;
    transactionDate: string;
    reportingName: string;
    transactionType: string;
    securitiesTransacted: number;
    price: number;
    totalValue: number;
    alertType: string;
    significance: 'High' | 'Medium' | 'Low';
  }>> {
    const params: QueryParams = { minValue, limit };
    return this.httpClient.get('/insider-trading/alerts', params);
  }

  /**
   * Get insider ownership changes
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getInsiderOwnershipChanges(symbol: string): Promise<Array<{
    ownerCik: string;
    ownerName: string;
    symbol: string;
    currentShares: number;
    previousShares: number;
    changeInShares: number;
    changePercentage: number;
    currentValue: number;
    previousValue: number;
    changeInValue: number;
    lastTransactionDate: string;
  }>> {
    return this.httpClient.get(`/insider-ownership-changes/${symbol}`);
  }
}

