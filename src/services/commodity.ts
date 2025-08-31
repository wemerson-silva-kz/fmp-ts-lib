import { getFirstOrItem } from '../utils/index.js';
import type { HistoricalPrice, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CommodityService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get commodities quotes
   */
  async getCommoditiesQuotes(): Promise<Array<{
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
    volume: number;
    avgVolume: number;
    exchange: string;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    return this.httpClient.get('/quotes/commodity');
  }

  /**
   * Get historical commodity prices
   * @param symbol - Commodity symbol (e.g., "GCUSD", "CLUSD")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalCommodityPrices(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<{
    symbol: string;
    historical: HistoricalPrice[];
  }> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get(`/historical-price-full/commodity/${symbol}`, params);
  }

  /**
   * Get specific commodity quote
   * @param symbol - Commodity symbol (e.g., "GCUSD", "CLUSD")
   */
  async getCommodityQuote(symbol: string): Promise<{
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
    volume: number;
    avgVolume: number;
    exchange: string;
    open: number;
    previousClose: number;
    timestamp: number;
  }> {
    const result = await this.httpClient.get(`/quote/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get commodity price changes
   * @param period - Time period ("1D", "5D", "1M", "3M", "6M", "1Y")
   */
  async getCommodityPriceChanges(period: '1D' | '5D' | '1M' | '3M' | '6M' | '1Y' = '1D'): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    change: number;
    changesPercentage: number;
    period: string;
  }>> {
    const params: QueryParams = { period };
    return this.httpClient.get('/commodity-price-changes', params);
  }

  /**
   * Get precious metals prices
   */
  async getPreciousMetalsPrices(): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    priceAvg50: number;
    priceAvg200: number;
    volume: number;
    avgVolume: number;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    return this.httpClient.get('/quotes/commodity/precious-metals');
  }

  /**
   * Get energy commodities prices
   */
  async getEnergyCommoditiesPrices(): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    priceAvg50: number;
    priceAvg200: number;
    volume: number;
    avgVolume: number;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    return this.httpClient.get('/quotes/commodity/energy');
  }

  /**
   * Get agricultural commodities prices
   */
  async getAgriculturalCommoditiesPrices(): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    priceAvg50: number;
    priceAvg200: number;
    volume: number;
    avgVolume: number;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    return this.httpClient.get('/quotes/commodity/agricultural');
  }

  /**
   * Get commodity futures data
   * @param symbol - Commodity symbol (e.g., "GCUSD")
   */
  async getCommodityFutures(symbol: string): Promise<Array<{
    symbol: string;
    contractMonth: string;
    expirationDate: string;
    price: number;
    change: number;
    changesPercentage: number;
    volume: number;
    openInterest: number;
    high: number;
    low: number;
    settle: number;
  }>> {
    return this.httpClient.get(`/commodity-futures/${symbol}`);
  }

  /**
   * Get commodity market summary
   */
  async getCommodityMarketSummary(): Promise<{
    date: string;
    totalCommodities: number;
    gainers: number;
    losers: number;
    unchanged: number;
    topGainer: {
      symbol: string;
      name: string;
      changesPercentage: number;
    };
    topLoser: {
      symbol: string;
      name: string;
      changesPercentage: number;
    };
    mostActive: {
      symbol: string;
      name: string;
      volume: number;
    };
  }> {
    const result = await this.httpClient.get('/commodity-market-summary');
    return getFirstOrItem(result);
  }

  /**
   * Get commodity correlation matrix
   * @param symbols - Array of commodity symbols
   * @param period - Time period for correlation calculation
   */
  async getCommodityCorrelation(
    symbols: string[],
    period: '1M' | '3M' | '6M' | '1Y' = '3M'
  ): Promise<{
    period: string;
    correlationMatrix: Array<{
      symbol1: string;
      symbol2: string;
      correlation: number;
    }>;
  }> {
    const symbolList = symbols.join(',');
    const params: QueryParams = { symbols: symbolList, period };
    const result = await this.httpClient.get('/commodity-correlation', params);
    return getFirstOrItem(result);
  }

  /**
   * Get commodity seasonality data
   * @param symbol - Commodity symbol (e.g., "GCUSD")
   */
  async getCommoditySeasonality(symbol: string): Promise<Array<{
    month: number;
    monthName: string;
    averageReturn: number;
    positiveYears: number;
    negativeYears: number;
    totalYears: number;
    winRate: number;
  }>> {
    return this.httpClient.get(`/commodity-seasonality/${symbol}`);
  }
}

