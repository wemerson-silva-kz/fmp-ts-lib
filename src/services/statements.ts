import type { 
  IncomeStatement, 
  IncomeStatementTTM,
  BalanceSheetStatementTTM,
  CashFlowStatementTTM,
  KeyMetrics,
  KeyMetricsTTM,
  FinancialRatios,
  FinancialRatiosTTM,
  FinancialScores,
  OwnerEarnings,
  EnterpriseValues,
  QueryParams, 
  Period 
} from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class StatementsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Income Statement API - Get income statement data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 5, max: 1000)
   * @param period - Period type (optional, e.g., "Q1", "Q2", "Q3", "Q4", "FY", "annual", "quarter")
   */
  async getIncomeStatement(
    symbol: string, 
    limit?: number,
    period?: string
  ): Promise<Array<{
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    filingDate: string;
    acceptedDate: string;
    fiscalYear: string;
    period: string;
    revenue: number;
    costOfRevenue: number;
    grossProfit: number;
    researchAndDevelopmentExpenses: number;
    generalAndAdministrativeExpenses: number;
    sellingAndMarketingExpenses: number;
    sellingGeneralAndAdministrativeExpenses: number;
    otherExpenses: number;
    operatingExpenses: number;
    costAndExpenses: number;
    netInterestIncome: number;
    interestIncome: number;
    interestExpense: number;
    depreciationAndAmortization: number;
    ebitda: number;
    ebit: number;
    nonOperatingIncomeExcludingInterest: number;
    operatingIncome: number;
    totalOtherIncomeExpensesNet: number;
    incomeBeforeTax: number;
    incomeTaxExpense: number;
    netIncomeFromContinuingOperations: number;
    netIncomeFromDiscontinuedOperations: number;
    otherAdjustmentsToNetIncome: number;
    netIncome: number;
    netIncomeDeductions: number;
    bottomLineNetIncome: number;
    eps: number;
    epsDiluted: number;
    weightedAverageShsOut: number;
    weightedAverageShsOutDil: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    if (period !== undefined) params.period = period;
    return this.httpClient.get('/income-statement', params);
  }

  /**
   * Balance Sheet Statement API - Get balance sheet data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 5, max: 1000)
   * @param period - Period type (optional, e.g., "Q1", "Q2", "Q3", "Q4", "FY", "annual", "quarter")
   */
  async getBalanceSheetStatement(
    symbol: string, 
    limit?: number,
    period?: string
  ): Promise<Array<{
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    filingDate: string;
    acceptedDate: string;
    fiscalYear: string;
    period: string;
    cashAndCashEquivalents: number;
    shortTermInvestments: number;
    cashAndShortTermInvestments: number;
    netReceivables: number;
    inventory: number;
    otherCurrentAssets: number;
    totalCurrentAssets: number;
    propertyPlantEquipmentNet: number;
    goodwill: number;
    intangibleAssets: number;
    goodwillAndIntangibleAssets: number;
    longTermInvestments: number;
    taxAssets: number;
    otherNonCurrentAssets: number;
    totalNonCurrentAssets: number;
    otherAssets: number;
    totalAssets: number;
    accountPayables: number;
    shortTermDebt: number;
    taxPayables: number;
    deferredRevenue: number;
    otherCurrentLiabilities: number;
    totalCurrentLiabilities: number;
    longTermDebt: number;
    deferredRevenueNonCurrent: number;
    deferredTaxLiabilitiesNonCurrent: number;
    otherNonCurrentLiabilities: number;
    totalNonCurrentLiabilities: number;
    otherLiabilities: number;
    capitalLeaseObligations: number;
    totalLiabilities: number;
    preferredStock: number;
    commonStock: number;
    retainedEarnings: number;
    accumulatedOtherComprehensiveIncomeLoss: number;
    othertotalStockholdersEquity: number;
    totalStockholdersEquity: number;
    totalEquity: number;
    totalLiabilitiesAndStockholdersEquity: number;
    minorityInterest: number;
    totalLiabilitiesAndTotalEquity: number;
    totalInvestments: number;
    totalDebt: number;
    netDebt: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    if (period !== undefined) params.period = period;
    return this.httpClient.get('/balance-sheet-statement', params);
  }

  /**
   * Cash Flow Statement API - Get cash flow data
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param limit - Maximum number of results (optional, default: 5, max: 1000)
   * @param period - Period type (optional, e.g., "Q1", "Q2", "Q3", "Q4", "FY", "annual", "quarter")
   */
  async getCashFlowStatement(
    symbol: string, 
    limit?: number,
    period?: string
  ): Promise<Array<{
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    filingDate: string;
    acceptedDate: string;
    fiscalYear: string;
    period: string;
    netIncome: number;
    depreciationAndAmortization: number;
    deferredIncomeTax: number;
    stockBasedCompensation: number;
    changeInWorkingCapital: number;
    accountsReceivables: number;
    inventory: number;
    accountsPayables: number;
    otherWorkingCapital: number;
    otherNonCashItems: number;
    netCashProvidedByOperatingActivities: number;
    investmentsInPropertyPlantAndEquipment: number;
    acquisitionsNet: number;
    purchasesOfInvestments: number;
    salesMaturitiesOfInvestments: number;
    otherInvestingActivites: number;
    netCashUsedForInvestingActivites: number;
    debtRepayment: number;
    commonStockIssued: number;
    commonStockRepurchased: number;
    dividendsPaid: number;
    otherFinancingActivites: number;
    netCashUsedProvidedByFinancingActivities: number;
    effectOfForexChangesOnCash: number;
    netChangeInCash: number;
    cashAtEndOfPeriod: number;
    cashAtBeginningOfPeriod: number;
    operatingCashFlow: number;
    capitalExpenditure: number;
    freeCashFlow: number;
  }>> {
    const params: QueryParams = { symbol };
    if (limit !== undefined) params.limit = limit;
    if (period !== undefined) params.period = period;
    return this.httpClient.get('/cash-flow-statement', params);
  }
}
