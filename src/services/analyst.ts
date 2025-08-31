import type { 
  AnalystEstimate,
  QueryParams 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class AnalystService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get analyst estimates for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getAnalystEstimates(
    symbol: string, 
    period: 'annual' | 'quarter' = 'annual',
    limit: number = 30
  ): Promise<AnalystEstimate[]> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get<AnalystEstimate[]>(`/analyst-estimates/${symbol}`, params);
  }

  /**
   * Get price targets for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getPriceTarget(symbol: string): Promise<Array<{
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
    return this.httpClient.get(`/price-target/${symbol}`);
  }

  /**
   * Get price target summary for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getPriceTargetSummary(symbol: string): Promise<{
    symbol: string;
    lastMonth: number;
    lastMonthAvgPriceTarget: number;
    lastQuarter: number;
    lastQuarterAvgPriceTarget: number;
    lastYear: number;
    lastYearAvgPriceTarget: number;
    allTime: number;
    allTimeAvgPriceTarget: number;
    publishers: string[];
  }> {
    const result = await this.httpClient.get<Array<{
      symbol: string;
      lastMonth: number;
      lastMonthAvgPriceTarget: number;
      lastQuarter: number;
      lastQuarterAvgPriceTarget: number;
      lastYear: number;
      lastYearAvgPriceTarget: number;
      allTime: number;
      allTimeAvgPriceTarget: number;
      publishers: string[];
    }>>(`/price-target-summary/${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error(`No price target summary found for symbol ${symbol}`);
  }

  /**
   * Get analyst stock recommendations
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getAnalystRecommendations(symbol: string): Promise<Array<{
    symbol: string;
    date: string;
    analystRatingsbuy: number;
    analystRatingsHold: number;
    analystRatingsSell: number;
    analystRatingsStrongSell: number;
    analystRatingsStrongBuy: number;
  }>> {
    return this.httpClient.get(`/analyst-stock-recommendations/${symbol}`);
  }

  /**
   * Get upgrades and downgrades for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getUpgradesDowngrades(symbol: string): Promise<Array<{
    symbol: string;
    publishedDate: string;
    newsURL: string;
    newsTitle: string;
    newsPublisher: string;
    newGrade: string;
    previousGrade: string;
    gradingCompany: string;
    action: string;
    priceWhenPosted: number;
  }>> {
    return this.httpClient.get(`/upgrades-downgrades/${symbol}`);
  }

  /**
   * Get upgrades and downgrades consensus
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getUpgradesDowngradesConsensus(symbol: string): Promise<Array<{
    symbol: string;
    strongBuy: number;
    buy: number;
    hold: number;
    sell: number;
    strongSell: number;
    consensus: string;
  }>> {
    return this.httpClient.get(`/upgrades-downgrades-consensus/${symbol}`);
  }

  /**
   * Get price target latest news
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param page - Page number for pagination
   */
  async getPriceTargetLatestNews(symbol: string, page: number = 0): Promise<Array<{
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
    const params: QueryParams = { page };
    return this.httpClient.get(`/price-target-latest-news/${symbol}`, params);
  }

  /**
   * Get stock grade news
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getStockGradeNews(symbol: string, limit: number = 100): Promise<Array<{
    symbol: string;
    publishedDate: string;
    newsURL: string;
    newsTitle: string;
    analystName: string;
    newGrade: string;
    previousGrade: string;
    gradeChange: string;
    newsPublisher: string;
    newsBaseURL: string;
    analystCompany: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get(`/upgrades-downgrades-grading-company/${symbol}`, params);
  }

  /**
   * Get latest stock grade news across all stocks
   * @param limit - Maximum number of results
   */
  async getLatestStockGradeNews(limit: number = 100): Promise<Array<{
    symbol: string;
    publishedDate: string;
    newsURL: string;
    newsTitle: string;
    analystName: string;
    newGrade: string;
    previousGrade: string;
    gradeChange: string;
    newsPublisher: string;
    newsBaseURL: string;
    analystCompany: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/upgrades-downgrades-grading-company', params);
  }

  /**
   * Get price target by analyst company
   * @param company - Analyst company name (e.g., "Goldman Sachs")
   * @param page - Page number for pagination
   */
  async getPriceTargetByAnalystCompany(company: string, page: number = 0): Promise<Array<{
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
    const params: QueryParams = { page };
    return this.httpClient.get(`/price-target-analyst-company/${company}`, params);
  }

  /**
   * Get price target consensus
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getPriceTargetConsensus(symbol: string): Promise<{
    symbol: string;
    targetHigh: number;
    targetLow: number;
    targetConsensus: number;
    targetMedian: number;
  }> {
    const result = await this.httpClient.get<Array<{
      symbol: string;
      targetHigh: number;
      targetLow: number;
      targetConsensus: number;
      targetMedian: number;
    }>>(`/price-target-consensus/${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error(`No price target consensus found for symbol ${symbol}`);
  }

  /**
   * Get upgrades and downgrades RSS feed
   */
  async getUpgradesDowngradesRSSFeed(): Promise<Array<{
    title: string;
    date: string;
    content: string;
    symbol: string;
    url: string;
  }>> {
    return this.httpClient.get('/upgrades-downgrades-rss-feed');
  }

  /**
   * Get analyst estimates by company
   * @param company - Company name or analyst firm
   */
  async getAnalystEstimatesByCompany(company: string): Promise<AnalystEstimate[]> {
    const params: QueryParams = { company };
    return this.httpClient.get<AnalystEstimate[]>('/analyst-estimates', params);
  }
}
