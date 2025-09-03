import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class EarningsTranscriptService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Latest Earning Transcripts API - Get latest earning transcripts
   */
  async getLatestEarningTranscripts(): Promise<Array<{
    symbol: string;
    quarter: number;
    year: number;
    content: string;
  }>> {
    return this.httpClient.get('/earning_call_transcript');
  }

  /**
   * Earning Transcripts by Symbol API - Get earning transcripts for symbol
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   * @param year - Year (optional, e.g., 2023)
   */
  async getEarningTranscriptsBySymbol(symbol: string, year?: number): Promise<Array<{
    symbol: string;
    quarter: number;
    year: number;
    content: string;
  }>> {
    const params: QueryParams = {};
    if (year !== undefined) params.year = year;
    return this.httpClient.get(`/earning_call_transcript/${symbol}`, params);
  }

  /**
   * Earning Transcripts Dates API - Get available transcript dates
   * @param symbol - Stock symbol (required, e.g., "AAPL")
   */
  async getEarningTranscriptsDates(symbol: string): Promise<Array<{
    symbol: string;
    quarter: number;
    year: number;
  }>> {
    return this.httpClient.get(`/earning_call_transcript/dates/${symbol}`);
  }

  /**
   * Batch Earning Transcripts API - Get transcripts for multiple symbols
   * @param symbols - Array of stock symbols (required, e.g., ["AAPL", "MSFT"])
   * @param year - Year (optional, e.g., 2023)
   */
  async getBatchEarningTranscripts(symbols: string[], year?: number): Promise<Array<{
    symbol: string;
    quarter: number;
    year: number;
    content: string;
  }>> {
    const symbolList = symbols.join(',');
    const params: QueryParams = {};
    if (year !== undefined) params.year = year;
    return this.httpClient.get(`/earning_call_transcript/${symbolList}`, params);
  }
}
