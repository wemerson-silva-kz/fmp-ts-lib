import type { 
  FinancialRatios, 
  KeyMetrics, 
  IncomeStatement
} from '../types/index.js';

/**
 * Financial Analysis Utilities
 * Helper functions for common financial calculations and analysis
 */
export class FinancialAnalyzer {
  
  /**
   * Calculate financial health score (0-100)
   * Based on key financial ratios and metrics
   */
  static calculateHealthScore(ratios: FinancialRatios, metrics: KeyMetrics): number {
    let score = 0;
    let factors = 0;

    // Liquidity (25% weight)
    if (ratios.currentRatio) {
      score += this.scoreRatio(ratios.currentRatio, 1.2, 2.5) * 0.25;
      factors += 0.25;
    }

    // Profitability (30% weight)
    if (ratios.returnOnEquity) {
      score += this.scoreRatio(ratios.returnOnEquity, 0.10, 0.20) * 0.15;
      factors += 0.15;
    }
    if (ratios.grossProfitMargin) {
      score += this.scoreRatio(ratios.grossProfitMargin, 0.20, 0.40) * 0.15;
      factors += 0.15;
    }

    // Leverage (20% weight)
    if (ratios.debtEquityRatio) {
      score += this.scoreRatio(ratios.debtEquityRatio, 0.5, 1.0, true) * 0.20;
      factors += 0.20;
    }

    // Efficiency (15% weight)
    if (ratios.assetTurnover) {
      score += this.scoreRatio(ratios.assetTurnover, 0.5, 1.5) * 0.15;
      factors += 0.15;
    }

    // Valuation (10% weight)
    if (metrics.peRatio && metrics.peRatio > 0) {
      score += this.scoreRatio(metrics.peRatio, 15, 25, true) * 0.10;
      factors += 0.10;
    }

    return factors > 0 ? Math.round((score / factors) * 100) : 0;
  }

  /**
   * Identify potential red flags in financial data
   */
  static identifyRedFlags(
    ratios: FinancialRatios[], 
    statements: IncomeStatement[]
  ): Array<{ type: string; severity: 'low' | 'medium' | 'high'; description: string }> {
    const flags: Array<{ type: string; severity: 'low' | 'medium' | 'high'; description: string }> = [];

    if (ratios.length === 0 || statements.length === 0) return flags;

    const latest = ratios[0];
    const latestStatement = statements[0];

    // Liquidity concerns
    if (latest?.currentRatio && latest.currentRatio < 1.0) {
      flags.push({
        type: 'liquidity',
        severity: 'high',
        description: `Low current ratio (${latest.currentRatio.toFixed(2)}) indicates potential liquidity issues`
      });
    }

    // Declining revenue
    if (statements.length >= 2) {
      const revenueChange = this.calculateGrowthRate(statements[1]?.revenue, statements[0]?.revenue);
      if (revenueChange < -0.10) {
        flags.push({
          type: 'revenue',
          severity: 'medium',
          description: `Revenue declined by ${Math.abs(revenueChange * 100).toFixed(1)}% year-over-year`
        });
      }
    }

    // High debt levels
    if (latest?.debtEquityRatio && latest.debtEquityRatio > 2.0) {
      flags.push({
        type: 'leverage',
        severity: 'medium',
        description: `High debt-to-equity ratio (${latest.debtEquityRatio.toFixed(2)}) indicates elevated financial risk`
      });
    }

    // Negative cash flow
    if (latestStatement?.netIncome && latestStatement.netIncome < 0) {
      flags.push({
        type: 'profitability',
        severity: 'high',
        description: 'Company reported negative net income'
      });
    }

    return flags;
  }

  /**
   * Calculate DuPont analysis
   */
  static calculateDuPontAnalysis(ratios: FinancialRatios): {
    roe: number;
    netProfitMargin: number;
    assetTurnover: number;
    equityMultiplier: number;
    breakdown: string;
  } | null {
    if (!ratios.returnOnEquity || !ratios.netProfitMargin || !ratios.assetTurnover) {
      return null;
    }

    const equityMultiplier = ratios.returnOnEquity / (ratios.netProfitMargin * ratios.assetTurnover);

    return {
      roe: ratios.returnOnEquity,
      netProfitMargin: ratios.netProfitMargin,
      assetTurnover: ratios.assetTurnover,
      equityMultiplier,
      breakdown: `ROE = ${ratios.netProfitMargin.toFixed(3)} × ${ratios.assetTurnover.toFixed(3)} × ${equityMultiplier.toFixed(3)} = ${ratios.returnOnEquity.toFixed(3)}`
    };
  }

