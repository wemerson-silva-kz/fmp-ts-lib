import { getFirstOrItem } from '../utils/index.js';
import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class SenateService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get Senate trading data
   * @param limit - Maximum number of results
   */
  async getSenateTrading(limit: number = 100): Promise<Array<{
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
    const params: QueryParams = { limit };
    return this.httpClient.get('/senate-trading', params);
  }

  /**
   * Get Senate trading RSS feed
   * @param limit - Maximum number of results
   */
  async getSenateTradinRSSFeed(limit: number = 100): Promise<Array<{
    title: string;
    date: string;
    content: string;
    senator: string;
    ticker?: string;
    transactionType: string;
    amount: string;
    url: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/senate-trading-rss-feed', params);
  }

  /**
   * Get Senate trading by senator
   * @param senatorName - Senator's name (first and last name)
   * @param limit - Maximum number of results
   */
  async getSenateTradinBySenator(senatorName: string, limit: number = 100): Promise<Array<{
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
    const params: QueryParams = { senator: senatorName, limit };
    return this.httpClient.get('/senate-trading/senator', params);
  }

  /**
   * Get Senate trading by ticker
   * @param ticker - Stock ticker symbol
   * @param limit - Maximum number of results
   */
  async getSenateTradinByTicker(ticker: string, limit: number = 100): Promise<Array<{
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
    const params: QueryParams = { ticker, limit };
    return this.httpClient.get('/senate-trading/ticker', params);
  }

  /**
   * Get Senate trading statistics
   */
  async getSenateTradinStatistics(): Promise<{
    totalTransactions: number;
    totalSenators: number;
    totalValue: string;
    mostActiveSenator: {
      name: string;
      transactions: number;
    };
    mostTradedStock: {
      ticker: string;
      transactions: number;
    };
    transactionsByType: Array<{
      type: string;
      count: number;
      percentage: number;
    }>;
    transactionsByMonth: Array<{
      month: string;
      count: number;
      value: string;
    }>;
  }> {
    const result = await this.httpClient.get('/senate-trading/statistics');
    return getFirstOrItem(result);
  }

  /**
   * Get Senate trading summary by date range
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getSenateTradinSummary(from: string, to: string): Promise<{
    dateRange: {
      from: string;
      to: string;
    };
    totalTransactions: number;
    totalValue: string;
    uniqueSenators: number;
    uniqueStocks: number;
    buyTransactions: number;
    sellTransactions: number;
    topSenators: Array<{
      name: string;
      transactions: number;
      estimatedValue: string;
    }>;
    topStocks: Array<{
      ticker: string;
      transactions: number;
      senators: number;
    }>;
    transactionTypes: Array<{
      type: string;
      count: number;
      percentage: number;
    }>;
  }> {
    const params: QueryParams = { from, to };
    const result = await this.httpClient.get('/senate-trading/summary', params);
    return getFirstOrItem(result);
  }

  /**
   * Get Senate trading alerts
   * @param minAmount - Minimum transaction amount threshold
   * @param tickers - Array of ticker symbols to monitor (optional)
   */
  async getSenateTradinAlerts(minAmount?: string, tickers?: string[]): Promise<Array<{
    firstName: string;
    lastName: string;
    office: string;
    dateReceived: string;
    transactionDate: string;
    ticker: string;
    assetDescription: string;
    type: string;
    amount: string;
    alertType: 'Large Transaction' | 'New Senator' | 'Unusual Activity';
    significance: 'High' | 'Medium' | 'Low';
  }>> {
    const params: QueryParams = {};
    if (minAmount) params.minAmount = minAmount;
    if (tickers) params.tickers = tickers.join(',');
    return this.httpClient.get('/senate-trading/alerts', params);
  }

  /**
   * Get Senate trading performance analysis
   * @param senator - Senator's name (optional)
   * @param period - Analysis period ("1M", "3M", "6M", "1Y")
   */
  async getSenateTradinPerformance(
    senator?: string, 
    period: '1M' | '3M' | '6M' | '1Y' = '1Y'
  ): Promise<Array<{
    senator: string;
    period: string;
    totalTransactions: number;
    buyTransactions: number;
    sellTransactions: number;
    estimatedValue: string;
    performanceScore: number;
    topHoldings: Array<{
      ticker: string;
      transactions: number;
      lastTransaction: string;
      estimatedReturn?: number;
    }>;
    tradingPattern: 'Active' | 'Moderate' | 'Infrequent';
  }>> {
    const params: QueryParams = { period };
    if (senator) params.senator = senator;
    return this.httpClient.get('/senate-trading/performance', params);
  }

  /**
   * Get Senate trading disclosure timeline
   * @param senator - Senator's name
   */
  async getSenateTradinDisclosureTimeline(senator: string): Promise<Array<{
    senator: string;
    disclosureDate: string;
    transactionDate: string;
    daysBetween: number;
    ticker: string;
    type: string;
    amount: string;
    complianceStatus: 'On Time' | 'Late' | 'Very Late';
  }>> {
    const params: QueryParams = { senator };
    return this.httpClient.get('/senate-trading/disclosure-timeline', params);
  }

  /**
   * Get Senate trading sector analysis
   */
  async getSenateTradinSectorAnalysis(): Promise<Array<{
    sector: string;
    transactions: number;
    senators: number;
    estimatedValue: string;
    topStocks: Array<{
      ticker: string;
      company: string;
      transactions: number;
    }>;
    sentiment: 'Bullish' | 'Bearish' | 'Neutral';
  }>> {
    return this.httpClient.get('/senate-trading/sector-analysis');
  }

  /**
   * Get Senate trading correlation with market
   * @param ticker - Stock ticker symbol
   */
  async getSenateTradinMarketCorrelation(ticker: string): Promise<{
    ticker: string;
    senateActivity: Array<{
      date: string;
      transactions: number;
      netActivity: 'Buy' | 'Sell' | 'Neutral';
      senators: number;
    }>;
    stockPerformance: Array<{
      date: string;
      price: number;
      change: number;
      volume: number;
    }>;
    correlation: {
      coefficient: number;
      significance: 'High' | 'Medium' | 'Low';
      interpretation: string;
    };
  }> {
    const params: QueryParams = { ticker };
    const result = await this.httpClient.get('/senate-trading/market-correlation', params);
    return getFirstOrItem(result);
  }
}

