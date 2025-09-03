import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class FundraisersService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Crowdfunding Offerings RSS Feed API - Get crowdfunding RSS feed
   */
  async getCrowdfundingOfferingsRSSFeed(): Promise<Array<{
    title: string;
    date: string;
    link: string;
    cik: string;
    companyName: string;
  }>> {
    return this.httpClient.get('/crowdfunding-offerings-rss-feed');
  }

  /**
   * Crowdfunding Offerings Search API - Search crowdfunding offerings
   * @param name - Company name (optional)
   * @param cik - CIK number (optional)
   */
  async searchCrowdfundingOfferings(name?: string, cik?: string): Promise<Array<{
    cik: string;
    companyName: string;
    formType: string;
    filingDate: string;
    acceptedDate: string;
    link: string;
  }>> {
    const params: QueryParams = {};
    if (name) params.name = name;
    if (cik) params.cik = cik;
    return this.httpClient.get('/crowdfunding-offerings-search', params);
  }

  /**
   * Equity Offerings RSS Feed API - Get equity offerings RSS feed
   */
  async getEquityOfferingsRSSFeed(): Promise<Array<{
    title: string;
    date: string;
    link: string;
    cik: string;
    companyName: string;
  }>> {
    return this.httpClient.get('/fundraising-rss-feed');
  }

  /**
   * Equity Offerings Search API - Search equity offerings
   * @param name - Company name (optional)
   * @param cik - CIK number (optional)
   */
  async searchEquityOfferings(name?: string, cik?: string): Promise<Array<{
    cik: string;
    companyName: string;
    formType: string;
    filingDate: string;
    acceptedDate: string;
    link: string;
  }>> {
    const params: QueryParams = {};
    if (name) params.name = name;
    if (cik) params.cik = cik;
    return this.httpClient.get('/fundraising-search', params);
  }

  /**
   * Fundraising by CIK API - Get fundraising by CIK
   * @param cik - CIK number (required)
   */
  async getFundraisingByCIK(cik: string): Promise<Array<{
    cik: string;
    companyName: string;
    formType: string;
    filingDate: string;
    acceptedDate: string;
    link: string;
  }>> {
    return this.httpClient.get(`/fundraising/${cik}`);
  }

  /**
   * Crowdfunding by CIK API - Get crowdfunding by CIK
   * @param cik - CIK number (required)
   */
  async getCrowdfundingByCIK(cik: string): Promise<Array<{
    cik: string;
    companyName: string;
    formType: string;
    filingDate: string;
    acceptedDate: string;
    link: string;
  }>> {
    return this.httpClient.get(`/crowdfunding-offerings/${cik}`);
  }
}