  /**
   * Calculate peer comparison metrics
   */
  static compareToPeers(
    company: { ratios: FinancialRatios; metrics: KeyMetrics },
    peers: Array<{ symbol: string; ratios: FinancialRatios; metrics: KeyMetrics }>
  ): {
    metric: string;
    companyValue: number;
    peerAverage: number;
    percentile: number;
    ranking: 'top' | 'above_average' | 'average' | 'below_average' | 'bottom';
  }[] {
    const comparisons: any[] = [];
    
    const metricsToCompare = [
      { key: 'returnOnEquity', name: 'Return on Equity', source: 'ratios' },
      { key: 'grossProfitMargin', name: 'Gross Profit Margin', source: 'ratios' },
      { key: 'currentRatio', name: 'Current Ratio', source: 'ratios' },
      { key: 'peRatio', name: 'P/E Ratio', source: 'metrics' },
      { key: 'priceToBookRatio', name: 'Price to Book', source: 'metrics' }
    ];

    for (const metric of metricsToCompare) {
      const companyValue = (company as any)[metric.source]?.[metric.key];
      if (companyValue === undefined) continue;

      const peerValues = peers
        .map(peer => (peer as any)[metric.source]?.[metric.key])
        .filter(val => val !== undefined && val !== null);

      if (peerValues.length === 0) continue;

      const peerAverage = peerValues.reduce((sum, val) => sum + val, 0) / peerValues.length;
      const sortedValues = [...peerValues, companyValue].sort((a, b) => b - a);
      const rank = sortedValues.indexOf(companyValue) + 1;
      const percentile = ((sortedValues.length - rank + 1) / sortedValues.length) * 100;

      let ranking: 'top' | 'above_average' | 'average' | 'below_average' | 'bottom';
      if (percentile >= 90) ranking = 'top';
      else if (percentile >= 70) ranking = 'above_average';
      else if (percentile >= 30) ranking = 'average';
      else if (percentile >= 10) ranking = 'below_average';
      else ranking = 'bottom';

      comparisons.push({
        metric: metric.name,
        companyValue,
        peerAverage,
        percentile,
        ranking
      });
    }

    return comparisons;
  }

  /**
   * Calculate trend analysis
   */
  static calculateTrends(data: number[], periods: string[]): {
    trend: 'increasing' | 'decreasing' | 'stable' | 'volatile';
    cagr: number;
    volatility: number;
    strength: 'strong' | 'moderate' | 'weak';
  } {
    if (data.length < 2) {
      return { trend: 'stable', cagr: 0, volatility: 0, strength: 'weak' };
    }

    // Calculate CAGR
    const firstValue = data[data.length - 1];
    const lastValue = data[0];
    
    if (!firstValue || !lastValue || firstValue === 0) {
      return { trend: 'stable', cagr: 0, volatility: 0, strength: 'weak' };
    }
    
    const years = data.length - 1;
    const cagr = Math.pow(lastValue / firstValue, 1 / years) - 1;

    // Calculate volatility (standard deviation of year-over-year changes)
    const changes = [];
    for (let i = 0; i < data.length - 1; i++) {
      const current = data[i];
      const previous = data[i + 1];
      if (current !== undefined && previous !== undefined && previous !== 0) {
        const change = (current - previous) / previous;
        changes.push(change);
      }
    }

    if (changes.length === 0) {
      return { trend: 'stable', cagr, volatility: 0, strength: 'weak' };
    }

    const avgChange = changes.reduce((sum, change) => sum + change, 0) / changes.length;
    const variance = changes.reduce((sum, change) => sum + Math.pow(change - avgChange, 2), 0) / changes.length;
    const volatility = Math.sqrt(variance);

    // Determine trend
    let trend: 'increasing' | 'decreasing' | 'stable' | 'volatile';
    if (volatility > 0.20) {
      trend = 'volatile';
    } else if (cagr > 0.02) {
      trend = 'increasing';
    } else if (cagr < -0.02) {
      trend = 'decreasing';
    } else {
      trend = 'stable';
    }

    // Determine strength
    let strength: 'strong' | 'moderate' | 'weak';
    if (Math.abs(cagr) > 0.15 && volatility < 0.15) {
      strength = 'strong';
    } else if (Math.abs(cagr) > 0.05 && volatility < 0.25) {
      strength = 'moderate';
    } else {
      strength = 'weak';
    }

    return { trend, cagr, volatility, strength };
  }

