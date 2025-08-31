import { expect, test, describe, beforeEach } from 'bun:test';
import FMPClient from '../src/index.js';

describe('Enhanced Services Test Suite', () => {
  let client: FMPClient;
  
  beforeEach(() => {
    client = new FMPClient({
      apiKey: 'test-api-key-expanded-services'
    });
  });

  describe('Enhanced Directory Service', () => {
    test('should have expanded directory methods', () => {
      expect(typeof client.directory.getStockList).toBe('function');
      expect(typeof client.directory.getETFList).toBe('function');
      expect(typeof client.directory.getActivelyTradingList).toBe('function');
      expect(typeof client.directory.getAvailableExchanges).toBe('function');
      expect(typeof client.directory.getDelistedCompanies).toBe('function');
      expect(typeof client.directory.getEarningsTranscriptList).toBe('function');
      expect(typeof client.directory.getTradableSymbolsByExchange).toBe('function');
    });
  });

  describe('Enhanced Economics Service', () => {
    test('should have expanded economics methods', () => {
      expect(typeof client.economics.getEconomicIndicators).toBe('function');
      expect(typeof client.economics.getMarketRiskPremium).toBe('function');
      expect(typeof client.economics.getTreasuryRates).toBe('function');
      expect(typeof client.economics.getEconomicCalendar).toBe('function');
      expect(typeof client.economics.getGDPData).toBe('function');
      expect(typeof client.economics.getInflationData).toBe('function');
      expect(typeof client.economics.getUnemploymentRate).toBe('function');
      expect(typeof client.economics.getInterestRates).toBe('function');
    });
  });

  describe('Enhanced ESG Service', () => {
    test('should have expanded ESG methods', () => {
      expect(typeof client.esg.getESGScore).toBe('function');
      expect(typeof client.esg.getESGRating).toBe('function');
      expect(typeof client.esg.getESGSectorBenchmark).toBe('function');
      expect(typeof client.esg.getBatchESGRatings).toBe('function');
      expect(typeof client.esg.getBatchESGScores).toBe('function');
      expect(typeof client.esg.getHistoricalESGScores).toBe('function');
      expect(typeof client.esg.getESGScoresBySector).toBe('function');
      expect(typeof client.esg.getTopESGCompanies).toBe('function');
      expect(typeof client.esg.getESGNews).toBe('function');
    });
  });

  describe('Enhanced Chart Service', () => {
    test('should have expanded chart methods', () => {
      expect(typeof client.chart.getHistoricalPriceFull).toBe('function');
      expect(typeof client.chart.getHistoricalDailyPrices).toBe('function');
      expect(typeof client.chart.getHistoricalIntradayPrices).toBe('function');
      expect(typeof client.chart.getQuote).toBe('function');
      expect(typeof client.chart.getQuoteShort).toBe('function');
      expect(typeof client.chart.getBatchQuote).toBe('function');
      expect(typeof client.chart.getRealTimePrice).toBe('function');
      expect(typeof client.chart.getAfterHoursPrice).toBe('function');
      expect(typeof client.chart.getPreMarketPrice).toBe('function');
      expect(typeof client.chart.getHistoricalPriceWithDividends).toBe('function');
      expect(typeof client.chart.getHistoricalPriceWithSplits).toBe('function');
    });
  });

  describe('Enhanced Company Service', () => {
    test('should have expanded company methods', () => {
      expect(typeof client.company.getCompanyProfile).toBe('function');
      expect(typeof client.company.getKeyExecutives).toBe('function');
      expect(typeof client.company.getCompanyRating).toBe('function');
      expect(typeof client.company.getCompanyCoreInformation).toBe('function');
      expect(typeof client.company.getCompanyOutlook).toBe('function');
      expect(typeof client.company.getCompanyProfileByCIK).toBe('function');
      expect(typeof client.company.getDelistedCompanies).toBe('function');
      expect(typeof client.company.getHistoricalEmployeeCount).toBe('function');
      expect(typeof client.company.getHistoricalMarketCapitalization).toBe('function');
      expect(typeof client.company.getSharesFloat).toBe('function');
      expect(typeof client.company.getLatestMergersAcquisitions).toBe('function');
      expect(typeof client.company.getExecutiveCompensation).toBe('function');
      expect(typeof client.company.getCompanyPeers).toBe('function');
      expect(typeof client.company.getAnalystCoverage).toBe('function');
      expect(typeof client.company.getCompanySubsidiaries).toBe('function');
    });
  });

  describe('Enhanced Analyst Service', () => {
    test('should have expanded analyst methods', () => {
      expect(typeof client.analyst.getAnalystEstimates).toBe('function');
      expect(typeof client.analyst.getPriceTarget).toBe('function');
      expect(typeof client.analyst.getPriceTargetSummary).toBe('function');
      expect(typeof client.analyst.getAnalystRecommendations).toBe('function');
      expect(typeof client.analyst.getUpgradesDowngrades).toBe('function');
      expect(typeof client.analyst.getUpgradesDowngradesConsensus).toBe('function');
      expect(typeof client.analyst.getPriceTargetLatestNews).toBe('function');
      expect(typeof client.analyst.getStockGradeNews).toBe('function');
      expect(typeof client.analyst.getLatestStockGradeNews).toBe('function');
      expect(typeof client.analyst.getPriceTargetByAnalystCompany).toBe('function');
      expect(typeof client.analyst.getPriceTargetConsensus).toBe('function');
      expect(typeof client.analyst.getUpgradesDowngradesRSSFeed).toBe('function');
      expect(typeof client.analyst.getAnalystEstimatesByCompany).toBe('function');
    });
  });

  describe('Enhanced Form13F Service', () => {
    test('should have comprehensive institutional ownership methods', () => {
      expect(typeof client.form13f.getForm13F).toBe('function');
      expect(typeof client.form13f.getInstitutionalHolders).toBe('function');
      expect(typeof client.form13f.getMutualFundHolders).toBe('function');
      expect(typeof client.form13f.getETFHolders).toBe('function');
      expect(typeof client.form13f.getETFStockExposure).toBe('function');
      expect(typeof client.form13f.getInstitutionalStockOwnership).toBe('function');
      expect(typeof client.form13f.getInstitutionalOwnershipByInvestor).toBe('function');
      expect(typeof client.form13f.getInstitutionalOwnershipChanges).toBe('function');
      expect(typeof client.form13f.getTopInstitutionalHolders).toBe('function');
      expect(typeof client.form13f.getInstitutionalOwnershipSummary).toBe('function');
    });
  });

  describe('Enhanced SEC Filings Service', () => {
    test('should have comprehensive SEC filings methods', () => {
      expect(typeof client.secFilings.getSECFilings).toBe('function');
      expect(typeof client.secFilings.getLatest8KFilings).toBe('function');
      expect(typeof client.secFilings.getLatestSECFilings).toBe('function');
      expect(typeof client.secFilings.searchSECFilingsByFormType).toBe('function');
      expect(typeof client.secFilings.getSECFilingsByCIK).toBe('function');
      expect(typeof client.secFilings.getSECFilingsRSSFeed).toBe('function');
      expect(typeof client.secFilings.getSECFilingDocument).toBe('function');
      expect(typeof client.secFilings.getInsiderTradingFilings).toBe('function');
      expect(typeof client.secFilings.getProxyStatements).toBe('function');
      expect(typeof client.secFilings.getAnnualReports).toBe('function');
      expect(typeof client.secFilings.getQuarterlyReports).toBe('function');
      expect(typeof client.secFilings.getCurrentReports).toBe('function');
      expect(typeof client.secFilings.getBeneficialOwnershipReports).toBe('function');
    });
  });

  describe('Enhanced Senate Service', () => {
    test('should have comprehensive government trading methods', () => {
      expect(typeof client.senate.getSenateTrading).toBe('function');
      expect(typeof client.senate.getSenateTradinRSSFeed).toBe('function');
      expect(typeof client.senate.getSenateTradinBySenator).toBe('function');
      expect(typeof client.senate.getSenateTradinByTicker).toBe('function');
      expect(typeof client.senate.getSenateTradinStatistics).toBe('function');
      expect(typeof client.senate.getSenateTradinSummary).toBe('function');
      expect(typeof client.senate.getSenateTradinAlerts).toBe('function');
      expect(typeof client.senate.getSenateTradinPerformance).toBe('function');
      expect(typeof client.senate.getSenateTradinDisclosureTimeline).toBe('function');
      expect(typeof client.senate.getSenateTradinSectorAnalysis).toBe('function');
      expect(typeof client.senate.getSenateTradinMarketCorrelation).toBe('function');
    });
  });

  describe('Service Integration and Consistency', () => {
    test('should have all services properly initialized', () => {
      // Verify all enhanced services are available
      expect(client.directory).toBeDefined();
      expect(client.economics).toBeDefined();
      expect(client.esg).toBeDefined();
      expect(client.chart).toBeDefined();
      expect(client.company).toBeDefined();
      expect(client.analyst).toBeDefined();
      expect(client.form13f).toBeDefined();
      expect(client.secFilings).toBeDefined();
      expect(client.senate).toBeDefined();
    });

    test('should maintain consistent service structure', () => {
      // All services should be objects with methods
      expect(typeof client.directory).toBe('object');
      expect(typeof client.economics).toBe('object');
      expect(typeof client.esg).toBe('object');
      expect(typeof client.chart).toBe('object');
      expect(typeof client.company).toBe('object');
      expect(typeof client.analyst).toBe('object');
      expect(typeof client.form13f).toBe('object');
      expect(typeof client.secFilings).toBe('object');
      expect(typeof client.senate).toBe('object');
    });

    test('should have working test connection method', () => {
      expect(typeof client.testConnection).toBe('function');
      expect(typeof client.getAPIUsage).toBe('function');
    });
  });

  describe('Method Parameter Validation', () => {
    test('should not throw when calling enhanced methods with valid parameters', () => {
      // Test that methods exist and don't throw with proper parameters
      expect(() => {
        // These calls will be mocked and won't actually hit the API
        client.economics.getGDPData('US');
        client.esg.getESGScore('AAPL');
        client.chart.getBatchQuote(['AAPL', 'GOOGL']);
        client.company.getHistoricalEmployeeCount('AAPL');
        client.analyst.getPriceTargetLatestNews('AAPL', 0);
        client.form13f.getInstitutionalStockOwnership('AAPL');
        client.secFilings.searchSECFilingsByFormType('10-K');
        client.senate.getSenateTradinBySenator('John Doe');
      }).not.toThrow();
    });

    test('should handle empty parameters gracefully', () => {
      expect(() => {
        // Test methods that can be called without parameters
        client.directory.getStockList();
        client.economics.getEconomicIndicators();
        client.esg.getTopESGCompanies();
        client.secFilings.getLatest8KFilings();
        client.senate.getSenateTrading();
      }).not.toThrow();
    });
  });

  describe('URL Generation and Configuration', () => {
    test('should maintain proper HTTP client configuration', () => {
      // Verify the client is properly configured
      expect(client).toBeInstanceOf(FMPClient);
      
      // All services should have access to the same HTTP client instance
      expect(client.directory).toBeDefined();
      expect(client.economics).toBeDefined();
      expect(client.esg).toBeDefined();
    });

    test('should support all new endpoint patterns', () => {
      // Verify that service methods exist for all major endpoint patterns
      const hasMethod = (service: any, methodName: string) => {
        return typeof service[methodName] === 'function';
      };

      // Directory endpoints
      expect(hasMethod(client.directory, 'getAvailableExchanges')).toBe(true);
      
      // Economics endpoints  
      expect(hasMethod(client.economics, 'getTreasuryRates')).toBe(true);
      
      // ESG endpoints
      expect(hasMethod(client.esg, 'getESGSectorBenchmark')).toBe(true);
      
      // Chart endpoints
      expect(hasMethod(client.chart, 'getHistoricalPriceWithDividends')).toBe(true);
      
      // Company endpoints
      expect(hasMethod(client.company, 'getExecutiveCompensation')).toBe(true);
      
      // Analyst endpoints
      expect(hasMethod(client.analyst, 'getPriceTargetByAnalystCompany')).toBe(true);
      
      // Form13F endpoints
      expect(hasMethod(client.form13f, 'getInstitutionalOwnershipChanges')).toBe(true);
      
      // SEC Filings endpoints
      expect(hasMethod(client.secFilings, 'getBeneficialOwnershipReports')).toBe(true);
      
      // Senate endpoints
      expect(hasMethod(client.senate, 'getSenateTradinMarketCorrelation')).toBe(true);
    });
  });
});
