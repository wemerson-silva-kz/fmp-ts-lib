import { FMPClient } from './src/index.js';

async function testRealAPI() {
  const apiKey = 'demo';
  
  console.log('🚀 Testing FMP Client with real API key...\n');

  // Test with API key (using default URL)
  const client = new FMPClient({ 
    apiKey,
    cache: { enabled: true },
    metrics: { enabled: true }
  });

  // Test 1: Simple search
  console.log('📦 1. Search Symbol Test');
  try {
    const result = await client.search.searchSymbol('AAPL');
    console.log('   ✅ Search successful:', result?.[0]?.symbol || result);
  } catch (error) {
    console.log('   ❌ Search failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 2: Company profile
  console.log('\n🏢 2. Company Profile Test');
  try {
    const profile = await client.company.getCompanyProfile('AAPL');
    console.log('   ✅ Profile successful:', profile?.[0]?.companyName || 'Got data');
  } catch (error) {
    console.log('   ❌ Profile failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 3: Rate limiter
  console.log('\n🚦 3. Rate Limiter Test');
  try {
    const usage = client.getGlobalRateLimitUsage();
    console.log('   ✅ Rate limiter working:', {
      requests: usage.minuteUsage,
      limit: usage.minuteLimit
    });
  } catch (error) {
    console.log('   ❌ Rate limiter failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 4: Metrics
  console.log('\n📊 4. Metrics Test');
  try {
    const metrics = client.getMetrics();
    console.log('   ✅ Metrics available:', {
      totalRequests: metrics?.requests?.total || 0,
      successful: metrics?.requests?.successful || 0,
      cacheHits: metrics?.cache?.hits || 0
    });
  } catch (error) {
    console.log('   ❌ Metrics failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  console.log('\n🎉 Real API test completed!');
}

testRealAPI().catch(console.error);
