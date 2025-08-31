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
   * Get income statement
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getIncomeStatement(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<IncomeStatement[]> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get<IncomeStatement[]>(`/income-statement/${symbol}`, params);
  }

  /**
   * Get balance sheet statement
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getBalanceSheetStatement(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    fillingDate: string;
    acceptedDate: string;
    calendarYear: string;
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
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/balance-sheet-statement/${symbol}`, params);
  }

  /**
   * Get cash flow statement
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getCashFlowStatement(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    fillingDate: string;
    acceptedDate: string;
    calendarYear: string;
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
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/cash-flow-statement/${symbol}`, params);
  }

  /**
   * Get income statement growth
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getIncomeStatementGrowth(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    growthRevenue: number;
    growthCostOfRevenue: number;
    growthGrossProfit: number;
    growthGrossProfitRatio: number;
    growthResearchAndDevelopmentExpenses: number;
    growthGeneralAndAdministrativeExpenses: number;
    growthSellingAndMarketingExpenses: number;
    growthOtherExpenses: number;
    growthOperatingExpenses: number;
    growthCostAndExpenses: number;
    growthInterestExpense: number;
    growthDepreciationAndAmortization: number;
    growthEBITDA: number;
    growthEBITDARatio: number;
    growthOperatingIncome: number;
    growthOperatingIncomeRatio: number;
    growthTotalOtherIncomeExpensesNet: number;
    growthIncomeBeforeTax: number;
    growthIncomeBeforeTaxRatio: number;
    growthIncomeTaxExpense: number;
    growthNetIncome: number;
    growthNetIncomeRatio: number;
    growthEPS: number;
    growthEPSDiluted: number;
    growthWeightedAverageShsOut: number;
    growthWeightedAverageShsOutDil: number;
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/income-statement-growth/${symbol}`, params);
  }

  /**
   * Get balance sheet statement growth
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getBalanceSheetStatementGrowth(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    growthCashAndCashEquivalents: number;
    growthShortTermInvestments: number;
    growthCashAndShortTermInvestments: number;
    growthNetReceivables: number;
    growthInventory: number;
    growthOtherCurrentAssets: number;
    growthTotalCurrentAssets: number;
    growthPropertyPlantEquipmentNet: number;
    growthGoodwill: number;
    growthIntangibleAssets: number;
    growthGoodwillAndIntangibleAssets: number;
    growthLongTermInvestments: number;
    growthTaxAssets: number;
    growthOtherNonCurrentAssets: number;
    growthTotalNonCurrentAssets: number;
    growthOtherAssets: number;
    growthTotalAssets: number;
    growthAccountPayables: number;
    growthShortTermDebt: number;
    growthTaxPayables: number;
    growthDeferredRevenue: number;
    growthOtherCurrentLiabilities: number;
    growthTotalCurrentLiabilities: number;
    growthLongTermDebt: number;
    growthDeferredRevenueNonCurrent: number;
    growthDeferredTaxLiabilitiesNonCurrent: number;
    growthOtherNonCurrentLiabilities: number;
    growthTotalNonCurrentLiabilities: number;
    growthOtherLiabilities: number;
    growthTotalLiabilities: number;
    growthPreferredStock: number;
    growthCommonStock: number;
    growthRetainedEarnings: number;
    growthAccumulatedOtherComprehensiveIncomeLoss: number;
    growthOthertotalStockholdersEquity: number;
    growthTotalStockholdersEquity: number;
    growthTotalLiabilitiesAndStockholdersEquity: number;
    growthTotalInvestments: number;
    growthTotalDebt: number;
    growthNetDebt: number;
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/balance-sheet-statement-growth/${symbol}`, params);
  }

  /**
   * Get cash flow statement growth
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getCashFlowStatementGrowth(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    growthNetIncome: number;
    growthDepreciationAndAmortization: number;
    growthDeferredIncomeTax: number;
    growthStockBasedCompensation: number;
    growthChangeInWorkingCapital: number;
    growthAccountsReceivables: number;
    growthInventory: number;
    growthAccountsPayables: number;
    growthOtherWorkingCapital: number;
    growthOtherNonCashItems: number;
    growthNetCashProvidedByOperatingActivities: number;
    growthInvestmentsInPropertyPlantAndEquipment: number;
    growthAcquisitionsNet: number;
    growthPurchasesOfInvestments: number;
    growthSalesMaturitiesOfInvestments: number;
    growthOtherInvestingActivites: number;
    growthNetCashUsedForInvestingActivites: number;
    growthDebtRepayment: number;
    growthCommonStockIssued: number;
    growthCommonStockRepurchased: number;
    growthDividendsPaid: number;
    growthOtherFinancingActivites: number;
    growthNetCashUsedProvidedByFinancingActivities: number;
    growthEffectOfForexChangesOnCash: number;
    growthNetChangeInCash: number;
    growthCashAtEndOfPeriod: number;
    growthCashAtBeginningOfPeriod: number;
    growthOperatingCashFlow: number;
    growthCapitalExpenditure: number;
    growthFreeCashFlow: number;
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/cash-flow-statement-growth/${symbol}`, params);
  }

  /**
   * Get financial statement full as reported
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getFinancialStatementFullAsReported(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    documenttype: string;
    documentannualreport: boolean;
    documentperiodenddate: string;
    documenttransitionreport: boolean;
    entityfilenumber: string;
    entityregistrantname: string;
    entitycentralindexkey: string;
    currentfiscalyearenddate: string;
    entitypublicfloat: number;
    entitycommonstocksharesoutstanding: number;
    documentfiscalyearfocus: string;
    documentfiscalperiodfocus: string;
    amendments: boolean;
    [key: string]: any; // For additional dynamic fields
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/financial-statement-full-as-reported/${symbol}`, params);
  }

  /**
   * Get key metrics for a company
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getKeyMetrics(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<KeyMetrics[]> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get<KeyMetrics[]>(`/key-metrics?symbol=${symbol}`, params);
  }

  /**
   * Get key metrics TTM (Trailing Twelve Months)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getKeyMetricsTTM(symbol: string): Promise<KeyMetricsTTM> {
    const result = await this.httpClient.get<KeyMetricsTTM[]>(`/key-metrics-ttm?symbol=${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error('No key metrics TTM data found');
  }

  /**
   * Get financial ratios for a company
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getFinancialRatios(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<FinancialRatios[]> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get<FinancialRatios[]>(`/ratios?symbol=${symbol}`, params);
  }

  /**
   * Get financial ratios TTM (Trailing Twelve Months)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getFinancialRatiosTTM(symbol: string): Promise<FinancialRatiosTTM> {
    const result = await this.httpClient.get<FinancialRatiosTTM[]>(`/ratios-ttm?symbol=${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error('No financial ratios TTM data found');
  }

  /**
   * Get financial scores (Altman Z-Score, Piotroski Score, etc.)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getFinancialScores(symbol: string): Promise<FinancialScores> {
    const result = await this.httpClient.get<FinancialScores[]>(`/financial-scores?symbol=${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error('No financial scores data found');
  }

  /**
   * Get owner earnings
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getOwnerEarnings(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<OwnerEarnings[]> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get<OwnerEarnings[]>(`/owner-earnings?symbol=${symbol}`, params);
  }

  /**
   * Get enterprise values
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getEnterpriseValues(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<EnterpriseValues[]> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get<EnterpriseValues[]>(`/enterprise-values?symbol=${symbol}`, params);
  }

  /**
   * Get income statement TTM (Trailing Twelve Months)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getIncomeStatementTTM(symbol: string): Promise<IncomeStatementTTM> {
    const result = await this.httpClient.get<IncomeStatementTTM[]>(`/income-statement-ttm?symbol=${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error('No income statement TTM data found');
  }

  /**
   * Get balance sheet statement TTM (Trailing Twelve Months)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getBalanceSheetStatementTTM(symbol: string): Promise<BalanceSheetStatementTTM> {
    const result = await this.httpClient.get<BalanceSheetStatementTTM[]>(`/balance-sheet-statement-ttm?symbol=${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error('No balance sheet TTM data found');
  }

  /**
   * Get cash flow statement TTM (Trailing Twelve Months)
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getCashFlowStatementTTM(symbol: string): Promise<CashFlowStatementTTM> {
    const result = await this.httpClient.get<CashFlowStatementTTM[]>(`/cash-flow-statement-ttm?symbol=${symbol}`);
    if (Array.isArray(result) && result.length > 0 && result[0]) {
      return result[0];
    }
    throw new Error('No cash flow TTM data found');
  }

  /**
   * Get latest financial statements for all companies
   * @param page - Page number for pagination
   * @param limit - Maximum number of results per page
   */
  async getLatestFinancialStatements(page: number = 0, limit: number = 250): Promise<Array<{
    symbol: string;
    date: string;
    period: string;
    revenue: number;
    netIncome: number;
    totalAssets: number;
    totalLiabilities: number;
    totalEquity: number;
    operatingCashFlow: number;
    freeCashFlow: number;
    link: string;
  }>> {
    const params: QueryParams = { page, limit };
    return this.httpClient.get('/latest-financial-statements', params);
  }

  /**
   * Get revenue product segmentation
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param structure - Structure type ("flat" or "detailed")
   */
  async getRevenueProductSegmentation(
    symbol: string, 
    period: Period = 'annual',
    structure: 'flat' | 'detailed' = 'flat'
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    productSegment: string;
    revenue: number;
    revenuePercentage: number;
  }>> {
    const params: QueryParams = { period, structure };
    return this.httpClient.get(`/revenue-product-segmentation?symbol=${symbol}`, params);
  }

  /**
   * Get revenue geographic segmentation
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param structure - Structure type ("flat" or "detailed")
   */
  async getRevenueGeographicSegmentation(
    symbol: string, 
    period: Period = 'annual',
    structure: 'flat' | 'detailed' = 'flat'
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    geographicSegment: string;
    revenue: number;
    revenuePercentage: number;
  }>> {
    const params: QueryParams = { period, structure };
    return this.httpClient.get(`/revenue-geographic-segmentation?symbol=${symbol}`, params);
  }

  /**
   * Get as reported income statements
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getAsReportedIncomeStatements(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    reportedCurrency: string;
    [key: string]: any; // For dynamic reported fields
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/income-statement-as-reported?symbol=${symbol}`, params);
  }

  /**
   * Get as reported balance sheet statements
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getAsReportedBalanceSheetStatements(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    reportedCurrency: string;
    [key: string]: any; // For dynamic reported fields
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/balance-sheet-statement-as-reported?symbol=${symbol}`, params);
  }

  /**
   * Get as reported cash flow statements
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param period - Period type ("annual" or "quarter")
   * @param limit - Maximum number of results
   */
  async getAsReportedCashFlowStatements(
    symbol: string, 
    period: Period = 'annual',
    limit: number = 20
  ): Promise<Array<{
    date: string;
    symbol: string;
    period: string;
    reportedCurrency: string;
    [key: string]: any; // For dynamic reported fields
  }>> {
    const params: QueryParams = { period, limit };
    return this.httpClient.get(`/cash-flow-statement-as-reported?symbol=${symbol}`, params);
  }

  /**
   * Get financial reports dates
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getFinancialReportsDates(symbol: string): Promise<Array<{
    symbol: string;
    year: number;
    period: string;
    linkXlsx: string;
    linkJson: string;
  }>> {
    return this.httpClient.get(`/financial-reports-dates?symbol=${symbol}`);
  }

  /**
   * Get financial reports in JSON format
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the report
   * @param period - Period of the report ("FY" for annual, "Q1", "Q2", "Q3", "Q4" for quarters)
   */
  async getFinancialReportsJSON(
    symbol: string, 
    year: number, 
    period: string
  ): Promise<{
    symbol: string;
    year: number;
    period: string;
    incomeStatement: any;
    balanceSheet: any;
    cashFlow: any;
  }> {
    const params: QueryParams = { symbol, year, period };
    return this.httpClient.get('/financial-reports-json', params);
  }

  /**
   * Get financial reports in XLSX format URL
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the report
   * @param period - Period of the report ("FY" for annual, "Q1", "Q2", "Q3", "Q4" for quarters)
   */
  getFinancialReportsXLSXUrl(symbol: string, year: number, period: string): string {
    return `/financial-reports-xlsx?symbol=${symbol}&year=${year}&period=${period}`;
  }
}

