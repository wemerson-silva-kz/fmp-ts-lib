import { getFirstOrItem } from '../utils/index.js';
import type { ETFInfo, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class ETFMutualFundsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get ETF information
   * @param symbol - ETF symbol (e.g., "SPY")
   */
  async getETFInfo(symbol: string): Promise<ETFInfo> {
    const result = await this.httpClient.get<ETFInfo[]>(`/etf/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get ETF stock exposure (holdings)
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
   * Get ETF country weightings
   * @param symbol - ETF symbol (e.g., "VEA")
   */
  async getETFCountryWeightings(symbol: string): Promise<Array<{
    country: string;
    weightPercentage: number;
  }>> {
    return this.httpClient.get(`/etf-country-weighting/${symbol}`);
  }

  /**
   * Get ETF sector weightings
   * @param symbol - ETF symbol (e.g., "SPY")
   */
  async getETFSectorWeightings(symbol: string): Promise<Array<{
    sector: string;
    weightPercentage: number;
  }>> {
    return this.httpClient.get(`/etf-sector-weighting/${symbol}`);
  }

  /**
   * Get mutual fund information
   * @param symbol - Mutual fund symbol (e.g., "VFIAX")
   */
  async getMutualFundInfo(symbol: string): Promise<{
    symbol: string;
    companyName: string;
    marketCap: string;
    sector: string;
    industry: string;
    beta: string;
    price: string;
    lastAnnualDividend: string;
    volume: string;
    exchange: string;
    exchangeShortName: string;
    country: string;
    isEtf: string;
    isFund: string;
    description: string;
    fundFamily: string;
    fundType: string;
    inceptionDate: string;
    totalAssets: number;
    totalAssetsDate: string;
    expenseRatio: number;
    holdingsCount: number;
    nav: number;
    navDate: string;
  }> {
    const result = await this.httpClient.get(`/mutual-fund/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get mutual fund holdings
   * @param symbol - Mutual fund symbol (e.g., "VFIAX")
   */
  async getMutualFundHoldings(symbol: string): Promise<Array<{
    asset: string;
    sharesNumber: number;
    weightPercentage: number;
    marketValue: number;
  }>> {
    return this.httpClient.get(`/mutual-fund-holdings/${symbol}`);
  }

  /**
   * Get ETF performance data
   * @param symbol - ETF symbol (e.g., "SPY")
   */
  async getETFPerformance(symbol: string): Promise<{
    symbol: string;
    oneDay: number;
    fiveDays: number;
    oneMonth: number;
    threeMonths: number;
    sixMonths: number;
    oneYear: number;
    threeYears: number;
    fiveYears: number;
    tenYears: number;
    max: number;
  }> {
    const result = await this.httpClient.get(`/etf-performance/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get ETF dividend history
   * @param symbol - ETF symbol (e.g., "SPY")
   */
  async getETFDividendHistory(symbol: string): Promise<Array<{
    date: string;
    label: string;
    adjDividend: number;
    dividend: number;
    recordDate: string;
    paymentDate: string;
    declarationDate: string;
  }>> {
    return this.httpClient.get(`/historical-price-full/stock_dividend/${symbol}`);
  }

  /**
   * Get mutual fund performance data
   * @param symbol - Mutual fund symbol (e.g., "VFIAX")
   */
  async getMutualFundPerformance(symbol: string): Promise<{
    symbol: string;
    oneDay: number;
    fiveDays: number;
    oneMonth: number;
    threeMonths: number;
    sixMonths: number;
    oneYear: number;
    threeYears: number;
    fiveYears: number;
    tenYears: number;
    max: number;
  }> {
    const result = await this.httpClient.get(`/mutual-fund-performance/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get ETF expense ratios comparison
   * @param symbols - Array of ETF symbols
   */
  async getETFExpenseRatiosComparison(symbols: string[]): Promise<Array<{
    symbol: string;
    name: string;
    expenseRatio: number;
    totalAssets: number;
    category: string;
  }>> {
    const symbolList = symbols.join(',');
    return this.httpClient.get(`/etf-expense-ratios/${symbolList}`);
  }

  /**
   * Get top ETFs by category
   * @param category - ETF category (e.g., "Large Cap", "Technology")
   * @param limit - Maximum number of results
   */
  async getTopETFsByCategory(category: string, limit: number = 50): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    marketCap: number;
    volume: number;
    expenseRatio: number;
    totalAssets: number;
  }>> {
    const params: QueryParams = { category, limit };
    return this.httpClient.get('/etf/top-by-category', params);
  }

  /**
   * Get ETF vs mutual fund comparison
   * @param etfSymbol - ETF symbol
   * @param mutualFundSymbol - Mutual fund symbol
   */
  async getETFvsMutualFundComparison(etfSymbol: string, mutualFundSymbol: string): Promise<{
    etf: {
      symbol: string;
      name: string;
      expenseRatio: number;
      totalAssets: number;
      performance: any;
    };
    mutualFund: {
      symbol: string;
      name: string;
      expenseRatio: number;
      totalAssets: number;
      performance: any;
    };
    comparison: {
      expenseRatioDifference: number;
      performanceDifference: number;
      recommendation: string;
    };
  }> {
    const params: QueryParams = { etf: etfSymbol, mutualFund: mutualFundSymbol };
    const result = await this.httpClient.get('/etf-vs-mutual-fund', params);
    return getFirstOrItem(result);
  }

  /**
   * Get ETF creation and redemption data
   * @param symbol - ETF symbol (e.g., "SPY")
   */
  async getETFCreationRedemption(symbol: string): Promise<Array<{
    date: string;
    creationUnits: number;
    redemptionUnits: number;
    netFlow: number;
    totalShares: number;
  }>> {
    return this.httpClient.get(`/etf-creation-redemption/${symbol}`);
  }

  /**
   * Get mutual fund manager information
   * @param symbol - Mutual fund symbol (e.g., "VFIAX")
   */
  async getMutualFundManager(symbol: string): Promise<{
    symbol: string;
    fundName: string;
    managerName: string;
    managerTenure: number;
    managerBio: string;
    managementCompany: string;
    totalAssetsUnderManagement: number;
  }> {
    const result = await this.httpClient.get(`/mutual-fund-manager/${symbol}`);
    return getFirstOrItem(result);
  }
}

