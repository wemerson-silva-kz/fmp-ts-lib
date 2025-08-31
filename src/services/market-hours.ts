import { getFirstOrItem } from '../utils/index.js';
import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class MarketHoursService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get market hours for different exchanges
   * @param exchange - Exchange code (optional)
   */
  async getMarketHours(exchange?: string): Promise<Array<{
    stockExchangeName: string;
    stockMarketHours: {
      openingHour: string;
      closingHour: string;
    };
    stockMarketHolidays: Array<{
      year: number;
      holidays: Array<{
        date: string;
        name: string;
      }>;
    }>;
    isTheStockMarketOpen: boolean;
    isTheEuronextMarketOpen: boolean;
    isTheForexMarketOpen: boolean;
    isTheCryptoMarketOpen: boolean;
  }>> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/market-hours', params);
  }

  /**
   * Check if the market is open
   */
  async isMarketOpen(): Promise<{
    isTheStockMarketOpen: boolean;
    isTheEuronextMarketOpen: boolean;
    isTheForexMarketOpen: boolean;
    isTheCryptoMarketOpen: boolean;
  }> {
    const result = await this.httpClient.get('/is-the-market-open');
    return getFirstOrItem(result);
  }

  /**
   * Get market status for specific exchange
   * @param exchange - Exchange code (e.g., "NYSE", "NASDAQ")
   */
  async getMarketStatus(exchange: string): Promise<{
    exchange: string;
    isOpen: boolean;
    nextOpenTime: string;
    nextCloseTime: string;
    timezone: string;
    currentTime: string;
  }> {
    const params: QueryParams = { exchange };
    const result = await this.httpClient.get('/market-status', params);
    return getFirstOrItem(result);
  }

  /**
   * Get trading hours for specific date
   * @param date - Date in YYYY-MM-DD format
   * @param exchange - Exchange code (optional)
   */
  async getTradingHours(date: string, exchange?: string): Promise<Array<{
    date: string;
    exchange: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    preMarketOpen: string;
    preMarketClose: string;
    afterHoursOpen: string;
    afterHoursClose: string;
    isHoliday: boolean;
    holidayName?: string;
  }>> {
    const params: QueryParams = { date };
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/trading-hours', params);
  }

  /**
   * Get market holidays
   * @param year - Year for holidays
   * @param exchange - Exchange code (optional)
   */
  async getMarketHolidays(year: number, exchange?: string): Promise<Array<{
    exchange: string;
    year: number;
    holidays: Array<{
      date: string;
      name: string;
      type: string;
    }>;
  }>> {
    const params: QueryParams = { year };
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/market-holidays', params);
  }

  /**
   * Get extended hours trading status
   */
  async getExtendedHoursStatus(): Promise<{
    preMarketOpen: boolean;
    regularMarketOpen: boolean;
    afterHoursOpen: boolean;
    currentSession: 'Pre-Market' | 'Regular' | 'After-Hours' | 'Closed';
    nextSessionStart: string;
    timezone: string;
  }> {
    const result = await this.httpClient.get('/extended-hours-status');
    return getFirstOrItem(result);
  }

  /**
   * Get global market hours
   */
  async getGlobalMarketHours(): Promise<Array<{
    exchange: string;
    country: string;
    timezone: string;
    localTime: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    nextOpen: string;
    nextClose: string;
  }>> {
    return this.httpClient.get('/global-market-hours');
  }

  /**
   * Get market calendar for a specific month
   * @param year - Year
   * @param month - Month (1-12)
   * @param exchange - Exchange code (optional)
   */
  async getMarketCalendar(year: number, month: number, exchange?: string): Promise<Array<{
    date: string;
    isOpen: boolean;
    isHoliday: boolean;
    holidayName?: string;
    openTime?: string;
    closeTime?: string;
    exchange: string;
  }>> {
    const params: QueryParams = { year, month };
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/market-calendar', params);
  }

  /**
   * Get next market open time
   * @param exchange - Exchange code (optional)
   */
  async getNextMarketOpen(exchange?: string): Promise<{
    exchange: string;
    nextOpenDate: string;
    nextOpenTime: string;
    hoursUntilOpen: number;
    isCurrentlyOpen: boolean;
    timezone: string;
  }> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    const result = await this.httpClient.get('/next-market-open', params);
    return getFirstOrItem(result);
  }

  /**
   * Get market session times
   * @param exchange - Exchange code (optional)
   */
  async getMarketSessionTimes(exchange?: string): Promise<{
    exchange: string;
    timezone: string;
    preMarket: {
      start: string;
      end: string;
    };
    regularMarket: {
      start: string;
      end: string;
    };
    afterHours: {
      start: string;
      end: string;
    };
  }> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    const result = await this.httpClient.get('/market-session-times', params);
    return getFirstOrItem(result);
  }
}

