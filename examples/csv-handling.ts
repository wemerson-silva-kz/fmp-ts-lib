import { FMPClient } from '../src/index.js';

// Example demonstrating CSV handling for bulk endpoints
async function demonstrateCSVHandling() {
  const client = new FMPClient('your-api-key-here');

  try {
    console.log('🔄 Fetching bulk CSV data...\n');

    // Get company profile bulk data (returns CSV string)
    const csvData = await client.bulk.getCompanyProfileBulk('0');
    
    console.log('📊 CSV Data Type:', typeof csvData);
    console.log('📊 CSV Data Sample (first 200 chars):');
    console.log(csvData.substring(0, 200) + '...\n');

    // Parse CSV data if needed
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    
    console.log('📋 CSV Headers:', headers);
    console.log('📋 Total Rows:', lines.length - 1);
    
    // Example: Convert first few rows to objects
    const data = lines.slice(1, 4).map(line => {
      const values = line.split(',');
      const obj: any = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });
    
    console.log('📊 Sample Parsed Data:');
    console.log(JSON.stringify(data, null, 2));

    // Alternative: Save CSV to file
    if (typeof window === 'undefined') { // Node.js environment
      const fs = await import('fs');
      fs.writeFileSync('company-profiles-bulk.csv', csvData);
      console.log('💾 CSV data saved to company-profiles-bulk.csv');
    }

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Example of using the new getCSV method directly
async function demonstrateDirectCSVMethod() {
  const client = new FMPClient('your-api-key-here');

  try {
    console.log('\n🔄 Using direct CSV method...\n');

    // Use the HTTP client's getCSV method directly
    const csvData = await (client as any).httpClient.getCSV('/profile-bulk', { part: '0' });
    
    console.log('📊 Direct CSV Data Type:', typeof csvData);
    console.log('📊 Direct CSV Sample:', csvData.substring(0, 100) + '...');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Example of using the getFile method for binary data
async function demonstrateFileMethod() {
  const client = new FMPClient('your-api-key-here');

  try {
    console.log('\n🔄 Using file buffer method...\n');

    // Use the HTTP client's getFile method for binary data
    const buffer = await (client as any).httpClient.getFile('/profile-bulk', { part: '0' });
    
    console.log('📦 File Buffer Type:', buffer.constructor.name);
    console.log('📦 File Buffer Size:', buffer.byteLength, 'bytes');
    
    // Convert buffer to string if it's text data
    const textData = new TextDecoder().decode(buffer);
    console.log('📊 Buffer as Text Sample:', textData.substring(0, 100) + '...');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run examples
if (import.meta.main) {
  console.log('🚀 FMP CSV Handling Examples\n');
  
  await demonstrateCSVHandling();
  await demonstrateDirectCSVMethod();
  await demonstrateFileMethod();
  
  console.log('\n✅ Examples completed!');
}

export {
  demonstrateCSVHandling,
  demonstrateDirectCSVMethod,
  demonstrateFileMethod
};
