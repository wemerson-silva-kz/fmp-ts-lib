import { describe, it, expect, beforeAll } from 'bun:test';
import FMPClient from '../src/index.js';

describe('FMP Client', () => {
  let client: FMPClient;

  beforeAll(() => {
    // Use a demo API key for testing
    client = new FMPClient({
      apiKey: 'demo'
    });
  });

  describe('Client Initialization', () => {
    it('should create client with API key', () => {
      expect(client).toBeDefined();
      expect(client.search).toBeDefined();
      expect(client.directory).toBeDefined();
      expect(client.analyst).toBeDefined();
      expect(client.calendar).toBeDefined();
      expect(client.chart).toBeDefined();
      expect(client.company).toBeDefined();
    });

    it('should throw error without API key', () => {
      expect(() => {
        new FMPClient({ apiKey: '' });
      }).toThrow('API key is required');
    });
  });

  describe('Search Service', () => {
    it('should have search methods', () => {
      expect(typeof client.search.searchSymbol).toBe('function');
      expect(typeof client.search.searchCompanyName).toBe('function');
      expect(typeof client.search.searchByCIK).toBe('function');
      expect(typeof client.search.searchByCUSIP).toBe('function');
      expect(typeof client.search.searchByISIN).toBe('function');
      expect(typeof client.search.companyScreener).toBe('function');
      expect(typeof client.search.searchExchangeVariants).toBe('function');
    });
  });

  describe('Directory Service', () => {
    it('should have directory methods', () => {
      expect(typeof client.directory.getStockList).toBe('function');
      expect(typeof client.directory.getFinancialStatementSymbolsList).toBe('function');
      expect(typeof client.directory.getCIKList).toBe('function');
      expect(typeof client.directory.getSymbolChangesList).toBe('function');
      expect(typeof client.directory.getETFList).toBe('function');
      expect(typeof client.directory.getActivelyTradingList).toBe('function');
    });
  });

  describe('Analyst Service', () => {
    it('should have analyst methods', () => {
      expect(typeof client.analyst.getAnalystEstimates).toBe('function');
      expect(typeof client.analyst.getPriceTarget).toBe('function');
      expect(typeof client.analyst.getPriceTargetSummary).toBe('function');
      expect(typeof client.analyst.getAnalystRecommendations).toBe('function');
      expect(typeof client.analyst.getUpgradesDowngrades).toBe('function');
    });
  });

  describe('Calendar Service', () => {
    it('should have calendar methods', () => {
      expect(typeof client.calendar.getEarningsCalendar).toBe('function');
      expect(typeof client.calendar.getIPOCalendar).toBe('function');
      expect(typeof client.calendar.getStockSplitCalendar).toBe('function');
      expect(typeof client.calendar.getDividendCalendar).toBe('function');
      expect(typeof client.calendar.getEconomicCalendar).toBe('function');
    });
  });

  describe('Chart Service', () => {
    it('should have chart methods', () => {
      expect(typeof client.chart.getHistoricalPriceFull).toBe('function');
      expect(typeof client.chart.getHistoricalDailyPrices).toBe('function');
      expect(typeof client.chart.getHistoricalIntradayPrices).toBe('function');
      expect(typeof client.chart.getQuote).toBe('function');
      expect(typeof client.chart.getQuoteShort).toBe('function');
      expect(typeof client.chart.getBatchQuote).toBe('function');
      expect(typeof client.chart.getRealTimePrice).toBe('function');
    });
  });

  describe('Company Service', () => {
    it('should have company methods', () => {
      expect(typeof client.company.getCompanyProfile).toBe('function');
      expect(typeof client.company.getKeyExecutives).toBe('function');
      expect(typeof client.company.getMarketCapitalization).toBe('function');
      expect(typeof client.company.getCompanyRating).toBe('function');
      expect(typeof client.company.getHistoricalRating).toBe('function');
      expect(typeof client.company.getCompanyCoreInformation).toBe('function');
      expect(typeof client.company.getCompanyOutlook).toBe('function');
      expect(typeof client.company.getStockPeers).toBe('function');
      expect(typeof client.company.getEmployeesCount).toBe('function');
      expect(typeof client.company.getCompanyNotes).toBe('function');
      expect(typeof client.company.getHistoricalEmployeesCount).toBe('function');
    });
  });

  describe('Statements Service', () => {
    it('should have statement methods', () => {
      expect(typeof client.statements.getIncomeStatement).toBe('function');
      expect(typeof client.statements.getBalanceSheetStatement).toBe('function');
      expect(typeof client.statements.getCashFlowStatement).toBe('function');
      expect(typeof client.statements.getIncomeStatementGrowth).toBe('function');
      expect(typeof client.statements.getBalanceSheetStatementGrowth).toBe('function');
      expect(typeof client.statements.getCashFlowStatementGrowth).toBe('function');
      expect(typeof client.statements.getFinancialStatementFullAsReported).toBe('function');
    });

    it('should have key metrics methods', () => {
      expect(typeof client.statements.getKeyMetrics).toBe('function');
      expect(typeof client.statements.getKeyMetricsTTM).toBe('function');
      expect(typeof client.statements.getFinancialRatios).toBe('function');
      expect(typeof client.statements.getFinancialRatiosTTM).toBe('function');
      expect(typeof client.statements.getFinancialScores).toBe('function');
      expect(typeof client.statements.getOwnerEarnings).toBe('function');
      expect(typeof client.statements.getEnterpriseValues).toBe('function');
    });

    it('should have TTM statement methods', () => {
      expect(typeof client.statements.getIncomeStatementTTM).toBe('function');
      expect(typeof client.statements.getBalanceSheetStatementTTM).toBe('function');
      expect(typeof client.statements.getCashFlowStatementTTM).toBe('function');
      expect(typeof client.statements.getLatestFinancialStatements).toBe('function');
    });

    it('should have segmentation methods', () => {
      expect(typeof client.statements.getRevenueProductSegmentation).toBe('function');
      expect(typeof client.statements.getRevenueGeographicSegmentation).toBe('function');
    });

    it('should have as reported methods', () => {
      expect(typeof client.statements.getAsReportedIncomeStatements).toBe('function');
      expect(typeof client.statements.getAsReportedBalanceSheetStatements).toBe('function');
      expect(typeof client.statements.getAsReportedCashFlowStatements).toBe('function');
    });

    it('should have financial reports methods', () => {
      expect(typeof client.statements.getFinancialReportsDates).toBe('function');
      expect(typeof client.statements.getFinancialReportsJSON).toBe('function');
      expect(typeof client.statements.getFinancialReportsXLSXUrl).toBe('function');
    });
  });
});

