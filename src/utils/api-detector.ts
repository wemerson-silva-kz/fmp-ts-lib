export async function detectWorkingAPI(apiKey: string): Promise<string> {
  const urls = [
    'https://financialmodelingprep.com/api/v3',
    'https://financialmodelingprep.com/stable'
  ];

  for (const baseUrl of urls) {
    try {
      const testUrl = `${baseUrl}/search?query=AAPL&apikey=${apiKey}`;
      const response = await fetch(testUrl);
      
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          console.log(`✅ API working with: ${baseUrl}`);
          return baseUrl;
        }
      }
    } catch (error) {
      // Continue to next URL
    }
  }

  // Fallback to v3 if nothing works
  console.log('⚠️ Using fallback URL: api/v3');
  return 'https://financialmodelingprep.com/api/v3';
}
