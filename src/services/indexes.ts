import { getFirstOrItem } from '../utils/index.js';
import type { HistoricalPrice, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class IndexesService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get major index data
   * @param index - Index symbol (e.g., "^GSPC", "^DJI", "^IXIC")
   */
  async getMajorIndex(index: string): Promise<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    marketCap: number;
    priceAvg50: number;
    priceAvg200: number;
    volume: number;
    avgVolume: number;
    exchange: string;
    open: number;
    previousClose: number;
    timestamp: number;
  }> {
    const result = await this.httpClient.get(`/quote/${index}`);
    return getFirstOrItem(result);
  }

  /**
   * Get historical major index data
   * @param index - Index symbol (e.g., "^GSPC", "^DJI", "^IXIC")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalMajorIndex(
    index: string,
    from?: string,
    to?: string
  ): Promise<HistoricalPrice[]> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get<HistoricalPrice[]>(`/historical-chart/1day/${index}`, params);
  }

  /**
   * Get S&P 500 constituent companies
   */
  async getSP500Constituents(): Promise<Array<{
    symbol: string;
    name: string;
    sector: string;
    subSector: string;
    headQuarter: string;
    dateFirstAdded: string;
    cik: string;
    founded: string;
  }>> {
    return this.httpClient.get('/sp500_constituent');
  }

  /**
   * Get NASDAQ constituent companies
   */
  async getNasdaqConstituents(): Promise<Array<{
    symbol: string;
    name: string;
    sector: string;
    subSector: string;
    headQuarter: string;
    dateFirstAdded: string;
    cik: string;
    founded: string;
  }>> {
    return this.httpClient.get('/nasdaq_constituent');
  }

  /**
   * Get Dow Jones constituent companies
   */
  async getDowJonesConstituents(): Promise<Array<{
    symbol: string;
    name: string;
    sector: string;
    subSector: string;
    headQuarter: string;
    dateFirstAdded: string;
    cik: string;
    founded: string;
  }>> {
    return this.httpClient.get('/dowjones_constituent');
  }

  /**
   * Get historical S&P 500 constituents
   */
  async getHistoricalSP500Constituents(): Promise<Array<{
    dateAdded: string;
    addedSecurity: string;
    removedTicker: string;
    removedSecurity: string;
    date: string;
    reason: string;
  }>> {
    return this.httpClient.get('/historical/sp500_constituent');
  }

  /**
   * Get historical NASDAQ constituents
   */
  async getHistoricalNasdaqConstituents(): Promise<Array<{
    dateAdded: string;
    addedSecurity: string;
    removedTicker: string;
    removedSecurity: string;
    date: string;
    reason: string;
  }>> {
    return this.httpClient.get('/historical/nasdaq_constituent');
  }

  /**
   * Get historical Dow Jones constituents
   */
  async getHistoricalDowJonesConstituents(): Promise<Array<{
    dateAdded: string;
    addedSecurity: string;
    removedTicker: string;
    removedSecurity: string;
    date: string;
    reason: string;
  }>> {
    return this.httpClient.get('/historical/dowjones_constituent');
  }

  /**
   * Get all major indexes quotes
   */
  async getAllMajorIndexes(): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    marketCap: number;
    priceAvg50: number;
    priceAvg200: number;
    volume: number;
    avgVolume: number;
    exchange: string;
    open: number;
    previousClose: number;
    timestamp: number;
  }>> {
    const indexes = ['^GSPC', '^DJI', '^IXIC', '^RUT', '^VIX'];
    const indexList = indexes.join(',');
    return this.httpClient.get(`/quote/${indexList}`);
  }

  /**
   * Get index performance comparison
   * @param indexes - Array of index symbols
   * @param period - Time period for comparison
   */
  async getIndexPerformanceComparison(
    indexes: string[],
    period: '1D' | '5D' | '1M' | '3M' | '6M' | '1Y' | '5Y' = '1Y'
  ): Promise<Array<{
    symbol: string;
    name: string;
    performance: number;
    startPrice: number;
    endPrice: number;
    period: string;
  }>> {
    const indexList = indexes.join(',');
    const params: QueryParams = { period };
    return this.httpClient.get(`/index-performance/${indexList}`, params);
  }

  /**
   * Get sector performance within an index
   * @param index - Index symbol (e.g., "^GSPC")
   */
  async getSectorPerformanceByIndex(index: string): Promise<Array<{
    sector: string;
    changesPercentage: number;
    totalCompanies: number;
    marketCap: number;
  }>> {
    return this.httpClient.get(`/sector-performance/${index}`);
  }
}

