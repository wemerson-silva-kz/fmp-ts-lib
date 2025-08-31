import { getFirstOrItem } from '../utils/index.js';
import type { CryptoQuote, HistoricalPrice, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class CryptoService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get cryptocurrency quote
   * @param crypto - Crypto symbol (e.g., "BTCUSD", "ETHUSD")
   */
  async getCryptoQuote(crypto: string): Promise<CryptoQuote> {
    const result = await this.httpClient.get<CryptoQuote[]>(`/quote/${crypto}`);
    return getFirstOrItem(result);
  }

  /**
   * Get all cryptocurrency quotes
   */
  async getAllCryptoQuotes(): Promise<CryptoQuote[]> {
    return this.httpClient.get<CryptoQuote[]>('/quotes/crypto');
  }

  /**
   * Get historical cryptocurrency prices
   * @param symbol - Crypto symbol (e.g., "BTCUSD", "ETHUSD")
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getHistoricalCryptoPrices(
    symbol: string,
    from?: string,
    to?: string
  ): Promise<{
    symbol: string;
    historical: HistoricalPrice[];
  }> {
    const params: QueryParams = {};
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get(`/historical-price-full/crypto/${symbol}`, params);
  }

  /**
   * Get cryptocurrency market data
   * @param limit - Maximum number of results
   */
  async getCryptoMarketData(limit: number = 100): Promise<Array<{
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
    rank: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/crypto-market-data', params);
  }

  /**
   * Get cryptocurrency gainers
   * @param limit - Maximum number of results
   */
  async getCryptoGainers(limit: number = 50): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    marketCap: number;
    volume: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/crypto-gainers', params);
  }

  /**
   * Get cryptocurrency losers
   * @param limit - Maximum number of results
   */
  async getCryptoLosers(limit: number = 50): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    marketCap: number;
    volume: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/crypto-losers', params);
  }

  /**
   * Get cryptocurrency by market cap
   * @param limit - Maximum number of results
   */
  async getCryptoByMarketCap(limit: number = 100): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    marketCap: number;
    volume: number;
    changesPercentage: number;
    change: number;
    rank: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/crypto-market-cap', params);
  }

  /**
   * Get cryptocurrency fear and greed index
   */
  async getCryptoFearGreedIndex(): Promise<{
    value: number;
    valueClassification: string;
    timestamp: number;
    timeUntilUpdate: number;
  }> {
    const result = await this.httpClient.get('/crypto-fear-greed-index');
    return getFirstOrItem(result);
  }

  /**
   * Get cryptocurrency dominance
   */
  async getCryptoDominance(): Promise<Array<{
    symbol: string;
    name: string;
    marketCap: number;
    dominancePercentage: number;
  }>> {
    return this.httpClient.get('/crypto-dominance');
  }

  /**
   * Get cryptocurrency trading pairs
   * @param baseCurrency - Base currency (e.g., "BTC", "ETH")
   */
  async getCryptoTradingPairs(baseCurrency: string): Promise<Array<{
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    volume: number;
    exchange: string;
  }>> {
    const params: QueryParams = { base: baseCurrency };
    return this.httpClient.get('/crypto-trading-pairs', params);
  }

  /**
   * Get cryptocurrency exchange rates
   * @param fromCurrency - From currency (e.g., "BTC")
   * @param toCurrency - To currency (e.g., "USD")
   */
  async getCryptoExchangeRate(fromCurrency: string, toCurrency: string): Promise<{
    from: string;
    to: string;
    rate: number;
    timestamp: number;
  }> {
    const params: QueryParams = { from: fromCurrency, to: toCurrency };
    const result = await this.httpClient.get('/crypto-exchange-rate', params);
    return getFirstOrItem(result);
  }

  /**
   * Get cryptocurrency news
   * @param symbol - Crypto symbol (optional)
   * @param limit - Maximum number of results
   */
  async getCryptoNews(symbol?: string, limit: number = 50): Promise<Array<{
    symbol?: string;
    publishedDate: string;
    title: string;
    image: string;
    site: string;
    text: string;
    url: string;
    sentiment?: string;
  }>> {
    const params: QueryParams = { limit };
    if (symbol) params.symbol = symbol;
    return this.httpClient.get('/crypto-news', params);
  }

  /**
   * Get cryptocurrency market summary
   */
  async getCryptoMarketSummary(): Promise<{
    totalMarketCap: number;
    totalVolume: number;
    btcDominance: number;
    ethDominance: number;
    totalCoins: number;
    totalExchanges: number;
    marketCapChange24h: number;
    volumeChange24h: number;
  }> {
    const result = await this.httpClient.get('/crypto-market-summary');
    return getFirstOrItem(result);
  }

  /**
   * Get DeFi protocols data
   * @param limit - Maximum number of results
   */
  async getDeFiProtocols(limit: number = 100): Promise<Array<{
    name: string;
    symbol: string;
    tvl: number;
    tvlChange24h: number;
    category: string;
    chains: string[];
    description: string;
    website: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/defi-protocols', params);
  }

  /**
   * Get NFT collections data
   * @param limit - Maximum number of results
   */
  async getNFTCollections(limit: number = 100): Promise<Array<{
    name: string;
    symbol: string;
    floorPrice: number;
    floorPriceChange24h: number;
    volume24h: number;
    volumeChange24h: number;
    marketCap: number;
    totalSupply: number;
    owners: number;
    blockchain: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/nft-collections', params);
  }
}

