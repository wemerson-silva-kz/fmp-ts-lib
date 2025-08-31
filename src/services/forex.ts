import { getFirstOrItem } from '../utils/index.js';
import type { ForexQuote, HistoricalPrice, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class ForexService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get forex quote for a currency pair
   * @param pair - Currency pair (e.g., "EURUSD", "GBPUSD")
   */
  async getForexQuote(pair: string): Promise<ForexQuote> {
    const result = await this.httpClient.get<ForexQuote[]>(`/fx/${pair}`);
    return getFirstOrItem(result);
  }

  /**
   * Get all forex quotes
   */
  async getAllForexQuotes(): Promise<ForexQuote[]> {
    return this.httpClient.get<ForexQuote[]>('/quotes/forex');
  }

  /**
   * Get historical forex prices
   * @param pair - Currency pair (e.g., "EURUSD", "GBPUSD")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalForexPrices(
    pair: string,
    from?: string,
    to?: string
  ): Promise<{
    symbol: string;
    historical: HistoricalPrice[];
  }> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get(`/historical-price-full/forex/${pair}`, params);
  }

  /**
   * Get major currency pairs
   */
  async getMajorCurrencyPairs(): Promise<ForexQuote[]> {
    const majorPairs = ['EURUSD', 'GBPUSD', 'USDJPY', 'USDCHF', 'AUDUSD', 'USDCAD', 'NZDUSD'];
    const pairList = majorPairs.join(',');
    return this.httpClient.get<ForexQuote[]>(`/fx/${pairList}`);
  }

  /**
   * Get currency exchange rates
   * @param baseCurrency - Base currency (e.g., "USD")
   */
  async getCurrencyExchangeRates(baseCurrency: string): Promise<Array<{
    from: string;
    to: string;
    rate: number;
    timestamp: number;
  }>> {
    const params: QueryParams = { base: baseCurrency };
    return this.httpClient.get('/currency-exchange-rates', params);
  }

  /**
   * Get forex market hours
   */
  async getForexMarketHours(): Promise<Array<{
    market: string;
    timezone: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    nextOpen: string;
    nextClose: string;
  }>> {
    return this.httpClient.get('/forex-market-hours');
  }

  /**
   * Get forex volatility data
   * @param pair - Currency pair (e.g., "EURUSD")
   * @param period - Time period ("1D", "1W", "1M", "3M", "6M", "1Y")
   */
  async getForexVolatility(
    pair: string,
    period: '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' = '1M'
  ): Promise<{
    symbol: string;
    period: string;
    volatility: number;
    averageVolatility: number;
    highVolatility: number;
    lowVolatility: number;
  }> {
    const params: QueryParams = { period };
    const result = await this.httpClient.get(`/forex-volatility/${pair}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get forex correlation matrix
   * @param pairs - Array of currency pairs
   * @param period - Time period for correlation calculation
   */
  async getForexCorrelation(
    pairs: string[],
    period: '1M' | '3M' | '6M' | '1Y' = '3M'
  ): Promise<{
    period: string;
    correlationMatrix: Array<{
      pair1: string;
      pair2: string;
      correlation: number;
    }>;
  }> {
    const pairList = pairs.join(',');
    const params: QueryParams = { pairs: pairList, period };
    const result = await this.httpClient.get('/forex-correlation', params);
    return getFirstOrItem(result);
  }

  /**
   * Get forex economic calendar
   * @param currency - Currency code (e.g., "USD", "EUR")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getForexEconomicCalendar(
    currency?: string,
    from?: string,
    to?: string
  ): Promise<Array<{
    event: string;
    date: string;
    country: string;
    currency: string;
    actual: number;
    previous: number;
    change: number;
    changePercentage: number;
    estimate: number;
    impact: string;
  }>> {
    const params: QueryParams = {};
    if (currency) params.currency = currency;
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/forex-economic-calendar', params);
  }

  /**
   * Get central bank rates
   */
  async getCentralBankRates(): Promise<Array<{
    country: string;
    currency: string;
    centralBank: string;
    currentRate: number;
    previousRate: number;
    change: number;
    lastUpdate: string;
    nextMeeting: string;
  }>> {
    return this.httpClient.get('/central-bank-rates');
  }

  /**
   * Get forex sentiment data
   * @param pair - Currency pair (e.g., "EURUSD")
   */
  async getForexSentiment(pair: string): Promise<{
    symbol: string;
    bullishPercentage: number;
    bearishPercentage: number;
    sentiment: 'Bullish' | 'Bearish' | 'Neutral';
    lastUpdate: string;
  }> {
    const result = await this.httpClient.get(`/forex-sentiment/${pair}`);
    return getFirstOrItem(result);
  }

  /**
   * Get forex carry trade data
   */
  async getForexCarryTrade(): Promise<Array<{
    highYieldCurrency: string;
    lowYieldCurrency: string;
    interestRateDifferential: number;
    carryTradeReturn: number;
    risk: string;
    pair: string;
  }>> {
    return this.httpClient.get('/forex-carry-trade');
  }

  /**
   * Get currency strength index
   */
  async getCurrencyStrengthIndex(): Promise<Array<{
    currency: string;
    strengthIndex: number;
    rank: number;
    change24h: number;
    trend: 'Strengthening' | 'Weakening' | 'Stable';
  }>> {
    return this.httpClient.get('/currency-strength-index');
  }

  /**
   * Get forex heat map
   * @param period - Time period ("1H", "4H", "1D", "1W", "1M")
   */
  async getForexHeatMap(period: '1H' | '4H' | '1D' | '1W' | '1M' = '1D'): Promise<Array<{
    baseCurrency: string;
    quoteCurrency: string;
    pair: string;
    changePercentage: number;
    strength: number;
    color: string;
  }>> {
    const params: QueryParams = { period };
    return this.httpClient.get('/forex-heat-map', params);
  }

  /**
   * Get forex pivot points
   * @param pair - Currency pair (e.g., "EURUSD")
   */
  async getForexPivotPoints(pair: string): Promise<{
    symbol: string;
    date: string;
    pivot: number;
    resistance1: number;
    resistance2: number;
    resistance3: number;
    support1: number;
    support2: number;
    support3: number;
  }> {
    const result = await this.httpClient.get(`/forex-pivot-points/${pair}`);
    return getFirstOrItem(result);
  }
}

