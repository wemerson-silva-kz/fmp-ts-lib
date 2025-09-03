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
   * Company Profile Data API - Get detailed company profile
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getCompanyProfile(symbol: string): Promise<Array<{
    symbol: string;
    price: number;
    marketCap: number;
    beta: number;
    lastDividend: number;
    range: string;
    change: number;
    changePercentage: number;
    volume: number;
    averageVolume: number;
    companyName: string;
    currency: string;
    cik: string;
    isin: string;
    cusip: string;
    exchangeFullName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    country: string;
    fullTimeEmployees: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    image: string;
    ipoDate: string;
    defaultImage: boolean;
    isEtf: boolean;
    isActivelyTrading: boolean;
    isAdr: boolean;
    isFund: boolean;
  }>> {
    return this.httpClient.get('/profile', { symbol });
  }

  /**
   * Company Profile by CIK API - Get company profile by CIK
   * @param cik - Central Index Key (required, e.g., "320193")
   */
  async getCompanyProfileByCIK(cik: string): Promise<Array<{
    symbol: string;
    price: number;
    marketCap: number;
    beta: number;
    lastDividend: number;
    range: string;
    change: number;
    changePercentage: number;
    volume: number;
    averageVolume: number;
    companyName: string;
    currency: string;
    cik: string;
    isin: string;
    cusip: string;
    exchangeFullName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    country: string;
    fullTimeEmployees: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    image: string;
    ipoDate: string;
    defaultImage: boolean;
    isEtf: boolean;
    isActivelyTrading: boolean;
    isAdr: boolean;
    isFund: boolean;
  }>> {
    return this.httpClient.get('/profile-cik', { cik });
  }

  /**
   * Company Notes API - Get company-issued notes information
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getCompanyNotes(symbol: string): Promise<Array<{
    cik: string;
    symbol: string;
    title: string;
    exchange: string;
  }>> {
    return this.httpClient.get('/company-notes', { symbol });
  }

  /**
   * Stock Peer Comparison API - Get peer companies
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getStockPeers(symbol: string): Promise<Array<{
    symbol: string;
    companyName: string;
    price: number;
    mktCap: number;
  }>> {
    return this.httpClient.get('/stock-peers', { symbol });
  }

  /**
   * Delisted Companies API - Get list of delisted companies
   * @param page - Page number (optional, default: 0)
   * @param limit - Maximum number of results (optional, default: 100, max: 100)
   */
  async getDelistedCompanies(page?: number, limit?: number): Promise<Array<{
    symbol: string;
    companyName: string;
    exchange: string;
    ipoDate: string;
    delistedDate: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/delisted-companies', params);
  }

  /**
   * Company Employee Count API - Get current employee count
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 100, max: 10000)
   */
  async getEmployeeCount(symbol: string, limit?: number): Promise<Array<{
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
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/employee-count', params);
  }

  /**
   * Company Historical Employee Count API - Get historical employee count
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 100, max: 10000)
   */
  async getHistoricalEmployeeCount(symbol: string, limit?: number): Promise<Array<{
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
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/historical-employee-count', params);
  }

  /**
   * Company Market Cap API - Get current market capitalization
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getMarketCapitalization(symbol: string): Promise<Array<{
    symbol: string;
    date: string;
    marketCap: number;
  }>> {
    return this.httpClient.get('/market-capitalization', { symbol });
  }

  /**
   * Batch Market Cap API - Get market cap for multiple symbols
   * @param symbols - Comma-separated symbols (required, e.g., "AAPL,MSFT,GOOG")
   */
  async getBatchMarketCapitalization(symbols: string): Promise<Array<{
    symbol: string;
    date: string;
    marketCap: number;
  }>> {
    return this.httpClient.get('/market-capitalization-batch', { symbols });
  }

  /**
   * Historical Market Cap API - Get historical market capitalization
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 100, max: 5000)
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getHistoricalMarketCapitalization(symbol: string, limit?: number, from?: string, to?: string): Promise<Array<{
    symbol: string;
    date: string;
    marketCap: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/historical-market-capitalization', params);
  }

  /**
   * Company Share Float & Liquidity API - Get shares float data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getSharesFloat(symbol: string): Promise<Array<{
    symbol: string;
    date: string;
    freeFloat: number;
    floatShares: number;
    outstandingShares: number;
  }>> {
    return this.httpClient.get('/shares-float', { symbol });
  }

  /**
   * All Shares Float API - Get shares float for all companies
   * @param page - Page number (optional, default: 0)
   * @param limit - Maximum number of results (optional, default: 1000, max: 5000)
   */
  async getAllSharesFloat(page?: number, limit?: number): Promise<Array<{
    symbol: string;
    date: string;
    freeFloat: number;
    floatShares: number;
    outstandingShares: number;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/shares-float-all', params);
  }

  /**
   * Latest Mergers & Acquisitions API - Get latest M&A activity
   * @param page - Page number (optional, default: 0)
   * @param limit - Maximum number of results (optional, default: 100, max: 1000)
   */
  async getLatestMergersAcquisitions(page?: number, limit?: number): Promise<Array<{
    symbol: string;
    companyName: string;
    cik: string;
    targetedCompanyName: string;
    targetedCik: string;
    targetedSymbol: string;
    transactionDate: string;
    acceptedDate: string;
    link: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/mergers-acquisitions-latest', params);
  }

  /**
   * Search Mergers & Acquisitions API - Search M&A by company name
   * @param name - Company name (required, e.g., "Apple")
   */
  async searchMergersAcquisitions(name: string): Promise<Array<{
    symbol: string;
    companyName: string;
    cik: string;
    targetedCompanyName: string;
    targetedCik: string;
    targetedSymbol: string;
    transactionDate: string;
    acceptedDate: string;
    link: string;
  }>> {
    return this.httpClient.get('/mergers-acquisitions-search', { name });
  }

  /**
   * Company Executives API - Get key executives information
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param active - Filter active executives (optional, "true" or "false")
   */
  async getKeyExecutives(symbol: string, active?: string): Promise<Array<{
    title: string;
    name: string;
    pay: number | null;
    currencyPay: string;
    gender: string;
    yearBorn: number | null;
    active: string | null;
  }>> {
    const params: QueryParams = { symbol };
    if (active !== undefined) params.active = active;
    return this.httpClient.get('/key-executives', params);
  }

  /**
   * Executive Compensation API - Get executive compensation data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getExecutiveCompensation(symbol: string): Promise<Array<{
    cik: string;
    symbol: string;
    companyName: string;
    filingDate: string;
    acceptedDate: string;
    nameAndPosition: string;
    year: number;
    salary: number;
    bonus: number;
    stockAward: number;
    optionAward: number;
    incentivePlanCompensation: number;
    allOtherCompensation: number;
    total: number;
    link: string;
  }>> {
    return this.httpClient.get('/governance-executive-compensation', { symbol });
  }

  /**
   * Executive Compensation Benchmark API - Get industry compensation benchmarks
   * @param year - Year (optional, e.g., "2024")
   */
  async getExecutiveCompensationBenchmark(year?: string): Promise<Array<{
    industryTitle: string;
    year: number;
    averageCompensation: number;
  }>> {
    const params: QueryParams = {};
    if (year !== undefined) params.year = year;
    return this.httpClient.get('/executive-compensation-benchmark', params);
  }
}
