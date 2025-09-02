import { FMPClient, detectWorkingAPI } from './src/index.js';

async function testAutoDetection() {
  const apiKey = 'demo';
  
  console.log('🔍 Testing API URL Auto-Detection...\n');

  // Test 1: Manual detection
  console.log('📡 1. Manual API Detection');
  try {
    const workingUrl = await detectWorkingAPI(apiKey);
    console.log('   ✅ Working URL detected:', workingUrl);
  } catch (error) {
    console.log('   ❌ Detection failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 2: Auto-detection in client (no baseUrl specified)
  console.log('\n🤖 2. Auto-Detection in Client');
  const client = new FMPClient({ 
    apiKey,
    // No baseUrl - should auto-detect
    cache: { enabled: true },
    metrics: { enabled: true }
  });

  try {
    console.log('   Making request (will auto-detect URL)...');
    const result = await client.search.searchSymbol('AAPL');
    console.log('   ✅ Auto-detection successful:', result?.[0]?.symbol || 'Got data');
    
    const usage = client.getGlobalRateLimitUsage();
    console.log('   📊 Requests made:', usage.minuteUsage);
  } catch (error) {
    console.log('   ❌ Auto-detection failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Test 3: Manual URL override
  console.log('\n⚙️ 3. Manual URL Override');
  const manualClient = new FMPClient({ 
    apiKey,
    baseUrl: 'https://financialmodelingprep.com/stable', // Force stable
    cache: { enabled: true }
  });

  try {
    const result = await manualClient.search.searchSymbol('MSFT');
    console.log('   ✅ Manual URL working:', result?.[0]?.symbol || 'Got data');
  } catch (error) {
    console.log('   ❌ Manual URL failed:', error instanceof Error ? error.message : 'Unknown error');
  }

  console.log('\n🎉 Auto-detection test completed!');
}

testAutoDetection().catch(console.error);
