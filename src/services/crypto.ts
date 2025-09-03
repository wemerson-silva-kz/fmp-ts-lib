import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CryptoService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Cryptocurrency List API - Get list of all cryptocurrencies
   */
  async getCryptocurrencyList(): Promise<Array<{
    symbol: string;
    name: string;
    currency: string;
    exchangeFullName: string;
    exchange: string;
  }>> {
    return this.httpClient.get('/cryptocurrency-list');
  }

  /**
   * Full Cryptocurrency Quote API - Get cryptocurrency quote
   * @param symbol - Crypto symbol (required, e.g., "BTCUSD")
   */
  async getCryptocurrencyQuote(symbol: string): Promise<Array<{
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
   * Cryptocurrency Quote Short API - Get short crypto quote
   * @param symbol - Crypto symbol (required, e.g., "BTCUSD")
   */
  async getCryptocurrencyQuoteShort(symbol: string): Promise<Array<{
    symbol: string;
    price: number;
    volume: number;
  }>> {
    return this.httpClient.get('/quote-short', { symbol });
  }

  /**
   * All Cryptocurrencies Quotes API - Get all crypto quotes
   */
  async getAllCryptocurrencyQuotes(): Promise<Array<{
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
    return this.httpClient.get('/batch-crypto-quotes');
  }

  /**
   * Historical Cryptocurrency Light Chart API - Get light historical data
   * @param symbol - Crypto symbol (required, e.g., "BTCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalCryptoLight(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * Historical Cryptocurrency Full Chart API - Get full historical data
   * @param symbol - Crypto symbol (required, e.g., "BTCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalCryptoFull(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 1-Minute Interval Cryptocurrency Data API - Get 1-minute data
   * @param symbol - Crypto symbol (required, e.g., "BTCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getCrypto1MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 5-Minute Interval Cryptocurrency Data API - Get 5-minute data
   * @param symbol - Crypto symbol (required, e.g., "BTCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getCrypto5MinuteData(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * 1-Hour Interval Cryptocurrency Data API - Get 1-hour data
   * @param symbol - Crypto symbol (required, e.g., "BTCUSD")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getCrypto1HourData(symbol: string, from?: string, to?: string): Promise<Array<{
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
