import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CommitmentOfTradersService {
  constructor(private httpClient: HttpClient) {}

  /**
   * COT Report API - Get comprehensive Commitment of Traders reports
   * @param symbol - Commodity symbol (optional, e.g., "KC", "GC", "CL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format)
   */
  async getCOTReport(symbol?: string, from?: string, to?: string): Promise<Array<{
    symbol: string;
    date: string;
    name: string;
    sector: string;
    marketAndExchangeNames: string;
    cftcContractMarketCode: string;
    cftcMarketCode: string;
    cftcRegionCode: string;
    cftcCommodityCode: string;
    openInterestAll: number;
    noncommPositionsLongAll: number;
    noncommPositionsShortAll: number;
    noncommPositionsSpreadAll: number;
    commPositionsLongAll: number;
    commPositionsShortAll: number;
    totReptPositionsLongAll: number;
    totReptPositionsShortAll: number;
    nonreptPositionsLongAll: number;
    nonreptPositionsShortAll: number;
    openInterestOld: number;
    noncommPositionsLongOld: number;
    noncommPositionsShortOld: number;
    noncommPositionsSpreadOld: number;
    commPositionsLongOld: number;
    commPositionsShortOld: number;
    totReptPositionsLongOld: number;
    totReptPositionsShortOld: number;
    nonreptPositionsLongOld: number;
    nonreptPositionsShortOld: number;
    openInterestOther: number;
    noncommPositionsLongOther: number;
    noncommPositionsShortOther: number;
    noncommPositionsSpreadOther: number;
    commPositionsLongOther: number;
    commPositionsShortOther: number;
    totReptPositionsLongOther: number;
    totReptPositionsShortOther: number;
    nonreptPositionsLongOther: number;
    nonreptPositionsShortOther: number;
    changeInOpenInterestAll: number;
    changeInNoncommLongAll: number;
    changeInNoncommShortAll: number;
    changeInNoncommSpeadAll: number;
    changeInCommLongAll: number;
    changeInCommShortAll: number;
    changeInTotReptLongAll: number;
    changeInTotReptShortAll: number;
    changeInNonreptLongAll: number;
    changeInNonreptShortAll: number;
    pctOfOpenInterestAll: number;
    pctOfOiNoncommLongAll: number;
    pctOfOiNoncommShortAll: number;
    pctOfOiNoncommSpreadAll: number;
    pctOfOiCommLongAll: number;
    pctOfOiCommShortAll: number;
    pctOfOiTotReptLongAll: number;
    pctOfOiTotReptShortAll: number;
    pctOfOiNonreptLongAll: number;
    pctOfOiNonreptShortAll: number;
    pctOfOpenInterestOl: number;
    pctOfOiNoncommLongOl: number;
    pctOfOiNoncommShortOl: number;
    pctOfOiNoncommSpreadOl: number;
    pctOfOiCommLongOl: number;
    pctOfOiCommShortOl: number;
    pctOfOiTotReptLongOl: number;
    pctOfOiTotReptShortOl: number;
    pctOfOiNonreptLongOl: number;
    pctOfOiNonreptShortOl: number;
    pctOfOpenInterestOther: number;
    pctOfOiNoncommLongOther: number;
    pctOfOiNoncommShortOther: number;
    pctOfOiNoncommSpreadOther: number;
    pctOfOiCommLongOther: number;
    pctOfOiCommShortOther: number;
    pctOfOiTotReptLongOther: number;
    pctOfOiTotReptShortOther: number;
    pctOfOiNonreptLongOther: number;
    pctOfOiNonreptShortOther: number;
    tradersTotAll: number;
    tradersNoncommLongAll: number;
    tradersNoncommShortAll: number;
    tradersNoncommSpreadAll: number;
    tradersCommLongAll: number;
    tradersCommShortAll: number;
    tradersTotReptLongAll: number;
    tradersTotReptShortAll: number;
    tradersTotOl: number;
    tradersNoncommLongOl: number;
    tradersNoncommShortOl: number;
    tradersNoncommSpeadOl: number;
    tradersCommLongOl: number;
    tradersCommShortOl: number;
    tradersTotReptLongOl: number;
    tradersTotReptShortOl: number;
    tradersTotOther: number;
    tradersNoncommLongOther: number;
    tradersNoncommShortOther: number;
    tradersNoncommSpreadOther: number;
    tradersCommLongOther: number;
    tradersCommShortOther: number;
    tradersTotReptLongOther: number;
    tradersTotReptShortOther: number;
    concGrossLe4TdrLongAll: number;
    concGrossLe4TdrShortAll: number;
    concGrossLe8TdrLongAll: number;
    concGrossLe8TdrShortAll: number;
    concNetLe4TdrLongAll: number;
    concNetLe4TdrShortAll: number;
    concNetLe8TdrLongAll: number;
    concNetLe8TdrShortAll: number;
    concGrossLe4TdrLongOl: number;
    concGrossLe4TdrShortOl: number;
    concGrossLe8TdrLongOl: number;
    concGrossLe8TdrShortOl: number;
    concNetLe4TdrLongOl: number;
    concNetLe4TdrShortOl: number;
    concNetLe8TdrLongOl: number;
    concNetLe8TdrShortOl: number;
    concGrossLe4TdrLongOther: number;
    concGrossLe4TdrShortOther: number;
    concGrossLe8TdrLongOther: number;
    concGrossLe8TdrShortOther: number;
    concNetLe4TdrLongOther: number;
    concNetLe4TdrShortOther: number;
    concNetLe8TdrLongOther: number;
    concNetLe8TdrShortOther: number;
    contractUnits: string;
  }>> {
    const params: QueryParams = {};
    if (symbol) params.symbol = symbol;
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/commitment-of-traders-report', params);
  }

  /**
   * COT Analysis By Dates API - Analyze COT reports for specific date range
   * @param symbol - Commodity symbol (optional, e.g., "B6", "GC", "CL")
   * @param from - Start date (optional, YYYY-MM-DD format)
   * @param to - End date (optional, YYYY-MM-DD format, max 90-day range)
   */
  async getCOTAnalysis(symbol?: string, from?: string, to?: string): Promise<Array<{
    symbol: string;
    date: string;
    name: string;
    sector: string;
    exchange: string;
    currentLongMarketSituation: number;
    currentShortMarketSituation: number;
    marketSituation: string;
    previousLongMarketSituation: number;
    previousShortMarketSituation: number;
    previousMarketSituation: string;
    netPostion: number;
    previousNetPosition: number;
    changeInNetPosition: number;
    marketSentiment: string;
    reversalTrend: boolean;
  }>> {
    const params: QueryParams = {};
    if (symbol) params.symbol = symbol;
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get('/commitment-of-traders-analysis', params);
  }

  /**
   * COT Report List API - Get list of available COT reports
   */
  async getCOTReportList(): Promise<Array<{
    symbol: string;
    name: string;
  }>> {
    return this.httpClient.get('/commitment-of-traders-list');
  }
}
