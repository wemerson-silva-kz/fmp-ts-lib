import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class ForexService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Forex List API - Get list of all forex pairs
   */
  async getForexList(): Promise<Array<{
    symbol: string;
    name: string;
    currency: string;
    exchangeFullName: string;
    exchange: string;
  }>> {
    return this.httpClient.get('/forex-list');
  }

  /**
   * Forex Quote API - Get forex quote
   * @param symbol - Forex symbol (required, e.g., "EURUSD")
   */
  async getForexQuote(symbol: string): Promise<Array<{
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
   * Forex Short Quote API - Get short forex quote
   * @param symbol - Forex symbol (required, e.g., "EURUSD")
   */
  async getForexQuoteShort(symbol: string): Promise<Array<{
    symbol: string;
    price: number;
    volume: number;
  }>> {
    return this.httpClient.get('/quote-short', { symbol });
  }

  /**
   * Batch Forex Quotes API - Get all forex quotes
   */
  async getBatchForexQuotes(): Promise<Array<{
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
    return this.httpClient.get('/batch-forex-quotes');
  }

  /**
   * Historical Forex Light Chart API - Get light historical data
   * @param symbol - Forex symbol (required, e.g., "EURUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalForexLight(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * Historical Forex Full Chart API - Get full historical data
   * @param symbol - Forex symbol (required, e.g., "EURUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalForexFull(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 1-Minute Interval Forex Data API - Get 1-minute data
   * @param symbol - Forex symbol (required, e.g., "EURUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getForex1MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 5-Minute Interval Forex Data API - Get 5-minute data
   * @param symbol - Forex symbol (required, e.g., "EURUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getForex5MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 1-Hour Interval Forex Data API - Get 1-hour data
   * @param symbol - Forex symbol (required, e.g., "EURUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getForex1HourData(symbol: string, from?: string, to?: string): Promise<Array<{
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
