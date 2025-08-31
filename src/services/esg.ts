import type { ESGScore, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class ESGService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get ESG score for a company
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getESGScore(symbol: string): Promise<ESGScore[]> {
    return this.httpClient.get<ESGScore[]>(`/esg-environmental-social-governance-data/${symbol}`);
  }

  /**
   * Get ESG rating for a company
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getESGRating(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    companyName: string;
    industryRank: string;
    industryRankPercentile: number;
    ESGRiskRating: string;
    industryRankDate: string;
    ESGRiskLevel: string;
    ESGRiskPercentile: number;
  }>> {
    return this.httpClient.get(`/esg-environmental-social-governance-data-ratings/${symbol}`);
  }

  /**
   * Get ESG sector benchmark
   * @param year - Year for benchmark data
   */
  async getESGSectorBenchmark(year: number): Promise<Array<{
    year: number;
    sector: string;
    environmentalScoreAvg: number;
    socialScoreAvg: number;
    governanceScoreAvg: number;
    ESGScoreAvg: number;
    numberOfCompanies: number;
  }>> {
    return this.httpClient.get(`/esg-environmental-social-governance-sector-benchmark/${year}`);
  }

  /**
   * Get ESG risk ratings for multiple companies
   * @param symbols - Array of stock symbols
   */
  async getBatchESGRatings(symbols: string[]): Promise<Array<{
    symbol: string;
    cik: string;
    companyName: string;
    industryRank: string;
    industryRankPercentile: number;
    ESGRiskRating: string;
    industryRankDate: string;
    ESGRiskLevel: string;
    ESGRiskPercentile: number;
  }>> {
    const symbolList = symbols.join(',');
    return this.httpClient.get(`/esg-environmental-social-governance-data-ratings/${symbolList}`);
  }

  /**
   * Get ESG scores for multiple companies
   * @param symbols - Array of stock symbols
   */
  async getBatchESGScores(symbols: string[]): Promise<ESGScore[]> {
    const symbolList = symbols.join(',');
    return this.httpClient.get<ESGScore[]>(`/esg-environmental-social-governance-data/${symbolList}`);
  }

  /**
   * Get historical ESG scores
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getHistoricalESGScores(symbol: string, limit: number = 40): Promise<ESGScore[]> {
    const params: QueryParams = { limit };
    return this.httpClient.get<ESGScore[]>(`/historical/esg-environmental-social-governance-data/${symbol}`, params);
  }

  /**
   * Get ESG scores by sector
   * @param sector - Sector name (e.g., "Technology")
   */
  async getESGScoresBySector(sector: string): Promise<ESGScore[]> {
    const params: QueryParams = { sector };
    return this.httpClient.get<ESGScore[]>('/esg-environmental-social-governance-data', params);
  }

  /**
   * Get companies with highest ESG scores
   * @param limit - Maximum number of results
   */
  async getTopESGCompanies(limit: number = 100): Promise<Array<{
    symbol: string;
    companyName: string;
    ESGScore: number;
    environmentalScore: number;
    socialScore: number;
    governanceScore: number;
    sector: string;
    industry: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/esg-environmental-social-governance-data/top', params);
  }

  /**
   * Get ESG news and updates
   * @param symbol - Stock symbol (optional)
   * @param limit - Maximum number of results
   */
  async getESGNews(symbol?: string, limit: number = 50): Promise<Array<{
    symbol: string;
    publishedDate: string;
    title: string;
    image: string;
    site: string;
    text: string;
    url: string;
    esgCategory: string;
  }>> {
    const params: QueryParams = { limit };
    if (symbol) params.symbol = symbol;
    return this.httpClient.get('/esg-news', params);
  }
}

