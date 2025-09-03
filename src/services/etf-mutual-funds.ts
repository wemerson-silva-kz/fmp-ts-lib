import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class ETFMutualFundsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * ETF & Fund Holdings API - Get ETF/fund holdings
   * @param symbol - ETF/Fund symbol (required, e.g., "SPY")
   */
  async getETFHoldings(symbol: string): Promise<Array<{
    asset: string;
    sharesNumber: number;
    weightPercentage: number;
    marketValue: number;
  }>> {
    return this.httpClient.get('/etf/holdings', { symbol });
  }

  /**
   * ETF & Mutual Fund Information API - Get ETF/fund information
   * @param symbol - ETF/Fund symbol (required, e.g., "SPY")
   */
  async getETFInfo(symbol: string): Promise<Array<{
    symbol: string;
    companyName: string;
    holdingsCount: number;
    totalAssets: number;
    yearHigh: number;
    yearLow: number;
    averageVolume: number;
    marketCap: number;
    beta: number;
    price: number;
    lastAnnualDividend: number;
    volume: number;
    isin: string;
    cusip: string;
    expenseRatio: number;
    category: string;
    lastUpdate: string;
    domicile: string;
    aum: number;
    nav: number;
    navCurrency: string;
    totalAssetsDate: string;
    portfolioTurnover: number;
    dividendYield: number;
    avgMarketCapMillions: number;
    avgMarketCap: number;
    marketCapRange: string;
    priceEarningsRatio: number;
    priceBookRatio: number;
    priceFreeCashFlowRatio: number;
    priceSalesRatio: number;
    website: string;
  }>> {
    return this.httpClient.get('/etf/info', { symbol });
  }

  /**
   * ETF & Fund Country Allocation API - Get country allocation
   * @param symbol - ETF/Fund symbol (required, e.g., "SPY")
   */
  async getETFCountryAllocation(symbol: string): Promise<Array<{
    country: string;
    weightPercentage: number;
  }>> {
    return this.httpClient.get('/etf/country', { symbol });
  }

  /**
   * ETF & Fund Sector Allocation API - Get sector allocation
   * @param symbol - ETF/Fund symbol (required, e.g., "SPY")
   */
  async getETFSectorAllocation(symbol: string): Promise<Array<{
    sector: string;
    weightPercentage: number;
  }>> {
    return this.httpClient.get('/etf/sector', { symbol });
  }

  /**
   * ETF List API - Get list of ETFs
   */
  async getETFList(): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    exchange: string;
    exchangeShortName: string;
    type: string;
  }>> {
    return this.httpClient.get('/etf/list');
  }

  /**
   * Mutual Fund List API - Get list of mutual funds
   */
  async getMutualFundList(): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    exchange: string;
    exchangeShortName: string;
    type: string;
  }>> {
    return this.httpClient.get('/mutual-fund/list');
  }

  /**
   * ETF Stock Exposure API - Get stock exposure
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getETFStockExposure(symbol: string): Promise<Array<{
    etfSymbol: string;
    etfName: string;
    weightPercentage: number;
    sharesNumber: number;
    marketValue: number;
  }>> {
    return this.httpClient.get('/etf-stock-exposure', { symbol });
  }

  /**
   * ETF Sector Exposure API - Get sector exposure
   * @param sector - Sector name (required, e.g., "Technology")
   */
  async getETFSectorExposure(sector: string): Promise<Array<{
    etfSymbol: string;
    etfName: string;
    weightPercentage: number;
  }>> {
    return this.httpClient.get('/etf-sector-exposure', { sector });
  }

  /**
   * ETF Country Exposure API - Get country exposure
   * @param country - Country name (required, e.g., "US")
   */
  async getETFCountryExposure(country: string): Promise<Array<{
    etfSymbol: string;
    etfName: string;
    weightPercentage: number;
  }>> {
    return this.httpClient.get('/etf-country-exposure', { country });
  }
}
