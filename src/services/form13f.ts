import { getFirstOrItem } from '../utils/index.js';
import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class Form13FService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get Form 13F filings by CIK
   * @param cik - Central Index Key
   * @param date - Filing date (YYYY-MM-DD) - optional
   */
  async getForm13F(cik: string, date?: string): Promise<Array<{
    date: string;
    fillingDate: string;
    acceptedDate: string;
    cik: string;
    cusip: string;
    tickerSymbol: string;
    nameOfIssuer: string;
    shares: number;
    titleOfClass: string;
    value: number;
    weightPercentage: number;
  }>> {
    const params: QueryParams = {};
    if (date) params.date = date;
    return this.httpClient.get(`/form-thirteenf/${cik}`, params);
  }

  /**
   * Get institutional holders for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getInstitutionalHolders(symbol: string): Promise<Array<{
    date: string;
    cik: string;
    investorName: string;
    symbol: string;
    cusip: string;
    shares: number;
    value: number;
    weightPercentage: number;
    lastValue: number;
    lastShares: number;
    changeInShares: number;
    changeInSharesPercentage: number;
    changeInValue: number;
    changeInValuePercentage: number;
  }>> {
    return this.httpClient.get(`/institutional-holder/${symbol}`);
  }

  /**
   * Get mutual fund holders for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getMutualFundHolders(symbol: string): Promise<Array<{
    date: string;
    cik: string;
    investorName: string;
    symbol: string;
    cusip: string;
    shares: number;
    value: number;
    weightPercentage: number;
    lastValue: number;
    lastShares: number;
    changeInShares: number;
    changeInSharesPercentage: number;
    changeInValue: number;
    changeInValuePercentage: number;
  }>> {
    return this.httpClient.get(`/mutual-fund-holder/${symbol}`);
  }

  /**
   * Get ETF holders for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getETFHolders(symbol: string): Promise<Array<{
    date: string;
    cik: string;
    investorName: string;
    symbol: string;
    cusip: string;
    shares: number;
    value: number;
    weightPercentage: number;
    lastValue: number;
    lastShares: number;
    changeInShares: number;
    changeInSharesPercentage: number;
    changeInValue: number;
    changeInValuePercentage: number;
  }>> {
    return this.httpClient.get(`/etf-holder/${symbol}`);
  }

  /**
   * Get ETF stock exposure
   * @param symbol - ETF symbol (e.g., "SPY")
   */
  async getETFStockExposure(symbol: string): Promise<Array<{
    etfSymbol: string;
    assetExposure: string;
    sharesNumber: number;
    weightPercentage: number;
    marketValue: number;
  }>> {
    return this.httpClient.get(`/etf-stock-exposure/${symbol}`);
  }

  /**
   * Get institutional stock ownership
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param includeCurrentQuarter - Include current quarter data
   */
  async getInstitutionalStockOwnership(
    symbol: string, 
    includeCurrentQuarter: boolean = false
  ): Promise<Array<{
    date: string;
    totalInvested: number;
    ownershipPercent: number;
    investorsHolding: number;
    lastInvestorsHolding: number;
    investorsHoldingChange: number;
    numberOf13Fshares: number;
    lastNumberOf13Fshares: number;
    numberOf13FsharesChange: number;
    totalInvestedChange: number;
    ownershipPercentChange: number;
    newPositions: number;
    increasedPositions: number;
    decreasedPositions: number;
    closedPositions: number;
    totalCalls: number;
    totalPuts: number;
    putCallRatio: number;
  }>> {
    const params: QueryParams = {};
    if (includeCurrentQuarter) params.includeCurrentQuarter = includeCurrentQuarter;
    return this.httpClient.get(`/institutional-ownership/${symbol}`, params);
  }

  /**
   * Get institutional ownership by investor
   * @param cik - Central Index Key of the investor
   * @param date - Date for the filing (YYYY-MM-DD) - optional
   */
  async getInstitutionalOwnershipByInvestor(cik: string, date?: string): Promise<Array<{
    cik: string;
    investorName: string;
    symbol: string;
    cusip: string;
    tickerSymbol: string;
    securityName: string;
    shares: number;
    value: number;
    weightPercentage: number;
    date: string;
    fillingDate: string;
    acceptedDate: string;
  }>> {
    const params: QueryParams = {};
    if (date) params.date = date;
    return this.httpClient.get(`/institutional-ownership/portfolio-holdings/${cik}`, params);
  }

  /**
   * Get institutional ownership changes
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getInstitutionalOwnershipChanges(symbol: string): Promise<Array<{
    date: string;
    cik: string;
    investorName: string;
    symbol: string;
    securityName: string;
    typeOfSecurity: string;
    shares: number;
    value: number;
    weightPercentage: number;
    changeType: string;
    changeInShares: number;
    changeInSharesPercentage: number;
    changeInValue: number;
    changeInValuePercentage: number;
  }>> {
    return this.httpClient.get(`/institutional-ownership/ownership-changes/${symbol}`);
  }

  /**
   * Get top institutional holders
   * @param limit - Maximum number of results
   */
  async getTopInstitutionalHolders(limit: number = 100): Promise<Array<{
    cik: string;
    investorName: string;
    totalValue: number;
    totalPositions: number;
    date: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/institutional-ownership/top-holders', params);
  }

  /**
   * Get institutional ownership summary for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getInstitutionalOwnershipSummary(symbol: string): Promise<{
    symbol: string;
    date: string;
    totalInstitutionalShares: number;
    totalShares: number;
    institutionalOwnershipPercentage: number;
    topHolders: Array<{
      investorName: string;
      shares: number;
      value: number;
      weightPercentage: number;
    }>;
  }> {
    const result = await this.httpClient.get(`/institutional-ownership/summary/${symbol}`);
    return getFirstOrItem(result);
  }
}

