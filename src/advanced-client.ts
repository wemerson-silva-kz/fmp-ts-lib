import type { FMPConfig } from './types/index.js';
import { EnhancedHttpClient, type EnhancedHttpClientOptions } from './utils/enhanced-http-client.js';
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

export interface AdvancedFMPConfig extends EnhancedHttpClientOptions {
  // Additional advanced configuration options
  autoRetry?: boolean;
  enableCache?: boolean;
  enableRateLimit?: boolean;
  enableMetrics?: boolean;
  logLevel?: 'none' | 'error' | 'warn' | 'info' | 'debug';
}

export class AdvancedFMPClient {
  private httpClient: EnhancedHttpClient;
  
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

  constructor(config: AdvancedFMPConfig) {
    if (!config.apiKey) {
      throw new Error('API key is required');
    }

    // Set up enhanced HTTP client with advanced features
    const httpClientConfig: EnhancedHttpClientOptions = {
      apiKey: config.apiKey,
      baseUrl: config.baseUrl,
      cache: {
        enabled: config.enableCache !== false,
        ttl: config.cache?.ttl || 5 * 60 * 1000, // 5 minutes default
        maxSize: config.cache?.maxSize || 1000,
        ...config.cache
      },
      rateLimit: {
        enabled: config.enableRateLimit !== false,
        requestsPerMinute: config.rateLimit?.requestsPerMinute || 300,
        requestsPerDay: config.rateLimit?.requestsPerDay || 250000,
        ...config.rateLimit
      },
      retry: {
        maxRetries: config.autoRetry !== false ? (config.retry?.maxRetries || 3) : 0,
        baseDelay: config.retry?.baseDelay || 1000,
        maxDelay: config.retry?.maxDelay || 30000,
        ...config.retry
      },
      enableMetrics: config.enableMetrics !== false
    };

    this.httpClient = new EnhancedHttpClient(httpClientConfig);
    
    // Initialize all services with the enhanced HTTP client
    this.search = new SearchService(this.httpClient as any);
    this.directory = new DirectoryService(this.httpClient as any);
    this.analyst = new AnalystService(this.httpClient as any);
    this.calendar = new CalendarService(this.httpClient as any);
    this.chart = new ChartService(this.httpClient as any);
    this.company = new CompanyService(this.httpClient as any);

    this.economics = new EconomicsService(this.httpClient as any);
    this.esg = new ESGService(this.httpClient as any);
    this.dcf = new DCFService(this.httpClient as any);

    this.statements = new StatementsService(this.httpClient as any);
    this.form13f = new Form13FService(this.httpClient as any);
    this.indexes = new IndexesService(this.httpClient as any);

    this.insiderTrades = new InsiderTradesService(this.httpClient as any);
    this.marketPerformance = new MarketPerformanceService(this.httpClient as any);
    this.marketHours = new MarketHoursService(this.httpClient as any);

    this.etfMutualFunds = new ETFMutualFundsService(this.httpClient as any);
    this.commodity = new CommodityService(this.httpClient as any);
    this.fundraisers = new FundraisersService(this.httpClient as any);

    this.crypto = new CryptoService(this.httpClient as any);
    this.forex = new ForexService(this.httpClient as any);
    this.news = new NewsService(this.httpClient as any);

    this.technicalIndicators = new TechnicalIndicatorsService(this.httpClient as any);
    this.quote = new QuoteService(this.httpClient as any);
    this.secFilings = new SECFilingsService(this.httpClient as any);

    this.earningsTranscript = new EarningsTranscriptService(this.httpClient as any);
    this.senate = new SenateService(this.httpClient as any);
    this.bulk = new BulkService(this.httpClient as any);
    this.commitmentOfTraders = new CommitmentOfTradersService(this.httpClient as any);
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
   * Get comprehensive system health check
   */
  async getHealthCheck(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    details: {
      cache: boolean;
      rateLimit: boolean;
      connectivity: boolean;
      responseTime: number;
    };
    timestamp: string;
  }> {
    const health = await this.httpClient.healthCheck();
    return {
      ...health,
      timestamp: new Date().toISOString()
    };
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

  /**
   * Get performance metrics
   */
  getPerformanceMetrics(): {
    successRate: number;
    cacheHitRate: number;
    averageResponseTime: number;
    requestsPerMinute: number;
    uptime: number;
    topEndpoints: Array<{ endpoint: string; count: number }>;
    topErrors: Array<{ error: string; count: number }>;
  } | null {
    return this.httpClient.getPerformanceSummary();
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return this.httpClient.getCacheStats();
  }

  /**
   * Get rate limit usage
   */
  getRateLimitUsage() {
    return this.httpClient.getRateLimitUsage();
  }

  /**
   * Clear all cached data
   */
  clearCache(): void {
    this.httpClient.clearCache();
  }

  /**
   * Reset performance metrics
   */
  resetMetrics(): void {
    this.httpClient.resetMetrics();
  }

  /**
   * Reset rate limits (for testing)
   */
  resetRateLimit(): void {
    this.httpClient.resetRateLimit();
  }

  /**
   * Export metrics to JSON string
   */
  exportMetrics(): string | null {
    return this.httpClient.exportMetrics();
  }

  /**
   * Batch request utility for multiple symbols
   */
  async batchRequest<T>(
    requestFunction: (symbol: string) => Promise<T>,
    symbols: string[],
    options?: {
      batchSize?: number;
      delayMs?: number;
      stopOnError?: boolean;
    }
  ): Promise<Array<{ symbol: string; data?: T; error?: string }>> {
    const batchSize = options?.batchSize || 10;
    const delayMs = options?.delayMs || 100;
    const stopOnError = options?.stopOnError || false;
    
    const results: Array<{ symbol: string; data?: T; error?: string }> = [];
    
    for (let i = 0; i < symbols.length; i += batchSize) {
      const batch = symbols.slice(i, i + batchSize);
      
      const batchPromises = batch.map(async (symbol) => {
        try {
          const data = await requestFunction(symbol);
          return { symbol, data };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          if (stopOnError) {
            throw new Error(`Batch request failed for ${symbol}: ${errorMessage}`);
          }
          return { symbol, error: errorMessage };
        }
      });
      
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      // Add delay between batches to respect rate limits
      if (i + batchSize < symbols.length && delayMs > 0) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
    
    return results;
  }

  /**
   * Create a financial analysis report for a symbol
   */
  async generateFinancialReport(symbol: string): Promise<{
    symbol: string;
    generatedAt: string;
    profile: any;
    keyMetrics: any;
    ratios: any;
    healthScore: number;
    redFlags: Array<{ type: string; severity: string; description: string }>;
    recommendation: 'buy' | 'hold' | 'sell';
  }> {
    try {
      const [profile, keyMetrics, ratios, statements] = await Promise.all([
        this.company.getCompanyProfile(symbol),
        this.statements.getKeyMetrics(symbol, 'annual', 1),
        this.statements.getFinancialRatios(symbol, 'annual', 1),
        this.statements.getIncomeStatement(symbol, 'annual', 3)
      ]);

      // Use financial analyzer to calculate health score and identify red flags
      const { FinancialAnalyzer } = await import('./utils/financial-analyzer.js');
      
      const healthScore = keyMetrics[0] && ratios[0] 
        ? FinancialAnalyzer.calculateHealthScore(ratios[0], keyMetrics[0])
        : 0;
        
      const redFlags = FinancialAnalyzer.identifyRedFlags(ratios, statements);
      
      // Simple recommendation logic
      let recommendation: 'buy' | 'hold' | 'sell';
      if (healthScore >= 80 && redFlags.filter(f => f.severity === 'high').length === 0) {
        recommendation = 'buy';
      } else if (healthScore >= 60 && redFlags.filter(f => f.severity === 'high').length <= 1) {
        recommendation = 'hold';
      } else {
        recommendation = 'sell';
      }
      
      return {
        symbol,
        generatedAt: new Date().toISOString(),
        profile,
        keyMetrics: keyMetrics[0],
        ratios: ratios[0],
        healthScore,
        redFlags,
        recommendation
      };
    } catch (error) {
      throw new Error(`Failed to generate financial report for ${symbol}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

// Export both standard and advanced clients
export { AdvancedFMPClient as default };
