import type { 
  HistoricalPrice,
  Quote,
  QueryParams,
  TimeFrame 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';
import { getFirstOrItem, safeCast } from '../utils/index.js';

export class ChartService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Helper function to safely get first item from array or return single item
   */
  private getFirstOrItem<T>(result: T[] | T): T {
    if (Array.isArray(result)) {
      if (result.length === 0) {
        throw new Error('No data returned from API');
      }
      return result[0]!; // We just checked length > 0
    }
    return result;
  }

  /**
   * Get historical price data (full)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   * @param serietype - Series type ("line" or "candle")
   */
  async getHistoricalPriceFull(
    symbol: string,
    from?: string,
    to?: string,
    serietype: 'line' | 'candle' = 'line'
  ): Promise<{
    symbol: string;
    historical: HistoricalPrice[];
  }> {
    const params: QueryParams = { serietype };
    if (from) params.from = from;
    if (to) params.to = to;
    
    return this.httpClient.get(`/historical-price-full/${symbol}`, params);
  }

  /**
   * Get historical daily prices
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalDailyPrices(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<HistoricalPrice[]> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    
    return this.httpClient.get<HistoricalPrice[]>(`/historical-chart/1day/${symbol}`, params);
  }

  /**
   * Get historical intraday prices
   * @param timeframe - Time frame (1min, 5min, 15min, 30min, 1hour, 4hour)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalIntradayPrices(
    timeframe: TimeFrame,
    symbol: string,
    from?: string,
    to?: string
  ): Promise<HistoricalPrice[]> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    
    return this.httpClient.get<HistoricalPrice[]>(`/historical-chart/${timeframe}/${symbol}`, params);
  }

    /**
   * Get stock quote
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
    const result = await this.httpClient.get<Array<{
      symbol: string;
      price: number;
      volume: number;
    }>>(`/quote-short/${symbol}`);
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
   * Get real-time price for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getRealTimePrice(symbol: string): Promise<{
    symbol: string;
    price: number;
  }> {
    const result = await this.httpClient.get<Array<{
      symbol: string;
      price: number;
    }>>(`/stock/real-time-price/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get after-hours price for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getAfterHoursPrice(symbol: string): Promise<{
    symbol: string;
    price: number;
    change: number;
    changesPercentage: number;
  }> {
    const result = await this.httpClient.get<Array<{
      symbol: string;
      price: number;
      change: number;
      changesPercentage: number;
    }>>(`/after-hours-price/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get pre-market price for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getPreMarketPrice(symbol: string): Promise<{
    symbol: string;
    price: number;
    change: number;
    changesPercentage: number;
  }> {
    const result = await this.httpClient.get<Array<{
      symbol: string;
      price: number;
      change: number;
      changesPercentage: number;
    }>>(`/pre-market-price/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get historical price with dividends
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalPriceWithDividends(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<{
    symbol: string;
    historical: (HistoricalPrice & { dividend?: number })[];
  }> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    
    return this.httpClient.get(`/historical-price-full/${symbol}`, params);
  }

  /**
   * Get historical price with splits
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalPriceWithSplits(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<{
    symbol: string;
    historical: (HistoricalPrice & { split?: number })[];
  }> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    
    return this.httpClient.get(`/historical-price-full/${symbol}`, params);
  }
}

