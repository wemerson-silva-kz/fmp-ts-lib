// HTTP Clients
export { HttpClient } from './http-client.js';
// export { EnhancedHttpClient } from './enhanced-http-client.js';

// Performance and reliability
export { MemoryCache } from './cache.js';
export { RetryManager, RetryError } from './retry.js';
export { MetricsCollector } from './metrics.js';

// API Detection
export { detectWorkingAPI } from './api-detector.js';

// Financial analysis utilities
export { FinancialAnalyzer, PortfolioAnalyzer } from './financial-analyzer.js';

// Types
export type { CacheOptions, CacheEntry } from './cache.js';
export type { RetryOptions } from './retry.js';
export type { APIMetrics, RequestMetric } from './metrics.js';
// export type { EnhancedHttpClientOptions } from './enhanced-http-client.js';

// Utility functions
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0] || '';
};

export const validateSymbol = (symbol: string): boolean => {
  return /^[A-Z]{1,5}$/.test(symbol.toUpperCase());
};

export const validateApiKey = (apiKey: string): boolean => {
  return apiKey.length > 0 && typeof apiKey === 'string';
};

export const buildSymbolList = (symbols: string[]): string => {
  return symbols.map(s => s.toUpperCase()).join(',');
};

export const parseNumber = (value: any): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};

export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

export const sanitizeSymbol = (symbol: string): string => {
  return symbol.toUpperCase().trim();
};

export const isValidTimeFrame = (timeframe: string): boolean => {
  const validTimeframes = ['1min', '5min', '15min', '30min', '1hour', '4hour', '1day'];
  return validTimeframes.includes(timeframe);
};

export const isValidPeriod = (period: string): boolean => {
  return ['annual', 'quarter'].includes(period);
};

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

/**
 * Helper function to safely get first item from array or return single item
 * Used for API responses that can return either array or single object
 */
export const getFirstOrItem = <T>(result: T[] | T | unknown): T => {
  if (Array.isArray(result)) {
    if (result.length === 0) {
      throw new Error('No data returned from API');
    }
    return result[0] as T; // We know it exists due to length check
  }
  return result as T; // Cast to expected type
};

/**
 * Helper to safely cast unknown API response to expected type
 */
export const safeCast = <T>(value: unknown): T => {
  return value as T;
};
