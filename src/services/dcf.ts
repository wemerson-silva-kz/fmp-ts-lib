import { getFirstOrItem } from '../utils/index.js';
import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class DCFService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get DCF (Discounted Cash Flow) valuation
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getDCF(symbol: string): Promise<{
    symbol: string;
    date: string;
    dcf: number;
    Stock_Price: number;
  }> {
    const result = await this.httpClient.get(`/discounted-cash-flow/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get advanced DCF valuation with detailed breakdown
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getAdvancedDCF(symbol: string): Promise<{
    symbol: string;
    date: string;
    dcf: number;
    Stock_Price: number;
    years: Array<{
      year: number;
      sales: number;
      salesGrowthRate: number;
      operatingCashFlow: number;
      operatingCashFlowGrowthRate: number;
      freeCashFlow: number;
      freeCashFlowGrowthRate: number;
      discountedFreeCashFlow: number;
    }>;
    terminalValue: number;
    presentValueOfTerminalValue: number;
    sumPvFcf: number;
    enterpriseValue: number;
    netDebt: number;
    equityValue: number;
    equityValuePerShare: number;
    freeCashFlowT1: number;
    operatingCashFlowT1: number;
    salesT1: number;
  }> {
    const result = await this.httpClient.get(`/advanced_discounted_cash_flow/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get levered DCF valuation
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getLeveredDCF(symbol: string): Promise<{
    symbol: string;
    date: string;
    dcf: number;
    Stock_Price: number;
    years: Array<{
      year: number;
      sales: number;
      salesGrowthRate: number;
      ebit: number;
      ebitGrowthRate: number;
      ebitda: number;
      ebitdaGrowthRate: number;
      ebitAfterTax: number;
      capitalExpenditure: number;
      changeInWorkingCapital: number;
      leveredFreeCashFlow: number;
      leveredFreeCashFlowGrowthRate: number;
      discountedLeveredFreeCashFlow: number;
    }>;
    terminalValue: number;
    presentValueOfTerminalValue: number;
    sumPvLfcf: number;
    equityValue: number;
    equityValuePerShare: number;
  }> {
    const result = await this.httpClient.get(`/levered_discounted_cash_flow/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get historical DCF values
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getHistoricalDCF(
    symbol: string, 
    period: 'annual' | 'quarter' = 'annual',
    limit: number = 20
  ): Promise<Array<{
    symbol: string;
    date: string;
    dcf: number;
    Stock_Price: number;
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/historical-discounted-cash-flow-statement/${symbol}`, params);
  }

  /**
   * Get DCF with daily stock price comparison
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getDCFWithStockPrice(symbol: string): Promise<{
    symbol: string;
    date: string;
    dcf: number;
    Stock_Price: number;
    difference: number;
    differencePercentage: number;
    recommendation: string;
  }> {
    const dcfData = await this.getDCF(symbol);
    const difference = dcfData.dcf - dcfData.Stock_Price;
    const differencePercentage = (difference / dcfData.Stock_Price) * 100;
    
    let recommendation = 'Hold';
    if (differencePercentage > 20) recommendation = 'Strong Buy';
    else if (differencePercentage > 10) recommendation = 'Buy';
    else if (differencePercentage < -20) recommendation = 'Strong Sell';
    else if (differencePercentage < -10) recommendation = 'Sell';

    return {
      ...dcfData,
      difference,
      differencePercentage,
      recommendation
    };
  }

  /**
   * Get batch DCF for multiple symbols
   * @param symbols - Array of stock symbols
   */
  async getBatchDCF(symbols: string[]): Promise<Array<{
    symbol: string;
    date: string;
    dcf: number;
    Stock_Price: number;
  }>> {
    const symbolList = symbols.join(',');
    return this.httpClient.get(`/discounted-cash-flow/${symbolList}`);
  }

  /**
   * Get DCF analysis summary
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getDCFAnalysis(symbol: string): Promise<{
    symbol: string;
    currentDCF: number;
    currentPrice: number;
    upside: number;
    upsidePercentage: number;
    recommendation: string;
    riskLevel: string;
    confidence: string;
  }> {
    const dcfData = await this.getDCF(symbol);
    const upside = dcfData.dcf - dcfData.Stock_Price;
    const upsidePercentage = (upside / dcfData.Stock_Price) * 100;
    
    let recommendation = 'Hold';
    let riskLevel = 'Medium';
    let confidence = 'Medium';
    
    if (upsidePercentage > 30) {
      recommendation = 'Strong Buy';
      riskLevel = 'Low';
      confidence = 'High';
    } else if (upsidePercentage > 15) {
      recommendation = 'Buy';
      riskLevel = 'Low';
      confidence = 'High';
    } else if (upsidePercentage < -30) {
      recommendation = 'Strong Sell';
      riskLevel = 'High';
      confidence = 'High';
    } else if (upsidePercentage < -15) {
      recommendation = 'Sell';
      riskLevel = 'High';
      confidence = 'Medium';
    }

    return {
      symbol,
      currentDCF: dcfData.dcf,
      currentPrice: dcfData.Stock_Price,
      upside,
      upsidePercentage,
      recommendation,
      riskLevel,
      confidence
    };
  }
}

