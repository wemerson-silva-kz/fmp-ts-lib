import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class ESGService {
  constructor(private httpClient: HttpClient) {}

  /**
   * ESG Investment Search API - Get ESG disclosures for a company
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getESGDisclosures(symbol: string): Promise<Array<{
    date: string;
    acceptedDate: string;
    symbol: string;
    cik: string;
    companyName: string;
    formType: string;
    environmentalScore: number;
    socialScore: number;
    governanceScore: number;
    ESGScore: number;
    url: string;
  }>> {
    return this.httpClient.get('/esg-disclosures', { symbol });
  }

  /**
   * ESG Ratings API - Get ESG ratings for a company
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getESGRatings(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    companyName: string;
    industry: string;
    fiscalYear: number;
    ESGRiskRating: string;
    industryRank: string;
  }>> {
    return this.httpClient.get('/esg-ratings', { symbol });
  }

  /**
   * ESG Benchmark Comparison API - Get ESG benchmark data by year
   * @param year - Year (optional, e.g., "2023")
   */
  async getESGBenchmark(year?: string): Promise<Array<{
    fiscalYear: number;
    sector: string;
    environmentalScore: number;
    socialScore: number;
    governanceScore: number;
    ESGScore: number;
  }>> {
    const params: QueryParams = {};
    if (year) params.year = year;
    return this.httpClient.get('/esg-benchmark', params);
  }
}
