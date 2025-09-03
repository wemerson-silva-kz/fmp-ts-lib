import type {
  CIKSearch,
  CompanySearch,
  QueryParams,
  StockSymbol,
} from "../types/index.js";
import type { HttpClient } from "../utils/http-client.js";

export class SearchService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Stock Symbol Search API
   * @param query - Search query (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 50)
   * @param exchange - Exchange filter (optional, e.g., "NASDAQ")
   */
  async searchSymbol(
    query: string,
    limit?: number,
    exchange?: string,
  ): Promise<StockSymbol[]> {
    const params: QueryParams = { query };
    if (limit) params.limit = limit;
    if (exchange) params.exchange = exchange;
    return this.httpClient.get<StockSymbol[]>("/search-symbol", params);
  }

  /**
   * Company Name Search API
   * @param query - Search query (required, e.g., "AA")
   * @param limit - Maximum number of results (optional, default: 50)
   * @param exchange - Exchange filter (optional, e.g., "NASDAQ")
   */
  async searchCompanyName(
    query: string,
    limit?: number,
    exchange?: string,
  ): Promise<CompanySearch[]> {
    const params: QueryParams = { query };
    if (limit) params.limit = limit;
    if (exchange) params.exchange = exchange;
    return this.httpClient.get<CompanySearch[]>("/search-name", params);
  }

  /**
   * CIK API - Search by Central Index Key
   * @param cik - CIK number (required, e.g., "320193")
   * @param limit - Maximum number of results (optional, default: 50)
   */
  async searchByCIK(cik: string, limit?: number): Promise<CIKSearch[]> {
    const params: QueryParams = { cik };
    if (limit) params.limit = limit;
    return this.httpClient.get<CIKSearch[]>("/search-cik", params);
  }

  /**
   * CUSIP API - Search by CUSIP identifier
   * @param cusip - CUSIP identifier (required, e.g., "037833100")
   */
  async searchByCUSIP(cusip: string): Promise<
    Array<{
      symbol: string;
      companyName: string;
      cusip: string;
      marketCap: number;
    }>
  > {
    const params: QueryParams = { cusip };
    return this.httpClient.get("/search-cusip", params);
  }

  /**
   * ISIN API - Search by International Securities Identification Number
   * @param isin - ISIN identifier (required, e.g., "US0378331005")
   */
  async searchByISIN(isin: string): Promise<
    Array<{
      symbol: string;
      name: string;
      isin: string;
      marketCap: number;
    }>
  > {
    const params: QueryParams = { isin };
    return this.httpClient.get("/search-isin", params);
  }

  /**
   * Stock Screener API - Filter stocks based on criteria
   * @param filters - Screening filters (all optional)
   */
  async companyScreener(filters?: {
    marketCapMoreThan?: number;
    marketCapLowerThan?: number;
    sector?: string;
    industry?: string;
    betaMoreThan?: number;
    betaLowerThan?: number;
    priceMoreThan?: number;
    priceLowerThan?: number;
    dividendMoreThan?: number;
    dividendLowerThan?: number;
    volumeMoreThan?: number;
    volumeLowerThan?: number;
    exchange?: string;
    country?: string;
    isEtf?: boolean;
    isFund?: boolean;
    isActivelyTrading?: boolean;
    limit?: number;
    includeAllShareClasses?: boolean;
  }): Promise<
    Array<{
      symbol: string;
      companyName: string;
      marketCap: number;
      sector: string;
      industry: string;
      beta: number;
      price: number;
      lastAnnualDividend: number;
      volume: number;
      exchange: string;
      exchangeShortName: string;
      country: string;
      isEtf: boolean;
      isFund: boolean;
      isActivelyTrading: boolean;
    }>
  > {
    return this.httpClient.get("/company-screener", filters);
  }

  /**
   * Exchange Variants API - Find all exchanges where a symbol is listed
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async searchExchangeVariants(symbol: string): Promise<
    Array<{
      symbol: string;
      price: number;
      beta: number;
      volAvg: number;
      mktCap: number;
      lastDiv: number;
      range: string;
      changes: number;
      companyName: string;
      currency: string;
      cik: string;
      isin: string;
      cusip: string;
      exchange: string;
      exchangeShortName: string;
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
      dcfDiff: number;
      dcf: number;
      image: string;
      ipoDate: string;
      defaultImage: boolean;
      isEtf: boolean;
      isActivelyTrading: boolean;
      isAdr: boolean;
      isFund: boolean;
    }>
  > {
    const params: QueryParams = { symbol };
    return this.httpClient.get("/search-exchange-variants", params);
  }
}
