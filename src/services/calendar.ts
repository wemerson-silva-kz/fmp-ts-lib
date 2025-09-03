import type { 
  EarningsCalendar,
  QueryParams 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CalendarService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Dividends Company API - Get dividend data for specific symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 100, max: 1000)
   */
  async getDividends(symbol: string, limit?: number): Promise<Array<{
    symbol: string;
    date: string;
    recordDate: string;
    paymentDate: string;
    declarationDate: string;
    adjDividend: number;
    dividend: number;
    yield: number;
    frequency: string;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/dividends', params);
  }

  /**
   * Dividends Calendar API - Get dividend calendar for date range
   * @param from - Start date (required, YYYY-MM-DD format)
   * @param to - End date (required, YYYY-MM-DD format)
   */
  async getDividendCalendar(from: string, to: string): Promise<Array<{
    symbol: string;
    date: string;
    recordDate: string;
    paymentDate: string;
    declarationDate: string;
    adjDividend: number;
    dividend: number;
    yield: number;
    frequency: string;
  }>> {
    return this.httpClient.get('/dividends-calendar', { from, to });
  }

  /**
   * Earnings Report API - Get earnings data for specific symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 100, max: 1000)
   */
  async getEarnings(symbol: string, limit?: number): Promise<Array<{
    symbol: string;
    date: string;
    epsActual: number | null;
    epsEstimated: number | null;
    revenueActual: number | null;
    revenueEstimated: number | null;
    lastUpdated: string;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/earnings', params);
  }

  /**
   * Earnings Calendar API - Get earnings calendar for date range
   * @param from - Start date (required, YYYY-MM-DD format)
   * @param to - End date (required, YYYY-MM-DD format)
   */
  async getEarningsCalendar(from: string, to: string): Promise<Array<{
    symbol: string;
    date: string;
    epsActual: number;
    epsEstimated: number;
    revenueActual: number;
    revenueEstimated: number;
    lastUpdated: string;
  }>> {
    return this.httpClient.get('/earnings-calendar', { from, to });
  }

  /**
   * IPOs Calendar API - Get IPO calendar for date range
   * @param from - Start date (required, YYYY-MM-DD format)
   * @param to - End date (required, YYYY-MM-DD format)
   */
  async getIPOCalendar(from: string, to: string): Promise<Array<{
    symbol: string;
    date: string;
    daa: string;
    company: string;
    exchange: string;
    actions: string;
    shares: number | null;
    priceRange: string | null;
    marketCap: number | null;
  }>> {
    return this.httpClient.get('/ipos-calendar', { from, to });
  }

  /**
   * IPOs Disclosure API - Get IPO disclosure filings for date range
   * @param from - Start date (required, YYYY-MM-DD format)
   * @param to - End date (required, YYYY-MM-DD format)
   */
  async getIPODisclosure(from: string, to: string): Promise<Array<{
    symbol: string;
    filingDate: string;
    acceptedDate: string;
    effectivenessDate: string;
    cik: string;
    form: string;
    url: string;
  }>> {
    return this.httpClient.get('/ipos-disclosure', { from, to });
  }

  /**
   * IPOs Prospectus API - Get IPO prospectus information for date range
   * @param from - Start date (required, YYYY-MM-DD format)
   * @param to - End date (required, YYYY-MM-DD format)
   */
  async getIPOProspectus(from: string, to: string): Promise<Array<{
    symbol: string;
    acceptedDate: string;
    filingDate: string;
    ipoDate: string;
    cik: string;
    pricePublicPerShare: number;
    pricePublicTotal: number;
    discountsAndCommissionsPerShare: number;
    discountsAndCommissionsTotal: number;
    proceedsBeforeExpensesPerShare: number;
    proceedsBeforeExpensesTotal: number;
    form: string;
    url: string;
  }>> {
    return this.httpClient.get('/ipos-prospectus', { from, to });
  }

  /**
   * Stock Split Details API - Get stock split data for specific symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 100, max: 1000)
   */
  async getStockSplits(symbol: string, limit?: number): Promise<Array<{
    symbol: string;
    date: string;
    numerator: number;
    denominator: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/splits', params);
  }

  /**
   * Stock Splits Calendar API - Get stock splits calendar for date range
   * @param from - Start date (required, YYYY-MM-DD format)
   * @param to - End date (required, YYYY-MM-DD format)
   */
  async getStockSplitCalendar(from: string, to: string): Promise<Array<{
    symbol: string;
    date: string;
    numerator: number;
    denominator: number;
  }>> {
    return this.httpClient.get('/splits-calendar', { from, to });
  }
}
