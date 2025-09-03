import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class DCFService {
  constructor(private httpClient: HttpClient) {}

  /**
   * DCF Valuation API - Get discounted cash flow valuation
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getDCFValuation(symbol: string): Promise<Array<{
    symbol: string;
    date: string;
    dcf: number;
    "Stock Price": number;
  }>> {
    return this.httpClient.get('/discounted-cash-flow', { symbol });
  }

  /**
   * Levered DCF API - Get levered discounted cash flow valuation
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getLeveredDCF(symbol: string): Promise<Array<{
    symbol: string;
    date: string;
    dcf: number;
    "Stock Price": number;
  }>> {
    return this.httpClient.get('/levered-discounted-cash-flow', { symbol });
  }

  /**
   * Custom DCF Advanced API - Get custom DCF analysis with detailed parameters
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param params - Optional custom parameters for DCF calculation
   */
  async getCustomDCF(symbol: string, params?: {
    revenueGrowthPct?: number;
    ebitdaPct?: number;
    depreciationAndAmortizationPct?: number;
    cashAndShortTermInvestmentsPct?: number;
    receivablesPct?: number;
    inventoriesPct?: number;
    payablePct?: number;
    ebitPct?: number;
    capitalExpenditurePct?: number;
    operatingCashFlowPct?: number;
    sellingGeneralAndAdministrativeExpensesPct?: number;
    taxRate?: number;
    longTermGrowthRate?: number;
    costOfDebt?: number;
    costOfEquity?: number;
    marketRiskPremium?: number;
    beta?: number;
    riskFreeRate?: number;
  }): Promise<Array<{
    year: string;
    symbol: string;
    revenue: number;
    revenuePercentage: number;
    ebitda: number;
    ebitdaPercentage: number;
    ebit: number;
    ebitPercentage: number;
    depreciation: number;
    depreciationPercentage: number;
    totalCash: number;
    totalCashPercentage: number;
    receivables: number;
    receivablesPercentage: number;
    inventories: number;
    inventoriesPercentage: number;
    payable: number;
    payablePercentage: number;
    capitalExpenditure: number;
    capitalExpenditurePercentage: number;
    price: number;
    beta: number;
    dilutedSharesOutstanding: number;
    costofDebt: number;
    taxRate: number;
    afterTaxCostOfDebt: number;
    riskFreeRate: number;
    marketRiskPremium: number;
    costOfEquity: number;
    totalDebt: number;
    totalEquity: number;
    totalCapital: number;
    debtWeighting: number;
    equityWeighting: number;
    wacc: number;
    taxRateCash: number;
    ebiat: number;
    ufcf: number;
    sumPvUfcf: number;
    longTermGrowthRate: number;
    terminalValue: number;
    presentTerminalValue: number;
    enterpriseValue: number;
    netDebt: number;
    equityValue: number;
    equityValuePerShare: number;
    freeCashFlowT1: number;
  }>> {
    const queryParams: QueryParams = { symbol };
    if (params) {
      Object.assign(queryParams, params);
    }
    return this.httpClient.get('/custom-discounted-cash-flow', queryParams);
  }

  /**
   * Custom DCF Levered API - Get custom levered DCF analysis with detailed parameters
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param params - Optional custom parameters for levered DCF calculation
   */
  async getCustomLeveredDCF(symbol: string, params?: {
    revenueGrowthPct?: number;
    ebitdaPct?: number;
    depreciationAndAmortizationPct?: number;
    cashAndShortTermInvestmentsPct?: number;
    receivablesPct?: number;
    inventoriesPct?: number;
    payablePct?: number;
    ebitPct?: number;
    capitalExpenditurePct?: number;
    operatingCashFlowPct?: number;
    sellingGeneralAndAdministrativeExpensesPct?: number;
    taxRate?: number;
    longTermGrowthRate?: number;
    costOfDebt?: number;
    costOfEquity?: number;
    marketRiskPremium?: number;
    beta?: number;
    riskFreeRate?: number;
  }): Promise<Array<{
    year: string;
    symbol: string;
    revenue: number;
    revenuePercentage: number;
    capitalExpenditure: number;
    capitalExpenditurePercentage: number;
    price: number;
    beta: number;
    dilutedSharesOutstanding: number;
    costofDebt: number;
    taxRate: number;
    afterTaxCostOfDebt: number;
    riskFreeRate: number;
    marketRiskPremium: number;
    costOfEquity: number;
    totalDebt: number;
    totalEquity: number;
    totalCapital: number;
    debtWeighting: number;
    equityWeighting: number;
    wacc: number;
    operatingCashFlow: number;
    pvLfcf: number;
    sumPvLfcf: number;
    longTermGrowthRate: number;
    freeCashFlow: number;
    terminalValue: number;
    presentTerminalValue: number;
    enterpriseValue: number;
    netDebt: number;
    equityValue: number;
    equityValuePerShare: number;
    freeCashFlowT1: number;
    operatingCashFlowPercentage: number;
  }>> {
    const queryParams: QueryParams = { symbol };
    if (params) {
      Object.assign(queryParams, params);
    }
    return this.httpClient.get('/custom-levered-discounted-cash-flow', queryParams);
  }
}
