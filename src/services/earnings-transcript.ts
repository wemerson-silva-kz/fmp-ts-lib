import { getFirstOrItem } from '../utils/index.js';
import type { QueryParams } from '../types/index.js';
import { HttpClient } from '../utils/http-client.js';

export class EarningsTranscriptService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get earnings call transcript
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the earnings call
   * @param quarter - Quarter (1, 2, 3, 4)
   */
  async getEarningsCallTranscript(symbol: string, year: number, quarter: number): Promise<Array<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    content: string;
  }>> {
    const params: QueryParams = { year, quarter };
    return this.httpClient.get(`/earning_call_transcript/${symbol}`, params);
  }

  /**
   * Get batch earnings call transcripts
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the earnings calls
   */
  async getBatchEarningsCallTranscript(symbol: string, year: number): Promise<Array<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    content: string;
  }>> {
    const params: QueryParams = { year };
    return this.httpClient.get(`/batch_earning_call_transcript/${symbol}`, params);
  }

  /**
   * Get available earnings transcripts for a symbol
   * @param symbol - Stock symbol (e.g., "AAPL")
   */
  async getAvailableEarningsTranscripts(symbol: string): Promise<Array<{
    symbol: string;
    year: number;
    quarter: number;
    date: string;
    hasTranscript: boolean;
  }>> {
    return this.httpClient.get(`/earnings-transcript-dates/${symbol}`);
  }

  /**
   * Search earnings transcripts by keyword
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param keyword - Search keyword
   * @param limit - Maximum number of results
   */
  async searchEarningsTranscripts(
    symbol: string, 
    keyword: string, 
    limit: number = 10
  ): Promise<Array<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    matchedContent: string;
    relevanceScore: number;
  }>> {
    const params: QueryParams = { keyword, limit };
    return this.httpClient.get(`/earnings-transcript-search/${symbol}`, params);
  }

  /**
   * Get earnings transcript summary
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the earnings call
   * @param quarter - Quarter (1, 2, 3, 4)
   */
  async getEarningsTranscriptSummary(
    symbol: string, 
    year: number, 
    quarter: number
  ): Promise<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    summary: string;
    keyPoints: string[];
    sentiment: 'Positive' | 'Negative' | 'Neutral';
    managementTone: 'Confident' | 'Cautious' | 'Neutral';
    analystQuestions: number;
    duration: string;
    participants: Array<{
      name: string;
      title: string;
      company: string;
      type: 'Management' | 'Analyst';
    }>;
  }> {
    const params: QueryParams = { year, quarter };
    const result = await this.httpClient.get(`/earnings-transcript-summary/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get earnings transcript sentiment analysis
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the earnings call
   * @param quarter - Quarter (1, 2, 3, 4)
   */
  async getEarningsTranscriptSentiment(
    symbol: string, 
    year: number, 
    quarter: number
  ): Promise<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    overallSentiment: 'Positive' | 'Negative' | 'Neutral';
    sentimentScore: number;
    managementSentiment: {
      sentiment: 'Positive' | 'Negative' | 'Neutral';
      score: number;
      confidence: number;
    };
    analystSentiment: {
      sentiment: 'Positive' | 'Negative' | 'Neutral';
      score: number;
      confidence: number;
    };
    keyTopics: Array<{
      topic: string;
      sentiment: 'Positive' | 'Negative' | 'Neutral';
      mentions: number;
    }>;
  }> {
    const params: QueryParams = { year, quarter };
    const result = await this.httpClient.get(`/earnings-transcript-sentiment/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get earnings transcript key metrics mentioned
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the earnings call
   * @param quarter - Quarter (1, 2, 3, 4)
   */
  async getEarningsTranscriptMetrics(
    symbol: string, 
    year: number, 
    quarter: number
  ): Promise<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    mentionedMetrics: Array<{
      metric: string;
      value?: number;
      unit?: string;
      context: string;
      mentions: number;
      sentiment: 'Positive' | 'Negative' | 'Neutral';
    }>;
    guidanceUpdates: Array<{
      metric: string;
      previousGuidance?: string;
      newGuidance: string;
      changeType: 'Raised' | 'Lowered' | 'Maintained' | 'Introduced';
    }>;
  }> {
    const params: QueryParams = { year, quarter };
    const result = await this.httpClient.get(`/earnings-transcript-metrics/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get earnings transcript Q&A analysis
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the earnings call
   * @param quarter - Quarter (1, 2, 3, 4)
   */
  async getEarningsTranscriptQA(
    symbol: string, 
    year: number, 
    quarter: number
  ): Promise<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    totalQuestions: number;
    questionsByAnalyst: Array<{
      analystName: string;
      firm: string;
      questions: number;
      topics: string[];
    }>;
    topTopics: Array<{
      topic: string;
      questions: number;
      sentiment: 'Positive' | 'Negative' | 'Neutral';
    }>;
    managementResponses: {
      averageLength: number;
      tone: 'Confident' | 'Cautious' | 'Neutral';
      deflectedQuestions: number;
    };
  }> {
    const params: QueryParams = { year, quarter };
    const result = await this.httpClient.get(`/earnings-transcript-qa/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Compare earnings transcripts across quarters
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param quarters - Array of quarter objects [{year: 2023, quarter: 1}, {year: 2023, quarter: 2}]
   */
  async compareEarningsTranscripts(
    symbol: string, 
    quarters: Array<{year: number, quarter: number}>
  ): Promise<{
    symbol: string;
    comparison: Array<{
      year: number;
      quarter: number;
      date: string;
      sentiment: 'Positive' | 'Negative' | 'Neutral';
      sentimentScore: number;
      keyTopics: string[];
      guidanceChanges: number;
      analystQuestions: number;
    }>;
    trends: {
      sentimentTrend: 'Improving' | 'Declining' | 'Stable';
      topicEvolution: Array<{
        topic: string;
        trend: 'Increasing' | 'Decreasing' | 'Stable';
      }>;
      managementTone: 'More Confident' | 'More Cautious' | 'Consistent';
    };
  }> {
    const quarterParams = quarters.map(q => `${q.year}-${q.quarter}`).join(',');
    const params: QueryParams = { quarters: quarterParams };
    const result = await this.httpClient.get(`/earnings-transcript-comparison/${symbol}`, params);
    return getFirstOrItem(result);
  }

  /**
   * Get earnings transcript word cloud data
   * @param symbol - Stock symbol (e.g., "AAPL")
   * @param year - Year of the earnings call
   * @param quarter - Quarter (1, 2, 3, 4)
   */
  async getEarningsTranscriptWordCloud(
    symbol: string, 
    year: number, 
    quarter: number
  ): Promise<{
    symbol: string;
    quarter: number;
    year: number;
    date: string;
    wordFrequency: Array<{
      word: string;
      frequency: number;
      sentiment: 'Positive' | 'Negative' | 'Neutral';
      category: 'Business' | 'Financial' | 'Strategic' | 'Operational' | 'Other';
    }>;
    phrases: Array<{
      phrase: string;
      frequency: number;
      context: string;
    }>;
  }> {
    const params: QueryParams = { year, quarter };
    const result = await this.httpClient.get(`/earnings-transcript-wordcloud/${symbol}`, params);
    return getFirstOrItem(result);
  }
}

