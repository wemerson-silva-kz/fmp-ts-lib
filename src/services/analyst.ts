import type { 
  AnalystEstimate,
  QueryParams 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class AnalystService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Financial Estimates API - Get analyst financial estimates
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param period - Period type (required, "annual" or "quarter")
   * @param page - Page number (optional, default: 0)
   * @param limit - Maximum number of results (optional, default: 10, max: 1000)
   */
  async getAnalystEstimates(
    symbol: string, 
    period: 'annual' | 'quarter',
    page?: number,
    limit?: number
  ): Promise<Array<{
    symbol: string;
    date: string;
    revenueLow: number;
    revenueHigh: number;
    revenueAvg: number;
    ebitdaLow: number;
    ebitdaHigh: number;
    ebitdaAvg: number;
    ebitLow: number;
    ebitHigh: number;
    ebitAvg: number;
    netIncomeLow: number;
    netIncomeHigh: number;
    netIncomeAvg: number;
    sgaExpenseLow: number;
    sgaExpenseHigh: number;
    sgaExpenseAvg: number;
    epsAvg: number;
    epsHigh: number;
    epsLow: number;
    numAnalystsRevenue: number;
    numAnalystsEps: number;
  }>> {
    const params: QueryParams = { symbol, period };
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/analyst-estimates', params);
  }

  /**
   * Ratings Snapshot API - Get current financial ratings
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 1)
   */
  async getRatingsSnapshot(symbol: string, limit?: number): Promise<Array<{
    symbol: string;
    rating: string;
    overallScore: number;
    discountedCashFlowScore: number;
    returnOnEquityScore: number;
    returnOnAssetsScore: number;
    debtToEquityScore: number;
    priceToEarningsScore: number;
    priceToBookScore: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/ratings-snapshot', params);
  }

  /**
   * Historical Ratings API - Get historical financial ratings
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 1, max: 10000)
   */
  async getHistoricalRatings(symbol: string, limit?: number): Promise<Array<{
    symbol: string;
    date: string;
    rating: string;
    overallScore: number;
    discountedCashFlowScore: number;
    returnOnEquityScore: number;
    returnOnAssetsScore: number;
    debtToEquityScore: number;
    priceToEarningsScore: number;
    priceToBookScore: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/ratings-historical', params);
  }

  /**
   * Price Target Summary API - Get price target summary
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getPriceTargetSummary(symbol: string): Promise<Array<{
    symbol: string;
    lastMonthCount: number;
    lastMonthAvgPriceTarget: number;
    lastQuarterCount: number;
    lastQuarterAvgPriceTarget: number;
    lastYearCount: number;
    lastYearAvgPriceTarget: number;
    allTimeCount: number;
    allTimeAvgPriceTarget: number;
    publishers: string;
  }>> {
    return this.httpClient.get('/price-target-summary', { symbol });
  }

  /**
   * Price Target Consensus API - Get consensus price targets
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getPriceTargetConsensus(symbol: string): Promise<Array<{
    symbol: string;
    targetHigh: number;
    targetLow: number;
    targetConsensus: number;
    targetMedian: number;
  }>> {
    return this.httpClient.get('/price-target-consensus', { symbol });
  }

  /**
   * Price Target News API - Get price target news for specific symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional, default: 0)
   * @param limit - Maximum number of results (optional, default: 10)
   */
  async getPriceTargetNews(symbol: string, page?: number, limit?: number): Promise<Array<{
    symbol: string;
    publishedDate: string;
    newsURL: string;
    newsTitle: string;
    analystName: string;
    priceTarget: number;
    adjPriceTarget: number;
    priceWhenPosted: number;
    newsPublisher: string;
    newsBaseURL: string;
    analystCompany: string;
  }>> {
    const params: QueryParams = { symbol };
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/price-target-news', params);
  }

  /**
   * Price Target Latest News API - Get latest price target news for all symbols
   * @param page - Page number (optional, default: 0, max: 100)
   * @param limit - Maximum number of results (optional, default: 10, max: 1000)
   */
  async getPriceTargetLatestNews(page?: number, limit?: number): Promise<Array<{
    symbol: string;
    publishedDate: string;
    newsURL: string;
    newsTitle: string;
    analystName: string;
    priceTarget: number;
    adjPriceTarget: number;
    priceWhenPosted: number;
    newsPublisher: string;
    newsBaseURL: string;
    analystCompany: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/price-target-latest-news', params);
  }

  /**
   * Stock Grades API - Get latest stock grades
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getStockGrades(symbol: string): Promise<Array<{
    symbol: string;
    date: string;
    gradingCompany: string;
    previousGrade: string;
    newGrade: string;
    action: string;
  }>> {
    return this.httpClient.get('/grades', { symbol });
  }

  /**
   * Historical Stock Grades API - Get historical stock grades
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 100, max: 1000)
   */
  async getHistoricalStockGrades(symbol: string, limit?: number): Promise<Array<{
    symbol: string;
    date: string;
    analystRatingsBuy: number;
    analystRatingsHold: number;
    analystRatingsSell: number;
    analystRatingsStrongSell: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/grades-historical', params);
  }

  /**
   * Stock Grades Summary API - Get grades consensus
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getStockGradesSummary(symbol: string): Promise<Array<{
    symbol: string;
    strongBuy: number;
    buy: number;
    hold: number;
    sell: number;
    strongSell: number;
    consensus: string;
  }>> {
    return this.httpClient.get('/grades-consensus', { symbol });
  }

  /**
   * Stock Grade News API - Get grade news for specific symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param page - Page number (optional, default: 0)
   * @param limit - Maximum number of results (optional, default: 1, max: 100)
   */
  async getStockGradeNews(symbol: string, page?: number, limit?: number): Promise<Array<{
    symbol: string;
    publishedDate: string;
    newsURL: string;
    newsTitle: string;
    newsBaseURL: string;
    newsPublisher: string;
    newGrade: string;
    previousGrade: string;
    gradingCompany: string;
    action: string;
    priceWhenPosted: number;
  }>> {
    const params: QueryParams = { symbol };
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/grades-news', params);
  }

  /**
   * Stock Grade Latest News API - Get latest grade news for all symbols
   * @param page - Page number (optional, default: 0, max: 100)
   * @param limit - Maximum number of results (optional, default: 10, max: 1000)
   */
  async getStockGradeLatestNews(page?: number, limit?: number): Promise<Array<{
    symbol: string;
    publishedDate: string;
    newsURL: string;
    newsTitle: string;
    newsBaseURL: string;
    newsPublisher: string;
    newGrade: string;
    previousGrade: string;
    gradingCompany: string;
    action: string;
    priceWhenPosted: number;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/grades-latest-news', params);
  }
}
