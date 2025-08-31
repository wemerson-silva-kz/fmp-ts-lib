import { getFirstOrItem } from '../utils/index.js';
import type { StockNews, QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class NewsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get FMP articles
   * @param page - Page number
   * @param size - Number of articles per page
   */
  async getFMPArticles(page: number = 0, size: number = 20): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string[];
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = { page, size };
    return this.httpClient.get('/fmp/articles', params);
  }

  /**
   * Get stock news
   * @param tickers - Stock symbols (comma-separated or array)
   * @param limit - Maximum number of results
   * @param from - Start date (YYYY-MM-DD)
   * @param to - End date (YYYY-MM-DD)
   */
  async getStockNews(
    tickers?: string | string[],
    limit: number = 50,
    from?: string,
    to?: string
  ): Promise<StockNews[]> {
    const params: QueryParams = { limit };
    if (tickers) {
      params.tickers = Array.isArray(tickers) ? tickers.join(',') : tickers;
    }
    if (from) params.from = from;
    if (to) params.to = to;
    return this.httpClient.get<StockNews[]>('/stock_news', params);
  }

  /**
   * Get general news
   * @param limit - Maximum number of results
   */
  async getGeneralNews(limit: number = 100): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string[];
    image: string;
    link: string;
    author: string;
    site: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/general_news', params);
  }

  /**
   * Get press releases for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getPressReleases(symbol: string, limit: number = 100): Promise<Array<{
    symbol: string;
    date: string;
    title: string;
    text: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get(`/press-releases/${symbol}`, params);
  }

  /**
   * Get news by sector
   * @param sector - Sector name (e.g., "Technology", "Healthcare")
   * @param limit - Maximum number of results
   */
  async getNewsBySector(sector: string, limit: number = 50): Promise<StockNews[]> {
    const params: QueryParams = { sector, limit };
    return this.httpClient.get<StockNews[]>('/stock_news/sector', params);
  }

  /**
   * Get trending news
   * @param limit - Maximum number of results
   */
  async getTrendingNews(limit: number = 50): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string[];
    image: string;
    link: string;
    author: string;
    site: string;
    trendingScore: number;
    socialMentions: number;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/trending-news', params);
  }

  /**
   * Get news sentiment analysis
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param limit - Maximum number of results
   */
  async getNewsSentiment(symbol: string, limit: number = 100): Promise<Array<{
    symbol: string;
    date: string;
    title: string;
    sentiment: 'Positive' | 'Negative' | 'Neutral';
    sentimentScore: number;
    text: string;
    url: string;
    site: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get(`/news-sentiment/${symbol}`, params);
  }

  /**
   * Get market news summary
   */
  async getMarketNewsSummary(): Promise<{
    date: string;
    totalArticles: number;
    positiveNews: number;
    negativeNews: number;
    neutralNews: number;
    overallSentiment: 'Positive' | 'Negative' | 'Neutral';
    topStories: Array<{
      title: string;
      tickers: string[];
      sentiment: string;
      url: string;
    }>;
    mostMentionedStocks: Array<{
      symbol: string;
      mentions: number;
      sentiment: string;
    }>;
  }> {
    const result = await this.httpClient.get('/market-news-summary');
    return getFirstOrItem(result);
  }

  /**
   * Get earnings news
   * @param symbol - Stock symbol (optional)
   * @param limit - Maximum number of results
   */
  async getEarningsNews(symbol?: string, limit: number = 50): Promise<Array<{
    symbol: string;
    date: string;
    title: string;
    text: string;
    url: string;
    site: string;
    earningsDate: string;
    earningsType: 'Pre-announcement' | 'Earnings Call' | 'Post-earnings';
  }>> {
    const params: QueryParams = { limit };
    if (symbol) params.symbol = symbol;
    return this.httpClient.get('/earnings-news', params);
  }

  /**
   * Get merger and acquisition news
   * @param limit - Maximum number of results
   */
  async getMergerAcquisitionNews(limit: number = 50): Promise<Array<{
    date: string;
    title: string;
    text: string;
    url: string;
    site: string;
    acquirer: string;
    target: string;
    dealValue?: number;
    dealStatus: string;
    tickers: string[];
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/merger-acquisition-news', params);
  }

  /**
   * Get IPO news
   * @param limit - Maximum number of results
   */
  async getIPONews(limit: number = 50): Promise<Array<{
    date: string;
    title: string;
    text: string;
    url: string;
    site: string;
    company: string;
    symbol?: string;
    expectedDate?: string;
    priceRange?: string;
    exchange?: string;
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/ipo-news', params);
  }

  /**
   * Get crypto news
   * @param limit - Maximum number of results
   */
  async getCryptoNews(limit: number = 50): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string[];
    image: string;
    link: string;
    author: string;
    site: string;
    cryptoMentions: string[];
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/crypto-news', params);
  }

  /**
   * Get forex news
   * @param limit - Maximum number of results
   */
  async getForexNews(limit: number = 50): Promise<Array<{
    title: string;
    date: string;
    content: string;
    image: string;
    link: string;
    author: string;
    site: string;
    currencyPairs: string[];
    impact: 'High' | 'Medium' | 'Low';
  }>> {
    const params: QueryParams = { limit };
    return this.httpClient.get('/forex-news', params);
  }

  /**
   * Search news by keyword
   * @param keyword - Search keyword
   * @param limit - Maximum number of results
   */
  async searchNews(keyword: string, limit: number = 50): Promise<Array<{
    title: string;
    date: string;
    content: string;
    tickers: string[];
    image: string;
    link: string;
    author: string;
    site: string;
    relevanceScore: number;
  }>> {
    const params: QueryParams = { keyword, limit };
    return this.httpClient.get('/search-news', params);
  }
}

