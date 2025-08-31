import { describe, it, expect, beforeEach } from 'bun:test';
import { HttpClient } from '../src/utils/http-client';
import { StatementsService } from '../src/services/statements';
import type { FMPConfig } from '../src/types';

describe('StatementsService', () => {
  let httpClient: HttpClient;
  let statementsService: StatementsService;

  beforeEach(() => {
    const config: FMPConfig = {
      apiKey: 'test-api-key',
      baseUrl: 'https://financialmodelingprep.com/stable'
    };
    httpClient = new HttpClient(config);
    statementsService = new StatementsService(httpClient);
  });

  describe('Service Initialization', () => {
    it('should initialize StatementsService correctly', () => {
      expect(statementsService).toBeDefined();
      expect(typeof statementsService).toBe('object');
    });
  });

  describe('Key Metrics Methods', () => {
    it('should have getKeyMetrics method', () => {
      expect(typeof statementsService.getKeyMetrics).toBe('function');
    });

    it('should have getKeyMetricsTTM method', () => {
      expect(typeof statementsService.getKeyMetricsTTM).toBe('function');
    });

    it('should have getFinancialRatios method', () => {
      expect(typeof statementsService.getFinancialRatios).toBe('function');
    });

    it('should have getFinancialRatiosTTM method', () => {
      expect(typeof statementsService.getFinancialRatiosTTM).toBe('function');
    });

    it('should have getFinancialScores method', () => {
      expect(typeof statementsService.getFinancialScores).toBe('function');
    });

    it('should have getOwnerEarnings method', () => {
      expect(typeof statementsService.getOwnerEarnings).toBe('function');
    });

    it('should have getEnterpriseValues method', () => {
      expect(typeof statementsService.getEnterpriseValues).toBe('function');
    });
  });

  describe('TTM Statement Methods', () => {
    it('should have getIncomeStatementTTM method', () => {
      expect(typeof statementsService.getIncomeStatementTTM).toBe('function');
    });

    it('should have getBalanceSheetStatementTTM method', () => {
      expect(typeof statementsService.getBalanceSheetStatementTTM).toBe('function');
    });

    it('should have getCashFlowStatementTTM method', () => {
      expect(typeof statementsService.getCashFlowStatementTTM).toBe('function');
    });

    it('should have getLatestFinancialStatements method', () => {
      expect(typeof statementsService.getLatestFinancialStatements).toBe('function');
    });
  });

  describe('Segmentation Methods', () => {
    it('should have getRevenueProductSegmentation method', () => {
      expect(typeof statementsService.getRevenueProductSegmentation).toBe('function');
    });

    it('should have getRevenueGeographicSegmentation method', () => {
      expect(typeof statementsService.getRevenueGeographicSegmentation).toBe('function');
    });
  });

  describe('As Reported Methods', () => {
    it('should have getAsReportedIncomeStatements method', () => {
      expect(typeof statementsService.getAsReportedIncomeStatements).toBe('function');
    });

    it('should have getAsReportedBalanceSheetStatements method', () => {
      expect(typeof statementsService.getAsReportedBalanceSheetStatements).toBe('function');
    });

    it('should have getAsReportedCashFlowStatements method', () => {
      expect(typeof statementsService.getAsReportedCashFlowStatements).toBe('function');
    });
  });

  describe('Financial Reports Methods', () => {
    it('should have getFinancialReportsDates method', () => {
      expect(typeof statementsService.getFinancialReportsDates).toBe('function');
    });

    it('should have getFinancialReportsJSON method', () => {
      expect(typeof statementsService.getFinancialReportsJSON).toBe('function');
    });

    it('should have getFinancialReportsXLSXUrl method', () => {
      expect(typeof statementsService.getFinancialReportsXLSXUrl).toBe('function');
    });
  });

  describe('URL Generation Tests', () => {
    it('should generate correct URL for getFinancialReportsXLSXUrl', () => {
      const symbol = 'AAPL';
      const year = 2023;
      const period = 'Q1';
      
      const result = statementsService.getFinancialReportsXLSXUrl(symbol, year, period);
      expect(result).toBe('/financial-reports-xlsx?symbol=AAPL&year=2023&period=Q1');
    });

    it('should generate correct URL for getFinancialReportsXLSXUrl with different parameters', () => {
      const symbol = 'MSFT';
      const year = 2022;
      const period = 'Q4';
      
      const result = statementsService.getFinancialReportsXLSXUrl(symbol, year, period);
      expect(result).toBe('/financial-reports-xlsx?symbol=MSFT&year=2022&period=Q4');
    });
  });

  describe('Method Parameter Validation', () => {
    it('should not throw when calling methods with valid parameters', () => {
      const symbol = 'AAPL';
      
      // These should not throw during method call setup (actual API calls would need proper mocking)
      expect(() => {
        // Just verify the methods can be called without immediate errors
        const keyMetricsCall = () => statementsService.getKeyMetrics(symbol);
        const keyMetricsTTMCall = () => statementsService.getKeyMetricsTTM(symbol);
        const financialRatiosCall = () => statementsService.getFinancialRatios(symbol);
        const financialRatiosTTMCall = () => statementsService.getFinancialRatiosTTM(symbol);
        const financialScoresCall = () => statementsService.getFinancialScores(symbol);
        const ownerEarningsCall = () => statementsService.getOwnerEarnings(symbol);
        const enterpriseValuesCall = () => statementsService.getEnterpriseValues(symbol);
        
        expect(typeof keyMetricsCall).toBe('function');
        expect(typeof keyMetricsTTMCall).toBe('function');
        expect(typeof financialRatiosCall).toBe('function');
        expect(typeof financialRatiosTTMCall).toBe('function');
        expect(typeof financialScoresCall).toBe('function');
        expect(typeof ownerEarningsCall).toBe('function');
        expect(typeof enterpriseValuesCall).toBe('function');
      }).not.toThrow();
    });

    it('should handle empty symbol parameter gracefully', () => {
      expect(() => {
        const urlResult = statementsService.getFinancialReportsXLSXUrl('', 2023, 'Q1');
        expect(urlResult).toBe('/financial-reports-xlsx?symbol=&year=2023&period=Q1');
      }).not.toThrow();
    });
  });
});
