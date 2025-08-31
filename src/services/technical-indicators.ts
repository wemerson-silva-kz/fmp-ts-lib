import { getFirstOrItem } from '../utils/index.js';
import type { TechnicalIndicator, QueryParams, TimeFrame } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class TechnicalIndicatorsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get technical indicators for a symbol
   * @param timeframe - Time frame (1min, 5min, 15min, 30min, 1hour, 4hour, 1day)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param type - Indicator type (optional)
   * @param period - Period for calculation (optional)
   */
  async getTechnicalIndicators(
    timeframe: TimeFrame,
    symbol: string,
    type?: string,
    period?: number
  ): Promise<TechnicalIndicator[]> {
    const params: QueryParams = {};
    if (type) params.type = type;
    if (period) params.period = period;
    return this.httpClient.get<TechnicalIndicator[]>(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get daily technical indicators
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param type - Indicator type (optional)
   * @param period - Period for calculation (optional)
   */
  async getDailyTechnicalIndicators(
    symbol: string,
    type?: string,
    period?: number
  ): Promise<TechnicalIndicator[]> {
    const params: QueryParams = {};
    if (type) params.type = type;
    if (period) params.period = period;
    return this.httpClient.get<TechnicalIndicator[]>(`/technical_indicator/daily/${symbol}`, params);
  }

  /**
   * Get Simple Moving Average (SMA)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param period - Period for SMA calculation (default: 20)
   */
  async getSMA(symbol: string, timeframe: TimeFrame, period: number = 20): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    sma: number;
  }>> {
    const params: QueryParams = { type: 'sma', period };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Exponential Moving Average (EMA)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param period - Period for EMA calculation (default: 20)
   */
  async getEMA(symbol: string, timeframe: TimeFrame, period: number = 20): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    ema: number;
  }>> {
    const params: QueryParams = { type: 'ema', period };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Relative Strength Index (RSI)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param period - Period for RSI calculation (default: 14)
   */
  async getRSI(symbol: string, timeframe: TimeFrame, period: number = 14): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    rsi: number;
  }>> {
    const params: QueryParams = { type: 'rsi', period };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Moving Average Convergence Divergence (MACD)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   */
  async getMACD(symbol: string, timeframe: TimeFrame): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    macd: number;
    macdSignal: number;
    macdHistogram: number;
  }>> {
    const params: QueryParams = { type: 'macd' };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Bollinger Bands
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param period - Period for calculation (default: 20)
   * @param standardDeviation - Standard deviation multiplier (default: 2)
   */
  async getBollingerBands(
    symbol: string, 
    timeframe: TimeFrame, 
    period: number = 20,
    standardDeviation: number = 2
  ): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    upperBand: number;
    middleBand: number;
    lowerBand: number;
  }>> {
    const params: QueryParams = { type: 'bollinger', period, standardDeviation };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Average Directional Index (ADX)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param period - Period for ADX calculation (default: 14)
   */
  async getADX(symbol: string, timeframe: TimeFrame, period: number = 14): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adx: number;
    plusDI: number;
    minusDI: number;
  }>> {
    const params: QueryParams = { type: 'adx', period };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Stochastic Oscillator
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param kPeriod - %K period (default: 14)
   * @param dPeriod - %D period (default: 3)
   */
  async getStochastic(
    symbol: string, 
    timeframe: TimeFrame, 
    kPeriod: number = 14,
    dPeriod: number = 3
  ): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    stochK: number;
    stochD: number;
  }>> {
    const params: QueryParams = { type: 'stochastic', kPeriod, dPeriod };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Williams %R
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param period - Period for calculation (default: 14)
   */
  async getWilliamsR(symbol: string, timeframe: TimeFrame, period: number = 14): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    williamsR: number;
  }>> {
    const params: QueryParams = { type: 'williams_r', period };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Commodity Channel Index (CCI)
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   * @param period - Period for calculation (default: 20)
   */
  async getCCI(symbol: string, timeframe: TimeFrame, period: number = 20): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    cci: number;
  }>> {
    const params: QueryParams = { type: 'cci', period };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get Ichimoku Cloud
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   */
  async getIchimoku(symbol: string, timeframe: TimeFrame): Promise<Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    tenkanSen: number;
    kijunSen: number;
    senkouSpanA: number;
    senkouSpanB: number;
    chikouSpan: number;
  }>> {
    const params: QueryParams = { type: 'ichimoku' };
    return this.httpClient.get(`/technical_indicator/${timeframe}/${symbol}`, params);
  }

  /**
   * Get technical analysis summary
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param timeframe - Time frame
   */
  async getTechnicalAnalysisSummary(symbol: string, timeframe: TimeFrame): Promise<{
    symbol: string;
    timeframe: string;
    date: string;
    summary: 'Strong Buy' | 'Buy' | 'Neutral' | 'Sell' | 'Strong Sell';
    movingAverages: {
      summary: string;
      signals: Array<{
        name: string;
        value: number;
        signal: string;
      }>;
    };
    oscillators: {
      summary: string;
      signals: Array<{
        name: string;
        value: number;
        signal: string;
      }>;
    };
    pivotPoints: {
      classic: {
        pivot: number;
        r1: number;
        r2: number;
        r3: number;
        s1: number;
        s2: number;
        s3: number;
      };
      fibonacci: {
        pivot: number;
        r1: number;
        r2: number;
        r3: number;
        s1: number;
        s2: number;
        s3: number;
      };
    };
  }> {
    const result = await this.httpClient.get(`/technical-analysis-summary/${timeframe}/${symbol}`);
    return getFirstOrItem(result);
  }
}

