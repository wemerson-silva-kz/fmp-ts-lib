import { getFirstOrItem } from '../utils/index.js';
import type { MarketGainer, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class MarketPerformanceService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get stock market gainers
   * @param limit - Maximum number of results
   */
  async getStockMarketGainers(limit: number = 100): Promise<MarketGainer[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get<MarketGainer[]>('/gainers', params);
  }

  /**
   * Get stock market losers
   * @param limit - Maximum number of results
   */
  async getStockMarketLosers(limit: number = 100): Promise<Array<{
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/losers', params);
  }

  /**
   * Get most active stocks
   * @param limit - Maximum number of results
   */
  async getMostActiveStocks(limit: number = 100): Promise<Array<{
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
    volume: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/actives', params);
  }

  /**
   * Get sector performance
   */
  async getSectorPerformance(): Promise<Array<{
    sector: string;
    changesPercentage: number;
  }>> {
    return this.httpClient.get('/sectors-performance');
  }

  /**
   * Get historical sector performance
   * @param limit - Maximum number of results
   */
  async getHistoricalSectorPerformance(limit: number = 50): Promise<Array<{
    date: string;
    technologyChangesPercentage: number;
    healthcareChangesPercentage: number;
    financialServicesChangesPercentage: number;
    communicationServicesChangesPercentage: number;
    industrialsChangesPercentage: number;
    consumerDiscretionaryChangesPercentage: number;
    consumerStaplesChangesPercentage: number;
    energyChangesPercentage: number;
    utilitiesChangesPercentage: number;
    realEstateChangesPercentage: number;
    materialsChangesPercentage: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/historical-sectors-performance', params);
  }

  /**
   * Get market performance by exchange
   * @param exchange - Exchange name (e.g., "NASDAQ", "NYSE")
   */
  async getMarketPerformanceByExchange(exchange: string): Promise<{
    exchange: string;
    gainers: MarketGainer[];
    losers: Array<{
      symbol: string;
      name: string;
      change: number;
      price: number;
      changesPercentage: number;
    }>;
    mostActive: Array<{
      symbol: string;
      name: string;
      change: number;
      price: number;
      changesPercentage: number;
      volume: number;
    }>;
  }> {
    const params: QueryParams = { exchange };
    return this.httpClient.get('/market-performance/exchange', params);
  }

  /**
   * Get market performance summary
   */
  async getMarketPerformanceSummary(): Promise<{
    date: string;
    totalGainers: number;
    totalLosers: number;
    totalUnchanged: number;
    advanceDeclineRatio: number;
    marketSentiment: 'Bullish' | 'Bearish' | 'Neutral';
    topSector: string;
    worstSector: string;
    averageVolumeChange: number;
  }> {
    const result = await this.httpClient.get('/market-performance/summary');
    return getFirstOrItem(result);
  }

  /**
   * Get pre-market gainers
   * @param limit - Maximum number of results
   */
  async getPreMarketGainers(limit: number = 50): Promise<MarketGainer[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/pre-market-gainers', params);
  }

  /**
   * Get pre-market losers
   * @param limit - Maximum number of results
   */
  async getPreMarketLosers(limit: number = 50): Promise<Array<{
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/pre-market-losers', params);
  }

  /**
   * Get after-hours gainers
   * @param limit - Maximum number of results
   */
  async getAfterHoursGainers(limit: number = 50): Promise<MarketGainer[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/after-hours-gainers', params);
  }

  /**
   * Get after-hours losers
   * @param limit - Maximum number of results
   */
  async getAfterHoursLosers(limit: number = 50): Promise<Array<{
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/after-hours-losers', params);
  }

  /**
   * Get market movers by market cap
   * @param marketCapRange - Market cap range ("small", "mid", "large")
   * @param limit - Maximum number of results
   */
  async getMarketMoversByMarketCap(
    marketCapRange: 'small' | 'mid' | 'large',
    limit: number = 50
  ): Promise<{
    gainers: MarketGainer[];
    losers: Array<{
      symbol: string;
      name: string;
      change: number;
      price: number;
      changesPercentage: number;
    }>;
  }> {
    const params: QueryParams = { marketCapRange, limit };
    return this.httpClient.get('/market-movers/market-cap', params);
  }

  /**
   * Get unusual volume stocks
   * @param limit - Maximum number of results
   */
  async getUnusualVolumeStocks(limit: number = 100): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    change: number;
    changesPercentage: number;
    volume: number;
    avgVolume: number;
    volumeRatio: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/unusual-volume', params);
  }
}

