import { getFirstOrItem } from '../utils/index.js';
import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CommitmentOfTradersService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get Commitment of Traders report
   * @param symbol - Commodity symbol (e.g., "GC", "CL", "ES")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getCommitmentOfTraders(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<Array<{
    date: string;
    symbol: string;
    exchange: string;
    currentLongAll: number;
    currentShortAll: number;
    currentLongCommercial: number;
    currentShortCommercial: number;
    currentLongNonCommercial: number;
    currentShortNonCommercial: number;
    currentLongNonReportable: number;
    currentShortNonReportable: number;
    previousLongAll: number;
    previousShortAll: number;
    previousLongCommercial: number;
    previousShortCommercial: number;
    previousLongNonCommercial: number;
    previousShortNonCommercial: number;
    previousLongNonReportable: number;
    previousShortNonReportable: number;
    changeLongAll: number;
    changeShortAll: number;
    changeLongCommercial: number;
    changeShortCommercial: number;
    changeLongNonCommercial: number;
    changeShortNonCommercial: number;
    changeLongNonReportable: number;
    changeShortNonReportable: number;
    percentLongAll: number;
    percentShortAll: number;
    percentLongCommercial: number;
    percentShortCommercial: number;
    percentLongNonCommercial: number;
    percentShortNonCommercial: number;
    percentLongNonReportable: number;
    percentShortNonReportable: number;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get(`/commitment_of_traders_report/${symbol}`, params);
  }

  /**
   * Get list of available COT symbols
   */
  async getCOTSymbolsList(): Promise<Array<{
    symbol: string;
    name: string;
    exchange: string;
    category: string;
    contractSize: string;
    tickSize: string;
    currency: string;
  }>> {
    return this.httpClient.get('/commitment_of_traders_report/list');
  }

  /**
   * Get COT analysis for a symbol
   * @param symbol - Commodity symbol (e.g., "GC", "CL", "ES")
   * @param period - Analysis period ("1M", "3M", "6M", "1Y")
   */
  async getCOTAnalysis(
    symbol: string,
    period: '1M' | '3M' | '6M' | '1Y' = '3M'
  ): Promise<{
    symbol: string;
    period: string;
    analysis: {
      commercialSentiment: 'Bullish' | 'Bearish' | 'Neutral';
      nonCommercialSentiment: 'Bullish' | 'Bearish' | 'Neutral';
      overallSentiment: 'Bullish' | 'Bearish' | 'Neutral';
      commercialNetPosition: number;
      nonCommercialNetPosition: number;
      commercialNetChange: number;
      nonCommercialNetChange: number;
      extremeReadings: Array<{
        date: string;
        type: 'Commercial Extreme Long' | 'Commercial Extreme Short' | 'Non-Commercial Extreme Long' | 'Non-Commercial Extreme Short';
        value: number;
      }>;
    };
    trends: {
      commercialTrend: 'Increasing Longs' | 'Increasing Shorts' | 'Stable';
      nonCommercialTrend: 'Increasing Longs' | 'Increasing Shorts' | 'Stable';
      divergence: boolean;
      divergenceDescription?: string;
    };
  }> {
    const params: QueryParams = { period };
    const result = await this.httpClient.get(`/commitment_of_traders_analysis/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get COT summary for multiple symbols
   * @param symbols - Array of commodity symbols
   */
  async getCOTSummary(symbols: string[]): Promise<Array<{
    symbol: string;
    name: string;
    latestDate: string;
    commercialNetPosition: number;
    nonCommercialNetPosition: number;
    commercialSentiment: 'Bullish' | 'Bearish' | 'Neutral';
    nonCommercialSentiment: 'Bullish' | 'Bearish' | 'Neutral';
    weeklyChange: {
      commercialNet: number;
      nonCommercialNet: number;
    };
    extremeLevel: 'High' | 'Medium' | 'Low';
  }>> {
    const symbolList = symbols.join(',');
    const params: QueryParams = { symbols: symbolList };
    return this.httpClient.get('/commitment_of_traders_summary', params);
  }

  /**
   * Get COT historical extremes
   * @param symbol - Commodity symbol (e.g., "GC", "CL", "ES")
   * @param lookbackPeriod - Lookback period in years (default: 5)
   */
  async getCOTHistoricalExtremes(
    symbol: string,
    lookbackPeriod: number = 5
  ): Promise<{
    symbol: string;
    lookbackPeriod: number;
    commercialExtremes: {
      maxLongPosition: {
        date: string;
        value: number;
        percentile: number;
      };
      maxShortPosition: {
        date: string;
        value: number;
        percentile: number;
      };
    };
    nonCommercialExtremes: {
      maxLongPosition: {
        date: string;
        value: number;
        percentile: number;
      };
      maxShortPosition: {
        date: string;
        value: number;
        percentile: number;
      };
    };
    currentPositions: {
      commercial: {
        netPosition: number;
        percentile: number;
        extremeLevel: 'Extreme Long' | 'Extreme Short' | 'Normal';
      };
      nonCommercial: {
        netPosition: number;
        percentile: number;
        extremeLevel: 'Extreme Long' | 'Extreme Short' | 'Normal';
      };
    };
  }> {
    const params: QueryParams = { lookbackPeriod };
    const result = await this.httpClient.get(`/commitment_of_traders_extremes/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get COT net position changes
   * @param symbol - Commodity symbol (e.g., "GC", "CL", "ES")
   * @param weeks - Number of weeks to analyze (default: 12)
   */
  async getCOTNetPositionChanges(
    symbol: string,
    weeks: number = 12
  ): Promise<Array<{
    date: string;
    symbol: string;
    commercialNetChange: number;
    nonCommercialNetChange: number;
    nonReportableNetChange: number;
    commercialNetPosition: number;
    nonCommercialNetPosition: number;
    nonReportableNetPosition: number;
    weekOverWeekChange: {
      commercial: number;
      nonCommercial: number;
      nonReportable: number;
    };
    significance: 'High' | 'Medium' | 'Low';
  }>> {
    const params: QueryParams = { weeks };
    return this.httpClient.get(`/commitment_of_traders_changes/${symbol}`, params);
  }

  /**
   * Get COT market sentiment indicator
   * @param symbol - Commodity symbol (e.g., "GC", "CL", "ES")
   */
  async getCOTMarketSentiment(symbol: string): Promise<{
    symbol: string;
    date: string;
    sentimentScore: number;
    sentimentLevel: 'Extremely Bullish' | 'Bullish' | 'Neutral' | 'Bearish' | 'Extremely Bearish';
    components: {
      commercialSentiment: {
        score: number;
        weight: number;
        contribution: number;
      };
      nonCommercialSentiment: {
        score: number;
        weight: number;
        contribution: number;
      };
      positionExtremes: {
        score: number;
        weight: number;
        contribution: number;
      };
    };
    historicalContext: {
      percentile: number;
      interpretation: string;
    };
    signals: Array<{
      type: 'Bullish' | 'Bearish';
      strength: 'Strong' | 'Moderate' | 'Weak';
      description: string;
    }>;
  }> {
    const result = await this.httpClient.get(`/commitment_of_traders_sentiment/${symbol}`);
    return getFirstOrItem(result);
  }

  /**
   * Get COT disaggregated report (for financial futures)
   * @param symbol - Financial futures symbol (e.g., "ES", "NQ", "YM")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getCOTDisaggregatedReport(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<Array<{
    date: string;
    symbol: string;
    dealerLong: number;
    dealerShort: number;
    assetManagerLong: number;
    assetManagerShort: number;
    leveragedFundsLong: number;
    leveragedFundsShort: number;
    otherReportableLong: number;
    otherReportableShort: number;
    nonReportableLong: number;
    nonReportableShort: number;
    dealerNetPosition: number;
    assetManagerNetPosition: number;
    leveragedFundsNetPosition: number;
    otherReportableNetPosition: number;
    nonReportableNetPosition: number;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get(`/commitment_of_traders_disaggregated/${symbol}`, params);
  }

  /**
   * Get COT traders in financial futures (TFF) report
   * @param symbol - Financial futures symbol (e.g., "ES", "NQ", "YM")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getCOTTradersInFinancialFutures(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<Array<{
    date: string;
    symbol: string;
    dealerLong: number;
    dealerShort: number;
    assetManagerLong: number;
    assetManagerShort: number;
    leveragedFundsLong: number;
    leveragedFundsShort: number;
    otherReportableLong: number;
    otherReportableShort: number;
    totalReportableLong: number;
    totalReportableShort: number;
    nonReportableLong: number;
    nonReportableShort: number;
    openInterest: number;
    dealerNetPosition: number;
    assetManagerNetPosition: number;
    leveragedFundsNetPosition: number;
    otherReportableNetPosition: number;
    totalReportableNetPosition: number;
    nonReportableNetPosition: number;
  }>> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get(`/commitment_of_traders_tff/${symbol}`, params);
  }
}

