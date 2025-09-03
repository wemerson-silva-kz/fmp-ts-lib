import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class EconomicsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Treasury Rates API - Get real-time and historical Treasury rates
   * @param from - Start date (optional, YYYY-MM-DD format, max 90-day range)
   * @param to - End date (optional, YYYY-MM-DD format, max 90-day range)
   */
  async getTreasuryRates(from?: string, to?: string): Promise<Array<{
    date: string;
    month1: number;
    month2: number;
    month3: number;
    month6: number;
    year1: number;
    year2: number;
    year3: number;
    year5: number;
    year7: number;
    year10: number;
    year20: number;
    year30: number;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/treasury-rates', params);
  }

  /**
   * Economics Indicators API - Get economic indicators data
   * @param name - Economic indicator name (required, e.g., "GDP", "realGDP", "inflationRate", "unemploymentRate")
   * @param from - Start date (optional, YYYY-MM-DD format, max 90-day range)
   * @param to - End date (optional, YYYY-MM-DD format, max 90-day range)
   */
  async getEconomicIndicators(name: string, from?: string, to?: string): Promise<Array<{
    name: string;
    date: string;
    value: number;
  }>> {
    const params: QueryParams = { name };
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/economic-indicators', params);
  }

  /**
   * Economic Data Releases Calendar API - Get economic calendar
   * @param from - Start date (optional, YYYY-MM-DD format, max 90-day range)
   * @param to - End date (optional, YYYY-MM-DD format, max 90-day range)
   */
  async getEconomicCalendar(from?: string, to?: string): Promise<Array<{
    date: string;
    country: string;
    event: string;
    currency: string;
    previous: number;
    estimate: number | null;
    actual: number;
    change: number;
    impact: string;
    changePercentage: number;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/economic-calendar', params);
  }

  /**
   * Market Risk Premium API - Get market risk premium data
   */
  async getMarketRiskPremium(): Promise<Array<{
    country: string;
    continent: string;
    countryRiskPremium: number;
    totalEquityRiskPremium: number;
  }>> {
    return this.httpClient.get('/market-risk-premium');
  }
}
