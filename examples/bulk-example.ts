import { FMPClient } from '../src/index.js';

// Initialize the client
const client = new FMPClient(process.env.FMP_API_KEY || 'demo');

async function demonstrateBulkAPIs() {
  try {
    console.log('🚀 FMP Bulk APIs Examples\n');

    // 1. Company Profile Bulk API
    console.log('1. Company Profile Bulk (Part 0):');
    const profileBulk = await client.bulk.getCompanyProfileBulk('0');
    console.log('CSV Response Length:', profileBulk.length);
    console.log('First 200 characters:', profileBulk.substring(0, 200));
    console.log('');

    // 2. Stock Rating Bulk API
    console.log('2. Stock Rating Bulk:');
    const ratingBulk = await client.bulk.getStockRatingBulk();
    console.log('CSV Response Length:', ratingBulk.length);
    console.log('First 200 characters:', ratingBulk.substring(0, 200));
    console.log('');

    // 3. DCF Valuations Bulk API
    console.log('3. DCF Valuations Bulk:');
    const dcfBulk = await client.bulk.getDCFBulk();
    console.log('CSV Response Length:', dcfBulk.length);
    console.log('First 200 characters:', dcfBulk.substring(0, 200));
    console.log('');

    // 4. Financial Scores Bulk API
    console.log('4. Financial Scores Bulk:');
    const scoresBulk = await client.bulk.getFinancialScoresBulk();
    console.log('CSV Response Length:', scoresBulk.length);
    console.log('First 200 characters:', scoresBulk.substring(0, 200));
    console.log('');

    // 5. Price Target Summary Bulk API
    console.log('5. Price Target Summary Bulk:');
    const priceTargetBulk = await client.bulk.getPriceTargetSummaryBulk();
    console.log('CSV Response Length:', priceTargetBulk.length);
    console.log('First 200 characters:', priceTargetBulk.substring(0, 200));
    console.log('');

    // 6. ETF Holder Bulk API
    console.log('6. ETF Holder Bulk (Part 1):');
    const etfHolderBulk = await client.bulk.getETFHolderBulk('1');
    console.log('CSV Response Length:', etfHolderBulk.length);
    console.log('First 200 characters:', etfHolderBulk.substring(0, 200));
    console.log('');

    // 7. Upgrades Downgrades Consensus Bulk API
    console.log('7. Upgrades Downgrades Consensus Bulk:');
    const consensusBulk = await client.bulk.getUpgradesDowngradesConsensusBulk();
    console.log('CSV Response Length:', consensusBulk.length);
    console.log('First 200 characters:', consensusBulk.substring(0, 200));
    console.log('');

    // 8. Key Metrics TTM Bulk API
    console.log('8. Key Metrics TTM Bulk:');
    const keyMetricsBulk = await client.bulk.getKeyMetricsTTMBulk();
    console.log('CSV Response Length:', keyMetricsBulk.length);
    console.log('First 200 characters:', keyMetricsBulk.substring(0, 200));
    console.log('');

    // 9. Ratios TTM Bulk API
    console.log('9. Ratios TTM Bulk:');
    const ratiosBulk = await client.bulk.getRatiosTTMBulk();
    console.log('CSV Response Length:', ratiosBulk.length);
    console.log('First 200 characters:', ratiosBulk.substring(0, 200));
    console.log('');

    // 10. Stock Peers Bulk API
    console.log('10. Stock Peers Bulk:');
    const peersBulk = await client.bulk.getStockPeersBulk();
    console.log('CSV Response Length:', peersBulk.length);
    console.log('First 200 characters:', peersBulk.substring(0, 200));
    console.log('');

    // 11. Earnings Surprises Bulk API
    console.log('11. Earnings Surprises Bulk (2025):');
    const earningsSurprisesBulk = await client.bulk.getEarningsSurprisesBulk('2025');
    console.log('CSV Response Length:', earningsSurprisesBulk.length);
    console.log('First 200 characters:', earningsSurprisesBulk.substring(0, 200));
    console.log('');

    // 12. Income Statement Bulk API
    console.log('12. Income Statement Bulk (2025 Q1):');
    const incomeStatementBulk = await client.bulk.getIncomeStatementBulk('2025', 'Q1');
    console.log('CSV Response Length:', incomeStatementBulk.length);
    console.log('First 200 characters:', incomeStatementBulk.substring(0, 200));
    console.log('');

    // 13. Income Statement Growth Bulk API
    console.log('13. Income Statement Growth Bulk (2025 Q1):');
    const incomeGrowthBulk = await client.bulk.getIncomeStatementGrowthBulk('2025', 'Q1');
    console.log('CSV Response Length:', incomeGrowthBulk.length);
    console.log('First 200 characters:', incomeGrowthBulk.substring(0, 200));
    console.log('');

    // 14. Balance Sheet Statement Bulk API
    console.log('14. Balance Sheet Statement Bulk (2025 Q1):');
    const balanceSheetBulk = await client.bulk.getBalanceSheetStatementBulk('2025', 'Q1');
    console.log('CSV Response Length:', balanceSheetBulk.length);
    console.log('First 200 characters:', balanceSheetBulk.substring(0, 200));
    console.log('');

    // 15. Balance Sheet Statement Growth Bulk API
    console.log('15. Balance Sheet Statement Growth Bulk (2025 Q1):');
    const balanceGrowthBulk = await client.bulk.getBalanceSheetStatementGrowthBulk('2025', 'Q1');
    console.log('CSV Response Length:', balanceGrowthBulk.length);
    console.log('First 200 characters:', balanceGrowthBulk.substring(0, 200));
    console.log('');

    // 16. Cash Flow Statement Bulk API
    console.log('16. Cash Flow Statement Bulk (2025 Q1):');
    const cashFlowBulk = await client.bulk.getCashFlowStatementBulk('2025', 'Q1');
    console.log('CSV Response Length:', cashFlowBulk.length);
    console.log('First 200 characters:', cashFlowBulk.substring(0, 200));
    console.log('');

    // 17. Cash Flow Statement Growth Bulk API
    console.log('17. Cash Flow Statement Growth Bulk (2025 Q1):');
    const cashFlowGrowthBulk = await client.bulk.getCashFlowStatementGrowthBulk('2025', 'Q1');
    console.log('CSV Response Length:', cashFlowGrowthBulk.length);
    console.log('First 200 characters:', cashFlowGrowthBulk.substring(0, 200));
    console.log('');

    // 18. EOD Bulk API
    console.log('18. EOD Bulk (2024-10-22):');
    const eodBulk = await client.bulk.getEODBulk('2024-10-22');
    console.log('CSV Response Length:', eodBulk.length);
    console.log('First 200 characters:', eodBulk.substring(0, 200));
    console.log('');

    console.log('✅ All Bulk APIs demonstrated successfully!');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Helper function to parse CSV data (optional utility)
function parseCSVResponse(csvData: string): any[] {
  const lines = csvData.trim().split('\n');
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',');
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const row: any = {};
    
    headers.forEach((header, index) => {
      row[header.trim()] = values[index]?.trim() || '';
    });
    
    data.push(row);
  }
  
  return data;
}

// Example of parsing CSV data
async function demonstrateCSVParsing() {
  try {
    console.log('\n📊 CSV Parsing Example:');
    
    const csvData = await client.bulk.getStockRatingBulk();
    const parsedData = parseCSVResponse(csvData);
    
    console.log('Parsed Records:', parsedData.length);
    if (parsedData.length > 0) {
      console.log('First Record:', parsedData[0]);
    }
    
  } catch (error) {
    console.error('❌ CSV Parsing Error:', error);
  }
}

// Run the examples
if (import.meta.url === `file://${process.argv[1]}`) {
  demonstrateBulkAPIs()
    .then(() => demonstrateCSVParsing())
    .catch(console.error);
}

export { demonstrateBulkAPIs, demonstrateCSVParsing, parseCSVResponse };
