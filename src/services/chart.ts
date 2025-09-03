import type { 
  HistoricalPrice,
  Quote,
  QueryParams,
  TimeFrame 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class ChartService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Stock Chart Light API - Get simplified stock chart data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getStockChartLight(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * Stock Price and Volume Data API - Get full price and volume data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getStockPriceAndVolume(symbol: string, from?: string, to?: string): Promise<Array<{
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
   * Unadjusted Stock Price API - Get stock price without split adjustments
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getUnadjustedStockPrice(symbol: string, from?: string, to?: string): Promise<Array<{
    symbol: string;
    date: string;
    adjOpen: number;
    adjHigh: number;
    adjLow: number;
    adjClose: number;
    volume: number;
  }>> {
    const params: QueryParams = { symbol };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-price-eod/non-split-adjusted', params);
  }

  /**
   * Dividend Adjusted Price Chart API - Get dividend-adjusted price data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getDividendAdjustedPrice(symbol: string, from?: string, to?: string): Promise<Array<{
    symbol: string;
    date: string;
    adjOpen: number;
    adjHigh: number;
    adjLow: number;
    adjClose: number;
    volume: number;
  }>> {
    const params: QueryParams = { symbol };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-price-eod/dividend-adjusted', params);
  }

  /**
   * 1 Min Interval Stock Chart API - Get 1-minute interval data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   * @param nonadjusted - Non-adjusted data (optional, boolean)
   */
  async get1MinChart(symbol: string, from?: string, to?: string, nonadjusted?: boolean): Promise<Array<{
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
    if (nonadjusted !== undefined) params.nonadjusted = nonadjusted;
    return this.httpClient.get('/historical-chart/1min', params);
  }

  /**
   * 5 Min Interval Stock Chart API - Get 5-minute interval data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   * @param nonadjusted - Non-adjusted data (optional, boolean)
   */
  async get5MinChart(symbol: string, from?: string, to?: string, nonadjusted?: boolean): Promise<Array<{
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
    if (nonadjusted !== undefined) params.nonadjusted = nonadjusted;
    return this.httpClient.get('/historical-chart/5min', params);
  }

  /**
   * 15 Min Interval Stock Chart API - Get 15-minute interval data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   * @param nonadjusted - Non-adjusted data (optional, boolean)
   */
  async get15MinChart(symbol: string, from?: string, to?: string, nonadjusted?: boolean): Promise<Array<{
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
    if (nonadjusted !== undefined) params.nonadjusted = nonadjusted;
    return this.httpClient.get('/historical-chart/15min', params);
  }

  /**
   * 30 Min Interval Stock Chart API - Get 30-minute interval data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   * @param nonadjusted - Non-adjusted data (optional, boolean)
   */
  async get30MinChart(symbol: string, from?: string, to?: string, nonadjusted?: boolean): Promise<Array<{
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
    if (nonadjusted !== undefined) params.nonadjusted = nonadjusted;
    return this.httpClient.get('/historical-chart/30min', params);
  }

  /**
   * 1 Hour Interval Stock Chart API - Get 1-hour interval data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   * @param nonadjusted - Non-adjusted data (optional, boolean)
   */
  async get1HourChart(symbol: string, from?: string, to?: string, nonadjusted?: boolean): Promise<Array<{
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
    if (nonadjusted !== undefined) params.nonadjusted = nonadjusted;
    return this.httpClient.get('/historical-chart/1hour', params);
  }

  /**
   * 4 Hour Interval Stock Chart API - Get 4-hour interval data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   * @param nonadjusted - Non-adjusted data (optional, boolean)
   */
  async get4HourChart(symbol: string, from?: string, to?: string, nonadjusted?: boolean): Promise<Array<{
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
    if (nonadjusted !== undefined) params.nonadjusted = nonadjusted;
    return this.httpClient.get('/historical-chart/4hour', params);
  }
}
