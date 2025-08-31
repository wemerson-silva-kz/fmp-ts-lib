import { getFirstOrItem } from '../utils/index.js';
import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class FundraisersService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get crowdfunding RSS feed
   * @param limit - Maximum number of results
   */
  async getCrowdfundingRSSFeed(limit: number = 100): Promise<Array<{
    title: string;
    date: string;
    content: string;
    url: string;
    symbol?: string;
    company?: string;
    amount?: number;
    platform?: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/crowdfunding-rss-feed', params);
  }

  /**
   * Get equity offering RSS feed (8-K filings)
   * @param limit - Maximum number of results
   */
  async getEquityOfferingRSSFeed(limit: number = 100): Promise<Array<{
    title: string;
    date: string;
    content: string;
    url: string;
    symbol: string;
    cik: string;
    formType: string;
    filingDate: string;
    acceptedDate: string;
    offeringType?: string;
    amount?: number;
    shares?: number;
    pricePerShare?: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/rss_feed_8k', params);
  }

  /**
   * Get recent fundraising activities
   * @param limit - Maximum number of results
   */
  async getRecentFundraisingActivities(limit: number = 50): Promise<Array<{
    company: string;
    symbol?: string;
    date: string;
    amount: number;
    currency: string;
    fundingRound: string;
    investors: string[];
    sector: string;
    description: string;
    source: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/recent-fundraising', params);
  }

  /**
   * Get IPO filings
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getIPOFilings(from?: string, to?: string): Promise<Array<{
    symbol: string;
    company: string;
    cik: string;
    date: string;
    formType: string;
    filingDate: string;
    acceptedDate: string;
    url: string;
    expectedPriceRange?: string;
    expectedShares?: number;
    expectedAmount?: number;
    underwriters?: string[];
    exchange?: string;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/ipo-filings', params);
  }

  /**
   * Get SPAC filings and activities
   * @param limit - Maximum number of results
   */
  async getSPACActivities(limit: number = 100): Promise<Array<{
    symbol: string;
    company: string;
    date: string;
    activityType: string;
    amount?: number;
    targetCompany?: string;
    status: string;
    description: string;
    filingUrl?: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/spac-activities', params);
  }

  /**
   * Get venture capital funding rounds
   * @param sector - Industry sector (optional)
   * @param limit - Maximum number of results
   */
  async getVCFundingRounds(sector?: string, limit: number = 100): Promise<Array<{
    company: string;
    date: string;
    amount: number;
    currency: string;
    fundingStage: string;
    leadInvestor: string;
    investors: string[];
    sector: string;
    location: string;
    description: string;
    valuation?: number;
  }>> {
    const params: QueryParams = { limit };
    if (sector) params.sector = sector;
    return this.httpClient.get('/vc-funding-rounds', params);
  }

  /**
   * Get private equity deals
   * @param limit - Maximum number of results
   */
  async getPrivateEquityDeals(limit: number = 50): Promise<Array<{
    targetCompany: string;
    acquirer: string;
    date: string;
    amount: number;
    currency: string;
    dealType: string;
    sector: string;
    description: string;
    status: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/private-equity-deals', params);
  }

  /**
   * Get debt financing activities
   * @param limit - Maximum number of results
   */
  async getDebtFinancingActivities(limit: number = 50): Promise<Array<{
    company: string;
    symbol?: string;
    date: string;
    amount: number;
    currency: string;
    debtType: string;
    maturity?: string;
    interestRate?: number;
    rating?: string;
    underwriters?: string[];
    purpose: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/debt-financing', params);
  }

  /**
   * Get fundraising by sector
   * @param sector - Industry sector
   * @param period - Time period ("1M", "3M", "6M", "1Y")
   */
  async getFundraisingBySector(
    sector: string,
    period: '1M' | '3M' | '6M' | '1Y' = '3M'
  ): Promise<{
    sector: string;
    period: string;
    totalAmount: number;
    totalDeals: number;
    averageDealSize: number;
    topDeals: Array<{
      company: string;
      amount: number;
      date: string;
      fundingType: string;
    }>;
  }> {
    const params: QueryParams = { sector, period };
    const result = await this.httpClient.get('/fundraising-by-sector', params);
    return getFirstOrItem(result);
  }

  /**
   * Get fundraising trends
   * @param period - Time period for trend analysis
   */
  async getFundraisingTrends(period: '1M' | '3M' | '6M' | '1Y' = '1Y'): Promise<{
    period: string;
    totalFunding: number;
    totalDeals: number;
    averageDealSize: number;
    monthlyBreakdown: Array<{
      month: string;
      totalAmount: number;
      dealCount: number;
      averageSize: number;
    }>;
    sectorBreakdown: Array<{
      sector: string;
      totalAmount: number;
      dealCount: number;
      percentage: number;
    }>;
    fundingTypeBreakdown: Array<{
      type: string;
      totalAmount: number;
      dealCount: number;
      percentage: number;
    }>;
  }> {
    const params: QueryParams = { period };
    const result = await this.httpClient.get('/fundraising-trends', params);
    return getFirstOrItem(result);
  }

  /**
   * Get top investors by activity
   * @param period - Time period ("1M", "3M", "6M", "1Y")
   * @param limit - Maximum number of results
   */
  async getTopInvestors(
    period: '1M' | '3M' | '6M' | '1Y' = '1Y',
    limit: number = 50
  ): Promise<Array<{
    investor: string;
    totalInvestments: number;
    totalAmount: number;
    dealCount: number;
    averageInvestment: number;
    sectors: string[];
    recentDeals: Array<{
      company: string;
      amount: number;
      date: string;
    }>;
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get('/top-investors', params);
  }
}

