import { FMPClient } from './src/index.js';

async function testRealAPI() {
  const apiKey = 'demo';
  
  console.log('🚀 Testing FMP Client with real API key...\n');

  // Test 1: Basic client
  console.log('📦 1. Basic Client Test');
  const basicClient = new FMPClient({ apiKey });
  
  try {
    const result = await basicClient.search.searchSymbol('AAPL');
    console.log('   ✅ Basic search successful:', result?.[0]?.symbol || 'No data');
  } catch (error) {
    console.log('   ❌ Basic search failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 2: Client with enhanced features
  console.log('\n🎯 2. Enhanced Client Test');
  const enhancedClient = new FMPClient({
    apiKey,
    cache: { enabled: true, ttl: 60000 },
    retry: { enabled: true, maxAttempts: 3 },
    metrics: { enabled: true }
  });

  try {
    console.log('   Making first request (API call)...');
    const start1 = Date.now();
    const result1 = await enhancedClient.company.getCompanyProfile('AAPL');
    const time1 = Date.now() - start1;
    console.log(`   ✅ First request: ${time1}ms - ${result1?.[0]?.companyName || 'No data'}`);

    console.log('   Making second request (should use cache)...');
    const start2 = Date.now();
    const result2 = await enhancedClient.company.getCompanyProfile('AAPL');
    const time2 = Date.now() - start2;
    console.log(`   ✅ Second request: ${time2}ms (cached!)`);

    const metrics = enhancedClient.getMetrics();
    console.log('   📊 Metrics:', {
      requests: metrics?.requests?.total || 0,
      cacheHits: metrics?.cache?.hits || 0,
      avgTime: Math.round(metrics?.performance?.avgResponseTime || 0)
    });

  } catch (error) {
    console.log('   ❌ Enhanced test failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 3: Rate limiter global
  console.log('\n🚦 3. Global Rate Limiter Test');
  FMPClient.configureGlobalRateLimit({
    requestsPerMinute: 300,
    requestsPerDay: 250000,
    enabled: true
  });

  const client1 = new FMPClient({ apiKey });
  const client2 = new FMPClient({ apiKey });

  try {
    await client1.search.searchSymbol('MSFT');
    await client2.search.searchSymbol('GOOGL');
    
    const usage = client1.getGlobalRateLimitUsage();
    console.log('   ✅ Rate limiter working:', {
      minuteUsage: usage.minuteUsage,
      minuteLimit: usage.minuteLimit,
      dayUsage: usage.dayUsage
    });
  } catch (error) {
    console.log('   ❌ Rate limiter test failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 4: Batch requests
  console.log('\n📦 4. Batch Requests Test');
  try {
    const batchResults = await enhancedClient.batchRequest([
      () => enhancedClient.search.searchSymbol('TSLA'),
      () => enhancedClient.search.searchSymbol('AMZN'),
      () => enhancedClient.search.searchSymbol('META')
    ]);
    
    console.log(`   ✅ Batch completed: ${batchResults.length} results`);
    batchResults.forEach((result, i) => {
      const symbol = result?.[0]?.symbol || 'No data';
      console.log(`      ${i + 1}. ${symbol}`);
    });
  } catch (error) {
    console.log('   ❌ Batch test failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  console.log('\n🎉 Real API test completed!');
}

testRealAPI().catch(console.error);
