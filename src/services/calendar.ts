import type { 
  EarningsCalendar,
  QueryParams 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CalendarService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get earnings calendar
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getEarningsCalendar(from?: string, to?: string): Promise<EarningsCalendar[]> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get<EarningsCalendar[]>('/earning_calendar', params);
  }

  /**
   * Get IPO calendar
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getIPOCalendar(from?: string, to?: string): Promise<Array<{
    date: string;
    company: string;
    symbol: string;
    exchange: string;
    actions: string;
    shares: number;
    priceRange: string;
    marketCap: number;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/ipo_calendar', params);
  }

  /**
   * Get stock split calendar
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getStockSplitCalendar(from?: string, to?: string): Promise<Array<{
    date: string;
    label: string;
    symbol: string;
    numerator: number;
    denominator: number;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/stock_split_calendar', params);
  }

  /**
   * Get dividend calendar
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getDividendCalendar(from?: string, to?: string): Promise<Array<{
    date: string;
    label: string;
    adjDividend: number;
    symbol: string;
    dividend: number;
    recordDate: string;
    paymentDate: string;
    declarationDate: string;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/stock_dividend_calendar', params);
  }

  /**
   * Get economic calendar
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getEconomicCalendar(from?: string, to?: string): Promise<Array<{
    event: string;
    date: string;
    country: string;
    actual: number;
    previous: number;
    change: number;
    changePercentage: number;
    estimate: number;
    impact: string;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/economic_calendar', params);
  }

  /**
   * Get earnings calendar for a specific symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getEarningsCalendarBySymbol(symbol: string, limit: number = 80): Promise<EarningsCalendar[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get<EarningsCalendar[]>(`/historical/earning_calendar/${symbol}`, params);
  }

  /**
   * Get confirmed earnings for today
   */
  async getTodayEarnings(): Promise<EarningsCalendar[]> {
    return this.httpClient.get<EarningsCalendar[]>('/earning_calendar');
  }

  /**
   * Get confirmed IPOs for today
   */
  async getTodayIPOs(): Promise<Array<{
    date: string;
    company: string;
    symbol: string;
    exchange: string;
    actions: string;
    shares: number;
    priceRange: string;
    marketCap: number;
  }>> {
    return this.httpClient.get('/ipo_calendar');
  }

  /**
   * Get economic events for today
   */
  async getTodayEconomicEvents(): Promise<Array<{
    event: string;
    date: string;
    country: string;
    actual: number;
    previous: number;
    change: number;
    changePercentage: number;
    estimate: number;
    impact: string;
  }>> {
    return this.httpClient.get('/economic_calendar');
  }
}

