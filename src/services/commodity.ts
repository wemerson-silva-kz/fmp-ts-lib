import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CommodityService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Commodities List API - Get list of all commodities
   */
  async getCommoditiesList(): Promise<Array<{
    symbol: string;
    name: string;
    currency: string;
    exchangeFullName: string;
    exchange: string;
  }>> {
    return this.httpClient.get('/commodities-list');
  }

  /**
   * Commodities Quote API - Get commodity quote
   * @param symbol - Commodity symbol (required, e.g., "GCUSD")
   */
  async getCommodityQuote(symbol: string): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    marketCap: number;
    priceAvg50: number;
    priceAvg200: number;
    exchange: string;
    volume: number;
    avgVolume: number;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    return this.httpClient.get('/quote', { symbol });
  }

  /**
   * Commodities Quote Short API - Get short commodity quote
   * @param symbol - Commodity symbol (required, e.g., "GCUSD")
   */
  async getCommodityQuoteShort(symbol: string): Promise<Array<{
    symbol: string;
    price: number;
    volume: number;
  }>> {
    return this.httpClient.get('/quote-short', { symbol });
  }

  /**
   * All Commodities Quotes API - Get all commodity quotes
   */
  async getAllCommodityQuotes(): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    marketCap: number;
    volume: number;
    avgVolume: number;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    return this.httpClient.get('/batch-commodity-quotes');
  }

  /**
   * Light Chart API - Get light historical data
   * @param symbol - Commodity symbol (required, e.g., "GCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalCommodityLight(symbol: string, from?: string, to?: string): Promise<Array<{
    symbol: string;
    date: string;
    price: number;
    volume: number;
  }>> {
    const params: QueryParams = { symbol };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-price-eod/light', params);
  }

  /**
   * Full Chart API - Get full historical data
   * @param symbol - Commodity symbol (required, e.g., "GCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalCommodityFull(symbol: string, from?: string, to?: string): Promise<Array<{
    symbol: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    change: number;
    changePercent: number;
    vwap: number;
  }>> {
    const params: QueryParams = { symbol };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-price-eod/full', params);
  }

  /**
   * 1-Minute Interval Commodity Data API - Get 1-minute data
   * @param symbol - Commodity symbol (required, e.g., "GCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getCommodity1MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
    date: string;
    open: number;
    low: number;
    high: number;
    close: number;
    volume: number;
  }>> {
    const params: QueryParams = { symbol };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-chart/1min', params);
  }

  /**
   * 5-Minute Interval Commodity Data API - Get 5-minute data
   * @param symbol - Commodity symbol (required, e.g., "GCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getCommodity5MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
    date: string;
    open: number;
    low: number;
    high: number;
    close: number;
    volume: number;
  }>> {
    const params: QueryParams = { symbol };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-chart/5min', params);
  }

  /**
   * 1-Hour Interval Commodity Data API - Get 1-hour data
   * @param symbol - Commodity symbol (required, e.g., "GCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getCommodity1HourData(symbol: string, from?: string, to?: string): Promise<Array<{
    date: string;
    open: number;
    low: number;
    high: number;
    close: number;
    volume: number;
  }>> {
    const params: QueryParams = { symbol };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-chart/1hour', params);
  }
}
