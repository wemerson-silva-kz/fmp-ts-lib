import { describe, it, expect, beforeEach, vi } from 'vitest';
import { EarningsTranscriptService } from '../earnings-transcript.js';
import { HttpClient } from '../../utils/http-client.js';

describe('EarningsTranscriptService', () => {
  let earningsTranscriptService: EarningsTranscriptService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    earningsTranscriptService = new EarningsTranscriptService(mockHttpClient);
  });

  describe('getLatestEarningTranscripts', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'AAPL', quarter: 4, year: 2024 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await earningsTranscriptService.getLatestEarningTranscripts();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/earning_call_transcript');
    });
  });

  describe('getEarningTranscriptsBySymbol', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'AAPL', quarter: 4, year: 2024 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await earningsTranscriptService.getEarningTranscriptsBySymbol('AAPL');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/earning_call_transcript/AAPL', {});
    });
  });
});