  // Helper methods
  private static scoreRatio(value: number, min: number, max: number, inverse: boolean = false): number {
    if (inverse) {
      if (value <= min) return 1;
      if (value >= max) return 0;
      return 1 - (value - min) / (max - min);
    } else {
      if (value <= min) return 0;
      if (value >= max) return 1;
      return (value - min) / (max - min);
    }
  }

  private static calculateGrowthRate(oldValue: number | undefined, newValue: number | undefined): number {
    if (!oldValue || !newValue || oldValue === 0) return 0;
    return (newValue - oldValue) / oldValue;
  }
}

/**
 * Portfolio Analysis Utilities
 */
export class PortfolioAnalyzer {
  
  /**
   * Calculate portfolio metrics
   */
  static calculatePortfolioMetrics(
    holdings: Array<{ symbol: string; shares: number; currentPrice: number; cost: number }>
  ): {
    totalValue: number;
    totalCost: number;
    totalGainLoss: number;
    totalGainLossPercent: number;
    holdings: Array<{
      symbol: string;
      shares: number;
      currentValue: number;
      cost: number;
      gainLoss: number;
      gainLossPercent: number;
      weight: number;
    }>;
  } {
    const totalValue = holdings.reduce((sum, holding) => sum + (holding.shares * holding.currentPrice), 0);
    const totalCost = holdings.reduce((sum, holding) => sum + holding.cost, 0);
    
    const processedHoldings = holdings.map(holding => {
      const currentValue = holding.shares * holding.currentPrice;
      const gainLoss = currentValue - holding.cost;
      const gainLossPercent = holding.cost > 0 ? (gainLoss / holding.cost) * 100 : 0;
      const weight = totalValue > 0 ? (currentValue / totalValue) * 100 : 0;
      
      return {
        symbol: holding.symbol,
        shares: holding.shares,
        currentValue,
        cost: holding.cost,
        gainLoss,
        gainLossPercent,
        weight
      };
    });

    return {
      totalValue,
      totalCost,
      totalGainLoss: totalValue - totalCost,
      totalGainLossPercent: totalCost > 0 ? ((totalValue - totalCost) / totalCost) * 100 : 0,
      holdings: processedHoldings
    };
  }

  /**
   * Calculate portfolio diversification score
   */
  static calculateDiversificationScore(
    holdings: Array<{ symbol: string; weight: number; sector: string; marketCap: 'small' | 'mid' | 'large' }>
  ): {
    score: number;
    sectorConcentration: Map<string, number>;
    marketCapDistribution: { small: number; mid: number; large: number };
    recommendations: string[];
  } {
    let score = 100;
    const recommendations: string[] = [];
    
    // Sector concentration analysis
    const sectorConcentration = new Map<string, number>();
    holdings.forEach(holding => {
      const current = sectorConcentration.get(holding.sector) || 0;
      sectorConcentration.set(holding.sector, current + holding.weight);
    });

    // Penalize over-concentration in any sector
    for (const [sector, weight] of sectorConcentration.entries()) {
      if (weight > 30) {
        score -= (weight - 30) * 2;
        recommendations.push(`Reduce exposure to ${sector} sector (currently ${weight.toFixed(1)}%)`);
      }
    }

    // Market cap distribution
    const marketCapDistribution = { small: 0, mid: 0, large: 0 };
    holdings.forEach(holding => {
      marketCapDistribution[holding.marketCap] += holding.weight;
    });

    // Penalize extreme concentration in market cap
    Object.entries(marketCapDistribution).forEach(([cap, weight]) => {
      if (weight > 70) {
        score -= (weight - 70);
        recommendations.push(`Consider diversifying across market caps (${cap}-cap is ${weight.toFixed(1)}%)`);
      }
    });

    // Penalize having too few holdings
    if (holdings.length < 10) {
      score -= (10 - holdings.length) * 3;
      recommendations.push('Consider increasing number of holdings for better diversification');
    }

    return {
      score: Math.max(0, Math.round(score)),
      sectorConcentration,
      marketCapDistribution,
      recommendations
    };
  }
}
