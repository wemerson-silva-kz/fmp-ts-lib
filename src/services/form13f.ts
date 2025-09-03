import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class Form13FService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Institutional Ownership Filings API - Get latest institutional ownership filings
   * @param page - Page number (optional, default: 0, max: 100)
   * @param limit - Number of results (optional, default: 100)
   */
  async getLatestInstitutionalFilings(page?: number, limit?: number): Promise<Array<{
    cik: string;
    name: string;
    date: string;
    filingDate: string;
    acceptedDate: string;
    formType: string;
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = {};
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/institutional-ownership/latest', params);
  }

  /**
   * Filings Extract API - Extract detailed data from SEC filings
   * @param cik - Central Index Key (required, e.g., "0001388838")
   * @param year - Year (required, e.g., "2023")
   * @param quarter - Quarter (required, e.g., "3")
   */
  async getFilingsExtract(cik: string, year: string, quarter: string): Promise<Array<{
    date: string;
    filingDate: string;
    acceptedDate: string;
    cik: string;
    securityCusip: string;
    symbol: string;
    nameOfIssuer: string;
    shares: number;
    titleOfClass: string;
    sharesType: string;
    putCallShare: string;
    value: number;
    link: string;
    finalLink: string;
  }>> {
    return this.httpClient.get('/institutional-ownership/extract', { cik, year, quarter });
  }

  /**
   * Form 13F Filings Dates API - Get filing dates for a CIK
   * @param cik - Central Index Key (required, e.g., "0001067983")
   */
  async getFilingsDates(cik: string): Promise<Array<{
    date: string;
    year: number;
    quarter: number;
  }>> {
    return this.httpClient.get('/institutional-ownership/dates', { cik });
  }

  /**
   * Filings Extract With Analytics By Holder API - Get analytical breakdown by holder
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param year - Year (required, e.g., "2023")
   * @param quarter - Quarter (required, e.g., "3")
   * @param page - Page number (optional, default: 0)
   * @param limit - Number of results (optional, default: 10)
   */
  async getFilingsAnalyticsByHolder(symbol: string, year: string, quarter: string, page?: number, limit?: number): Promise<Array<{
    date: string;
    cik: string;
    filingDate: string;
    investorName: string;
    symbol: string;
    securityName: string;
    typeOfSecurity: string;
    securityCusip: string;
    sharesType: string;
    putCallShare: string;
    investmentDiscretion: string;
    industryTitle: string;
    weight: number;
    lastWeight: number;
    changeInWeight: number;
    changeInWeightPercentage: number;
    marketValue: number;
    lastMarketValue: number;
    changeInMarketValue: number;
    changeInMarketValuePercentage: number;
    sharesNumber: number;
    lastSharesNumber: number;
    changeInSharesNumber: number;
    changeInSharesNumberPercentage: number;
    quarterEndPrice: number;
    avgPricePaid: number;
    isNew: boolean;
    isSoldOut: boolean;
    ownership: number;
    lastOwnership: number;
    changeInOwnership: number;
    changeInOwnershipPercentage: number;
    holdingPeriod: number;
    firstAdded: string;
    performance: number;
    performancePercentage: number;
    lastPerformance: number;
    changeInPerformance: number;
    isCountedForPerformance: boolean;
  }>> {
    const params: QueryParams = { symbol, year, quarter };
    if (page !== undefined) params.page = page;
    if (limit !== undefined) params.limit = limit;
    return this.httpClient.get('/institutional-ownership/extract-analytics/holder', params);
  }

  /**
   * Holder Performance Summary API - Get performance summary for institutional holders
   * @param cik - Central Index Key (required, e.g., "0001067983")
   * @param page - Page number (optional, default: 0)
   */
  async getHolderPerformanceSummary(cik: string, page?: number): Promise<Array<{
    date: string;
    cik: string;
    investorName: string;
    portfolioSize: number;
    securitiesAdded: number;
    securitiesRemoved: number;
    marketValue: number;
    previousMarketValue: number;
    changeInMarketValue: number;
    changeInMarketValuePercentage: number;
    averageHoldingPeriod: number;
    averageHoldingPeriodTop10: number;
    averageHoldingPeriodTop20: number;
    turnover: number;
    turnoverAlternateSell: number;
    turnoverAlternateBuy: number;
    performance: number;
    performancePercentage: number;
    lastPerformance: number;
    changeInPerformance: number;
    performance1year: number;
    performancePercentage1year: number;
    performance3year: number;
    performancePercentage3year: number;
    performance5year: number;
    performancePercentage5year: number;
    performanceSinceInception: number;
    performanceSinceInceptionPercentage: number;
    performanceRelativeToSP500Percentage: number;
    performance1yearRelativeToSP500Percentage: number;
    performance3yearRelativeToSP500Percentage: number;
    performance5yearRelativeToSP500Percentage: number;
    performanceSinceInceptionRelativeToSP500Percentage: number;
  }>> {
    const params: QueryParams = { cik };
    if (page !== undefined) params.page = page;
    return this.httpClient.get('/institutional-ownership/holder-performance-summary', params);
  }

  /**
   * Holders Industry Breakdown API - Get industry breakdown for holders
   * @param cik - Central Index Key (required, e.g., "0001067983")
   * @param year - Year (required, e.g., "2023")
   * @param quarter - Quarter (required, e.g., "3")
   */
  async getHolderIndustryBreakdown(cik: string, year: string, quarter: string): Promise<Array<{
    date: string;
    cik: string;
    investorName: string;
    industryTitle: string;
    weight: number;
    lastWeight: number;
    changeInWeight: number;
    changeInWeightPercentage: number;
    performance: number;
    performancePercentage: number;
    lastPerformance: number;
    changeInPerformance: number;
  }>> {
    return this.httpClient.get('/institutional-ownership/holder-industry-breakdown', { cik, year, quarter });
  }

  /**
   * Positions Summary API - Get positions summary for a symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param year - Year (required, e.g., "2023")
   * @param quarter - Quarter (required, e.g., "3")
   */
  async getPositionsSummary(symbol: string, year: string, quarter: string): Promise<Array<{
    symbol: string;
    cik: string;
    date: string;
    investorsHolding: number;
    lastInvestorsHolding: number;
    investorsHoldingChange: number;
    numberOf13Fshares: number;
    lastNumberOf13Fshares: number;
    numberOf13FsharesChange: number;
    totalInvested: number;
    lastTotalInvested: number;
    totalInvestedChange: number;
    ownershipPercent: number;
    lastOwnershipPercent: number;
    ownershipPercentChange: number;
    newPositions: number;
    lastNewPositions: number;
    newPositionsChange: number;
    increasedPositions: number;
    lastIncreasedPositions: number;
    increasedPositionsChange: number;
    closedPositions: number;
    lastClosedPositions: number;
    closedPositionsChange: number;
    reducedPositions: number;
    lastReducedPositions: number;
    reducedPositionsChange: number;
    totalCalls: number;
    lastTotalCalls: number;
    totalCallsChange: number;
    totalPuts: number;
    lastTotalPuts: number;
    totalPutsChange: number;
    putCallRatio: number;
    lastPutCallRatio: number;
    putCallRatioChange: number;
  }>> {
    return this.httpClient.get('/institutional-ownership/symbol-positions-summary', { symbol, year, quarter });
  }

  /**
   * Industry Performance Summary API - Get industry performance summary
   * @param year - Year (required, e.g., "2023")
   * @param quarter - Quarter (required, e.g., "3")
   */
  async getIndustryPerformanceSummary(year: string, quarter: string): Promise<Array<{
    industryTitle: string;
    industryValue: number;
    date: string;
  }>> {
    return this.httpClient.get('/institutional-ownership/industry-summary', { year, quarter });
  }
}
