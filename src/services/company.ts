import type { 
  CompanyProfile, 
  KeyExecutives,
  CompanyRating,
  CompanyCoreInformation,
  FinancialRatios,
  QueryParams 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get company profile
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCompanyProfile(symbol: string): Promise<CompanyProfile> {
    const result = await this.httpClient.get<CompanyProfile[]>(`/profile/${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error(`No profile found for symbol ${symbol}`);
  }

  /**
   * Get key executives for a company
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getKeyExecutives(symbol: string): Promise<Array<{
    title: string;
    name: string;
    pay: number;
    currencyPay: string;
    gender: string;
    yearBorn: number;
    titleSince: string;
  }>> {
    return this.httpClient.get(`/key-executives/${symbol}`);
  }

  /**
   * Get market capitalization
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getMarketCapitalization(symbol: string): Promise<Array<{
    date: string;
    symbol: string;
    marketCap: number;
  }>> {
    return this.httpClient.get(`/market-capitalization/${symbol}`);
  }

  /**
   * Get company rating
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCompanyRating(symbol: string): Promise<CompanyRating> {
    const result = await this.httpClient.get<CompanyRating[]>(`/rating/${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error(`No rating found for symbol ${symbol}`);
  }

  /**
   * Get historical rating
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getHistoricalRating(symbol: string, limit: number = 140): Promise<Array<{
    symbol: string;
    date: string;
    rating: string;
    ratingScore: number;
    ratingRecommendation: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get(`/historical-rating/${symbol}`, params);
  }

  /**
   * Get company core information
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCompanyCoreInformation(symbol: string): Promise<CompanyCoreInformation> {
    const result = await this.httpClient.get<CompanyCoreInformation[]>(`/company-core-information/${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error(`No core information found for symbol ${symbol}`);
  }

  /**
   * Get company outlook with comprehensive information
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCompanyOutlook(symbol: string): Promise<{
    profile: CompanyProfile;
    ratios: FinancialRatios[];
    insiderTrading: any[];
    keyExecutives: KeyExecutives[];
    splitsHistory: any[];
    stockDividend: any[];
    stockNews: any[];
    rating: CompanyRating[];
    financialsQuarter: any;
    financialsAnnual: any;
  }> {
    return this.httpClient.get(`/company-outlook/${symbol}`);
  }

  /**
   * Get company profile by CIK
   * @param cik - Central Index Key (e.g., "320193")
   */
  async getCompanyProfileByCIK(cik: string): Promise<CompanyProfile[]> {
    return this.httpClient.get<CompanyProfile[]>(`/profile-cik/${cik}`);
  }

  /**
   * Get delisted companies
   * @param page - Page number for pagination
   */
  async getDelistedCompanies(page: number = 0): Promise<Array<{
    symbol: string;
    companyName: string;
    exchange: string;
    ipoDate: string;
    delistedDate: string;
  }>> {
    const params: QueryParams = { page };
    return this.httpClient.get('/delisted-companies', params);
  }

  /**
   * Get historical employee count
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getHistoricalEmployeeCount(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    acceptedDate: string;
    periodOfReport: string;
    companyName: string;
    formType: string;
    filingDate: string;
    employeeCount: number;
    source: string;
  }>> {
    return this.httpClient.get(`/historical/employee_count/${symbol}`);
  }

  /**
   * Get historical market capitalization
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getHistoricalMarketCapitalization(symbol: string, limit: number = 100): Promise<Array<{
    symbol: string;
    date: string;
    marketCap: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get(`/historical-market-capitalization/${symbol}`, params);
  }

  /**
   * Get company shares float
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getSharesFloat(symbol: string): Promise<{
    symbol: string;
    date: string;
    freeFloat: number;
    floatShares: number;
    outstandingShares: number;
    source: string;
  }> {
    const result = await this.httpClient.get<Array<{
      symbol: string;
      date: string;
      freeFloat: number;
      floatShares: number;
      outstandingShares: number;
      source: string;
    }>>(`/shares_float/${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error(`No shares float data found for symbol ${symbol}`);
  }

  /**
   * Get latest mergers and acquisitions
   * @param page - Page number for pagination
   */
  async getLatestMergersAcquisitions(page: number = 0): Promise<Array<{
    companyName: string;
    symbol: string;
    targetedCompanyName: string;
    targetedSymbol: string;
    announcedDate: string;
    pricePerShare: number;
    transactionValue: number;
    acceptedDate: string;
  }>> {
    const params: QueryParams = { page };
    return this.httpClient.get('/mergers-acquisitions-latest', params);
  }

  /**
   * Get executive compensation
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getExecutiveCompensation(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    companyName: string;
    industryTitle: string;
    nameAndPosition: string;
    year: number;
    salary: number;
    bonus: number;
    stockAward: number;
    incentivePlanCompensation: number;
    allOtherCompensation: number;
    total: number;
  }>> {
    return this.httpClient.get(`/governance/executive_compensation/${symbol}`);
  }

  /**
   * Get company peers by industry
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCompanyPeers(symbol: string): Promise<string[]> {
    return this.httpClient.get<string[]>(`/stock_peers/${symbol}`);
  }

  /**
   * Get analyst coverage for a company
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getAnalystCoverage(symbol: string): Promise<Array<{
    symbol: string;
    analystRatingsAndPT: Array<{
      analystName: string;
      analystCompany: string;
      priceTarget: number;
      newGrade: string;
      oldGrade: string;
      gradedDate: string;
    }>;
  }>> {
    return this.httpClient.get(`/analyst-coverage/${symbol}`);
  }

  /**
   * Get company subsidiaries
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCompanySubsidiaries(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    subsidiary: string;
    businessAddress: string;
    businessPhone: string;
    website: string;
    industry: string;
    category: string;
    country: string;
    state: string;
  }>> {
    return this.httpClient.get(`/subsidiaries/${symbol}`);
  }

  /**
   * Get stock peers (similar companies)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getStockPeers(symbol: string): Promise<string[]> {
    const result = await this.httpClient.get(`/stock_peers/${symbol}`);
    return Array.isArray(result) ? result[0]?.peersList || [] : [];
  }

  /**
   * Get company employees count
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getEmployeesCount(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    acceptanceTime: string;
    periodOfReport: string;
    companyName: string;
    formType: string;
    filingDate: string;
    employeeCount: number;
    source: string;
  }>> {
    return this.httpClient.get(`/employee_count/${symbol}`);
  }

  /**
   * Get company notes (10-K and 10-Q filings notes)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCompanyNotes(symbol: string): Promise<Array<{
    cik: string;
    symbol: string;
    title: string;
    content: string;
  }>> {
    return this.httpClient.get(`/company-notes/${symbol}`);
  }

  /**
   * Get historical employees count
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getHistoricalEmployeesCount(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    acceptanceTime: string;
    periodOfReport: string;
    companyName: string;
    formType: string;
    filingDate: string;
    employeeCount: number;
    source: string;
  }>> {
    return this.httpClient.get(`/historical/employee_count/${symbol}`);
  }
}

