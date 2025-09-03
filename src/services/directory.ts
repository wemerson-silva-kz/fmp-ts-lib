import type { 
  StockList, 
  FinancialStatementSymbol,
  CIKSearch,
  QueryParams 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class DirectoryService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Company Symbols List API - Get list of all available stock symbols
   */
  async getStockList(): Promise<Array<{
    symbol: string;
    companyName: string;
  }>> {
    return this.httpClient.get('/stock-list');
  }

  /**
   * Financial Statement Symbols List API - Get symbols with available financial statements
   */
  async getFinancialStatementSymbolsList(): Promise<Array<{
    symbol: string;
    companyName: string;
    tradingCurrency: string;
    reportingCurrency: string;
  }>> {
    return this.httpClient.get('/financial-statement-symbol-list');
  }

  /**
   * CIK List API - Get comprehensive list of CIK numbers
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of records per page (optional, default: 1000, max: 10000)
   */
  async getCIKList(page?: number, limit?: number): Promise<Array<{
    cik: string;
    companyName: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/cik-list', params);
  }

  /**
   * Symbol Changes List API - Get list of symbol changes
   * @param invalid - Filter invalid symbols (optional, e.g., "false")
   * @param limit - Number of records (optional, default: 100)
   */
  async getSymbolChangesList(invalid?: string, limit?: number): Promise<Array<{
    date: string;
    companyName: string;
    oldSymbol: string;
    newSymbol: string;
  }>> {
    const params: QueryParams = {};
    if (invalid !== undefined) params.invalid = invalid;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/symbol-change', params);
  }

  /**
   * ETF Symbol Search API - Get list of available ETF symbols
   */
  async getETFList(): Promise<Array<{
    symbol: string;
    name: string;
  }>> {
    return this.httpClient.get('/etf-list');
  }

  /**
   * Actively Trading List API - Get list of actively trading stocks
   */
  async getActivelyTradingList(): Promise<Array<{
    symbol: string;
    name: string;
  }>> {
    return this.httpClient.get('/actively-trading-list');
  }

  /**
   * Earnings Transcript List API - Get companies with available earnings transcripts
   */
  async getEarningsTranscriptList(): Promise<Array<{
    symbol: string;
    companyName: string;
    noOfTranscripts: string;
  }>> {
    return this.httpClient.get('/earnings-transcript-list');
  }

  /**
   * Available Exchanges API - Get list of supported stock exchanges
   */
  async getAvailableExchanges(): Promise<Array<{
    exchange: string;
    name: string;
    countryName: string;
    countryCode: string;
    symbolSuffix: string;
    delay: string;
  }>> {
    return this.httpClient.get('/available-exchanges');
  }

  /**
   * Available Sectors API - Get list of industry sectors
   */
  async getAvailableSectors(): Promise<Array<{
    sector: string;
  }>> {
    return this.httpClient.get('/available-sectors');
  }

  /**
   * Available Industries API - Get list of industries
   */
  async getAvailableIndustries(): Promise<Array<{
    industry: string;
  }>> {
    return this.httpClient.get('/available-industries');
  }

  /**
   * Available Countries API - Get list of countries with stock symbols
   */
  async getAvailableCountries(): Promise<Array<{
    country: string;
  }>> {
    return this.httpClient.get('/available-countries');
  }
}
