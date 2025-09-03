import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class TechnicalIndicatorsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Simple Moving Average (SMA) API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param periodLength - Period length (required, e.g., 20)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getSMA(symbol: string, periodLength: number, timeframe: string): Promise<Array<{
    date: string;
    sma: number;
  }>> {
    return this.httpClient.get('/technical-indicators/sma', { symbol, periodLength, timeframe });
  }

  /**
   * Exponential Moving Average (EMA) API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param periodLength - Period length (required, e.g., 20)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getEMA(symbol: string, periodLength: number, timeframe: string): Promise<Array<{
    date: string;
    ema: number;
  }>> {
    return this.httpClient.get('/technical-indicators/ema', { symbol, periodLength, timeframe });
  }

  /**
   * Relative Strength Index (RSI) API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param periodLength - Period length (required, e.g., 14)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getRSI(symbol: string, periodLength: number, timeframe: string): Promise<Array<{
    date: string;
    rsi: number;
  }>> {
    return this.httpClient.get('/technical-indicators/rsi', { symbol, periodLength, timeframe });
  }

  /**
   * Moving Average Convergence Divergence (MACD) API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param fastPeriod - Fast period (required, e.g., 12)
   * @param slowPeriod - Slow period (required, e.g., 26)
   * @param signalPeriod - Signal period (required, e.g., 9)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getMACD(symbol: string, fastPeriod: number, slowPeriod: number, signalPeriod: number, timeframe: string): Promise<Array<{
    date: string;
    macd: number;
    signal: number;
    histogram: number;
  }>> {
    return this.httpClient.get('/technical-indicators/macd', { 
      symbol, 
      fastPeriod, 
      slowPeriod, 
      signalPeriod, 
      timeframe 
    });
  }

  /**
   * Average Directional Index (ADX) API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param periodLength - Period length (required, e.g., 14)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getADX(symbol: string, periodLength: number, timeframe: string): Promise<Array<{
    date: string;
    adx: number;
  }>> {
    return this.httpClient.get('/technical-indicators/adx', { symbol, periodLength, timeframe });
  }

  /**
   * Bollinger Bands API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param periodLength - Period length (required, e.g., 20)
   * @param standardDeviation - Standard deviation (required, e.g., 2)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getBollingerBands(symbol: string, periodLength: number, standardDeviation: number, timeframe: string): Promise<Array<{
    date: string;
    upperBand: number;
    middleBand: number;
    lowerBand: number;
  }>> {
    return this.httpClient.get('/technical-indicators/bb', { 
      symbol, 
      periodLength, 
      standardDeviation, 
      timeframe 
    });
  }

  /**
   * Stochastic Oscillator API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param kPeriod - K period (required, e.g., 14)
   * @param dPeriod - D period (required, e.g., 3)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getStochastic(symbol: string, kPeriod: number, dPeriod: number, timeframe: string): Promise<Array<{
    date: string;
    k: number;
    d: number;
  }>> {
    return this.httpClient.get('/technical-indicators/stoch', { 
      symbol, 
      kPeriod, 
      dPeriod, 
      timeframe 
    });
  }

  /**
   * Williams %R API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param periodLength - Period length (required, e.g., 14)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getWilliamsR(symbol: string, periodLength: number, timeframe: string): Promise<Array<{
    date: string;
    wr: number;
  }>> {
    return this.httpClient.get('/technical-indicators/wr', { symbol, periodLength, timeframe });
  }

  /**
   * Commodity Channel Index (CCI) API
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param periodLength - Period length (required, e.g., 20)
   * @param timeframe - Timeframe (required, e.g., "1day")
   */
  async getCCI(symbol: string, periodLength: number, timeframe: string): Promise<Array<{
    date: string;
    cci: number;
  }>> {
    return this.httpClient.get('/technical-indicators/cci', { symbol, periodLength, timeframe });
  }
}