describe('Utility Functions', () => {
  it('should validate symbols correctly', async () => {
    const { validateSymbol } = await import('../src/utils/index.js');
    
    expect(validateSymbol('AAPL')).toBe(true);
    expect(validateSymbol('GOOGL')).toBe(true);
    expect(validateSymbol('MSFT')).toBe(true);
    expect(validateSymbol('invalid')).toBe(false);
    expect(validateSymbol('TOOLONG')).toBe(false);
    expect(validateSymbol('123')).toBe(false);
  });

  it('should validate API keys correctly', async () => {
    const { validateApiKey } = await import('../src/utils/index.js');
    
    expect(validateApiKey('valid-key')).toBe(true);
    expect(validateApiKey('demo')).toBe(true);
    expect(validateApiKey('')).toBe(false);
  });

  it('should format dates correctly', async () => {
    const { formatDate } = await import('../src/utils/index.js');
    
    const date = new Date('2023-12-25');
    expect(formatDate(date)).toBe('2023-12-25');
  });

  it('should build symbol lists correctly', async () => {
    const { buildSymbolList } = await import('../src/utils/index.js');
    
    expect(buildSymbolList(['aapl', 'googl', 'msft'])).toBe('AAPL,GOOGL,MSFT');
    expect(buildSymbolList(['AAPL'])).toBe('AAPL');
  });

  it('should validate timeframes correctly', async () => {
    const { isValidTimeFrame } = await import('../src/utils/index.js');
    
    expect(isValidTimeFrame('1min')).toBe(true);
    expect(isValidTimeFrame('5min')).toBe(true);
    expect(isValidTimeFrame('1day')).toBe(true);
    expect(isValidTimeFrame('invalid')).toBe(false);
  });

  it('should validate periods correctly', async () => {
    const { isValidPeriod } = await import('../src/utils/index.js');
    
    expect(isValidPeriod('annual')).toBe(true);
    expect(isValidPeriod('quarter')).toBe(true);
    expect(isValidPeriod('invalid')).toBe(false);
  });
});

