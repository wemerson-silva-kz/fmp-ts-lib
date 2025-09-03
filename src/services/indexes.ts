import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class IndexesService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Stock Market Indexes List API - Get list of all stock market indexes
   */
  async getIndexesList(): Promise<Array<{
    symbol: string;
    name: string;
    exchange: string;
    currency: string;
  }>> {
    return this.httpClient.get('/index-list');
  }

  /**
   * Index Quote API - Get real-time index quote
   * @param symbol - Index symbol (required, e.g., "^GSPC")
   */
  async getIndexQuote(symbol: string): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changePercentage: number;
    change: number;
    volume: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    marketCap: number;
    priceAvg50: number;
    priceAvg200: number;
    exchange: string;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    return this.httpClient.get('/quote', { symbol });
  }

  /**
   * Index Short Quote API - Get concise index quote
   * @param symbol - Index symbol (required, e.g., "^GSPC")
   */
  async getIndexQuoteShort(symbol: string): Promise<Array<{
    symbol: string;
    price: number;
    change: number;
    volume: number;
  }>> {
    return this.httpClient.get('/quote-short', { symbol });
  }

  /**
   * All Index Quotes API - Get quotes for all indexes
   * @param short - Return short format (optional, default: false)
   */
  async getAllIndexQuotes(short?: boolean): Promise<Array<{
    symbol: string;
    price: number;
    change: number;
    volume: number;
  }>> {
    const params: QueryParams = {};
    if (short !== undefined) params.short = short;
    return this.httpClient.get('/batch-index-quotes', params);
  }

  /**
   * Historical Index Light Chart API - Get light historical data
   * @param symbol - Index symbol (required, e.g., "^GSPC")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalIndexLight(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * Historical Index Full Chart API - Get full historical data
   * @param symbol - Index symbol (required, e.g., "^GSPC")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalIndexFull(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 1-Minute Interval Index Price API - Get 1-minute intraday data
   * @param symbol - Index symbol (required, e.g., "^GSPC")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getIndex1MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 5-Minute Interval Index Price API - Get 5-minute intraday data
   * @param symbol - Index symbol (required, e.g., "^GSPC")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getIndex5MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 1-Hour Interval Index Price API - Get 1-hour intraday data
   * @param symbol - Index symbol (required, e.g., "^GSPC")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getIndex1HourData(symbol: string, from?: string, to?: string): Promise<Array<{
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

  /**
   * S&P 500 Index API - Get S&P 500 constituents
   */
  async getSP500Constituents(): Promise<Array<{
    symbol: string;
    name: string;
    sector: string;
    subSector: string;
    headQuarter: string;
    dateFirstAdded: string;
    cik: string;
    founded: string;
  }>> {
    return this.httpClient.get('/sp500-constituent');
  }

  /**
   * Nasdaq Index API - Get Nasdaq constituents
   */
  async getNasdaqConstituents(): Promise<Array<{
    symbol: string;
    name: string;
    sector: string;
    subSector: string;
    headQuarter: string;
    dateFirstAdded: string | null;
    cik: string;
    founded: string;
  }>> {
    return this.httpClient.get('/nasdaq-constituent');
  }

  /**
   * Dow Jones API - Get Dow Jones constituents
   */
  async getDowJonesConstituents(): Promise<Array<{
    symbol: string;
    name: string;
    sector: string;
    subSector: string;
    headQuarter: string;
    dateFirstAdded: string;
    cik: string;
    founded: string;
  }>> {
    return this.httpClient.get('/dowjones-constituent');
  }

  /**
   * Historical S&P 500 API - Get historical S&P 500 changes
   */
  async getHistoricalSP500(): Promise<Array<{
    dateAdded: string;
    addedSecurity: string;
    removedTicker: string;
    removedSecurity: string;
    date: string;
    symbol: string;
    reason: string;
  }>> {
    return this.httpClient.get('/historical-sp500-constituent');
  }

  /**
   * Historical Nasdaq API - Get historical Nasdaq changes
   */
  async getHistoricalNasdaq(): Promise<Array<{
    dateAdded: string;
    addedSecurity: string;
    removedTicker: string;
    removedSecurity: string;
    date: string;
    symbol: string;
    reason: string;
  }>> {
    return this.httpClient.get('/historical-nasdaq-constituent');
  }

  /**
   * Historical Dow Jones API - Get historical Dow Jones changes
   */
  async getHistoricalDowJones(): Promise<Array<{
    dateAdded: string;
    addedSecurity: string;
    removedTicker: string;
    removedSecurity: string;
    date: string;
    symbol: string;
    reason: string;
  }>> {
    return this.httpClient.get('/historical-dowjones-constituent');
  }
}
