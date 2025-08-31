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
   * Get list of all available stock symbols
   */
  async getStockList(): Promise<StockList[]> {
    return this.httpClient.get<StockList[]>('/stock/list');
  }

  /**
   * Get list of symbols with available financial statements
   */
  async getFinancialStatementSymbolsList(): Promise<FinancialStatementSymbol[]> {
    return this.httpClient.get<FinancialStatementSymbol[]>('/financial-statement-symbol-list');
  }

  /**
   * Get comprehensive list of CIK numbers
   */
  async getCIKList(): Promise<CIKSearch[]> {
    return this.httpClient.get<CIKSearch[]>('/cik_list');
  }

  /**
   * Get list of symbol changes (mergers, acquisitions, etc.)
   */
  async getSymbolChangesList(): Promise<Array<{
    date: string;
    name: string;
    oldSymbol: string;
    newSymbol: string;
  }>> {
    return this.httpClient.get('/symbol_available');
  }

  /**
   * Get list of available ETF symbols
   */
  async getETFList(): Promise<StockList[]> {
    return this.httpClient.get<StockList[]>('/etf/list');
  }

  /**
   * Get list of actively trading stocks
   */
  async getActivelyTradingList(): Promise<StockList[]> {
    return this.httpClient.get<StockList[]>('/available-traded/list');
  }

  /**
   * Get list of companies with available earnings transcripts
   */
  async getEarningsTranscriptList(): Promise<Array<{
    symbol: string;
    cik: string;
    year: number;
    quarter: number;
  }>> {
    return this.httpClient.get('/earning_call_transcript');
  }

  /**
   * Get list of available exchanges
   */
  async getAvailableExchanges(): Promise<Array<{
    name: string;
    code: string;
    operatingMIC: string;
    country: string;
    currency: string;
    timezone: string;
    isMarketOpen: boolean;
  }>> {
    return this.httpClient.get('/stock/market/list');
  }

  /**
   * Get tradable symbols by exchange
   * @param exchange - Exchange code (e.g., "NASDAQ", "NYSE")
   */
  async getTradableSymbolsByExchange(exchange: string): Promise<StockList[]> {
    return this.httpClient.get<StockList[]>(`/available-traded/list`, { exchange });
  }

  /**
   * Get delisted companies
   */
  async getDelistedCompanies(): Promise<Array<{
    symbol: string;
    companyName: string;
    exchange: string;
    ipoDate: string;
    delistedDate: string;
  }>> {
    return this.httpClient.get('/delisted-companies');
  }
}

