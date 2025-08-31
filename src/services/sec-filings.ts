import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class SECFilingsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get SEC filings for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param type - Filing type (e.g., "10-K", "10-Q", "8-K")
   * @param page - Page number for pagination
   */
  async getSECFilings(symbol: string, type?: string, page: number = 0): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = { page };
    if (type) params.type = type;
    return this.httpClient.get(`/sec_filings/${symbol}`, params);
  }

  /**
   * Get latest 8-K SEC filings
   * @param page - Page number for pagination
   */
  async getLatest8KFilings(page: number = 0): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = { page };
    return this.httpClient.get('/sec-filings-8k', params);
  }

  /**
   * Get latest SEC filings (all types)
   * @param page - Page number for pagination
   */
  async getLatestSECFilings(page: number = 0): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = { page };
    return this.httpClient.get('/sec-filings-financials', params);
  }

  /**
   * Search SEC filings by form type
   * @param formType - Form type (e.g., "10-K", "10-Q", "8-K", "DEF 14A")
   * @param page - Page number for pagination
   */
  async searchSECFilingsByFormType(formType: string, page: number = 0): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = { page };
    return this.httpClient.get(`/sec-filings-search/form-type/${formType}`, params);
  }

  /**
   * Get SEC filings by CIK
   * @param cik - Central Index Key
   * @param type - Filing type (optional)
   * @param page - Page number for pagination
   */
  async getSECFilingsByCIK(cik: string, type?: string, page: number = 0): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = { page };
    if (type) params.type = type;
    return this.httpClient.get(`/sec-filings-cik/${cik}`, params);
  }

  /**
   * Get RSS feed for SEC filings
   * @param type - Filing type filter (optional)
   * @param limit - Maximum number of results
   */
  async getSECFilingsRSSFeed(type?: string, limit: number = 100): Promise<Array<{
    title: string;
    date: string;
    link: string;
    cik: string;
    formType: string;
    size: string;
    description: string;
  }>> {
    const params: QueryParams = { limit };
    if (type) params.type = type;
    return this.httpClient.get('/sec-filings-rss-feed', params);
  }

  /**
   * Get SEC filing document content
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param cik - Central Index Key
   * @param accessionNumber - SEC accession number
   * @param fileName - Document file name
   */
  async getSECFilingDocument(
    symbol: string, 
    cik: string, 
    accessionNumber: string, 
    fileName: string
  ): Promise<string> {
    return this.httpClient.get(`/sec-filings/${symbol}/${cik}/${accessionNumber}/${fileName}`);
  }

  /**
   * Get insider trading filings (Form 4)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param page - Page number for pagination
   */
  async getInsiderTradingFilings(symbol: string, page: number = 0): Promise<Array<{
    symbol: string;
    cik: string;
    reportingName: string;
    typeOfOwner: string;
    transactionDate: string;
    transactionType: string;
    securitiesOwned: number;
    pricePerShare: number;
    securitiesTransacted: number;
    totalValueTransacted: number;
    form: string;
    link: string;
  }>> {
    const params: QueryParams = { page };
    return this.httpClient.get(`/insider-trading-form4/${symbol}`, params);
  }

  /**
   * Get proxy statements (DEF 14A filings)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year for proxy statements
   */
  async getProxyStatements(symbol: string, year?: number): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = {};
    if (year) params.year = year;
    return this.httpClient.get(`/proxy-statements/${symbol}`, params);
  }

  /**
   * Get annual reports (10-K filings)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year for annual reports
   */
  async getAnnualReports(symbol: string, year?: number): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = {};
    if (year) params.year = year;
    return this.httpClient.get(`/annual-reports/${symbol}`, params);
  }

  /**
   * Get quarterly reports (10-Q filings)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year for quarterly reports
   * @param quarter - Quarter (Q1, Q2, Q3, Q4)
   */
  async getQuarterlyReports(symbol: string, year?: number, quarter?: string): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = {};
    if (year) params.year = year;
    if (quarter) params.quarter = quarter;
    return this.httpClient.get(`/quarterly-reports/${symbol}`, params);
  }

  /**
   * Get current reports (8-K filings) for a specific symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param page - Page number for pagination
   */
  async getCurrentReports(symbol: string, page: number = 0): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
  }>> {
    const params: QueryParams = { page };
    return this.httpClient.get(`/current-reports/${symbol}`, params);
  }

  /**
   * Get beneficial ownership reports (Schedule 13D/13G)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getBeneficialOwnershipReports(symbol: string): Promise<Array<{
    symbol: string;
    cik: string;
    title: string;
    date: string;
    period: string;
    documentType: string;
    documentUrl: string;
    formType: string;
    acceptedDate: string;
    size: string;
    ownerName: string;
    sharesOwned: number;
    percentOfClass: number;
  }>> {
    return this.httpClient.get(`/beneficial-ownership/${symbol}`);
  }
}

