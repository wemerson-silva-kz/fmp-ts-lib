import { beforeEach, describe, expect, it, vi } from "vitest";
import { BulkService } from "../bulk.js";

describe("BulkService", () => {
  let bulkService: BulkService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn(),
    };
    bulkService = new BulkService(mockHttpClient);
  });

  describe("getCompanyProfileBulk", () => {
    it("should call correct endpoint with part parameter", async () => {
      const mockResponse = "symbol,price,marketCap\nAAPL,150.00,2500000000000";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getCompanyProfileBulk("0");

      expect(mockHttpClient.get).toHaveBeenCalledWith("/profile-bulk", {
        part: "0",
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe("getStockRatingBulk", () => {
    it("should call correct endpoint without parameters", async () => {
      const mockResponse = "symbol,rating,date\nAAPL,A+,2025-01-01";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getStockRatingBulk();

      expect(mockHttpClient.get).toHaveBeenCalledWith("/rating-bulk");
      expect(result).toBe(mockResponse);
    });
  });

  describe("getDCFBulk", () => {
    it("should call correct endpoint", async () => {
      const mockResponse = "symbol,dcf,date\nAAPL,180.50,2025-01-01";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getDCFBulk();

      expect(mockHttpClient.get).toHaveBeenCalledWith("/dcf-bulk");
      expect(result).toBe(mockResponse);
    });
  });

  describe("getETFHolderBulk", () => {
    it("should call correct endpoint with part parameter", async () => {
      const mockResponse = "symbol,name,asset\nSPY,SPDR S&P 500,AAPL";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getETFHolderBulk("1");

      expect(mockHttpClient.get).toHaveBeenCalledWith("/etf-holder-bulk", {
        part: "1",
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe("getEarningsSurprisesBulk", () => {
    it("should call correct endpoint with year parameter", async () => {
      const mockResponse = "symbol,epsActual,epsEstimated\nAAPL,1.50,1.45";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getEarningsSurprisesBulk("2025");

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        "/earnings-surprises-bulk",
        { year: "2025" },
      );
      expect(result).toBe(mockResponse);
    });
  });

  describe("getIncomeStatementBulk", () => {
    it("should call correct endpoint with year and period parameters", async () => {
      const mockResponse = "symbol,revenue,netIncome\nAAPL,100000000,25000000";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getIncomeStatementBulk("2025", "Q1");

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        "/income-statement-bulk",
        {
          year: "2025",
          period: "Q1",
        },
      );
      expect(result).toBe(mockResponse);
    });
  });

  describe("getBalanceSheetStatementBulk", () => {
    it("should call correct endpoint with year and period parameters", async () => {
      const mockResponse =
        "symbol,totalAssets,totalLiabilities\nAAPL,500000000,200000000";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getBalanceSheetStatementBulk(
        "2025",
        "Q1",
      );

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        "/balance-sheet-statement-bulk",
        {
          year: "2025",
          period: "Q1",
        },
      );
      expect(result).toBe(mockResponse);
    });
  });

  describe("getCashFlowStatementBulk", () => {
    it("should call correct endpoint with year and period parameters", async () => {
      const mockResponse =
        "symbol,operatingCashFlow,freeCashFlow\nAAPL,30000000,25000000";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getCashFlowStatementBulk("2025", "Q1");

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        "/cash-flow-statement-bulk",
        {
          year: "2025",
          period: "Q1",
        },
      );
      expect(result).toBe(mockResponse);
    });
  });

  describe("getEODBulk", () => {
    it("should call correct endpoint with date parameter", async () => {
      const mockResponse =
        "symbol,open,high,low,close\nAAPL,150.00,155.00,149.00,154.00";
      mockHttpClient.get.mockResolvedValue(mockResponse);

      const result = await bulkService.getEODBulk("2024-10-22");

      expect(mockHttpClient.get).toHaveBeenCalledWith("/eod-bulk", {
        date: "2024-10-22",
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe("all bulk endpoints", () => {
    it("should return CSV string format", async () => {
      const csvResponse = "header1,header2,header3\nvalue1,value2,value3";
      mockHttpClient.get.mockResolvedValue(csvResponse);

      const methods = [
        () => bulkService.getStockRatingBulk(),
        () => bulkService.getDCFBulk(),
        () => bulkService.getFinancialScoresBulk(),
        () => bulkService.getPriceTargetSummaryBulk(),
        () => bulkService.getUpgradesDowngradesConsensusBulk(),
        () => bulkService.getKeyMetricsTTMBulk(),
        () => bulkService.getRatiosTTMBulk(),
        () => bulkService.getStockPeersBulk(),
      ];

      for (const method of methods) {
        const result = await method();
        expect(typeof result).toBe("string");
        expect(result).toBe(csvResponse);
      }
    });
  });
});
