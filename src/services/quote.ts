import type { Quote, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';
import { getFirstOrItem, safeCast } from '../utils/index.js';

export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get quote for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getQuote(symbol: string): Promise<Quote> {
    const result = await this.httpClient.get<Quote[]>(`/quote/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get short quote for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getQuoteShort(symbol: string): Promise<{
    symbol: string;
    price: number;
    volume: number;
  }> {
    const result = await this.httpClient.get(`/quote-short/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get batch quotes for multiple symbols
   * @param symbols - Array of stock symbols (e.g., ["AAPL", "GOOGL"])
   */
  async getBatchQuote(symbols: string[]): Promise<Quote[]> {
    const symbolList = symbols.join(',');
    return this.httpClient.get<Quote[]>(`/quote/${symbolList}`);
  }

  /**
   * Get OTC real-time price
   * @param symbol - OTC symbol
   */
  async getOTCRealTimePrice(symbol: string): Promise<{
    symbol: string;
    price: number;
    change: number;
    changesPercentage: number;
    volume: number;
    timestamp: number;
  }> {
    const result = await this.httpClient.get(`/otc/real-time-price/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get stock price change
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getStockPriceChange(symbol: string): Promise<{
    symbol: string;
    '1D': number;
    '5D': number;
    '1M': number;
    '3M': number;
    '6M': number;
    ytd: number;
    '1Y': number;
    '3Y': number;
    '5Y': number;
    '10Y': number;
    max: number;
  }> {
    const result = await this.httpClient.get(`/stock-price-change/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get extended hours quote
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getExtendedHoursQuote(symbol: string): Promise<{
    symbol: string;
    preMarketPrice: number;
    preMarketChange: number;
    preMarketChangePercentage: number;
    preMarketVolume: number;
    afterHoursPrice: number;
    afterHoursChange: number;
    afterHoursChangePercentage: number;
    afterHoursVolume: number;
    regularMarketPrice: number;
    regularMarketChange: number;
    regularMarketChangePercentage: number;
    regularMarketVolume: number;
  }> {
    const result = await this.httpClient.get(`/extended-hours-quote/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get quote with financial ratios
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getQuoteWithRatios(symbol: string): Promise<Quote & {
    pe: number;
    peg: number;
    pb: number;
    ps: number;
    pcf: number;
    roe: number;
    roa: number;
    roi: number;
    currentRatio: number;
    quickRatio: number;
    debtToEquity: number;
    grossMargin: number;
    operatingMargin: number;
    profitMargin: number;
  }> {
    const result = await this.httpClient.get(`/quote-with-ratios/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get intraday quote
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param interval - Time interval (1min, 5min, 15min, 30min, 1hour)
   */
  async getIntradayQuote(
    symbol: string,
    interval: '1min' | '5min' | '15min' | '30min' | '1hour' = '5min'
  ): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  }>> {
    const params: QueryParams = { interval };
    return this.httpClient.get(`/intraday-quote/${symbol}`, params);
  }

  /**
   * Get quote comparison
   * @param symbols - Array of stock symbols for comparison
   */
  async getQuoteComparison(symbols: string[]): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    change: number;
    changesPercentage: number;
    marketCap: number;
    volume: number;
    pe: number;
    eps: number;
    beta: number;
    dividend: number;
    dividendYield: number;
  }>> {
    const symbolList = symbols.join(',');
    return this.httpClient.get(`/quote-comparison/${symbolList}`);
  }

  /**
   * Get quote alerts
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param priceTarget - Target price for alert
   * @param condition - Alert condition ("above" or "below")
   */
  async setQuoteAlert(
    symbol: string,
    priceTarget: number,
    condition: 'above' | 'below'
  ): Promise<{
    alertId: string;
    symbol: string;
    priceTarget: number;
    condition: string;
    currentPrice: number;
    status: 'active' | 'triggered' | 'expired';
    createdAt: string;
  }> {
    const params: QueryParams = { priceTarget, condition };
    const result = await this.httpClient.post(`/quote-alert/${symbol}`, {}, params);
    return getFirstOrItem(result);
  }

  /**
   * Get quote history for a specific time range
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param from - Start timestamp
   * @param to - End timestamp
   */
  async getQuoteHistory(symbol: string, from: number, to: number): Promise<Array<{
    timestamp: number;
    price: number;
    volume: number;
    change: number;
    changesPercentage: number;
  }>> {
    const params: QueryParams = { from, to };
    return this.httpClient.get(`/quote-history/${symbol}`, params);
  }

  /**
   * Get top quotes by volume
   * @param limit - Maximum number of results
   */
  async getTopQuotesByVolume(limit: number = 100): Promise<Quote[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get<Quote[]>('/quotes/top-volume', params);
  }

  /**
   * Get top quotes by market cap
   * @param limit - Maximum number of results
   */
  async getTopQuotesByMarketCap(limit: number = 100): Promise<Quote[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get<Quote[]>('/quotes/top-market-cap', params);
  }

  /**
   * Get quotes by exchange
   * @param exchange - Exchange name (e.g., "NASDAQ", "NYSE")
   * @param limit - Maximum number of results
   */
  async getQuotesByExchange(exchange: string, limit: number = 100): Promise<Quote[]> {
    const params: QueryParams = { exchange, limit };
    return this.httpClient.get<Quote[]>('/quotes/by-exchange', params);
  }

  /**
   * Get quote statistics
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getQuoteStatistics(symbol: string): Promise<{
    symbol: string;
    avgVolume10Day: number;
    avgVolume30Day: number;
    avgVolume90Day: number;
    volatility30Day: number;
    volatility90Day: number;
    beta: number;
    correlation: number;
    priceRange52Week: {
      high: number;
      low: number;
      changeFromHigh: number;
      changeFromLow: number;
    };
    movingAverages: {
      sma20: number;
      sma50: number;
      sma200: number;
      ema20: number;
      ema50: number;
      ema200: number;
    };
  }> {
    const result = await this.httpClient.get(`/quote-statistics/${symbol}`);
    return getFirstOrItem(result);
  }
}

