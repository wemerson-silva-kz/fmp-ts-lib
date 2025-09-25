import type { FMPConfig } from './types/index.js';
import { HttpClient } from './utils/http-client.js';
import { 
  SearchService,
  DirectoryService,
  AnalystService,
  CalendarService,
  ChartService,
  CompanyService,
  EconomicsService,
  ESGService,
  DCFService,
  StatementsService,
  Form13FService,
  IndexesService,
  InsiderTradesService,
  MarketPerformanceService,
  MarketHoursService,
  ETFMutualFundsService,
  CommodityService,
  FundraisersService,
  CryptoService,
  ForexService,
  NewsService,
  TechnicalIndicatorsService,
  QuoteService,
  SECFilingsService,
  EarningsTranscriptService,
  SenateService,
  BulkService,
  CommitmentOfTradersService
} from './services/index.js';

export class FMPClient {
  private httpClient: HttpClient;
  
  // Core Services
  public readonly search: SearchService;
  public readonly directory: DirectoryService;
  public readonly analyst: AnalystService;
  public readonly calendar: CalendarService;
  public readonly chart: ChartService;
  public readonly company: CompanyService;

  // Economics & ESG
  public readonly economics: EconomicsService;
  public readonly esg: ESGService;
  public readonly dcf: DCFService;

  // Financial Statements & Analysis
  public readonly statements: StatementsService;
  public readonly form13f: Form13FService;
  public readonly indexes: IndexesService;

  // Trading & Market Data
  public readonly insiderTrades: InsiderTradesService;
  public readonly marketPerformance: MarketPerformanceService;
  public readonly marketHours: MarketHoursService;

  // Investment Vehicles
  public readonly etfMutualFunds: ETFMutualFundsService;
  public readonly commodity: CommodityService;
  public readonly fundraisers: FundraisersService;

  // Alternative Markets
  public readonly crypto: CryptoService;
  public readonly forex: ForexService;
  public readonly news: NewsService;

  // Technical Analysis & Quotes
  public readonly technicalIndicators: TechnicalIndicatorsService;
  public readonly quote: QuoteService;
  public readonly secFilings: SECFilingsService;

  // Advanced Data
  public readonly earningsTranscript: EarningsTranscriptService;
  public readonly senate: SenateService;
  public readonly bulk: BulkService;
  public readonly commitmentOfTraders: CommitmentOfTradersService;

  constructor(config: FMPConfig) {
    if (!config.apiKey) {
      throw new Error('API key is required');
    }

    this.httpClient = new HttpClient(config);
    
    // Initialize core services
    this.search = new SearchService(this.httpClient);
    this.directory = new DirectoryService(this.httpClient);
    this.analyst = new AnalystService(this.httpClient);
    this.calendar = new CalendarService(this.httpClient);
    this.chart = new ChartService(this.httpClient);
    this.company = new CompanyService(this.httpClient);

    // Initialize economics & ESG services
    this.economics = new EconomicsService(this.httpClient);
    this.esg = new ESGService(this.httpClient);
    this.dcf = new DCFService(this.httpClient);

    // Initialize financial statements & analysis services
    this.statements = new StatementsService(this.httpClient);
    this.form13f = new Form13FService(this.httpClient);
    this.indexes = new IndexesService(this.httpClient);

    // Initialize trading & market data services
    this.insiderTrades = new InsiderTradesService(this.httpClient);
    this.marketPerformance = new MarketPerformanceService(this.httpClient);
    this.marketHours = new MarketHoursService(this.httpClient);

    // Initialize investment vehicles services
    this.etfMutualFunds = new ETFMutualFundsService(this.httpClient);
    this.commodity = new CommodityService(this.httpClient);
    this.fundraisers = new FundraisersService(this.httpClient);

    // Initialize alternative markets services
    this.crypto = new CryptoService(this.httpClient);
    this.forex = new ForexService(this.httpClient);
    this.news = new NewsService(this.httpClient);

    // Initialize technical analysis & quotes services
    this.technicalIndicators = new TechnicalIndicatorsService(this.httpClient);
    this.quote = new QuoteService(this.httpClient);
    this.secFilings = new SECFilingsService(this.httpClient);

    // Initialize advanced data services
    this.earningsTranscript = new EarningsTranscriptService(this.httpClient);
    this.senate = new SenateService(this.httpClient);
    this.bulk = new BulkService(this.httpClient);
    this.commitmentOfTraders = new CommitmentOfTradersService(this.httpClient);
  }

  /**
   * Get metrics (if enabled)
   */
  getMetrics() {
    return this.httpClient.getMetrics();
  }

  /**
   * Batch requests for better performance
   */
  async batchRequest<T>(requests: (() => Promise<T>)[]): Promise<T[]> {
    return this.httpClient.batchRequest(requests);
  }



  /**
   * Test the API connection
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.search.searchSymbol('AAPL', 1);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get API usage information
   */
  async getAPIUsage(): Promise<{
    dailyUsage: number;
    dailyLimit: number;
    monthlyUsage: number;
    monthlyLimit: number;
  }> {
    return this.httpClient.get('/api-usage');
  }
}

// Export types
export * from './types/index.js';

// Export utilities
export * from './utils/index.js';

// Export services for advanced usage
export * from './services/index.js';

// Export advanced client
// export { AdvancedFMPClient } from './advanced-client.js';

// Default export
export default FMPClient;

