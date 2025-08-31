import type { 
  StockSymbol, 
  CompanySearch, 
  CIKSearch, 
  QueryParams 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class SearchService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Search for stock symbols
   * @param query - Search query (e.g., "AAPL")
   * @param limit - Maximum number of results (default: 10)
   */
  async searchSymbol(query: string, limit: number = 10): Promise<StockSymbol[]> {
    const params: QueryParams = { query, limit };
    return this.httpClient.get<StockSymbol[]>('/search', params);
  }

  /**
   * Search for companies by name
   * @param query - Company name query (e.g., "Apple")
   * @param limit - Maximum number of results (default: 10)
   */
  async searchCompanyName(query: string, limit: number = 10): Promise<CompanySearch[]> {
    const params: QueryParams = { query, limit };
    return this.httpClient.get<CompanySearch[]>('/search-name', params);
  }

  /**
   * Search by CIK (Central Index Key)
   * @param cik - CIK number (e.g., "320193")
   */
  async searchByCIK(cik: string): Promise<CIKSearch[]> {
    const params: QueryParams = { cik };
    return this.httpClient.get<CIKSearch[]>('/search-cik', params);
  }

  /**
   * Search by CUSIP
   * @param cusip - CUSIP identifier (e.g., "037833100")
   */
  async searchByCUSIP(cusip: string): Promise<StockSymbol[]> {
    const params: QueryParams = { cusip };
    return this.httpClient.get<StockSymbol[]>('/search-cusip', params);
  }

  /**
   * Search by ISIN
   * @param isin - ISIN identifier (e.g., "US0378331005")
   */
  async searchByISIN(isin: string): Promise<StockSymbol[]> {
    const params: QueryParams = { isin };
    return this.httpClient.get<StockSymbol[]>('/search-isin', params);
  }

  /**
   * Company screener with filters
   * @param filters - Screening filters
   */
  async companyScreener(filters?: {
    marketCapMoreThan?: number;
    marketCapLowerThan?: number;
    priceMoreThan?: number;
    priceLowerThan?: number;
    betaMoreThan?: number;
    betaLowerThan?: number;
    volumeMoreThan?: number;
    volumeLowerThan?: number;
    dividendMoreThan?: number;
    dividendLowerThan?: number;
    isEtf?: boolean;
    isActivelyTrading?: boolean;
    sector?: string;
    industry?: string;
    country?: string;
    exchange?: string;
    limit?: number;
  }): Promise<StockSymbol[]> {
    return this.httpClient.get<StockSymbol[]>('/stock-screener', filters);
  }

  /**
   * Search for exchange variants of a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async searchExchangeVariants(symbol: string): Promise<StockSymbol[]> {
    const params: QueryParams = { symbol };
    return this.httpClient.get<StockSymbol[]>('/search-exchange-variants', params);
  }
}

