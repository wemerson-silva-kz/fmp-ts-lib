import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class MarketHoursService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Market Hours API - Check if market is open
   */
  async isMarketOpen(): Promise<Array<{
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
    return this.httpClient.get('/is-the-market-open');
  }

  /**
   * Market Hours by Exchange API - Get market hours for specific exchange
   * @param exchange - Exchange name (required, e.g., "NYSE", "NASDAQ")
   */
  async getMarketHoursByExchange(exchange: string): Promise<Array<{
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
  }>> {
    return this.httpClient.get(`/is-the-market-open/${exchange}`);
  }
}
