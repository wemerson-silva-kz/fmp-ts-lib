import { FMPClient } from './src/index.js';

async function demonstrateEnhancedFeatures() {
  const apiKey = process.env.FMP_API_KEY || 'demo';

  console.log('🚀 Demonstrating Enhanced Features in Basic FMPClient\n');

  // 1. Basic client (no enhanced features)
  console.log('📦 1. Basic Client (no enhanced features)');
  const basicClient = new FMPClient({ apiKey });
  
  try {
    await basicClient.search.searchSymbol('AAPL');
    console.log('   ✅ Basic request successful');
    console.log('   📊 Metrics:', basicClient.getMetrics()); // Should be null
  } catch (error) {
    console.log('   ❌ Basic request failed:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 2. Client with cache enabled
  console.log('💾 2. Client with Cache Enabled');
  const cachedClient = new FMPClient({ 
    apiKey,
    cache: {
      enabled: true,
      ttl: 60000, // 1 minute
      maxSize: 100
    }
  });

  try {
    console.log('   Making first request (will hit API)...');
    const start1 = Date.now();
    await cachedClient.search.searchSymbol('MSFT');
    const time1 = Date.now() - start1;
    console.log(`   ✅ First request: ${time1}ms`);

    console.log('   Making second request (should use cache)...');
    const start2 = Date.now();
    await cachedClient.search.searchSymbol('MSFT');
    const time2 = Date.now() - start2;
    console.log(`   ✅ Second request: ${time2}ms (cached!)`);
    
    console.log('   📊 Cache performance improvement:', `${Math.round((time1 - time2) / time1 * 100)}%`);
  } catch (error) {
    console.log('   ❌ Cached request failed:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 3. Client with retry enabled
  console.log('🔄 3. Client with Retry Enabled');
  const retryClient = new FMPClient({ 
    apiKey,
    retry: {
      enabled: true,
      maxAttempts: 3,
      backoffMs: 1000
    }
  });

  try {
    await retryClient.search.searchSymbol('GOOGL');
    console.log('   ✅ Request with retry capability successful');
  } catch (error) {
    console.log('   ❌ Request failed even with retry:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 4. Client with metrics enabled
  console.log('📊 4. Client with Metrics Enabled');
  const metricsClient = new FMPClient({ 
    apiKey,
    metrics: {
      enabled: true
    }
  });

  try {
    await metricsClient.search.searchSymbol('TSLA');
    await metricsClient.search.searchSymbol('AMZN');
    
    const metrics = metricsClient.getMetrics();
    console.log('   ✅ Requests completed');
    console.log('   📊 Metrics:', JSON.stringify(metrics, null, 2));
  } catch (error) {
    console.log('   ❌ Metrics request failed:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 5. Client with all features enabled
  console.log('🎯 5. Client with ALL Enhanced Features');
  const fullClient = new FMPClient({ 
    apiKey,
    cache: { enabled: true, ttl: 300000, maxSize: 1000 },
    retry: { enabled: true, maxAttempts: 3, backoffMs: 1000 },
    metrics: { enabled: true }
  });

  try {
    // Batch requests
    console.log('   Making batch requests...');
    const batchResults = await fullClient.batchRequest([
      () => fullClient.search.searchSymbol('META'),
      () => fullClient.search.searchSymbol('NFLX'),
      () => fullClient.search.searchSymbol('NVDA')
    ]);
    
    console.log(`   ✅ Batch completed: ${batchResults.length} results`);
    
    const finalMetrics = fullClient.getMetrics();
    console.log('   📊 Final metrics:', JSON.stringify(finalMetrics, null, 2));
    
  } catch (error) {
    console.log('   ❌ Full-featured request failed:', error);
  }

  console.log('\n🎉 Enhanced features demonstration completed!');
  console.log('\n💡 Key Benefits:');
  console.log('   • Cache: Faster subsequent requests');
  console.log('   • Retry: Better reliability');
  console.log('   • Metrics: Performance monitoring');
  console.log('   • Batch: Efficient multiple requests');
  console.log('   • All features are OPTIONAL and backward compatible!');
}

// Run the demonstration
demonstrateEnhancedFeatures().catch(console.error);
