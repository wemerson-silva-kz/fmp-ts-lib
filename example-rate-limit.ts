import { FMPClient, AdvancedFMPClient } from './src/index.js';

async function demonstrateGlobalRateLimit() {
  const apiKey = process.env.FMP_API_KEY || 'demo';

  // Configure global rate limiter with low limit for demonstration
  FMPClient.configureGlobalRateLimit({
    requestsPerMinute: 3, // Very low limit to trigger auto-retry
    requestsPerDay: 100,
    enabled: true,
    onLimitExceeded: (retryAfter) => {
      console.log(`⚠️  Rate limit exceeded! Will auto-retry after ${retryAfter} seconds`);
    }
  });

  // Create multiple clients - they all share the same global rate limiter
  const client1 = new FMPClient({ apiKey });
  const client2 = new FMPClient({ apiKey });
  const advancedClient = new AdvancedFMPClient({ apiKey });

  console.log('🚀 Testing global rate limiter with auto-retry...\n');
  console.log('📊 Limit: 3 requests per minute (will auto-retry when exceeded)\n');

  const startTime = Date.now();

  try {
    // Make requests from different clients - they all count towards the same limit
    const symbols = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'AMZN', 'META'];
    const clients = [client1, client2, advancedClient];

    for (let i = 0; i < symbols.length; i++) {
      const client = clients[i % clients.length];
      const symbol = symbols[i];
      
      console.log(`📡 Request ${i + 1}: Searching for ${symbol}...`);
      
      // Show current usage before request
      const usage = client1.getGlobalRateLimitUsage();
      console.log(`   Current usage: ${usage.minuteUsage}/${usage.minuteLimit} per minute`);
      
      const requestStart = Date.now();
      
      try {
        await client.search.searchSymbol(symbol);
        const requestTime = Date.now() - requestStart;
        console.log(`   ✅ Request ${i + 1} successful (${requestTime}ms)`);
        
      } catch (error) {
        console.log(`   ❌ Request ${i + 1} failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
      
      console.log(''); // Empty line for readability
    }

    const totalTime = Date.now() - startTime;
    console.log(`⏱️  Total execution time: ${Math.round(totalTime / 1000)}s`);

    // Show final usage
    console.log('\n📊 Final rate limit usage:');
    const finalUsage = client1.getGlobalRateLimitUsage();
    console.log(`   Minute: ${finalUsage.minuteUsage}/${finalUsage.minuteLimit}`);
    console.log(`   Day: ${finalUsage.dayUsage}/${finalUsage.dayLimit}`);

    console.log('\n✨ All requests completed successfully with auto-retry!');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run the demonstration
demonstrateGlobalRateLimit().catch(console.error);
