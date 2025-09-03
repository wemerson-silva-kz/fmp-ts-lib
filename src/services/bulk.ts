import type { HttpClient } from "../utils/http-client.js";

export class BulkService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Company Profile Bulk API - Returns CSV data
   * @param part - Part number (required, e.g., "0", "1", "2", "3", "4")
   */
  async getCompanyProfileBulk(part: string): Promise<string> {
    return this.httpClient.get<string>("/profile-bulk", { part });
  }

  /**
   * Stock Rating Bulk API - Returns CSV data
   */
  async getStockRatingBulk(): Promise<string> {
    return this.httpClient.get<string>("/rating-bulk");
  }

  /**
   * DCF Valuations Bulk API - Returns CSV data
   */
  async getDCFBulk(): Promise<string> {
    return this.httpClient.get<string>("/dcf-bulk");
  }

  /**
   * Financial Scores Bulk API - Returns CSV data
   */
  async getFinancialScoresBulk(): Promise<string> {
    return this.httpClient.get<string>("/scores-bulk");
  }

  /**
   * Price Target Summary Bulk API - Returns CSV data
   */
  async getPriceTargetSummaryBulk(): Promise<string> {
    return this.httpClient.get<string>("/price-target-summary-bulk");
  }

  /**
   * ETF Holder Bulk API - Returns CSV data
   * @param part - Part number (required, e.g., "1", "2", "3")
   */
  async getETFHolderBulk(part: string): Promise<string> {
    return this.httpClient.get<string>("/etf-holder-bulk", { part });
  }

  /**
   * Upgrades Downgrades Consensus Bulk API - Returns CSV data
   */
  async getUpgradesDowngradesConsensusBulk(): Promise<string> {
    return this.httpClient.get<string>("/upgrades-downgrades-consensus-bulk");
  }

  /**
   * Key Metrics TTM Bulk API - Returns CSV data
   */
  async getKeyMetricsTTMBulk(): Promise<string> {
    return this.httpClient.get<string>("/key-metrics-ttm-bulk");
  }

  /**
   * Ratios TTM Bulk API - Returns CSV data
   */
  async getRatiosTTMBulk(): Promise<string> {
    return this.httpClient.get<string>("/ratios-ttm-bulk");
  }

  /**
   * Stock Peers Bulk API - Returns CSV data
   */
  async getStockPeersBulk(): Promise<string> {
    return this.httpClient.get<string>("/peers-bulk");
  }

  /**
   * Earnings Surprises Bulk API - Returns CSV data
   * @param year - Year (required, e.g., "2025")
   */
  async getEarningsSurprisesBulk(year: string): Promise<string> {
    return this.httpClient.get<string>("/earnings-surprises-bulk", { year });
  }

  /**
   * Income Statement Bulk API - Returns CSV data
   * @param year - Year (required, e.g., "2025")
   * @param period - Period (required, e.g., "Q1", "Q2", "Q3", "Q4", "FY")
   */
  async getIncomeStatementBulk(year: string, period: string): Promise<string> {
    return this.httpClient.get<string>("/income-statement-bulk", {
      year,
      period,
    });
  }

  /**
   * Income Statement Growth Bulk API - Returns CSV data
   * @param year - Year (required, e.g., "2025")
   * @param period - Period (required, e.g., "Q1", "Q2", "Q3", "Q4", "FY")
   */
  async getIncomeStatementGrowthBulk(
    year: string,
    period: string,
  ): Promise<string> {
    return this.httpClient.get<string>("/income-statement-growth-bulk", {
      year,
      period,
    });
  }

  /**
   * Balance Sheet Statement Bulk API - Returns CSV data
   * @param year - Year (required, e.g., "2025")
   * @param period - Period (required, e.g., "Q1", "Q2", "Q3", "Q4", "FY")
   */
  async getBalanceSheetStatementBulk(
    year: string,
    period: string,
  ): Promise<string> {
    return this.httpClient.get<string>("/balance-sheet-statement-bulk", {
      year,
      period,
    });
  }

  /**
   * Balance Sheet Statement Growth Bulk API - Returns CSV data
   * @param year - Year (required, e.g., "2025")
   * @param period - Period (required, e.g., "Q1", "Q2", "Q3", "Q4", "FY")
   */
  async getBalanceSheetStatementGrowthBulk(
    year: string,
    period: string,
  ): Promise<string> {
    return this.httpClient.get<string>("/balance-sheet-statement-growth-bulk", {
      year,
      period,
    });
  }

  /**
   * Cash Flow Statement Bulk API - Returns CSV data
   * @param year - Year (required, e.g., "2025")
   * @param period - Period (required, e.g., "Q1", "Q2", "Q3", "Q4", "FY")
   */
  async getCashFlowStatementBulk(
    year: string,
    period: string,
  ): Promise<string> {
    return this.httpClient.get<string>("/cash-flow-statement-bulk", {
      year,
      period,
    });
  }

  /**
   * Cash Flow Statement Growth Bulk API - Returns CSV data
   * @param year - Year (required, e.g., "2025")
   * @param period - Period (required, e.g., "Q1", "Q2", "Q3", "Q4", "FY")
   */
  async getCashFlowStatementGrowthBulk(
    year: string,
    period: string,
  ): Promise<string> {
    return this.httpClient.get<string>("/cash-flow-statement-growth-bulk", {
      year,
      period,
    });
  }

  /**
   * EOD Bulk API - Returns CSV data
   * @param date - Date (required, e.g., "2024-10-22")
   */
  async getEODBulk(date: string): Promise<string> {
    return this.httpClient.get<string>("/eod-bulk", { date });
  }
}
