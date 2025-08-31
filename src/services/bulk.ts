import { getFirstOrItem } from '../utils/index.js';
import type { Quote, CompanyProfile, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class BulkService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get bulk stock quotes
   * @param exchange - Exchange name (optional, e.g., "NASDAQ", "NYSE")
   */
  async getBulkQuotes(exchange?: string): Promise<Quote[]> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    return this.httpClient.get<Quote[]>('/bulk/quotes', params);
  }

  /**
   * Get bulk company profiles
   * @param exchange - Exchange name (optional)
   */
  async getBulkCompanyProfiles(exchange?: string): Promise<CompanyProfile[]> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    return this.httpClient.get<CompanyProfile[]>('/bulk/company-profiles', params);
  }

  /**
   * Get bulk financial ratios
   * @param exchange - Exchange name (optional)
   * @param period - Period type ("annual" or "quarter")
   */
  async getBulkFinancialRatios(
    exchange?: string,
    period: 'annual' | 'quarter' = 'annual'
  ): Promise<Array<{
    symbol: string;
    date: string;
    period: string;
    currentRatio: number;
    quickRatio: number;
    cashRatio: number;
    daysOfSalesOutstanding: number;
    daysOfInventoryOutstanding: number;
    operatingCycle: number;
    daysOfPayablesOutstanding: number;
    cashConversionCycle: number;
    grossProfitMargin: number;
    operatingProfitMargin: number;
    pretaxProfitMargin: number;
    netProfitMargin: number;
    effectiveTaxRate: number;
    returnOnAssets: number;
    returnOnEquity: number;
    returnOnCapitalEmployed: number;
    netIncomePerEBT: number;
    ebtPerEbit: number;
    ebitPerRevenue: number;
    debtRatio: number;
    debtEquityRatio: number;
    longTermDebtToCapitalization: number;
    totalDebtToCapitalization: number;
    interestCoverage: number;
    cashFlowToDebtRatio: number;
    companyEquityMultiplier: number;
    receivablesTurnover: number;
    payablesTurnover: number;
    inventoryTurnover: number;
    fixedAssetTurnover: number;
    assetTurnover: number;
    operatingCashFlowPerShare: number;
    freeCashFlowPerShare: number;
    cashPerShare: number;
    payoutRatio: number;
    operatingCashFlowSalesRatio: number;
    freeCashFlowOperatingCashFlowRatio: number;
    cashFlowCoverageRatios: number;
    shortTermCoverageRatios: number;
    capitalExpenditureCoverageRatio: number;
    dividendPaidAndCapexCoverageRatio: number;
    dividendPayoutRatio: number;
    priceBookValueRatio: number;
    priceToBookRatio: number;
    priceToSalesRatio: number;
    priceEarningsRatio: number;
    priceToFreeCashFlowsRatio: number;
    priceToOperatingCashFlowsRatio: number;
    priceCashFlowRatio: number;
    priceEarningsToGrowthRatio: number;
    priceSalesRatio: number;
    dividendYield: number;
    enterpriseValueMultiple: number;
    priceFairValue: number;
  }>> {
    const params: QueryParams = { period };
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/bulk/financial-ratios', params);
  }

  /**
   * Get bulk key metrics
   * @param exchange - Exchange name (optional)
   * @param period - Period type ("annual" or "quarter")
   */
  async getBulkKeyMetrics(
    exchange?: string,
    period: 'annual' | 'quarter' = 'annual'
  ): Promise<Array<{
    symbol: string;
    date: string;
    period: string;
    revenuePerShare: number;
    netIncomePerShare: number;
    operatingCashFlowPerShare: number;
    freeCashFlowPerShare: number;
    cashPerShare: number;
    bookValuePerShare: number;
    tangibleBookValuePerShare: number;
    shareholdersEquityPerShare: number;
    interestDebtPerShare: number;
    marketCap: number;
    enterpriseValue: number;
    peRatio: number;
    priceToSalesRatio: number;
    pocfratio: number;
    pfcfRatio: number;
    pbRatio: number;
    ptbRatio: number;
    evToSales: number;
    enterpriseValueOverEBITDA: number;
    evToOperatingCashFlow: number;
    evToFreeCashFlow: number;
    earningsYield: number;
    freeCashFlowYield: number;
    debtToEquity: number;
    debtToAssets: number;
    netDebtToEBITDA: number;
    currentRatio: number;
    interestCoverage: number;
    incomeQuality: number;
    dividendYield: number;
    payoutRatio: number;
    salesGeneralAndAdministrativeToRevenue: number;
    researchAndDdevelopementToRevenue: number;
    intangiblesToTotalAssets: number;
    capexToOperatingCashFlow: number;
    capexToRevenue: number;
    capexToDepreciation: number;
    stockBasedCompensationToRevenue: number;
    grahamNumber: number;
    roic: number;
    returnOnTangibleAssets: number;
    grahamNetNet: number;
    workingCapital: number;
    tangibleAssetValue: number;
    netCurrentAssetValue: number;
    investedCapital: number;
    averageReceivables: number;
    averagePayables: number;
    averageInventory: number;
    daysSalesInReceivables: number;
    daysPayablesOutstanding: number;
    daysOfInventoryOnHand: number;
    receivablesTurnover: number;
    payablesTurnover: number;
    inventoryTurnover: number;
    roe: number;
    capexPerShare: number;
  }>> {
    const params: QueryParams = { period };
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/bulk/key-metrics', params);
  }

  /**
   * Get bulk income statements
   * @param exchange - Exchange name (optional)
   * @param period - Period type ("annual" or "quarter")
   * @param year - Specific year (optional)
   */
  async getBulkIncomeStatements(
    exchange?: string,
    period: 'annual' | 'quarter' = 'annual',
    year?: number
  ): Promise<Array<{
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    fillingDate: string;
    acceptedDate: string;
    calendarYear: string;
    period: string;
    revenue: number;
    costOfRevenue: number;
    grossProfit: number;
    grossProfitRatio: number;
    researchAndDevelopmentExpenses: number;
    generalAndAdministrativeExpenses: number;
    sellingAndMarketingExpenses: number;
    sellingGeneralAndAdministrativeExpenses: number;
    otherExpenses: number;
    operatingExpenses: number;
    costAndExpenses: number;
    interestIncome: number;
    interestExpense: number;
    depreciationAndAmortization: number;
    ebitda: number;
    ebitdaratio: number;
    operatingIncome: number;
    operatingIncomeRatio: number;
    totalOtherIncomeExpensesNet: number;
    incomeBeforeTax: number;
    incomeBeforeTaxRatio: number;
    incomeTaxExpense: number;
    netIncome: number;
    netIncomeRatio: number;
    eps: number;
    epsdiluted: number;
    weightedAverageShsOut: number;
    weightedAverageShsOutDil: number;
    link: string;
    finalLink: string;
  }>> {
    const params: QueryParams = { period };
    if (exchange) params.exchange = exchange;
    if (year) params.year = year;
    return this.httpClient.get('/bulk/income-statements', params);
  }

  /**
   * Get bulk balance sheet statements
   * @param exchange - Exchange name (optional)
   * @param period - Period type ("annual" or "quarter")
   * @param year - Specific year (optional)
   */
  async getBulkBalanceSheetStatements(
    exchange?: string,
    period: 'annual' | 'quarter' = 'annual',
    year?: number
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
    const params: QueryParams = { period };
    if (exchange) params.exchange = exchange;
    if (year) params.year = year;
    return this.httpClient.get('/bulk/balance-sheet-statements', params);
  }

  /**
   * Get bulk cash flow statements
   * @param exchange - Exchange name (optional)
   * @param period - Period type ("annual" or "quarter")
   * @param year - Specific year (optional)
   */
  async getBulkCashFlowStatements(
    exchange?: string,
    period: 'annual' | 'quarter' = 'annual',
    year?: number
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
    const params: QueryParams = { period };
    if (exchange) params.exchange = exchange;
    if (year) params.year = year;
    return this.httpClient.get('/bulk/cash-flow-statements', params);
  }

  /**
   * Get bulk earnings data
   * @param exchange - Exchange name (optional)
   */
  async getBulkEarnings(exchange?: string): Promise<Array<{
    date: string;
    symbol: string;
    eps: number;
    epsEstimated: number;
    time: string;
    revenue: number;
    revenueEstimated: number;
    updatedFromDate: string;
    fiscalDateEnding: string;
  }>> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/bulk/earnings', params);
  }

  /**
   * Get bulk dividend data
   * @param exchange - Exchange name (optional)
   */
  async getBulkDividends(exchange?: string): Promise<Array<{
    date: string;
    label: string;
    adjDividend: number;
    symbol: string;
    dividend: number;
    recordDate: string;
    paymentDate: string;
    declarationDate: string;
  }>> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/bulk/dividends', params);
  }

  /**
   * Get bulk stock splits data
   * @param exchange - Exchange name (optional)
   */
  async getBulkStockSplits(exchange?: string): Promise<Array<{
    date: string;
    label: string;
    symbol: string;
    numerator: number;
    denominator: number;
  }>> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    return this.httpClient.get('/bulk/stock-splits', params);
  }

  /**
   * Get bulk market data summary
   * @param exchange - Exchange name (optional)
   */
  async getBulkMarketSummary(exchange?: string): Promise<{
    exchange?: string;
    totalCompanies: number;
    totalMarketCap: number;
    averageMarketCap: number;
    totalVolume: number;
    averageVolume: number;
    gainers: number;
    losers: number;
    unchanged: number;
    topGainer: {
      symbol: string;
      changesPercentage: number;
    };
    topLoser: {
      symbol: string;
      changesPercentage: number;
    };
    mostActive: {
      symbol: string;
      volume: number;
    };
    lastUpdated: string;
  }> {
    const params: QueryParams = {};
    if (exchange) params.exchange = exchange;
    const result = await this.httpClient.get('/bulk/market-summary', params);
    return getFirstOrItem(result);
  }
}

