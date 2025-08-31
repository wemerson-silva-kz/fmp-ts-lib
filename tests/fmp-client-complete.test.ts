import { describe, it, expect, beforeAll } from 'bun:test';
import FMPClient from '../src/index';

describe('FMP Client - Complete Test Suite', () => {
  let client: FMPClient;

  beforeAll(() => {
    client = new FMPClient({
      apiKey: 'test-api-key',
      baseURL: 'https://financialmodelingprep.com/api/v3'
    });
  });

  describe('Core Services', () => {
    it('should initialize search service', () => {
      expect(client.search).toBeDefined();
      expect(typeof client.search.searchSymbol).toBe('function');
    });

    it('should initialize directory service', () => {
      expect(client.directory).toBeDefined();
      expect(typeof client.directory.getStockList).toBe('function');
    });

    it('should initialize analyst service', () => {
      expect(client.analyst).toBeDefined();
      expect(typeof client.analyst.getAnalystEstimates).toBe('function');
    });

    it('should initialize calendar service', () => {
      expect(client.calendar).toBeDefined();
      expect(typeof client.calendar.getEarningsCalendar).toBe('function');
    });

    it('should initialize chart service', () => {
      expect(client.chart).toBeDefined();
      expect(typeof client.chart.getHistoricalPriceFull).toBe('function');
    });

    it('should initialize company service', () => {
      expect(client.company).toBeDefined();
      expect(typeof client.company.getCompanyProfile).toBe('function');
    });
  });

  describe('Economics & ESG Services', () => {
    it('should initialize economics service', () => {
      expect(client.economics).toBeDefined();
      expect(typeof client.economics.getEconomicIndicators).toBe('function');
    });

    it('should initialize ESG service', () => {
      expect(client.esg).toBeDefined();
      expect(typeof client.esg.getESGScore).toBe('function');
    });

    it('should initialize DCF service', () => {
      expect(client.dcf).toBeDefined();
      expect(typeof client.dcf.getDCF).toBe('function');
    });
  });

  describe('Financial Statements & Analysis Services', () => {
    it('should initialize statements service', () => {
      expect(client.statements).toBeDefined();
      expect(typeof client.statements.getIncomeStatement).toBe('function');
    });

    it('should initialize form13f service', () => {
      expect(client.form13f).toBeDefined();
      expect(typeof client.form13f.getForm13F).toBe('function');
    });

    it('should initialize indexes service', () => {
      expect(client.indexes).toBeDefined();
      expect(typeof client.indexes.getMajorIndex).toBe('function');
    });
  });

  describe('Trading & Market Data Services', () => {
    it('should initialize insider trades service', () => {
      expect(client.insiderTrades).toBeDefined();
      expect(typeof client.insiderTrades.getInsiderTrading).toBe('function');
    });

    it('should initialize market performance service', () => {
      expect(client.marketPerformance).toBeDefined();
      expect(typeof client.marketPerformance.getStockMarketGainers).toBe('function');
    });

    it('should initialize market hours service', () => {
      expect(client.marketHours).toBeDefined();
      expect(typeof client.marketHours.getMarketHours).toBe('function');
    });
  });

  describe('Investment Vehicles Services', () => {
    it('should initialize ETF mutual funds service', () => {
      expect(client.etfMutualFunds).toBeDefined();
      expect(typeof client.etfMutualFunds.getETFInfo).toBe('function');
    });

    it('should initialize commodity service', () => {
      expect(client.commodity).toBeDefined();
      expect(typeof client.commodity.getCommoditiesQuotes).toBe('function');
    });

    it('should initialize fundraisers service', () => {
      expect(client.fundraisers).toBeDefined();
      expect(typeof client.fundraisers.getCrowdfundingRSSFeed).toBe('function');
    });
  });

  describe('Alternative Markets Services', () => {
    it('should initialize crypto service', () => {
      expect(client.crypto).toBeDefined();
      expect(typeof client.crypto.getCryptoQuote).toBe('function');
    });

    it('should initialize forex service', () => {
      expect(client.forex).toBeDefined();
      expect(typeof client.forex.getForexQuote).toBe('function');
    });

    it('should initialize news service', () => {
      expect(client.news).toBeDefined();
      expect(typeof client.news.getStockNews).toBe('function');
    });
  });

  describe('Technical Analysis & Quotes Services', () => {
    it('should initialize technical indicators service', () => {
      expect(client.technicalIndicators).toBeDefined();
      expect(typeof client.technicalIndicators.getTechnicalIndicators).toBe('function');
    });

    it('should initialize quote service', () => {
      expect(client.quote).toBeDefined();
      expect(typeof client.quote.getQuote).toBe('function');
    });

    it('should initialize SEC filings service', () => {
      expect(client.secFilings).toBeDefined();
      expect(typeof client.secFilings.getSECFilings).toBe('function');
    });
  });

  describe('Advanced Data Services', () => {
    it('should initialize earnings transcript service', () => {
      expect(client.earningsTranscript).toBeDefined();
      expect(typeof client.earningsTranscript.getEarningsCallTranscript).toBe('function');
    });

    it('should initialize senate service', () => {
      expect(client.senate).toBeDefined();
      expect(typeof client.senate.getSenateTrading).toBe('function');
    });

    it('should initialize bulk service', () => {
      expect(client.bulk).toBeDefined();
      expect(typeof client.bulk.getBulkQuotes).toBe('function');
    });

    it('should initialize commitment of traders service', () => {
      expect(client.commitmentOfTraders).toBeDefined();
      expect(typeof client.commitmentOfTraders.getCommitmentOfTraders).toBe('function');
    });
  });

  describe('Client Configuration', () => {
    it('should throw error without API key', () => {
      expect(() => {
        new FMPClient({ apiKey: '' });
      }).toThrow('API key is required');
    });

    it('should initialize with valid config', () => {
      const testClient = new FMPClient({
        apiKey: 'test-key',
        baseURL: 'https://test.com',
        timeout: 5000
      });
      expect(testClient).toBeDefined();
    });
  });

  describe('Service Method Availability', () => {
    it('should have all expected methods on economics service', () => {
      const methods = [
        'getEconomicIndicators'
      ];
      methods.forEach(method => {
        expect(typeof client.economics[method]).toBe('function');
      });
    });

    it('should have all expected methods on crypto service', () => {
      const methods = [
        'getCryptoQuote',
        'getAllCryptoQuotes',
        'getHistoricalCryptoPrices',
        'getCryptoMarketData',
        'getCryptoGainers',
        'getCryptoLosers'
      ];
      methods.forEach(method => {
        expect(typeof client.crypto[method]).toBe('function');
      });
    });

    it('should have all expected methods on forex service', () => {
      const methods = [
        'getForexQuote',
        'getAllForexQuotes',
        'getHistoricalForexPrices',
        'getMajorCurrencyPairs',
        'getCurrencyExchangeRates'
      ];
      methods.forEach(method => {
        expect(typeof client.forex[method]).toBe('function');
      });
    });

    it('should have all expected methods on technical indicators service', () => {
      const methods = [
        'getTechnicalIndicators',
        'getDailyTechnicalIndicators',
        'getSMA',
        'getEMA',
        'getRSI',
        'getMACD',
        'getBollingerBands'
      ];
      methods.forEach(method => {
        expect(typeof client.technicalIndicators[method]).toBe('function');
      });
    });

    it('should have all expected methods on bulk service', () => {
      const methods = [
        'getBulkQuotes',
        'getBulkCompanyProfiles',
        'getBulkFinancialRatios',
        'getBulkKeyMetrics',
        'getBulkIncomeStatements',
        'getBulkBalanceSheetStatements'
      ];
      methods.forEach(method => {
        expect(typeof client.bulk[method]).toBe('function');
      });
    });
  });

  describe('Service Integration', () => {
    it('should have consistent service structure', () => {
      const services = [
        'search', 'directory', 'analyst', 'calendar', 'chart', 'company',
        'economics', 'esg', 'dcf', 'statements', 'form13f', 'indexes',
        'insiderTrades', 'marketPerformance', 'marketHours',
        'etfMutualFunds', 'commodity', 'fundraisers',
        'crypto', 'forex', 'news',
        'technicalIndicators', 'quote', 'secFilings',
        'earningsTranscript', 'senate', 'bulk', 'commitmentOfTraders'
      ];

      services.forEach(serviceName => {
        expect(client[serviceName]).toBeDefined();
        expect(typeof client[serviceName]).toBe('object');
      });
    });

    it('should have utility methods', () => {
      expect(typeof client.testConnection).toBe('function');
      expect(typeof client.getAPIUsage).toBe('function');
    });
  });
});

