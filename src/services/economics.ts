import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class EconomicsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get economic indicators
   * @param name - Economic indicator name (optional)
   */
  async getEconomicIndicators(name?: string): Promise<Array<{
    date: string;
    value: number;
    name: string;
  }>> {
    const params: QueryParams = {};
    if (name) params.name = name;
    return this.httpClient.get('/economic', params);
  }

  /**
   * Get market risk premium data
   * @param country - Country code (e.g., "US")
   */
  async getMarketRiskPremium(country?: string): Promise<Array<{
    country: string;
    continent: string;
    totalEquityRiskPremium: number;
    countryRiskPremium: number;
  }>> {
    const params: QueryParams = {};
    if (country) params.country = country;
    return this.httpClient.get('/market_risk_premium', params);
  }

  /**
   * Get treasury rates
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
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
    return this.httpClient.get('/treasury', params);
  }

  /**
   * Get economic calendar events
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
   * Get GDP data by country
   * @param country - Country code (e.g., "US")
   */
  async getGDPData(country: string): Promise<Array<{
    date: string;
    value: number;
    country: string;
  }>> {
    return this.httpClient.get(`/economic/gdp/${country}`);
  }

  /**
   * Get inflation data by country
   * @param country - Country code (e.g., "US")
   */
  async getInflationData(country: string): Promise<Array<{
    date: string;
    value: number;
    country: string;
  }>> {
    return this.httpClient.get(`/economic/inflation/${country}`);
  }

  /**
   * Get unemployment rate by country
   * @param country - Country code (e.g., "US")
   */
  async getUnemploymentRate(country: string): Promise<Array<{
    date: string;
    value: number;
    country: string;
  }>> {
    return this.httpClient.get(`/economic/unemployment/${country}`);
  }

  /**
   * Get interest rates by country
   * @param country - Country code (e.g., "US")
   */
  async getInterestRates(country: string): Promise<Array<{
    date: string;
    value: number;
    country: string;
  }>> {
    return this.httpClient.get(`/economic/interest-rate/${country}`);
  }
}

