import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class MarketPerformanceService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Market Sector Performance Snapshot API - Get sector performance snapshot
   * @param date - Date (required, YYYY-MM-DD format)
   * @param exchange - Exchange (optional, e.g., "NASDAQ")
   * @param sector - Sector (optional, e.g., "Energy")
   */
  async getSectorPerformanceSnapshot(date: string, exchange?: string, sector?: string): Promise<Array<{
    date: string;
    sector: string;
    exchange: string;
    changesPercentage: number;
  }>> {
    const params: QueryParams = { date };
    if (exchange) params.exchange = exchange;
    if (sector) params.sector = sector;
    return this.httpClient.get('/sector-performance-snapshot', params);
  }

  /**
   * Stock Market Gainers API - Get top gaining stocks
   */
  async getMarketGainers(): Promise<Array<{
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
  }>> {
    return this.httpClient.get('/gainers');
  }

  /**
   * Stock Market Losers API - Get top losing stocks
   */
  async getMarketLosers(): Promise<Array<{
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
  }>> {
    return this.httpClient.get('/losers');
  }

  /**
   * Most Active Stocks API - Get most active stocks
   */
  async getMostActiveStocks(): Promise<Array<{
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
  }>> {
    return this.httpClient.get('/actives');
  }

  /**
   * Sector Performance API - Get sector performance
   */
  async getSectorPerformance(): Promise<Array<{
    sector: string;
    changesPercentage: string;
  }>> {
    return this.httpClient.get('/sector-performance');
  }

  /**
   * Historical Sector Performance API - Get historical sector performance
   * @param limit - Number of results (optional)
   */
  async getHistoricalSectorPerformance(limit?: number): Promise<Array<{
    date: string;
    technologyChangesPercentage: number;
    healthcareChangesPercentage: number;
    financialServicesChangesPercentage: number;
    communicationServicesChangesPercentage: number;
    industrialsChangesPercentage: number;
    consumerDiscretionaryChangesPercentage: number;
    basicMaterialsChangesPercentage: number;
    realEstateChangesPercentage: number;
    utilitiesChangesPercentage: number;
    consumerStaplesChangesPercentage: number;
    energyChangesPercentage: number;
  }>> {
    const params: QueryParams = {};
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/historical-sector-performance', params);
  }

  /**
   * Market Hours API - Get market hours status
   */
  async getMarketHours(): Promise<Array<{
    stockExchangeName: string;
    stockMarketHours: {
      openingHour: string;
      closingHour: string;
    };
    stockMarketHolidays: Array<{
      year: number;
      holidays: Array<{
        date: string;
        name: string;
      }>;
    }>;
    isTheStockMarketOpen: boolean;
    isTheEuronextMarketOpen: boolean;
    isTheForexMarketOpen: boolean;
    isTheCryptoMarketOpen: boolean;
  }>> {
    return this.httpClient.get('/is-the-market-open');
  }
}
