import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CryptoService } from '../crypto.js';
import { HttpClient } from '../../utils/http-client.js';

describe('CryptoService', () => {
  let cryptoService: CryptoService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = { get: vi.fn() };
    cryptoService = new CryptoService(mockHttpClient);
  });

  describe('getCryptocurrencyList', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'BTCUSD', name: 'Bitcoin' }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cryptoService.getCryptocurrencyList();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/cryptocurrency-list');
    });
  });

  describe('getCryptocurrencyQuote', () => {
    it('should call correct endpoint with symbol', async () => {
      const mockResponse = [{ symbol: 'BTCUSD', price: 45000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cryptoService.getCryptocurrencyQuote('BTCUSD');

      expect(mockHttpClient.get).toHaveBeenCalledWith('/quote', { symbol: 'BTCUSD' });
    });
  });

  describe('getAllCryptocurrencyQuotes', () => {
    it('should call correct endpoint', async () => {
      const mockResponse = [{ symbol: 'BTCUSD', price: 45000 }];
      mockHttpClient.get.mockResolvedValue(mockResponse);

      await cryptoService.getAllCryptocurrencyQuotes();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/batch-crypto-quotes');
    });
  });
});
