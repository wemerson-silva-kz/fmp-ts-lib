import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FundraisersService } from '../fundraisers.js';
import { HttpClient } from '../../utils/http-client.js';

describe('FundraisersService', () => {
  let fundraisersService: FundraisersService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    fundraisersService = new FundraisersService(mockHttpClient);
  });

  describe('getCrowdfundingOfferingsRSSFeed', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ title: 'Test Offering', cik: '123456' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await fundraisersService.getCrowdfundingOfferingsRSSFeed();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/crowdfunding-offerings-rss-feed');
    });
  });

  describe('searchCrowdfundingOfferings', () => {
    it('should call correct endpoint without parameters', async () => {
      const mockResponse = [{ cik: '123456', companyName: 'Test Company' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await fundraisersService.searchCrowdfundingOfferings();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/crowdfunding-offerings-search', {});
    });
  });

  describe('getFundraisingByCIK', () => {
    it('should call correct endpoint with CIK', async () => {
      const mockResponse = [{ cik: '123456', companyName: 'Test Company' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await fundraisersService.getFundraisingByCIK('123456');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/fundraising/123456');
    });
  });
});
