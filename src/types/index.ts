// Base types
export interface FMPConfig {
  apiKey: string;
  baseUrl?: string;
  // Enhanced features (optional)
  cache?: {
    enabled?: boolean;
    ttl?: number;
    maxSize?: number;
  };
  retry?: {
    enabled?: boolean;
    maxAttempts?: number;
    backoffMs?: number;
  };
  metrics?: {
    enabled?: boolean;
  };
}

export interface FMPResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Search types
export interface StockSymbol {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

export interface CompanySearch {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

export interface CIKSearch {
  cik: string;
  name: string;
}

// Directory types
export interface StockList {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
  exchangeShortName: string;
  type: string;
}

export interface FinancialStatementSymbol {
  symbol: string;
  cik: string;
}

// Company types
export interface CompanyProfile {
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
}

export interface KeyExecutives {
  title: string;
  name: string;
  pay: number;
  currencyPay: string;
  gender: string;
  yearBorn: number;
  titleSince: string;
}

export interface CompanyRating {
  symbol: string;
  date: string;
  rating: string;
  ratingScore: number;
  ratingRecommendation: string;
  ratingDetailsDCFScore: number;
  ratingDetailsDCFRecommendation: string;
  ratingDetailsROEScore: number;
  ratingDetailsROERecommendation: string;
  ratingDetailsROAScore: number;
  ratingDetailsROARecommendation: string;
  ratingDetailsDEScore: number;
  ratingDetailsDERecommendation: string;
  ratingDetailsPEScore: number;
  ratingDetailsPERecommendation: string;
  ratingDetailsPBScore: number;
  ratingDetailsPBRecommendation: string;
}

export interface CompanyCoreInformation {
  cik: string;
  symbol: string;
  exchange: string;
  sicCode: string;
  sicDescription: string;
  stateLocation: string;
  stateOfIncorporation: string;
  fiscalYearEnd: string;
  businessAddress: string;
  mailingAddress: string;
  taxIdentificationNumber: string;
  registrantName: string;
}

// Quote types
export interface Quote {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  exchange: string;
  volume: number;
  avgVolume: number;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

// Financial Statement types
export interface IncomeStatement {
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
}

// Historical Price types
export interface HistoricalPrice {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
  vwap: number;
  label: string;
  changeOverTime: number;
}

// Analyst types
export interface AnalystEstimate {
  symbol: string;
  date: string;
  estimatedRevenueLow: number;
  estimatedRevenueHigh: number;
  estimatedRevenueAvg: number;
  estimatedEbitdaLow: number;
  estimatedEbitdaHigh: number;
  estimatedEbitdaAvg: number;
  estimatedEbitLow: number;
  estimatedEbitHigh: number;
  estimatedEbitAvg: number;
  estimatedNetIncomeLow: number;
  estimatedNetIncomeHigh: number;
  estimatedNetIncomeAvg: number;
  estimatedSgaExpenseLow: number;
  estimatedSgaExpenseHigh: number;
  estimatedSgaExpenseAvg: number;
  estimatedEpsAvg: number;
  estimatedEpsHigh: number;
  estimatedEpsLow: number;
  numberAnalystEstimatedRevenue: number;
  numberAnalystEstimatedEps: number;
}

// Calendar types
export interface EarningsCalendar {
  date: string;
  symbol: string;
  eps: number;
  epsEstimated: number;
  time: string;
  revenue: number;
  revenueEstimated: number;
  updatedFromDate: string;
  fiscalDateEnding: string;
}

// News types
export interface StockNews {
  symbol: string;
  publishedDate: string;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
}

// Market Performance types
export interface MarketGainer {
  symbol: string;
  name: string;
  change: number;
  price: number;
  changesPercentage: number;
}

// ESG types
export interface ESGScore {
  symbol: string;
  cik: string;
  companyName: string;
  formType: string;
  filingDate: string;
  acceptanceTime: string;
  environmentalScore: number;
  socialScore: number;
  governanceScore: number;
  ESGScore: number;
}

// Crypto types
export interface CryptoQuote {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  exchange: string;
  volume: number;
  avgVolume: number;
  open: number;
  previousClose: number;
  timestamp: number;
}

// Forex types
export interface ForexQuote {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  open: number;
  previousClose: number;
  timestamp: number;
}

// ETF types
export interface ETFInfo {
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
}

// Insider Trading types
export interface InsiderTrading {
  symbol: string;
  filingDate: string;
  transactionDate: string;
  reportingCik: string;
  transactionType: string;
  securitiesOwned: number;
  companyCik: string;
  reportingName: string;
  typeOfOwner: string;
  acquistionOrDisposition: string;
  formType: string;
  securitiesTransacted: number;
  price: number;
  securityName: string;
  link: string;
}

// Technical Indicators types
export interface TechnicalIndicator {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  sma: number;
  ema: number;
  wma: number;
  rsi: number;
  adx: number;
  standardDeviation: number;
}

// Key Metrics types
export interface KeyMetrics {
  date: string;
  symbol: string;
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
  researchAndDevelopmentToRevenue: number;
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
  daysSalesOutstanding: number;
  daysPayablesOutstanding: number;
  daysOfInventoryOnHand: number;
  receivablesTurnover: number;
  payablesTurnover: number;
  inventoryTurnover: number;
  roe: number;
  capexPerShare: number;
}

export interface KeyMetricsTTM {
  date: string;
  symbol: string;
  period: string;
  revenuePerShareTTM: number;
  netIncomePerShareTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  bookValuePerShareTTM: number;
  tangibleBookValuePerShareTTM: number;
  shareholdersEquityPerShareTTM: number;
  interestDebtPerShareTTM: number;
  marketCapTTM: number;
  enterpriseValueTTM: number;
  peRatioTTM: number;
  priceToSalesRatioTTM: number;
  pocfratioTTM: number;
  pfcfRatioTTM: number;
  pbRatioTTM: number;
  ptbRatioTTM: number;
  evToSalesTTM: number;
  enterpriseValueOverEBITDATTM: number;
  evToOperatingCashFlowTTM: number;
  evToFreeCashFlowTTM: number;
  earningsYieldTTM: number;
  freeCashFlowYieldTTM: number;
  debtToEquityTTM: number;
  debtToAssetsTTM: number;
  netDebtToEBITDATTM: number;
  currentRatioTTM: number;
  interestCoverageTTM: number;
  incomeQualityTTM: number;
  dividendYieldTTM: number;
  payoutRatioTTM: number;
  salesGeneralAndAdministrativeToRevenueTTM: number;
  researchAndDevelopmentToRevenueTTM: number;
  intangiblesToTotalAssetsTTM: number;
  capexToOperatingCashFlowTTM: number;
  capexToRevenueTTM: number;
  capexToDepreciationTTM: number;
  stockBasedCompensationToRevenueTTM: number;
  grahamNumberTTM: number;
  roicTTM: number;
  returnOnTangibleAssetsTTM: number;
  grahamNetNetTTM: number;
  workingCapitalTTM: number;
  tangibleAssetValueTTM: number;
  netCurrentAssetValueTTM: number;
  investedCapitalTTM: number;
  averageReceivablesTTM: number;
  averagePayablesTTM: number;
  averageInventoryTTM: number;
  daysSalesOutstandingTTM: number;
  daysPayablesOutstandingTTM: number;
  daysOfInventoryOnHandTTM: number;
  receivablesTurnoverTTM: number;
  payablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  roeTTM: number;
  capexPerShareTTM: number;
}

// Financial Ratios types
export interface FinancialRatios {
  date: string;
  symbol: string;
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
}

export interface FinancialRatiosTTM {
  date: string;
  symbol: string;
  period: string;
  currentRatioTTM: number;
  quickRatioTTM: number;
  cashRatioTTM: number;
  daysOfSalesOutstandingTTM: number;
  daysOfInventoryOutstandingTTM: number;
  operatingCycleTTM: number;
  daysOfPayablesOutstandingTTM: number;
  cashConversionCycleTTM: number;
  grossProfitMarginTTM: number;
  operatingProfitMarginTTM: number;
  pretaxProfitMarginTTM: number;
  netProfitMarginTTM: number;
  effectiveTaxRateTTM: number;
  returnOnAssetsTTM: number;
  returnOnEquityTTM: number;
  returnOnCapitalEmployedTTM: number;
  netIncomePerEBTTTM: number;
  ebtPerEbitTTM: number;
  ebitPerRevenueTTM: number;
  debtRatioTTM: number;
  debtEquityRatioTTM: number;
  longTermDebtToCapitalizationTTM: number;
  totalDebtToCapitalizationTTM: number;
  interestCoverageTTM: number;
  cashFlowToDebtRatioTTM: number;
  companyEquityMultiplierTTM: number;
  receivablesTurnoverTTM: number;
  payablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  fixedAssetTurnoverTTM: number;
  assetTurnoverTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  payoutRatioTTM: number;
  operatingCashFlowSalesRatioTTM: number;
  freeCashFlowOperatingCashFlowRatioTTM: number;
  cashFlowCoverageRatiosTTM: number;
  shortTermCoverageRatiosTTM: number;
  capitalExpenditureCoverageRatioTTM: number;
  dividendPaidAndCapexCoverageRatioTTM: number;
  dividendPayoutRatioTTM: number;
  priceBookValueRatioTTM: number;
  priceToBookRatioTTM: number;
  priceToSalesRatioTTM: number;
  priceEarningsRatioTTM: number;
  priceToFreeCashFlowsRatioTTM: number;
  priceToOperatingCashFlowsRatioTTM: number;
  priceCashFlowRatioTTM: number;
  priceEarningsToGrowthRatioTTM: number;
  priceSalesRatioTTM: number;
  dividendYieldTTM: number;
  enterpriseValueMultipleTTM: number;
  priceFairValueTTM: number;
}

// Financial Scores types
export interface FinancialScores {
  symbol: string;
  altmanZScore: number;
  piotroskiScore: number;
  workingCapital: number;
  totalAssets: number;
  retainedEarnings: number;
  ebit: number;
  marketValue: number;
  totalLiabilities: number;
  revenue: number;
}

// Owner Earnings types
export interface OwnerEarnings {
  date: string;
  symbol: string;
  ownerEarnings: number;
  netIncome: number;
  depreciationAndAmortization: number;
  stockBasedCompensation: number;
  otherNonCashCharges: number;
  maintenanceCapex: number;
  growthCapex: number;
  totalCapex: number;
  averageShares: number;
  ownerEarningsPerShare: number;
}

// Enterprise Values types
export interface EnterpriseValues {
  date: string;
  symbol: string;
  stockPrice: number;
  numberOfShares: number;
  marketCapitalization: number;
  minusCashAndCashEquivalents: number;
  addTotalDebt: number;
  enterpriseValue: number;
}

// TTM Balance Sheet types
export interface BalanceSheetStatementTTM {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  cashAndCashEquivalentsTTM: number;
  shortTermInvestmentsTTM: number;
  cashAndShortTermInvestmentsTTM: number;
  netReceivablesTTM: number;
  inventoryTTM: number;
  otherCurrentAssetsTTM: number;
  totalCurrentAssetsTTM: number;
  propertyPlantEquipmentNetTTM: number;
  goodwillTTM: number;
  intangibleAssetsTTM: number;
  goodwillAndIntangibleAssetsTTM: number;
  longTermInvestmentsTTM: number;
  taxAssetsTTM: number;
  otherNonCurrentAssetsTTM: number;
  totalNonCurrentAssetsTTM: number;
  otherAssetsTTM: number;
  totalAssetsTTM: number;
  accountPayablesTTM: number;
  shortTermDebtTTM: number;
  taxPayablesTTM: number;
  deferredRevenueTTM: number;
  otherCurrentLiabilitiesTTM: number;
  totalCurrentLiabilitiesTTM: number;
  longTermDebtTTM: number;
  deferredRevenueNonCurrentTTM: number;
  deferredTaxLiabilitiesNonCurrentTTM: number;
  otherNonCurrentLiabilitiesTTM: number;
  totalNonCurrentLiabilitiesTTM: number;
  otherLiabilitiesTTM: number;
  capitalLeaseObligationsTTM: number;
  totalLiabilitiesTTM: number;
  preferredStockTTM: number;
  commonStockTTM: number;
  retainedEarningsTTM: number;
  accumulatedOtherComprehensiveIncomeLossTTM: number;
  othertotalStockholdersEquityTTM: number;
  totalStockholdersEquityTTM: number;
  totalEquityTTM: number;
  totalLiabilitiesAndStockholdersEquityTTM: number;
  minorityInterestTTM: number;
  totalLiabilitiesAndTotalEquityTTM: number;
  totalInvestmentsTTM: number;
  totalDebtTTM: number;
  netDebtTTM: number;
}

// TTM Cash Flow types
export interface CashFlowStatementTTM {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  netIncomeTTM: number;
  depreciationAndAmortizationTTM: number;
  deferredIncomeTaxTTM: number;
  stockBasedCompensationTTM: number;
  changeInWorkingCapitalTTM: number;
  accountsReceivablesTTM: number;
  inventoryTTM: number;
  accountsPayablesTTM: number;
  otherWorkingCapitalTTM: number;
  otherNonCashItemsTTM: number;
  netCashProvidedByOperatingActivitiesTTM: number;
  investmentsInPropertyPlantAndEquipmentTTM: number;
  acquisitionsNetTTM: number;
  purchasesOfInvestmentsTTM: number;
  salesMaturitiesOfInvestmentsTTM: number;
  otherInvestingActivitesTTM: number;
  netCashUsedForInvestingActivitesTTM: number;
  debtRepaymentTTM: number;
  commonStockIssuedTTM: number;
  commonStockRepurchasedTTM: number;
  dividendsPaidTTM: number;
  otherFinancingActivitesTTM: number;
  netCashUsedProvidedByFinancingActivitiesTTM: number;
  effectOfForexChangesOnCashTTM: number;
  netChangeInCashTTM: number;
  cashAtEndOfPeriodTTM: number;
  cashAtBeginningOfPeriodTTM: number;
  operatingCashFlowTTM: number;
  capitalExpenditureTTM: number;
  freeCashFlowTTM: number;
}

// TTM Income Statement types
export interface IncomeStatementTTM {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  revenueTTM: number;
  costOfRevenueTTM: number;
  grossProfitTTM: number;
  grossProfitRatioTTM: number;
  researchAndDevelopmentExpensesTTM: number;
  generalAndAdministrativeExpensesTTM: number;
  sellingAndMarketingExpensesTTM: number;
  sellingGeneralAndAdministrativeExpensesTTM: number;
  otherExpensesTTM: number;
  operatingExpensesTTM: number;
  costAndExpensesTTM: number;
  interestIncomeTTM: number;
  interestExpenseTTM: number;
  depreciationAndAmortizationTTM: number;
  ebitdaTTM: number;
  ebitdaratioTTM: number;
  operatingIncomeTTM: number;
  operatingIncomeRatioTTM: number;
  totalOtherIncomeExpensesNetTTM: number;
  incomeBeforeTaxTTM: number;
  incomeBeforeTaxRatioTTM: number;
  incomeTaxExpenseTTM: number;
  netIncomeTTM: number;
  netIncomeRatioTTM: number;
  epsTTM: number;
  epsdilutedTTM: number;
  weightedAverageShsOutTTM: number;
  weightedAverageShsOutDilTTM: number;
}

// Bulk types
export interface BulkRequest {
  symbols: string[];
  date?: string;
  period?: 'annual' | 'quarter';
  limit?: number;
}

// Error types
export interface FMPError {
  message: string;
  code?: string;
  status?: number;
}

// API Response wrapper
export type APIResponse<T> = Promise<T | FMPError>;

// Query parameters
export interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

// Timeframe types
export type TimeFrame = '1min' | '5min' | '15min' | '30min' | '1hour' | '4hour' | '1day';
export type Period = 'annual' | 'quarter';
export type Exchange = 'NYSE' | 'NASDAQ' | 'AMEX' | 'TSX' | 'EURONEXT' | 'LSE';

