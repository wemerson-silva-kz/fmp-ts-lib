Statements
Income Statement API
Globe Flag
Access real-time income statement data for public companies, private companies, and ETFs with the FMP Real-Time Income Statements API. Track profitability, compare competitors, and identify business trends with up-to-date financial data.

Endpoint:

https://financialmodelingprep.com/stable/income-statement?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
[
{
"date": "2024-09-28",
"symbol": "AAPL",
"reportedCurrency": "USD",
"cik": "0000320193",
"filingDate": "2024-11-01",
"acceptedDate": "2024-11-01 06:01:36",
"fiscalYear": "2024",
"period": "FY",
"revenue": 391035000000,
"costOfRevenue": 210352000000,
"grossProfit": 180683000000,
"researchAndDevelopmentExpenses": 31370000000,
"generalAndAdministrativeExpenses": 0,
"sellingAndMarketingExpenses": 0,
"sellingGeneralAndAdministrativeExpenses": 26097000000,
"otherExpenses": 0,
"operatingExpenses": 57467000000,
"costAndExpenses": 267819000000,
"netInterestIncome": 0,
"interestIncome": 0,
"interestExpense": 0,
"depreciationAndAmortization": 11445000000,
"ebitda": 134661000000,
"ebit": 123216000000,
"nonOperatingIncomeExcludingInterest": 0,
"operatingIncome": 123216000000,
"totalOtherIncomeExpensesNet": 269000000,
"incomeBeforeTax": 123485000000,
"incomeTaxExpense": 29749000000,
"netIncomeFromContinuingOperations": 93736000000,
"netIncomeFromDiscontinuedOperations": 0,
"otherAdjustmentsToNetIncome": 0,
"netIncome": 93736000000,
"netIncomeDeductions": 0,
"bottomLineNetIncome": 93736000000,
"eps": 6.11,
"epsDiluted": 6.08,
"weightedAverageShsOut": 15343783000,
"weightedAverageShsOutDil": 15408095000
}
]

Balance Sheet Statement API
Globe Flag
Access detailed balance sheet statements for publicly traded companies with the Balance Sheet Data API. Analyze assets, liabilities, and shareholder equity to gain insights into a company's financial health.

Endpoint:

https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
[
{
"date": "2024-09-28",
"symbol": "AAPL",
"reportedCurrency": "USD",
"cik": "0000320193",
"filingDate": "2024-11-01",
"acceptedDate": "2024-11-01 06:01:36",
"fiscalYear": "2024",
"period": "FY",
"cashAndCashEquivalents": 29943000000,
"shortTermInvestments": 35228000000,
"cashAndShortTermInvestments": 65171000000,
"netReceivables": 66243000000,
"accountsReceivables": 33410000000,
"otherReceivables": 32833000000,
"inventory": 7286000000,
"prepaids": 0,
"otherCurrentAssets": 14287000000,
"totalCurrentAssets": 152987000000,
"propertyPlantEquipmentNet": 45680000000,
"goodwill": 0,
"intangibleAssets": 0,
"goodwillAndIntangibleAssets": 0,
"longTermInvestments": 91479000000,
"taxAssets": 19499000000,
"otherNonCurrentAssets": 55335000000,
"totalNonCurrentAssets": 211993000000,
"otherAssets": 0,
"totalAssets": 364980000000,
"totalPayables": 95561000000,
"accountPayables": 68960000000,
"otherPayables": 26601000000,
"accruedExpenses": 0,
"shortTermDebt": 20879000000,
"capitalLeaseObligationsCurrent": 1632000000,
"taxPayables": 26601000000,
"deferredRevenue": 8249000000,
"otherCurrentLiabilities": 50071000000,
"totalCurrentLiabilities": 176392000000,
"longTermDebt": 85750000000,
"deferredRevenueNonCurrent": 10798000000,
"deferredTaxLiabilitiesNonCurrent": 0,
"otherNonCurrentLiabilities": 35090000000,
"totalNonCurrentLiabilities": 131638000000,
"otherLiabilities": 0,
"capitalLeaseObligations": 12430000000,
"totalLiabilities": 308030000000,
"treasuryStock": 0,
"preferredStock": 0,
"commonStock": 83276000000,
"retainedEarnings": -19154000000,
"additionalPaidInCapital": 0,
"accumulatedOtherComprehensiveIncomeLoss": -7172000000,
"otherTotalStockholdersEquity": 0,
"totalStockholdersEquity": 56950000000,
"totalEquity": 56950000000,
"minorityInterest": 0,
"totalLiabilitiesAndTotalEquity": 364980000000,
"totalInvestments": 126707000000,
"totalDebt": 106629000000,
"netDebt": 76686000000
}
]

Cash Flow Statement API
Globe Flag
Gain insights into a company's cash flow activities with the Cash Flow Statements API. Analyze cash generated and used from operations, investments, and financing activities to evaluate the financial health and sustainability of a business.

Endpoint:

https://financialmodelingprep.com/stable/cash-flow-statement?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
[
{
"date": "2024-09-28",
"symbol": "AAPL",
"reportedCurrency": "USD",
"cik": "0000320193",
"filingDate": "2024-11-01",
"acceptedDate": "2024-11-01 06:01:36",
"fiscalYear": "2024",
"period": "FY",
"netIncome": 93736000000,
"depreciationAndAmortization": 11445000000,
"deferredIncomeTax": 0,
"stockBasedCompensation": 11688000000,
"changeInWorkingCapital": 3651000000,
"accountsReceivables": -5144000000,
"inventory": -1046000000,
"accountsPayables": 6020000000,
"otherWorkingCapital": 3821000000,
"otherNonCashItems": -2266000000,
"netCashProvidedByOperatingActivities": 118254000000,
"investmentsInPropertyPlantAndEquipment": -9447000000,
"acquisitionsNet": 0,
"purchasesOfInvestments": -48656000000,
"salesMaturitiesOfInvestments": 62346000000,
"otherInvestingActivities": -1308000000,
"netCashProvidedByInvestingActivities": 2935000000,
"netDebtIssuance": -5998000000,
"longTermNetDebtIssuance": -9958000000,
"shortTermNetDebtIssuance": 3960000000,
"netStockIssuance": -94949000000,
"netCommonStockIssuance": -94949000000,
"commonStockIssuance": 0,
"commonStockRepurchased": -94949000000,
"netPreferredStockIssuance": 0,
"netDividendsPaid": -15234000000,
"commonDividendsPaid": -15234000000,
"preferredDividendsPaid": 0,
"otherFinancingActivities": -5802000000,
"netCashProvidedByFinancingActivities": -121983000000,
"effectOfForexChangesOnCash": 0,
"netChangeInCash": -794000000,
"cashAtEndOfPeriod": 29943000000,
"cashAtBeginningOfPeriod": 30737000000,
"operatingCashFlow": 118254000000,
"capitalExpenditure": -9447000000,
"freeCashFlow": 108807000000,
"incomeTaxesPaid": 26102000000,
"interestPaid": 0
}
]

Latest Financial Statements API
Globe Flag
Endpoint:

https://financialmodelingprep.com/stable/latest-financial-statements?page=0&limit=250

Parameters

Query Parameter

Type

Example

page

number

0

limit

number

250

(\*) Required | Maximum 250 records per request | Page maxed at 100 | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
[
{
"symbol": "FGFI",
"calendarYear": 2024,
"period": "Q4",
"date": "2024-12-31",
"dateAdded": "2025-03-13 17:03:59"
}
]

Income Statements TTM API
Globe Flag
Endpoint:

https://financialmodelingprep.com/stable/income-statement-ttm?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
[
{
"date": "2024-12-28",
"symbol": "AAPL",
"reportedCurrency": "USD",
"cik": "0000320193",
"filingDate": "2025-01-31",
"acceptedDate": "2025-01-31 06:01:27",
"fiscalYear": "2025",
"period": "Q1",
"revenue": 395760000000,
"costOfRevenue": 211657000000,
"grossProfit": 184103000000,
"researchAndDevelopmentExpenses": 31942000000,
"generalAndAdministrativeExpenses": 0,
"sellingAndMarketingExpenses": 0,
"sellingGeneralAndAdministrativeExpenses": 26486000000,
"otherExpenses": 0,
"operatingExpenses": 58428000000,
"costAndExpenses": 270085000000,
"netInterestIncome": 0,
"interestIncome": 0,
"interestExpense": 0,
"depreciationAndAmortization": 11677000000,
"ebitda": 137352000000,
"ebit": 125675000000,
"nonOperatingIncomeExcludingInterest": 0,
"operatingIncome": 125675000000,
"totalOtherIncomeExpensesNet": 71000000,
"incomeBeforeTax": 125746000000,
"incomeTaxExpense": 29596000000,
"netIncomeFromContinuingOperations": 96150000000,
"netIncomeFromDiscontinuedOperations": 0,
"otherAdjustmentsToNetIncome": 0,
"netIncome": 96150000000,
"netIncomeDeductions": 0,
"bottomLineNetIncome": 96150000000,
"eps": 6.31,
"epsDiluted": 6.3,
"weightedAverageShsOut": 15081724000,
"weightedAverageShsOutDil": 15150865000
}
]

Balance Sheet Statements TTM API
Globe Flag
Endpoint:

https://financialmodelingprep.com/stable/balance-sheet-statement-ttm?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
[
{
"date": "2024-12-28",
"symbol": "AAPL",
"reportedCurrency": "USD",
"cik": "0000320193",
"filingDate": "2025-01-31",
"acceptedDate": "2025-01-31 06:01:27",
"fiscalYear": "2025",
"period": "Q1",
"cashAndCashEquivalents": 30299000000,
"shortTermInvestments": 23476000000,
"cashAndShortTermInvestments": 53775000000,
"netReceivables": 59306000000,
"accountsReceivables": 29639000000,
"otherReceivables": 29667000000,
"inventory": 6911000000,
"prepaids": 0,
"otherCurrentAssets": 13248000000,
"totalCurrentAssets": 133240000000,
"propertyPlantEquipmentNet": 46069000000,
"goodwill": 0,
"intangibleAssets": 0,
"goodwillAndIntangibleAssets": 0,
"longTermInvestments": 87593000000,
"taxAssets": 0,
"otherNonCurrentAssets": 77183000000,
"totalNonCurrentAssets": 210845000000,
"otherAssets": 0,
"totalAssets": 344085000000,
"totalPayables": 61910000000,
"accountPayables": 61910000000,
"otherPayables": 0,
"accruedExpenses": 0,
"shortTermDebt": 12843000000,
"capitalLeaseObligationsCurrent": 0,
"taxPayables": 0,
"deferredRevenue": 8461000000,
"otherCurrentLiabilities": 61151000000,
"totalCurrentLiabilities": 144365000000,
"longTermDebt": 83956000000,
"deferredRevenueNonCurrent": 0,
"deferredTaxLiabilitiesNonCurrent": 0,
"otherNonCurrentLiabilities": 49006000000,
"totalNonCurrentLiabilities": 132962000000,
"otherLiabilities": 0,
"capitalLeaseObligations": 0,
"totalLiabilities": 277327000000,
"treasuryStock": 0,
"preferredStock": 0,
"commonStock": 84768000000,
"retainedEarnings": -11221000000,
"additionalPaidInCapital": 0,
"accumulatedOtherComprehensiveIncomeLoss": -6789000000,
"otherTotalStockholdersEquity": 0,
"totalStockholdersEquity": 66758000000,
"totalEquity": 66758000000,
"minorityInterest": 0,
"totalLiabilitiesAndTotalEquity": 344085000000,
"totalInvestments": 111069000000,
"totalDebt": 96799000000,
"netDebt": 66500000000
}
]

Cashflow Statements TTM API
Globe Flag
Endpoint:

https://financialmodelingprep.com/stable/cash-flow-statement-ttm?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
[
{
"date": "2024-12-28",
"symbol": "AAPL",
"reportedCurrency": "USD",
"cik": "0000320193",
"filingDate": "2025-01-31",
"acceptedDate": "2025-01-31 06:01:27",
"fiscalYear": "2025",
"period": "Q1",
"netIncome": 96150000000,
"depreciationAndAmortization": 11677000000,
"deferredIncomeTax": 0,
"stockBasedCompensation": 11977000000,
"changeInWorkingCapital": -8224000000,
"accountsReceivables": -9505000000,
"inventory": -694000000,
"accountsPayables": 3891000000,
"otherWorkingCapital": -1916000000,
"otherNonCashItems": -3286000000,
"netCashProvidedByOperatingActivities": 108294000000,
"investmentsInPropertyPlantAndEquipment": -9995000000,
"acquisitionsNet": 0,
"purchasesOfInvestments": -45000000000,
"salesMaturitiesOfInvestments": 67422000000,
"otherInvestingActivities": -1627000000,
"netCashProvidedByInvestingActivities": 10800000000,
"netDebtIssuance": -10967000000,
"longTermNetDebtIssuance": -10967000000,
"shortTermNetDebtIssuance": 0,
"netStockIssuance": -98416000000,
"netCommonStockIssuance": -98416000000,
"commonStockIssuance": 0,
"commonStockRepurchased": -98416000000,
"netPreferredStockIssuance": 0,
"netDividendsPaid": -15265000000,
"commonDividendsPaid": -15265000000,
"preferredDividendsPaid": 0,
"otherFinancingActivities": -6121000000,
"netCashProvidedByFinancingActivities": -130769000000,
"effectOfForexChangesOnCash": 0,
"netChangeInCash": -11675000000,
"cashAtEndOfPeriod": 30299000000,
"cashAtBeginningOfPeriod": 41974000000,
"operatingCashFlow": 108294000000,
"capitalExpenditure": -9995000000,
"freeCashFlow": 98299000000,
"incomeTaxesPaid": 37498000000,
"interestPaid": 0
}
]

Key Metrics API
Globe Flag
Access essential financial metrics for a company with the FMP Financial Key Metrics API. Evaluate revenue, net income, P/E ratio, and more to assess performance and compare it to competitors.

Endpoint:

https://financialmodelingprep.com/stable/key-metrics?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
[
{
"symbol": "AAPL",
"date": "2024-09-28",
"fiscalYear": "2024",
"period": "FY",
"reportedCurrency": "USD",
"marketCap": 3495160329570,
"enterpriseValue": 3571846329570,
"evToSales": 9.134339201273542,
"evToOperatingCashFlow": 30.204866893043786,
"evToFreeCashFlow": 32.82735788662494,
"evToEBITDA": 26.524727497716487,
"netDebtToEBITDA": 0.5694744580836323,
"currentRatio": 0.8673125765340832,
"incomeQuality": 1.2615643936161134,
"grahamNumber": 22.587017267616833,
"grahamNetNet": -12.352478525015636,
"taxBurden": 0.7590881483581001,
"interestBurden": 1.0021831580314244,
"workingCapital": -23405000000,
"investedCapital": 22275000000,
"returnOnAssets": 0.25682503150857583,
"operatingReturnOnAssets": 0.3434290787011036,
"returnOnTangibleAssets": 0.25682503150857583,
"returnOnEquity": 1.6459350307287095,
"returnOnInvestedCapital": 0.4430708117427921,
"returnOnCapitalEmployed": 0.6533607652660827,
"earningsYield": 0.026818798327209237,
"freeCashFlowYield": 0.03113076074921754,
"capexToOperatingCashFlow": 0.07988736110406414,
"capexToDepreciation": 0.8254259501965924,
"capexToRevenue": 0.02415896275269477,
"salesGeneralAndAdministrativeToRevenue": 0,
"researchAndDevelopementToRevenue": 0.08022299794136074,
"stockBasedCompensationToRevenue": 0.02988990755303234,
"intangiblesToTotalAssets": 0,
"averageReceivables": 63614000000,
"averagePayables": 65785500000,
"averageInventory": 6808500000,
"daysOfSalesOutstanding": 61.83255974529134,
"daysOfPayablesOutstanding": 119.65847721913745,
"daysOfInventoryOutstanding": 12.642570548414087,
"operatingCycle": 74.47513029370543,
"cashConversionCycle": -45.18334692543202,
"freeCashFlowToEquity": 32121000000,
"freeCashFlowToFirm": 117192805288.09166,
"tangibleAssetValue": 56950000000,
"netCurrentAssetValue": -155043000000
}
]

Financial Ratios API
Globe Flag
Analyze a company's financial performance using the Financial Ratios API. This API provides detailed profitability, liquidity, and efficiency ratios, enabling users to assess a company's operational and financial health across various metrics.

Endpoint:

https://financialmodelingprep.com/stable/ratios?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
[
{
"symbol": "AAPL",
"date": "2024-09-28",
"fiscalYear": "2024",
"period": "FY",
"reportedCurrency": "USD",
"grossProfitMargin": 0.4620634981523393,
"ebitMargin": 0.31510222870075566,
"ebitdaMargin": 0.3443707085043538,
"operatingProfitMargin": 0.31510222870075566,
"pretaxProfitMargin": 0.3157901466620635,
"continuousOperationsProfitMargin": 0.23971255769943867,
"netProfitMargin": 0.23971255769943867,
"bottomLineProfitMargin": 0.23971255769943867,
"receivablesTurnover": 5.903038811648023,
"payablesTurnover": 3.0503480278422272,
"inventoryTurnover": 28.870710952511665,
"fixedAssetTurnover": 8.560310858143607,
"assetTurnover": 1.0713874732862074,
"currentRatio": 0.8673125765340832,
"quickRatio": 0.8260068483831466,
"solvencyRatio": 0.3414634938155374,
"cashRatio": 0.16975259648963673,
"priceToEarningsRatio": 37.287278415656736,
"priceToEarningsGrowthRatio": -45.93792700808932,
"forwardPriceToEarningsGrowthRatio": -45.93792700808932,
"priceToBookRatio": 61.37243774486391,
"priceToSalesRatio": 8.93822887866815,
"priceToFreeCashFlowRatio": 32.12256867269569,
"priceToOperatingCashFlowRatio": 29.55638142954995,
"debtToAssetsRatio": 0.29215025480848267,
"debtToEquityRatio": 1.872326602282704,
"debtToCapitalRatio": 0.6518501763673821,
"longTermDebtToCapitalRatio": 0.6009110021023125,
"financialLeverageRatio": 6.408779631255487,
"workingCapitalTurnoverRatio": -31.099932397502684,
"operatingCashFlowRatio": 0.6704045534944896,
"operatingCashFlowSalesRatio": 0.3024128274962599,
"freeCashFlowOperatingCashFlowRatio": 0.9201126388959359,
"debtServiceCoverageRatio": 5.024761722304708,
"interestCoverageRatio": 0,
"shortTermOperatingCashFlowCoverageRatio": 5.663777000814215,
"operatingCashFlowCoverageRatio": 1.109022873702276,
"capitalExpenditureCoverageRatio": 12.517624642743728,
"dividendPaidAndCapexCoverageRatio": 4.7912969490701345,
"dividendPayoutRatio": 0.16252026969360758,
"dividendYield": 0.0043585983369965175,
"dividendYieldPercentage": 0.43585983369965176,
"revenuePerShare": 25.484914639368924,
"netIncomePerShare": 6.109054070954992,
"interestDebtPerShare": 6.949329249507765,
"cashPerShare": 4.247388013764271,
"bookValuePerShare": 3.711600978715614,
"tangibleBookValuePerShare": 3.711600978715614,
"shareholdersEquityPerShare": 3.711600978715614,
"operatingCashFlowPerShare": 7.706965094592383,
"capexPerShare": 0.6156891035281195,
"freeCashFlowPerShare": 7.091275991064264,
"netIncomePerEBT": 0.7590881483581001,
"ebtPerEbit": 1.0021831580314244,
"priceToFairValue": 61.37243774486391,
"debtToMarketCap": 0.03050761336980449,
"effectiveTaxRate": 0.24091185164189982,
"enterpriseValueMultiple": 26.524727497716487
}
]

Key Metrics TTM API
Globe Flag
Retrieve a comprehensive set of trailing twelve-month (TTM) key performance metrics with the TTM Key Metrics API. Access data related to a company's profitability, capital efficiency, and liquidity, allowing for detailed analysis of its financial health over the past year.

Endpoint:

https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

(\*) Required | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
[
{
"symbol": "AAPL",
"marketCap": 3149833928000,
"enterpriseValueTTM": 3216333928000,
"evToSalesTTM": 8.126980816656559,
"evToOperatingCashFlowTTM": 29.70001965021146,
"evToFreeCashFlowTTM": 32.71990486169747,
"evToEBITDATTM": 23.41672438697653,
"netDebtToEBITDATTM": 0.48415749315627005,
"currentRatioTTM": 0.9229383853427077,
"incomeQualityTTM": 1.1263026521060842,
"grahamNumberTTM": 25.198029099282905,
"grahamNetNetTTM": -11.64435843011051,
"taxBurdenTTM": 0.7646366484818603,
"interestBurdenTTM": 1.0005649492739208,
"workingCapitalTTM": -11125000000,
"investedCapitalTTM": 34944000000,
"returnOnAssetsTTM": 0.27943676707790227,
"operatingReturnOnAssetsTTM": 0.35448090090471257,
"returnOnTangibleAssetsTTM": 0.27943676707790227,
"returnOnEquityTTM": 1.4534598087751787,
"returnOnInvestedCapitalTTM": 0.45208108089346594,
"returnOnCapitalEmployedTTM": 0.6292559583416784,
"earningsYieldTTM": 0.030404739849149914,
"freeCashFlowYieldTTM": 0.03120767705439485,
"capexToOperatingCashFlowTTM": 0.09229504866382256,
"capexToDepreciationTTM": 0.855956153121521,
"capexToRevenueTTM": 0.025255205174853447,
"salesGeneralAndAdministrativeToRevenueTTM": 0,
"researchAndDevelopementToRevenueTTM": 0.08071053163533455,
"stockBasedCompensationToRevenueTTM": 0.030263290883363655,
"intangiblesToTotalAssetsTTM": 0,
"averageReceivablesTTM": 62774500000,
"averagePayablesTTM": 65435000000,
"averageInventoryTTM": 7098500000,
"daysOfSalesOutstandingTTM": 54.69650798463715,
"daysOfPayablesOutstandingTTM": 106.76306476988712,
"daysOfInventoryOutstandingTTM": 11.917937984569374,
"operatingCycleTTM": 66.61444596920653,
"cashConversionCycleTTM": -40.148618800680595,
"freeCashFlowToEquityTTM": 31799000000,
"freeCashFlowToFirmTTM": 85497710797.9578,
"tangibleAssetValueTTM": 66758000000,
"netCurrentAssetValueTTM": -144087000000
}
]

Financial Ratios TTM API
Globe Flag
Gain access to trailing twelve-month (TTM) financial ratios with the TTM Ratios API. This API provides key performance metrics over the past year, including profitability, liquidity, and efficiency ratios.

Endpoint:

https://financialmodelingprep.com/stable/ratios-ttm?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

(\*) Required | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
[
{
"symbol": "AAPL",
"grossProfitMarginTTM": 0.46518849807964424,
"ebitMarginTTM": 0.3175535678188801,
"ebitdaMarginTTM": 0.34705882352941175,
"operatingProfitMarginTTM": 0.3175535678188801,
"pretaxProfitMarginTTM": 0.31773296947645036,
"continuousOperationsProfitMarginTTM": 0.24295027289266222,
"netProfitMarginTTM": 0.24295027289266222,
"bottomLineProfitMarginTTM": 0.24295027289266222,
"receivablesTurnoverTTM": 6.673186524129093,
"payablesTurnoverTTM": 3.4187853335486995,
"inventoryTurnoverTTM": 30.626103313558097,
"fixedAssetTurnoverTTM": 8.590592372311098,
"assetTurnoverTTM": 1.1501809145995903,
"currentRatioTTM": 0.9229383853427077,
"quickRatioTTM": 0.8750666712845911,
"solvencyRatioTTM": 0.3888081578786054,
"cashRatioTTM": 0.20987774044955496,
"priceToEarningsRatioTTM": 32.889608822880916,
"priceToEarningsGrowthRatioTTM": 9.104441715061135,
"forwardPriceToEarningsGrowthRatioTTM": 9.104441715061135,
"priceToBookRatioTTM": 47.370141231313106,
"priceToSalesRatioTTM": 7.958949686678795,
"priceToFreeCashFlowRatioTTM": 32.04339747098139,
"priceToOperatingCashFlowRatioTTM": 29.201395167968677,
"debtToAssetsRatioTTM": 0.28132292892744526,
"debtToEquityRatioTTM": 1.4499985020521886,
"debtToCapitalRatioTTM": 0.5918364851397372,
"longTermDebtToCapitalRatioTTM": 0.557055084464615,
"financialLeverageRatioTTM": 5.154213727193745,
"workingCapitalTurnoverRatioTTM": -22.92267593397046,
"operatingCashFlowRatioTTM": 0.7501402694558931,
"operatingCashFlowSalesRatioTTM": 0.2736355366889024,
"freeCashFlowOperatingCashFlowRatioTTM": 0.9077049513361775,
"debtServiceCoverageRatioTTM": 8.390251498870981,
"interestCoverageRatioTTM": 0,
"shortTermOperatingCashFlowCoverageRatioTTM": 8.432142022891847,
"operatingCashFlowCoverageRatioTTM": 1.1187512267688715,
"capitalExpenditureCoverageRatioTTM": 10.834817408704351,
"dividendPaidAndCapexCoverageRatioTTM": 4.287173396674584,
"dividendPayoutRatioTTM": 0.15876235049401977,
"dividendYieldTTM": 0.0047691720717283476,
"enterpriseValueTTM": 3216333928000,
"revenuePerShareTTM": 26.24103186081379,
"netIncomePerShareTTM": 6.375265851569754,
"interestDebtPerShareTTM": 6.418298067250137,
"cashPerShareTTM": 3.565573803101025,
"bookValuePerShareTTM": 4.426417032959892,
"tangibleBookValuePerShareTTM": 4.426417032959892,
"shareholdersEquityPerShareTTM": 4.426417032959892,
"operatingCashFlowPerShareTTM": 7.180478836504368,
"capexPerShareTTM": 0.6627226436447186,
"freeCashFlowPerShareTTM": 6.5177561928596495,
"netIncomePerEBTTTM": 0.7646366484818603,
"ebtPerEbitTTM": 1.0005649492739208,
"priceToFairValueTTM": 47.370141231313106,
"debtToMarketCapTTM": 0.030731461471514124,
"effectiveTaxRateTTM": 0.23536335151813975,
"enterpriseValueMultipleTTM": 23.41672438697653
}
]

Financial Scores API
Globe Flag
Assess a company's financial strength using the Financial Health Scores API. This API provides key metrics such as the Altman Z-Score and Piotroski Score, giving users insights into a company’s overall financial health and stability.

Endpoint:

https://financialmodelingprep.com/stable/financial-scores?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

(\*) Required | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
[
{
"symbol": "AAPL",
"reportedCurrency": "USD",
"altmanZScore": 9.322985825443649,
"piotroskiScore": 8,
"workingCapital": -11125000000,
"totalAssets": 344085000000,
"retainedEarnings": -11221000000,
"ebit": 125675000000,
"marketCap": 3259495258000,
"totalLiabilities": 277327000000,
"revenue": 395760000000
}
]

Owner Earnings API
Globe Flag
Retrieve a company's owner earnings with the Owner Earnings API, which provides a more accurate representation of cash available to shareholders by adjusting net income. This metric is crucial for evaluating a company’s profitability from the perspective of investors.

Endpoint:

https://financialmodelingprep.com/stable/owner-earnings?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

(\*) Required | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
[
{
"symbol": "AAPL",
"reportedCurrency": "USD",
"fiscalYear": "2025",
"period": "Q1",
"date": "2024-12-28",
"averagePPE": 0.13969,
"maintenanceCapex": -2279964750,
"ownersEarnings": 27655035250,
"growthCapex": -660035250,
"ownersEarningsPerShare": 1.83
}
]

Enterprise Values API
Globe Flag
Access a company's enterprise value using the Enterprise Values API. This metric offers a comprehensive view of a company's total market value by combining both its equity (market capitalization) and debt, providing a better understanding of its worth.

Endpoint:

https://financialmodelingprep.com/stable/enterprise-values?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
[
{
"symbol": "AAPL",
"date": "2024-09-28",
"stockPrice": 227.79,
"numberOfShares": 15343783000,
"marketCapitalization": 3495160329570,
"minusCashAndCashEquivalents": 29943000000,
"addTotalDebt": 106629000000,
"enterpriseValue": 3571846329570
}
]

Income Statement Growth API
Globe Flag
Track key financial growth metrics with the Income Statement Growth API. Analyze how revenue, profits, and expenses have evolved over time, offering insights into a company’s financial health and operational efficiency.

Endpoint:

https://financialmodelingprep.com/stable/income-statement-growth?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
[
{
"symbol": "AAPL",
"date": "2024-09-28",
"fiscalYear": "2024",
"period": "FY",
"reportedCurrency": "USD",
"growthRevenue": 0.020219940775141214,
"growthCostOfRevenue": -0.017675600199872046,
"growthGrossProfit": 0.06819471705252206,
"growthGrossProfitRatio": 0.04776303446712012,
"growthResearchAndDevelopmentExpenses": 0.04863780712017383,
"growthGeneralAndAdministrativeExpenses": 0,
"growthSellingAndMarketingExpenses": 0,
"growthOtherExpenses": -1,
"growthOperatingExpenses": 0.04776924900176856,
"growthCostAndExpenses": -0.004331112631234571,
"growthInterestIncome": -1,
"growthInterestExpense": -1,
"growthDepreciationAndAmortization": -0.006424168764649709,
"growthEBITDA": 0.07026704816404387,
"growthOperatingIncome": 0.07799581805933456,
"growthIncomeBeforeTax": 0.08571604417246959,
"growthIncomeTaxExpense": 0.7770145152619318,
"growthNetIncome": -0.033599670086086914,
"growthEPS": -0.008116883116883088,
"growthEPSDiluted": -0.008156606851549727,
"growthWeightedAverageShsOut": -0.02543458616683152,
"growthWeightedAverageShsOutDil": -0.02557791606880283,
"growthEBIT": 0.0471407082579099,
"growthNonOperatingIncomeExcludingInterest": 1,
"growthNetInterestIncome": 1,
"growthTotalOtherIncomeExpensesNet": 1.4761061946902654,
"growthNetIncomeFromContinuingOperations": -0.033599670086086914,
"growthOtherAdjustmentsToNetIncome": 0,
"growthNetIncomeDeductions": 0
}
]

Balance Sheet Statement Growth API
Globe Flag
Analyze the growth of key balance sheet items over time with the Balance Sheet Statement Growth API. Track changes in assets, liabilities, and equity to understand the financial evolution of a company.

Endpoint:

https://financialmodelingprep.com/stable/balance-sheet-statement-growth?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
[
{
"symbol": "AAPL",
"date": "2024-09-28",
"fiscalYear": "2024",
"period": "FY",
"reportedCurrency": "USD",
"growthCashAndCashEquivalents": -0.0007341898882029034,
"growthShortTermInvestments": 0.11516302627413738,
"growthCashAndShortTermInvestments": 0.058744212492892536,
"growthNetReceivables": 0.08621792243994425,
"growthInventory": 0.15084504817564365,
"growthOtherCurrentAssets": -0.02776454576386526,
"growthTotalCurrentAssets": 0.06562138667929733,
"growthPropertyPlantEquipmentNet": -0.15992349565984992,
"growthGoodwill": 0,
"growthIntangibleAssets": 0,
"growthGoodwillAndIntangibleAssets": 0,
"growthLongTermInvestments": -0.09015953214513049,
"growthTaxAssets": 0.09225857046829487,
"growthOtherNonCurrentAssets": 0.5266933370120016,
"growthTotalNonCurrentAssets": 0.014238076328719674,
"growthOtherAssets": 0,
"growthTotalAssets": 0.035160515396374756,
"growthAccountPayables": 0.1014039066617687,
"growthShortTermDebt": 0.32087050041121024,
"growthTaxPayables": 2.01632838190271,
"growthDeferredRevenue": 0.023322168465450935,
"growthOtherCurrentLiabilities": -0.1254584832500786,
"growthTotalCurrentLiabilities": 0.21391802240757563,
"growthLongTermDebt": -0.10003043628845205,
"growthDeferredRevenueNonCurrent": 0,
"growthDeferredTaxLiabilitiesNonCurrent": 0,
"growthOtherNonCurrentLiabilities": -0.09048495373370312,
"growthTotalNonCurrentLiabilities": -0.09295867814151548,
"growthOtherLiabilities": 0,
"growthTotalLiabilities": 0.060574238130816666,
"growthPreferredStock": 0,
"growthCommonStock": 0.12821763398905328,
"growthRetainedEarnings": -88.50467289719626,
"growthAccumulatedOtherComprehensiveIncomeLoss": 0.3737338456164862,
"growthOthertotalStockholdersEquity": 0,
"growthTotalStockholdersEquity": -0.0836095645737457,
"growthMinorityInterest": 0,
"growthTotalEquity": -0.0836095645737457,
"growthTotalLiabilitiesAndStockholdersEquity": 0.035160515396374756,
"growthTotalInvestments": -0.04107194211936368,
"growthTotalDebt": -0.0401393489845888,
"growthNetDebt": -0.05469472282829777,
"growthAccountsReceivables": 0.13223532601328453,
"growthOtherReceivables": 0.04307907360930203,
"growthPrepaids": 0,
"growthTotalPayables": 0.5262653527335452,
"growthOtherPayables": 0,
"growthAccruedExpenses": 0,
"growthCapitalLeaseObligationsCurrent": 0.03619047619047619,
"growthAdditionalPaidInCapital": 0,
"growthTreasuryStock": 0
}
]

Cashflow Statement Growth API
Globe Flag
Measure the growth rate of a company’s cash flow with the FMP Cashflow Statement Growth API. Determine how quickly a company’s cash flow is increasing or decreasing over time.

Endpoint:

https://financialmodelingprep.com/stable/cash-flow-statement-growth?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
[
{
"symbol": "AAPL",
"date": "2024-09-28",
"fiscalYear": "2024",
"period": "FY",
"reportedCurrency": "USD",
"growthNetIncome": -0.033599670086086914,
"growthDepreciationAndAmortization": -0.006424168764649709,
"growthDeferredIncomeTax": 0,
"growthStockBasedCompensation": 0.07892550540016616,
"growthChangeInWorkingCapital": 1.555116314429071,
"growthAccountsReceivables": -2.0473933649289098,
"growthInventory": 0.3535228677379481,
"growthAccountsPayables": 4.1868713605082055,
"growthOtherWorkingCapital": 2.4402563136072373,
"growthOtherNonCashItems": -0.017512348450830714,
"growthNetCashProvidedByOperatingActivites": 0.06975566069312394,
"growthInvestmentsInPropertyPlantAndEquipment": 0.13796879277306323,
"growthAcquisitionsNet": 0,
"growthPurchasesOfInvestments": -0.6486294175448107,
"growthSalesMaturitiesOfInvestments": 0.3698202750801951,
"growthOtherInvestingActivites": 0.02169035153328347,
"growthNetCashUsedForInvestingActivites": -0.2078272604588394,
"growthDebtRepayment": -0.012662502110417018,
"growthCommonStockIssued": 0,
"growthCommonStockRepurchased": -0.2243584784010316,
"growthDividendsPaid": -0.013910149750415973,
"growthOtherFinancingActivites": 0.03493013972055888,
"growthNetCashUsedProvidedByFinancingActivities": -0.12439163778482412,
"growthEffectOfForexChangesOnCash": 0,
"growthNetChangeInCash": -1.1378472222222222,
"growthCashAtEndOfPeriod": -0.02583205908188828,
"growthCashAtBeginningOfPeriod": 0.23061216319013492,
"growthOperatingCashFlow": 0.06975566069312394,
"growthCapitalExpenditure": 0.13796879277306323,
"growthFreeCashFlow": 0.092615279562982,
"growthNetDebtIssuance": 0.3942026057973942,
"growthLongTermNetDebtIssuance": -0.6812426135404356,
"growthShortTermNetDebtIssuance": 1.995475113122172,
"growthNetStockIssuance": -0.2243584784010316,
"growthPreferredDividendsPaid": -0.013910149750415973,
"growthIncomeTaxesPaid": 0.3973981476524439,
"growthInterestPaid": -1
}
]

Financial Statement Growth API
Globe Flag
Analyze the growth of key financial statement items across income, balance sheet, and cash flow statements with the Financial Statement Growth API. Track changes over time to understand trends in financial performance.

Endpoint:

https://financialmodelingprep.com/stable/financial-growth?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

Q1,Q2,Q3,Q4,FY,annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
[
{
"symbol": "AAPL",
"date": "2024-09-28",
"fiscalYear": "2024",
"period": "FY",
"reportedCurrency": "USD",
"revenueGrowth": 0.020219940775141214,
"grossProfitGrowth": 0.06819471705252206,
"ebitgrowth": 0.07799581805933456,
"operatingIncomeGrowth": 0.07799581805933456,
"netIncomeGrowth": -0.033599670086086914,
"epsgrowth": -0.008116883116883088,
"epsdilutedGrowth": -0.008156606851549727,
"weightedAverageSharesGrowth": -0.02543458616683152,
"weightedAverageSharesDilutedGrowth": -0.02557791606880283,
"dividendsPerShareGrowth": 0.040371570095532654,
"operatingCashFlowGrowth": 0.06975566069312394,
"receivablesGrowth": 0.08621792243994425,
"inventoryGrowth": 0.15084504817564365,
"assetGrowth": 0.035160515396374756,
"bookValueperShareGrowth": -0.059693251557224776,
"debtGrowth": -0.0401393489845888,
"rdexpenseGrowth": 0.04863780712017383,
"sgaexpensesGrowth": 0.04672709770575967,
"freeCashFlowGrowth": 0.092615279562982,
"tenYRevenueGrowthPerShare": 2.3937532854122625,
"fiveYRevenueGrowthPerShare": 0.8093292228858464,
"threeYRevenueGrowthPerShare": 0.163506592883552,
"tenYOperatingCFGrowthPerShare": 2.1417809176982403,
"fiveYOperatingCFGrowthPerShare": 1.051533221923415,
"threeYOperatingCFGrowthPerShare": 0.23720294833900227,
"tenYNetIncomeGrowthPerShare": 2.76381558093543,
"fiveYNetIncomeGrowthPerShare": 1.0421744314966246,
"threeYNetIncomeGrowthPerShare": 0.07761907162786884,
"tenYShareholdersEquityGrowthPerShare": -0.19003774225234785,
"fiveYShareholdersEquityGrowthPerShare": -0.24235004889283715,
"threeYShareholdersEquityGrowthPerShare": -0.017459858915902907,
"tenYDividendperShareGrowthPerShare": 1.1722201809466772,
"fiveYDividendperShareGrowthPerShare": 0.29890046876764864,
"threeYDividendperShareGrowthPerShare": 0.14617932692103452,
"ebitdaGrowth": null,
"growthCapitalExpenditure": null,
"tenYBottomLineNetIncomeGrowthPerShare": null,
"fiveYBottomLineNetIncomeGrowthPerShare": null,
"threeYBottomLineNetIncomeGrowthPerShare": null
}
]

Financial Reports Dates API
Endpoint:

https://financialmodelingprep.com/stable/financial-reports-dates?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

(\*) Required
Response
1
2
3
4
5
6
7
8
9
[
{
"symbol": "AAPL",
"fiscalYear": 2025,
"period": "Q1",
"linkXlsx": "https://financialmodelingprep.com/stable/financial-reports-json?symbol=AAPL&year=2025&period=Q1&apikey=YOUR_API_KEY",
"linkJson": "https://financialmodelingprep.com/stable/financial-reports-xlsx?symbol=AAPL&year=2025&period=Q1&apikey=YOUR_API_KEY"
}
]

Financial Reports Form 10-K JSON API
Access comprehensive annual reports with the FMP Annual Reports on Form 10-K API. Obtain detailed information about a company’s financial performance, business operations, and risk factors as reported to the SEC.

Endpoint:

https://financialmodelingprep.com/stable/financial-reports-json?symbol=AAPL&year=2022&period=FY

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

year\*

number

2022

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552
553
554
555
556
557
558
559
560
561
562
563
564
565
566
567
568
569
570
571
572
573
574
575
576
577
578
579
580
581
582
583
584
585
586
587
588
589
590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614
615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638
639
640
641
642
643
644
645
646
647
648
649
650
651
652
653
654
655
656
657
658
659
660
661
662
663
664
665
666
667
668
669
670
671
672
673
674
675
676
677
678
679
680
681
682
683
684
685
686
687
688
689
690
691
692
693
694
695
696
697
698
699
700
701
702
703
704
705
706
707
708
709
710
711
712
713
714
715
716
717
718
719
720
721
722
723
724
725
726
727
728
729
730
731
732
733
734
735
736
737
738
739
740
741
742
743
744
745
746
747
748
749
750
751
752
753
754
755
756
757
758
759
760
761
762
763
764
765
766
767
768
769
770
771
772
773
774
775
776
777
778
779
780
781
782
783
784
785
786
787
788
789
790
791
792
793
794
795
796
797
798
799
800
801
802
803
804
805
806
807
808
809
810
811
812
813
814
815
816
817
818
819
820
821
822
823
824
825
826
827
828
829
830
831
832
833
834
835
836
837
838
839
840
841
842
843
844
845
846
847
848
849
850
851
852
853
854
855
856
857
858
859
860
861
862
863
864
865
866
867
868
869
870
871
872
873
874
875
876
877
878
879
880
881
882
883
884
885
886
887
888
889
890
891
892
893
894
895
896
897
898
899
900
901
902
903
904
905
906
907
908
909
910
911
912
913
914
915
916
917
918
919
920
921
922
923
924
925
926
927
928
929
930
931
932
933
934
935
936
937
938
939
940
941
942
943
944
945
946
947
948
949
950
951
952
953
954
955
956
957
958
959
960
961
962
963
964
965
966
967
968
969
970
971
972
973
974
975
976
977
978
979
980
981
982
983
984
985
986
987
988
989
990
991
992
993
994
995
996
997
998
999
1000
1001
1002
1003
1004
1005
1006
1007
1008
1009
1010
1011
1012
1013
1014
1015
1016
1017
1018
1019
1020
1021
1022
1023
1024
1025
1026
1027
1028
1029
1030
1031
1032
1033
1034
1035
1036
1037
1038
1039
1040
1041
1042
1043
1044
1045
1046
1047
1048
1049
1050
1051
1052
1053
1054
1055
1056
1057
1058
1059
1060
1061
1062
1063
1064
1065
1066
1067
1068
1069
1070
1071
1072
1073
1074
1075
1076
1077
1078
1079
1080
1081
1082
1083
1084
1085
1086
1087
1088
1089
1090
1091
1092
1093
1094
1095
1096
1097
1098
1099
1100
1101
1102
1103
1104
1105
1106
1107
1108
1109
1110
1111
1112
1113
1114
1115
1116
1117
1118
1119
1120
1121
1122
1123
1124
1125
1126
1127
1128
1129
1130
1131
1132
1133
1134
1135
1136
1137
1138
1139
1140
1141
1142
1143
1144
1145
1146
1147
1148
1149
1150
1151
1152
1153
1154
1155
1156
1157
1158
1159
1160
1161
1162
1163
1164
1165
1166
1167
1168
1169
1170
1171
1172
1173
1174
1175
1176
1177
1178
1179
1180
1181
1182
1183
1184
1185
1186
1187
1188
1189
1190
1191
1192
1193
1194
1195
1196
1197
1198
1199
1200
1201
1202
1203
1204
1205
1206
1207
1208
1209
1210
1211
1212
1213
1214
1215
1216
1217
1218
1219
1220
1221
1222
1223
1224
1225
1226
1227
1228
1229
1230
1231
1232
1233
1234
1235
1236
1237
1238
1239
1240
1241
1242
1243
1244
1245
1246
1247
1248
1249
1250
1251
1252
1253
1254
1255
1256
1257
1258
1259
1260
1261
1262
1263
1264
1265
1266
1267
1268
1269
1270
1271
1272
1273
1274
1275
1276
1277
1278
1279
1280
1281
1282
1283
1284
1285
1286
1287
1288
1289
1290
1291
1292
1293
1294
1295
1296
1297
1298
1299
1300
1301
1302
1303
1304
1305
[
{
"symbol": "AAPL",
"period": "FY",
"year": "2022",
"Cover Page": [
{
"Cover Page - USD ($) shares in Thousands, $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Oct. 14, 2022",
					"Mar. 25, 2022"
				]
			},
			{
				"Entity Information [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Auditor Information": [
			{
				"Auditor Information": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022"
				]
			},
			{
				"Auditor Information [Abstract]": [
					" "
				]
			}
		],
		"CONSOLIDATED STATEMENTS OF OPER": [
			{
				"CONSOLIDATED STATEMENTS OF OPERATIONS - USD ($) shares in Thousands, $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Net sales": [
394328,
365817,
274515
]
}
],
"CONSOLIDATED STATEMENTS OF COMP": [
{
"CONSOLIDATED STATEMENTS OF COMPREHENSIVE INCOME - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Statement of Comprehensive Income [Abstract]": [
					" ",
					" ",
					" "
				]
			}
		],
		"CONSOLIDATED BALANCE SHEETS": [
			{
				"CONSOLIDATED BALANCE SHEETS - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Current assets:": [
" ",
" "
]
},
{
"Cash and cash equivalents": [
23646,
34940
]
}
],
"CONSOLIDATED BALANCE SHEETS (Pa": [
{
"CONSOLIDATED BALANCE SHEETS (Parenthetical) - $ / shares": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Statement of Financial Position [Abstract]": [
" ",
" "
]
},
{
"Common stock, par value (in dollars per share)": [
0.00001,
0.00001
]
}
],
"CONSOLIDATED STATEMENTS OF SHAR": [
{
"CONSOLIDATED STATEMENTS OF SHAREHOLDERS' EQUITY - USD ($) $ in Millions": [
					"Total",
					"Common stock and additional paid-in capital",
					"Retained earnings/(Accumulated deficit)",
					"Retained earnings/(Accumulated deficit) Cumulative effect of change in accounting principle",
					"Accumulated other comprehensive income/(loss)",
					"Accumulated other comprehensive income/(loss) Cumulative effect of change in accounting principle"
				]
			},
			{
				"Beginning balances at Sep. 28, 2019": [
					90488,
					45174,
					45898,
					-136,
					-584,
					136
				]
			},
			{
				"Increase (Decrease) in Stockholders' Equity [Roll Forward]": [
					" ",
					" ",
					" ",
					" ",
					" ",
					" "
				]
			}
		],
		"CONSOLIDATED STATEMENTS OF CASH": [
			{
				"CONSOLIDATED STATEMENTS OF CASH FLOWS - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Statement of Cash Flows [Abstract]": [
" ",
" ",
" "
]
}
],
"Summary of Significant Accounti": [
{
"Summary of Significant Accounting Policies": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Accounting Policies [Abstract]": [
" "
]
}
],
"Revenue": [
{
"Revenue": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Revenue from Contract with Customer [Abstract]": [
" "
]
}
],
"Financial Instruments": [
{
"Financial Instruments": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Investments, All Other Investments [Abstract]": [
" "
]
}
],
"Consolidated Financial Statemen": [
{
"Consolidated Financial Statement Details": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
" "
]
}
],
"Income Taxes": [
{
"Income Taxes": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Income Tax Disclosure [Abstract]": [
" "
]
}
],
"Leases": [
{
"Leases": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Leases [Abstract]": [
" "
]
}
],
"Debt": [
{
"Debt": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Debt Disclosure [Abstract]": [
" "
]
}
],
"Shareholders' Equity": [
{
"Shareholders' Equity": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Equity [Abstract]": [
" "
]
}
],
"Benefit Plans": [
{
"Benefit Plans": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Share-Based Payment Arrangement [Abstract]": [
" "
]
}
],
"Commitments and Contingencies": [
{
"Commitments and Contingencies": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Commitments and Contingencies Disclosure [Abstract]": [
" "
]
}
],
"Segment Information and Geograp": [
{
"Segment Information and Geographic Data": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Segment Reporting [Abstract]": [
" "
]
}
],
"Summary of Significant Accoun_2": [
{
"Summary of Significant Accounting Policies (Policies)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Accounting Policies [Abstract]": [
" "
]
}
],
"Summary of Significant Accoun_3": [
{
"Summary of Significant Accounting Policies (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Accounting Policies [Abstract]": [
" "
]
}
],
"Revenue (Tables)": [
{
"Revenue (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Revenue from Contract with Customer [Abstract]": [
" "
]
}
],
"Financial Instruments (Tables)": [
{
"Financial Instruments (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Investments, All Other Investments [Abstract]": [
" "
]
}
],
"Consolidated Financial Statem_2": [
{
"Consolidated Financial Statement Details (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
" "
]
}
],
"Income Taxes (Tables)": [
{
"Income Taxes (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Income Tax Disclosure [Abstract]": [
" "
]
}
],
"Leases (Tables)": [
{
"Leases (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Leases [Abstract]": [
" "
]
}
],
"Debt (Tables)": [
{
"Debt (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Debt Disclosure [Abstract]": [
" "
]
}
],
"Shareholders' Equity (Tables)": [
{
"Shareholders' Equity (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Equity [Abstract]": [
" "
]
}
],
"Benefit Plans (Tables)": [
{
"Benefit Plans (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Share-Based Payment Arrangement [Abstract]": [
" "
]
}
],
"Commitments and Contingencies (": [
{
"Commitments and Contingencies (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Commitments and Contingencies Disclosure [Abstract]": [
" "
]
}
],
"Segment Information and Geogr_2": [
{
"Segment Information and Geographic Data (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Segment Reporting [Abstract]": [
" "
]
}
],
"Summary of Significant Accoun_4": [
{
"Summary of Significant Accounting Policies - Additional Information (Details) $ in Billions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022 USD ($) performanceObligation",
"Sep. 25, 2021 USD ($)",
"Sep. 26, 2020 USD ($)"
]
},
{
"Significant Accounting Policies [Line Items]": [
" ",
" ",
" "
]
}
],
"Summary of Significant Accoun_5": [
{
"Summary of Significant Accounting Policies - Computation of Basic and Diluted Earnings Per Share (Details) - USD ($) $ / shares in Units, shares in Thousands, $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Numerator:": [
					" ",
					" ",
					" "
				]
			}
		],
		"Revenue - Net Sales Disaggregat": [
			{
				"Revenue - Net Sales Disaggregated by Significant Products and Services (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Disaggregation of Revenue [Line Items]": [
" ",
" ",
" "
]
}
],
"Revenue - Additional Informatio": [
{
"Revenue - Additional Information (Details) - USD ($) $ in Billions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Revenue from Contract with Customer [Abstract]": [
					" ",
					" "
				]
			},
			{
				"Total deferred revenue": [
					12.4,
					11.9
				]
			}
		],
		"Revenue - Deferred Revenue, Exp": [
			{
				"Revenue - Deferred Revenue, Expected Timing of Realization (Details)": [
					"Sep. 24, 2022"
				]
			},
			{
				"Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2022-09-25": [
					" "
				]
			},
			{
				"Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]": [
					" "
				]
			}
		],
		"Financial Instruments - Cash, C": [
			{
				"Financial Instruments - Cash, Cash Equivalents and Marketable Securities (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Debt Securities, Available-for-sale [Line Items]": [
" ",
" "
]
},
{
"Cash, Cash Equivalents and Marketable Securities, Adjusted Cost": [
183061,
189961
]
}
],
"Financial Instruments - Non-Cur": [
{
"Financial Instruments - Non-Current Marketable Debt Securities by Contractual Maturity (Details) $ in Millions": [
"Sep. 24, 2022 USD ($)"
]
},
{
"Fair value of non-current marketable debt securities by contractual maturity": [
" "
]
},
{
"Due after 1 year through 5 years": [
87031
]
}
],
"Financial Instruments - Additio": [
{
"Financial Instruments - Additional Information (Details) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022 USD ($) Customer Vendor",
"Sep. 25, 2021 Vendor"
]
},
{
"Financial Instruments [Line Items]": [
" ",
" "
]
}
],
"Financial Instruments - Notiona": [
{
"Financial Instruments - Notional Amounts Associated with Derivative Instruments (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Derivatives designated as accounting hedges | Foreign exchange contracts": [
					" ",
					" "
				]
			},
			{
				"Derivative [Line Items]": [
					" ",
					" "
				]
			}
		],
		"Financial Instruments - Gross F": [
			{
				"Financial Instruments - Gross Fair Values of Derivative Assets and Liabilities (Details) - Level 2 $ in Millions": [
					"Sep. 24, 2022 USD ($)"
]
},
{
"Other current assets and other non-current assets | Foreign exchange contracts": [
" "
]
},
{
"Derivative assets:": [
" "
]
}
],
"Financial Instruments - Derivat": [
{
"Financial Instruments - Derivative Instruments Designated as Fair Value Hedges and Related Hedged Items (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Current and non-current marketable securities": [
					" ",
					" "
				]
			},
			{
				"Derivatives, Fair Value [Line Items]": [
					" ",
					" "
				]
			}
		],
		"Consolidated Financial Statem_3": [
			{
				"Consolidated Financial Statement Details - Property, Plant and Equipment, Net (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Property, Plant and Equipment [Line Items]": [
" ",
" "
]
},
{
"Gross property, plant and equipment": [
114457,
109723
]
}
],
"Consolidated Financial Statem_4": [
{
"Consolidated Financial Statement Details - Other Non-Current Liabilities (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
					" ",
					" "
				]
			},
			{
				"Long-term taxes payable": [
					16657,
					24689
				]
			}
		],
		"Consolidated Financial Statem_5": [
			{
				"Consolidated Financial Statement Details - Other Income/(Expense), Net (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
" ",
" ",
" "
]
}
],
"Income Taxes - Provision for In": [
{
"Income Taxes - Provision for Income Taxes (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Federal:": [
					" ",
					" ",
					" "
				]
			}
		],
		"Income Taxes - Additional Infor": [
			{
				"Income Taxes - Additional Information (Details) $ in Millions, € in Billions": [
					null,
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Aug. 30, 2016 EUR (€) Subsidiary",
					"Sep. 24, 2022 USD ($)",
"Sep. 25, 2021 USD ($)",
					"Sep. 26, 2020 USD ($)",
"Sep. 24, 2022 EUR (€)",
"Sep. 28, 2019 USD ($)"
				]
			},
			{
				"Income Tax Contingency [Line Items]": [
					" ",
					" ",
					" ",
					" ",
					" ",
					" "
				]
			}
		],
		"Income Taxes - Reconciliation o": [
			{
				"Income Taxes - Reconciliation of Provision for Income Taxes to Amount Computed by Applying the Statutory Federal Income Tax Rate to Income Before Provision for Income Taxes (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Income Tax Disclosure [Abstract]": [
" ",
" ",
" "
]
}
],
"Income Taxes - Significant Comp": [
{
"Income Taxes - Significant Components of Deferred Tax Assets and Liabilities (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Deferred tax assets:": [
					" ",
					" "
				]
			},
			{
				"Amortization and depreciation": [
					1496,
					5575
				]
			}
		],
		"Income Taxes - Aggregate Change": [
			{
				"Income Taxes - Aggregate Changes in Gross Unrecognized Tax Benefits (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Reconciliation of Unrecognized Tax Benefits, Excluding Amounts Pertaining to Examined Tax Returns [Roll Forward]": [
" ",
" ",
" "
]
}
],
"Leases - Additional Information": [
{
"Leases - Additional Information (Details) - USD ($) $ in Billions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Lessee, Lease, Description [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Leases - ROU Assets and Lease L": [
			{
				"Leases - ROU Assets and Lease Liabilities (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Lease-Related Assets and Liabilities": [
" ",
" "
]
},
{
"Operating lease right-of-use assets": [
10417,
10087
]
}
],
"Leases - Lease Liability Maturi": [
{
"Leases - Lease Liability Maturities (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Operating Leases": [
					" ",
					" "
				]
			},
			{
				"2023": [
					1758,
					" "
				]
			}
		],
		"Debt - Additional Information (": [
			{
				"Debt - Additional Information (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Debt Instrument [Line Items]": [
" ",
" ",
" "
]
}
],
"Debt - Summary of Cash Flows As": [
{
"Debt - Summary of Cash Flows Associated with Commercial Paper (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Maturities 90 days or less:": [
					" ",
					" ",
					" "
				]
			}
		],
		"Debt - Summary of Term Debt (De": [
			{
				"Debt - Summary of Term Debt (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Debt Instrument [Line Items]": [
" ",
" "
]
}
],
"Debt - Future Principal Payment": [
{
"Debt - Future Principal Payments for Term Debt (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Debt Disclosure [Abstract]": [
					" ",
					" "
				]
			},
			{
				"2023": [
					11139,
					" "
				]
			}
		],
		"Shareholders' Equity - Addition": [
			{
				"Shareholders' Equity - Additional Information (Details) shares in Millions, $ in Billions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022 USD ($) shares"
]
},
{
"Stockholders' Equity Note [Abstract]": [
" "
]
}
],
"Shareholders' Equity - Shares o": [
{
"Shareholders' Equity - Shares of Common Stock (Details) - shares shares in Thousands": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Increase (Decrease) in Shares of Common Stock Outstanding [Roll Forward]": [
" ",
" ",
" "
]
}
],
"Benefit Plans - Additional Info": [
{
"Benefit Plans - Additional Information (Details) shares in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022 USD ($) shares",
"Sep. 25, 2021 USD ($) shares",
"Sep. 26, 2020 USD ($) shares",
"Mar. 04, 2022 shares",
"Nov. 09, 2021 shares",
"Mar. 10, 2015 shares"
]
},
{
"Share-based Compensation Arrangement by Share-based Payment Award [Line Items]": [
" ",
" ",
" ",
" ",
" ",
" "
]
}
],
"Benefit Plans - Restricted Stoc": [
{
"Benefit Plans - Restricted Stock Units Activity and Related Information (Details) - Restricted stock units - USD ($) $ / shares in Units, shares in Thousands, $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Number of Restricted Stock Units": [
					" ",
					" ",
					" "
				]
			}
		],
		"Benefit Plans - Summary of Shar": [
			{
				"Benefit Plans - Summary of Share-Based Compensation Expense and the Related Income Tax Benefit (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Share-Based Payment Arrangement [Abstract]": [
" ",
" ",
" "
]
}
],
"Commitments and Contingencies -": [
{
"Commitments and Contingencies - Future Payments Under Unconditional Purchase Obligations (Details) $ in Millions": [
"Sep. 24, 2022 USD ($)"
]
},
{
"Unconditional Purchase Obligation, Fiscal Year Maturity [Abstract]": [
" "
]
},
{
"2023": [
13488
]
}
],
"Segment Information and Geogr_3": [
{
"Segment Information and Geographic Data - Information by Reportable Segment (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Segment Reporting Information [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Segment Information and Geogr_4": [
			{
				"Segment Information and Geographic Data - Reconciliation of Segment Operating Income to the Consolidated Statements of Operations (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Segment Reporting, Reconciling Item for Operating Profit (Loss) from Segment to Consolidated [Line Items]": [
" ",
" ",
" "
]
}
],
"Segment Information and Geogr_5": [
{
"Segment Information and Geographic Data - Net Sales (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Revenues from External Customers and Long-Lived Assets [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Segment Information and Geogr_6": [
			{
				"Segment Information and Geographic Data - Long-Lived Assets (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Revenues from External Customers and Long-Lived Assets [Line Items]": [
" ",
" "
]
},
{
"Long-lived assets": [
42117,
39440
]
}
]
}
]

Financial Reports Form 10-K XLSX API
Download detailed 10-K reports in XLSX format with the Financial Reports Form 10-K XLSX API. Effortlessly access and analyze annual financial data for companies in a spreadsheet-friendly format.

Endpoint:

https://financialmodelingprep.com/stable/financial-reports-xlsx?symbol=AAPL&year=2022&period=FY

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

year\*

number

2022

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552
553
554
555
556
557
558
559
560
561
562
563
564
565
566
567
568
569
570
571
572
573
574
575
576
577
578
579
580
581
582
583
584
585
586
587
588
589
590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614
615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638
639
640
641
642
643
644
645
646
647
648
649
650
651
652
653
654
655
656
657
658
659
660
661
662
663
664
665
666
667
668
669
670
671
672
673
674
675
676
677
678
679
680
681
682
683
684
685
686
687
688
689
690
691
692
693
694
695
696
697
698
699
700
701
702
703
704
705
706
707
708
709
710
711
712
713
714
715
716
717
718
719
720
721
722
723
724
725
726
727
728
729
730
731
732
733
734
735
736
737
738
739
740
741
742
743
744
745
746
747
748
749
750
751
752
753
754
755
756
757
758
759
760
761
762
763
764
765
766
767
768
769
770
771
772
773
774
775
776
777
778
779
780
781
782
783
784
785
786
787
788
789
790
791
792
793
794
795
796
797
798
799
800
801
802
803
804
805
806
807
808
809
810
811
812
813
814
815
816
817
818
819
820
821
822
823
824
825
826
827
828
829
830
831
832
833
834
835
836
837
838
839
840
841
842
843
844
845
846
847
848
849
850
851
852
853
854
855
856
857
858
859
860
861
862
863
864
865
866
867
868
869
870
871
872
873
874
875
876
877
878
879
880
881
882
883
884
885
886
887
888
889
890
891
892
893
894
895
896
897
898
899
900
901
902
903
904
905
906
907
908
909
910
911
912
913
914
915
916
917
918
919
920
921
922
923
924
925
926
927
928
929
930
931
932
933
934
935
936
937
938
939
940
941
942
943
944
945
946
947
948
949
950
951
952
953
954
955
956
957
958
959
960
961
962
963
964
965
966
967
968
969
970
971
972
973
974
975
976
977
978
979
980
981
982
983
984
985
986
987
988
989
990
991
992
993
994
995
996
997
998
999
1000
1001
1002
1003
1004
1005
1006
1007
1008
1009
1010
1011
1012
1013
1014
1015
1016
1017
1018
1019
1020
1021
1022
1023
1024
1025
1026
1027
1028
1029
1030
1031
1032
1033
1034
1035
1036
1037
1038
1039
1040
1041
1042
1043
1044
1045
1046
1047
1048
1049
1050
1051
1052
1053
1054
1055
1056
1057
1058
1059
1060
1061
1062
1063
1064
1065
1066
1067
1068
1069
1070
1071
1072
1073
1074
1075
1076
1077
1078
1079
1080
1081
1082
1083
1084
1085
1086
1087
1088
1089
1090
1091
1092
1093
1094
1095
1096
1097
1098
1099
1100
1101
1102
1103
1104
1105
1106
1107
1108
1109
1110
1111
1112
1113
1114
1115
1116
1117
1118
1119
1120
1121
1122
1123
1124
1125
1126
1127
1128
1129
1130
1131
1132
1133
1134
1135
1136
1137
1138
1139
1140
1141
1142
1143
1144
1145
1146
1147
1148
1149
1150
1151
1152
1153
1154
1155
1156
1157
1158
1159
1160
1161
1162
1163
1164
1165
1166
1167
1168
1169
1170
1171
1172
1173
1174
1175
1176
1177
1178
1179
1180
1181
1182
1183
1184
1185
1186
1187
1188
1189
1190
1191
1192
1193
1194
1195
1196
1197
1198
1199
1200
1201
1202
1203
1204
1205
1206
1207
1208
1209
1210
1211
1212
1213
1214
1215
1216
1217
1218
1219
1220
1221
1222
1223
1224
1225
1226
1227
1228
1229
1230
1231
1232
1233
1234
1235
1236
1237
1238
1239
1240
1241
1242
1243
1244
1245
1246
1247
1248
1249
1250
1251
1252
1253
1254
1255
1256
1257
1258
1259
1260
1261
1262
1263
1264
1265
1266
1267
1268
1269
1270
1271
1272
1273
1274
1275
1276
1277
1278
1279
1280
1281
1282
1283
1284
1285
1286
1287
1288
1289
1290
1291
1292
1293
1294
1295
1296
1297
1298
1299
1300
1301
1302
1303
1304
1305
[
{
"symbol": "AAPL",
"period": "FY",
"year": "2022",
"Cover Page": [
{
"Cover Page - USD ($) shares in Thousands, $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Oct. 14, 2022",
					"Mar. 25, 2022"
				]
			},
			{
				"Entity Information [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Auditor Information": [
			{
				"Auditor Information": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022"
				]
			},
			{
				"Auditor Information [Abstract]": [
					" "
				]
			}
		],
		"CONSOLIDATED STATEMENTS OF OPER": [
			{
				"CONSOLIDATED STATEMENTS OF OPERATIONS - USD ($) shares in Thousands, $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Net sales": [
394328,
365817,
274515
]
}
],
"CONSOLIDATED STATEMENTS OF COMP": [
{
"CONSOLIDATED STATEMENTS OF COMPREHENSIVE INCOME - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Statement of Comprehensive Income [Abstract]": [
					" ",
					" ",
					" "
				]
			}
		],
		"CONSOLIDATED BALANCE SHEETS": [
			{
				"CONSOLIDATED BALANCE SHEETS - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Current assets:": [
" ",
" "
]
},
{
"Cash and cash equivalents": [
23646,
34940
]
}
],
"CONSOLIDATED BALANCE SHEETS (Pa": [
{
"CONSOLIDATED BALANCE SHEETS (Parenthetical) - $ / shares": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Statement of Financial Position [Abstract]": [
" ",
" "
]
},
{
"Common stock, par value (in dollars per share)": [
0.00001,
0.00001
]
}
],
"CONSOLIDATED STATEMENTS OF SHAR": [
{
"CONSOLIDATED STATEMENTS OF SHAREHOLDERS' EQUITY - USD ($) $ in Millions": [
					"Total",
					"Common stock and additional paid-in capital",
					"Retained earnings/(Accumulated deficit)",
					"Retained earnings/(Accumulated deficit) Cumulative effect of change in accounting principle",
					"Accumulated other comprehensive income/(loss)",
					"Accumulated other comprehensive income/(loss) Cumulative effect of change in accounting principle"
				]
			},
			{
				"Beginning balances at Sep. 28, 2019": [
					90488,
					45174,
					45898,
					-136,
					-584,
					136
				]
			},
			{
				"Increase (Decrease) in Stockholders' Equity [Roll Forward]": [
					" ",
					" ",
					" ",
					" ",
					" ",
					" "
				]
			}
		],
		"CONSOLIDATED STATEMENTS OF CASH": [
			{
				"CONSOLIDATED STATEMENTS OF CASH FLOWS - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Statement of Cash Flows [Abstract]": [
" ",
" ",
" "
]
}
],
"Summary of Significant Accounti": [
{
"Summary of Significant Accounting Policies": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Accounting Policies [Abstract]": [
" "
]
}
],
"Revenue": [
{
"Revenue": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Revenue from Contract with Customer [Abstract]": [
" "
]
}
],
"Financial Instruments": [
{
"Financial Instruments": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Investments, All Other Investments [Abstract]": [
" "
]
}
],
"Consolidated Financial Statemen": [
{
"Consolidated Financial Statement Details": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
" "
]
}
],
"Income Taxes": [
{
"Income Taxes": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Income Tax Disclosure [Abstract]": [
" "
]
}
],
"Leases": [
{
"Leases": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Leases [Abstract]": [
" "
]
}
],
"Debt": [
{
"Debt": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Debt Disclosure [Abstract]": [
" "
]
}
],
"Shareholders' Equity": [
{
"Shareholders' Equity": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Equity [Abstract]": [
" "
]
}
],
"Benefit Plans": [
{
"Benefit Plans": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Share-Based Payment Arrangement [Abstract]": [
" "
]
}
],
"Commitments and Contingencies": [
{
"Commitments and Contingencies": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Commitments and Contingencies Disclosure [Abstract]": [
" "
]
}
],
"Segment Information and Geograp": [
{
"Segment Information and Geographic Data": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Segment Reporting [Abstract]": [
" "
]
}
],
"Summary of Significant Accoun_2": [
{
"Summary of Significant Accounting Policies (Policies)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Accounting Policies [Abstract]": [
" "
]
}
],
"Summary of Significant Accoun_3": [
{
"Summary of Significant Accounting Policies (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Accounting Policies [Abstract]": [
" "
]
}
],
"Revenue (Tables)": [
{
"Revenue (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Revenue from Contract with Customer [Abstract]": [
" "
]
}
],
"Financial Instruments (Tables)": [
{
"Financial Instruments (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Investments, All Other Investments [Abstract]": [
" "
]
}
],
"Consolidated Financial Statem_2": [
{
"Consolidated Financial Statement Details (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
" "
]
}
],
"Income Taxes (Tables)": [
{
"Income Taxes (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Income Tax Disclosure [Abstract]": [
" "
]
}
],
"Leases (Tables)": [
{
"Leases (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Leases [Abstract]": [
" "
]
}
],
"Debt (Tables)": [
{
"Debt (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Debt Disclosure [Abstract]": [
" "
]
}
],
"Shareholders' Equity (Tables)": [
{
"Shareholders' Equity (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Equity [Abstract]": [
" "
]
}
],
"Benefit Plans (Tables)": [
{
"Benefit Plans (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Share-Based Payment Arrangement [Abstract]": [
" "
]
}
],
"Commitments and Contingencies (": [
{
"Commitments and Contingencies (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Commitments and Contingencies Disclosure [Abstract]": [
" "
]
}
],
"Segment Information and Geogr_2": [
{
"Segment Information and Geographic Data (Tables)": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022"
]
},
{
"Segment Reporting [Abstract]": [
" "
]
}
],
"Summary of Significant Accoun_4": [
{
"Summary of Significant Accounting Policies - Additional Information (Details) $ in Billions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022 USD ($) performanceObligation",
"Sep. 25, 2021 USD ($)",
"Sep. 26, 2020 USD ($)"
]
},
{
"Significant Accounting Policies [Line Items]": [
" ",
" ",
" "
]
}
],
"Summary of Significant Accoun_5": [
{
"Summary of Significant Accounting Policies - Computation of Basic and Diluted Earnings Per Share (Details) - USD ($) $ / shares in Units, shares in Thousands, $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Numerator:": [
					" ",
					" ",
					" "
				]
			}
		],
		"Revenue - Net Sales Disaggregat": [
			{
				"Revenue - Net Sales Disaggregated by Significant Products and Services (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Disaggregation of Revenue [Line Items]": [
" ",
" ",
" "
]
}
],
"Revenue - Additional Informatio": [
{
"Revenue - Additional Information (Details) - USD ($) $ in Billions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Revenue from Contract with Customer [Abstract]": [
					" ",
					" "
				]
			},
			{
				"Total deferred revenue": [
					12.4,
					11.9
				]
			}
		],
		"Revenue - Deferred Revenue, Exp": [
			{
				"Revenue - Deferred Revenue, Expected Timing of Realization (Details)": [
					"Sep. 24, 2022"
				]
			},
			{
				"Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2022-09-25": [
					" "
				]
			},
			{
				"Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]": [
					" "
				]
			}
		],
		"Financial Instruments - Cash, C": [
			{
				"Financial Instruments - Cash, Cash Equivalents and Marketable Securities (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Debt Securities, Available-for-sale [Line Items]": [
" ",
" "
]
},
{
"Cash, Cash Equivalents and Marketable Securities, Adjusted Cost": [
183061,
189961
]
}
],
"Financial Instruments - Non-Cur": [
{
"Financial Instruments - Non-Current Marketable Debt Securities by Contractual Maturity (Details) $ in Millions": [
"Sep. 24, 2022 USD ($)"
]
},
{
"Fair value of non-current marketable debt securities by contractual maturity": [
" "
]
},
{
"Due after 1 year through 5 years": [
87031
]
}
],
"Financial Instruments - Additio": [
{
"Financial Instruments - Additional Information (Details) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022 USD ($) Customer Vendor",
"Sep. 25, 2021 Vendor"
]
},
{
"Financial Instruments [Line Items]": [
" ",
" "
]
}
],
"Financial Instruments - Notiona": [
{
"Financial Instruments - Notional Amounts Associated with Derivative Instruments (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Derivatives designated as accounting hedges | Foreign exchange contracts": [
					" ",
					" "
				]
			},
			{
				"Derivative [Line Items]": [
					" ",
					" "
				]
			}
		],
		"Financial Instruments - Gross F": [
			{
				"Financial Instruments - Gross Fair Values of Derivative Assets and Liabilities (Details) - Level 2 $ in Millions": [
					"Sep. 24, 2022 USD ($)"
]
},
{
"Other current assets and other non-current assets | Foreign exchange contracts": [
" "
]
},
{
"Derivative assets:": [
" "
]
}
],
"Financial Instruments - Derivat": [
{
"Financial Instruments - Derivative Instruments Designated as Fair Value Hedges and Related Hedged Items (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Current and non-current marketable securities": [
					" ",
					" "
				]
			},
			{
				"Derivatives, Fair Value [Line Items]": [
					" ",
					" "
				]
			}
		],
		"Consolidated Financial Statem_3": [
			{
				"Consolidated Financial Statement Details - Property, Plant and Equipment, Net (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Property, Plant and Equipment [Line Items]": [
" ",
" "
]
},
{
"Gross property, plant and equipment": [
114457,
109723
]
}
],
"Consolidated Financial Statem_4": [
{
"Consolidated Financial Statement Details - Other Non-Current Liabilities (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
					" ",
					" "
				]
			},
			{
				"Long-term taxes payable": [
					16657,
					24689
				]
			}
		],
		"Consolidated Financial Statem_5": [
			{
				"Consolidated Financial Statement Details - Other Income/(Expense), Net (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Organization, Consolidation and Presentation of Financial Statements [Abstract]": [
" ",
" ",
" "
]
}
],
"Income Taxes - Provision for In": [
{
"Income Taxes - Provision for Income Taxes (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Federal:": [
					" ",
					" ",
					" "
				]
			}
		],
		"Income Taxes - Additional Infor": [
			{
				"Income Taxes - Additional Information (Details) $ in Millions, € in Billions": [
					null,
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Aug. 30, 2016 EUR (€) Subsidiary",
					"Sep. 24, 2022 USD ($)",
"Sep. 25, 2021 USD ($)",
					"Sep. 26, 2020 USD ($)",
"Sep. 24, 2022 EUR (€)",
"Sep. 28, 2019 USD ($)"
				]
			},
			{
				"Income Tax Contingency [Line Items]": [
					" ",
					" ",
					" ",
					" ",
					" ",
					" "
				]
			}
		],
		"Income Taxes - Reconciliation o": [
			{
				"Income Taxes - Reconciliation of Provision for Income Taxes to Amount Computed by Applying the Statutory Federal Income Tax Rate to Income Before Provision for Income Taxes (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Income Tax Disclosure [Abstract]": [
" ",
" ",
" "
]
}
],
"Income Taxes - Significant Comp": [
{
"Income Taxes - Significant Components of Deferred Tax Assets and Liabilities (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Deferred tax assets:": [
					" ",
					" "
				]
			},
			{
				"Amortization and depreciation": [
					1496,
					5575
				]
			}
		],
		"Income Taxes - Aggregate Change": [
			{
				"Income Taxes - Aggregate Changes in Gross Unrecognized Tax Benefits (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Reconciliation of Unrecognized Tax Benefits, Excluding Amounts Pertaining to Examined Tax Returns [Roll Forward]": [
" ",
" ",
" "
]
}
],
"Leases - Additional Information": [
{
"Leases - Additional Information (Details) - USD ($) $ in Billions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Lessee, Lease, Description [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Leases - ROU Assets and Lease L": [
			{
				"Leases - ROU Assets and Lease Liabilities (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Lease-Related Assets and Liabilities": [
" ",
" "
]
},
{
"Operating lease right-of-use assets": [
10417,
10087
]
}
],
"Leases - Lease Liability Maturi": [
{
"Leases - Lease Liability Maturities (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Operating Leases": [
					" ",
					" "
				]
			},
			{
				"2023": [
					1758,
					" "
				]
			}
		],
		"Debt - Additional Information (": [
			{
				"Debt - Additional Information (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Debt Instrument [Line Items]": [
" ",
" ",
" "
]
}
],
"Debt - Summary of Cash Flows As": [
{
"Debt - Summary of Cash Flows Associated with Commercial Paper (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Maturities 90 days or less:": [
					" ",
					" ",
					" "
				]
			}
		],
		"Debt - Summary of Term Debt (De": [
			{
				"Debt - Summary of Term Debt (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Debt Instrument [Line Items]": [
" ",
" "
]
}
],
"Debt - Future Principal Payment": [
{
"Debt - Future Principal Payments for Term Debt (Details) - USD ($) $ in Millions": [
					"Sep. 24, 2022",
					"Sep. 25, 2021"
				]
			},
			{
				"Debt Disclosure [Abstract]": [
					" ",
					" "
				]
			},
			{
				"2023": [
					11139,
					" "
				]
			}
		],
		"Shareholders' Equity - Addition": [
			{
				"Shareholders' Equity - Additional Information (Details) shares in Millions, $ in Billions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022 USD ($) shares"
]
},
{
"Stockholders' Equity Note [Abstract]": [
" "
]
}
],
"Shareholders' Equity - Shares o": [
{
"Shareholders' Equity - Shares of Common Stock (Details) - shares shares in Thousands": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Increase (Decrease) in Shares of Common Stock Outstanding [Roll Forward]": [
" ",
" ",
" "
]
}
],
"Benefit Plans - Additional Info": [
{
"Benefit Plans - Additional Information (Details) shares in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022 USD ($) shares",
"Sep. 25, 2021 USD ($) shares",
"Sep. 26, 2020 USD ($) shares",
"Mar. 04, 2022 shares",
"Nov. 09, 2021 shares",
"Mar. 10, 2015 shares"
]
},
{
"Share-based Compensation Arrangement by Share-based Payment Award [Line Items]": [
" ",
" ",
" ",
" ",
" ",
" "
]
}
],
"Benefit Plans - Restricted Stoc": [
{
"Benefit Plans - Restricted Stock Units Activity and Related Information (Details) - Restricted stock units - USD ($) $ / shares in Units, shares in Thousands, $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Number of Restricted Stock Units": [
					" ",
					" ",
					" "
				]
			}
		],
		"Benefit Plans - Summary of Shar": [
			{
				"Benefit Plans - Summary of Share-Based Compensation Expense and the Related Income Tax Benefit (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Share-Based Payment Arrangement [Abstract]": [
" ",
" ",
" "
]
}
],
"Commitments and Contingencies -": [
{
"Commitments and Contingencies - Future Payments Under Unconditional Purchase Obligations (Details) $ in Millions": [
"Sep. 24, 2022 USD ($)"
]
},
{
"Unconditional Purchase Obligation, Fiscal Year Maturity [Abstract]": [
" "
]
},
{
"2023": [
13488
]
}
],
"Segment Information and Geogr_3": [
{
"Segment Information and Geographic Data - Information by Reportable Segment (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Segment Reporting Information [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Segment Information and Geogr_4": [
			{
				"Segment Information and Geographic Data - Reconciliation of Segment Operating Income to the Consolidated Statements of Operations (Details) - USD ($) $ in Millions": [
"12 Months Ended"
]
},
{
"items": [
"Sep. 24, 2022",
"Sep. 25, 2021",
"Sep. 26, 2020"
]
},
{
"Segment Reporting, Reconciling Item for Operating Profit (Loss) from Segment to Consolidated [Line Items]": [
" ",
" ",
" "
]
}
],
"Segment Information and Geogr_5": [
{
"Segment Information and Geographic Data - Net Sales (Details) - USD ($) $ in Millions": [
					"12 Months Ended"
				]
			},
			{
				"items": [
					"Sep. 24, 2022",
					"Sep. 25, 2021",
					"Sep. 26, 2020"
				]
			},
			{
				"Revenues from External Customers and Long-Lived Assets [Line Items]": [
					" ",
					" ",
					" "
				]
			}
		],
		"Segment Information and Geogr_6": [
			{
				"Segment Information and Geographic Data - Long-Lived Assets (Details) - USD ($) $ in Millions": [
"Sep. 24, 2022",
"Sep. 25, 2021"
]
},
{
"Revenues from External Customers and Long-Lived Assets [Line Items]": [
" ",
" "
]
},
{
"Long-lived assets": [
42117,
39440
]
}
]
}
]

Revenue Product Segmentation API
Access detailed revenue breakdowns by product line with the Revenue Product Segmentation API. Understand which products drive a company's earnings and get insights into the performance of individual product segments.

Endpoint:

https://financialmodelingprep.com/stable/revenue-product-segmentation?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

period

string

annual,quarter

structure

string

flat

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
[
{
"symbol": "AAPL",
"fiscalYear": 2024,
"period": "FY",
"reportedCurrency": null,
"date": "2024-09-28",
"data": {
"Mac": 29984000000,
"Service": 96169000000,
"Wearables, Home and Accessories": 37005000000,
"iPad": 26694000000,
"iPhone": 201183000000
}
}
]

Revenue Geographic Segments API
Access detailed revenue breakdowns by geographic region with the Revenue Geographic Segments API. Analyze how different regions contribute to a company’s total revenue and identify key markets for growth.

Endpoint:

https://financialmodelingprep.com/stable/revenue-geographic-segmentation?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

period

string

annual,quarter

structure

string

flat

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
[
{
"symbol": "AAPL",
"fiscalYear": 2024,
"period": "FY",
"reportedCurrency": null,
"date": "2024-09-28",
"data": {
"Americas Segment": 167045000000,
"Europe Segment": 101328000000,
"Greater China Segment": 66952000000,
"Japan Segment": 25052000000,
"Rest of Asia Pacific": 30658000000
}
}
]

As Reported Income Statements API
Retrieve income statements as they were reported by the company with the As Reported Income Statements API. Access raw financial data directly from official company filings, including revenue, expenses, and net income.

Endpoint:

https://financialmodelingprep.com/stable/income-statement-as-reported?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
[
{
"symbol": "AAPL",
"fiscalYear": 2024,
"period": "FY",
"reportedCurrency": null,
"date": "2024-09-27",
"data": {
"revenuefromcontractwithcustomerexcludingassessedtax": 391035000000,
"costofgoodsandservicessold": 210352000000,
"grossprofit": 180683000000,
"researchanddevelopmentexpense": 31370000000,
"sellinggeneralandadministrativeexpense": 26097000000,
"operatingexpenses": 57467000000,
"operatingincomeloss": 123216000000,
"nonoperatingincomeexpense": 269000000,
"incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest": 123485000000,
"incometaxexpensebenefit": 29749000000,
"netincomeloss": 93736000000,
"earningspersharebasic": 6.11,
"earningspersharediluted": 6.08,
"weightedaveragenumberofsharesoutstandingbasic": 15343783000,
"weightedaveragenumberofdilutedsharesoutstanding": 15408095000,
"othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax": 395000000,
"othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax": -832000000,
"othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax": 1337000000,
"othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax": -2169000000,
"othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax": 5850000000,
"othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax": -204000000,
"othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax": 6054000000,
"othercomprehensiveincomelossnetoftaxportionattributabletoparent": 4280000000,
"comprehensiveincomenetoftax": 98016000000
}
}
]

As Reported Balance Statements API
Access balance sheets as reported by the company with the As Reported Balance Statements API. View detailed financial data on assets, liabilities, and equity directly from official filings.

Endpoint:

https://financialmodelingprep.com/stable/balance-sheet-statement-as-reported?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
[
{
"symbol": "AAPL",
"fiscalYear": 2024,
"period": "FY",
"reportedCurrency": null,
"date": "2024-09-27",
"data": {
"cashandcashequivalentsatcarryingvalue": 29943000000,
"marketablesecuritiescurrent": 35228000000,
"accountsreceivablenetcurrent": 33410000000,
"nontradereceivablescurrent": 32833000000,
"inventorynet": 7286000000,
"otherassetscurrent": 14287000000,
"assetscurrent": 152987000000,
"marketablesecuritiesnoncurrent": 91479000000,
"propertyplantandequipmentnet": 45680000000,
"otherassetsnoncurrent": 74834000000,
"assetsnoncurrent": 211993000000,
"assets": 364980000000,
"accountspayablecurrent": 68960000000,
"otherliabilitiescurrent": 78304000000,
"contractwithcustomerliabilitycurrent": 8249000000,
"commercialpaper": 10000000000,
"longtermdebtcurrent": 10912000000,
"liabilitiescurrent": 176392000000,
"longtermdebtnoncurrent": 85750000000,
"otherliabilitiesnoncurrent": 45888000000,
"liabilitiesnoncurrent": 131638000000,
"liabilities": 308030000000,
"commonstocksharesoutstanding": 15116786000,
"commonstocksharesissued": 15116786000,
"commonstocksincludingadditionalpaidincapital": 83276000000,
"retainedearningsaccumulateddeficit": -19154000000,
"accumulatedothercomprehensiveincomelossnetoftax": -7172000000,
"stockholdersequity": 56950000000,
"liabilitiesandstockholdersequity": 364980000000,
"commonstockparorstatedvaluepershare": 0.00001,
"commonstocksharesauthorized": 50400000000
}
}
]

As Reported Cashflow Statements API
View cash flow statements as reported by the company with the As Reported Cash Flow Statements API. Analyze a company's cash flows related to operations, investments, and financing directly from official reports.

Endpoint:

https://financialmodelingprep.com/stable/cash-flow-statement-as-reported?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
[
{
"symbol": "AAPL",
"fiscalYear": 2024,
"period": "FY",
"reportedCurrency": null,
"date": "2024-09-27",
"data": {
"cashcashequivalentsrestrictedcashandrestrictedcashequivalents": 29943000000,
"netincomeloss": 93736000000,
"depreciationdepletionandamortization": 11445000000,
"sharebasedcompensation": 11688000000,
"othernoncashincomeexpense": 2266000000,
"increasedecreaseinaccountsreceivable": 3788000000,
"increasedecreaseinotherreceivables": 1356000000,
"increasedecreaseininventories": 1046000000,
"increasedecreaseinotheroperatingassets": 11731000000,
"increasedecreaseinaccountspayable": 6020000000,
"increasedecreaseinotheroperatingliabilities": 15552000000,
"netcashprovidedbyusedinoperatingactivities": 118254000000,
"paymentstoacquireavailableforsalesecuritiesdebt": 48656000000,
"proceedsfrommaturitiesprepaymentsandcallsofavailableforsalesecurities": 51211000000,
"proceedsfromsaleofavailableforsalesecuritiesdebt": 11135000000,
"paymentstoacquirepropertyplantandequipment": 9447000000,
"paymentsforproceedsfromotherinvestingactivities": 1308000000,
"netcashprovidedbyusedininvestingactivities": 2935000000,
"paymentsrelatedtotaxwithholdingforsharebasedcompensation": 5600000000,
"paymentsofdividends": 15234000000,
"paymentsforrepurchaseofcommonstock": 94949000000,
"repaymentsoflongtermdebt": 9958000000,
"proceedsfromrepaymentsofcommercialpaper": 3960000000,
"proceedsfrompaymentsforotherfinancingactivities": -361000000,
"netcashprovidedbyusedinfinancingactivities": -121983000000,
"cashcashequivalentsrestrictedcashandrestrictedcashequivalentsperiodincreasedecreaseincludingexchangerateeffect": -794000000,
"incometaxespaidnet": 26102000000
}
}
]

As Reported Financial Statements API
Retrieve comprehensive financial statements as reported by companies with FMP As Reported Financial Statements API. Access complete data across income, balance sheet, and cash flow statements in their original form for detailed analysis.

Endpoint:

https://financialmodelingprep.com/stable/financial-statement-full-as-reported?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

5

period

string

annual,quarter

(\*) Required | Maximum 1000 records per request | Currency is as Reported in Financials
Response
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
[
{
"symbol": "AAPL",
"fiscalYear": 2024,
"period": "FY",
"reportedCurrency": null,
"date": "2024-09-27",
"data": {
"documenttype": "10-K",
"documentannualreport": "true",
"currentfiscalyearenddate": "--09-28",
"documentperiodenddate": "2024-09-28",
"documenttransitionreport": "false",
"entityfilenumber": "001-36743",
"entityregistrantname": "Apple Inc.",
"entityincorporationstatecountrycode": "CA",
"entitytaxidentificationnumber": "94-2404110",
"entityaddressaddressline1": "One Apple Park Way",
"entityaddresscityortown": "Cupertino",
"entityaddressstateorprovince": "CA",
"entityaddresspostalzipcode": 95014,
"cityareacode": 408,
"localphonenumber": "996-1010",
"security12btitle": "3.600% Notes due 2042",
"tradingsymbol": "AAPL",
"notradingsymbolflag": "true",
"securityexchangename": "NASDAQ",
"entitywellknownseasonedissuer": "Yes",
"entityvoluntaryfilers": "No",
"entitycurrentreportingstatus": "Yes",
"entityinteractivedatacurrent": "Yes",
"entityfilercategory": "Large Accelerated Filer",
"entitysmallbusiness": "false",
"entityemerginggrowthcompany": "false",
"icfrauditorattestationflag": "true",
"documentfinstmterrorcorrectionflag": "false",
"entityshellcompany": "false",
"amendmentflag": "false",
"documentfiscalyearfocus": 2024,
"documentfiscalperiodfocus": "FY",
"entitycentralindexkey": 320193,
"auditorname": "Ernst & Young LLP",
"auditorlocation": "San Jose, California",
"auditorfirmid": 42,
"revenuefromcontractwithcustomerexcludingassessedtax": 391035000000,
"costofgoodsandservicessold": 210352000000,
"grossprofit": 180683000000,
"researchanddevelopmentexpense": 31370000000,
"sellinggeneralandadministrativeexpense": 26097000000,
"operatingexpenses": 57467000000,
"operatingincomeloss": 123216000000,
"nonoperatingincomeexpense": 269000000,
"incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest": 123485000000,
"incometaxexpensebenefit": 29749000000,
"netincomeloss": 93736000000,
"earningspersharebasic": 6.11,
"earningspersharediluted": 6.08,
"weightedaveragenumberofsharesoutstandingbasic": 15343783000,
"weightedaveragenumberofdilutedsharesoutstanding": 15408095000,
"othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax": 395000000,
"othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax": -832000000,
"othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax": 1337000000,
"othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax": -2169000000,
"othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax": 5850000000,
"othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax": -204000000,
"othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax": 6054000000,
"othercomprehensiveincomelossnetoftaxportionattributabletoparent": 4280000000,
"comprehensiveincomenetoftax": 98016000000,
"cashandcashequivalentsatcarryingvalue": 29943000000,
"marketablesecuritiescurrent": 35228000000,
"accountsreceivablenetcurrent": 33410000000,
"nontradereceivablescurrent": 32833000000,
"inventorynet": 7286000000,
"otherassetscurrent": 14287000000,
"assetscurrent": 152987000000,
"marketablesecuritiesnoncurrent": 91479000000,
"propertyplantandequipmentnet": 45680000000,
"otherassetsnoncurrent": 74834000000,
"assetsnoncurrent": 211993000000,
"assets": 364980000000,
"accountspayablecurrent": 68960000000,
"otherliabilitiescurrent": 78304000000,
"contractwithcustomerliabilitycurrent": 8249000000,
"commercialpaper": 10000000000,
"longtermdebtcurrent": 10912000000,
"liabilitiescurrent": 176392000000,
"longtermdebtnoncurrent": 85750000000,
"otherliabilitiesnoncurrent": 45888000000,
"liabilitiesnoncurrent": 131638000000,
"liabilities": 308030000000,
"commonstocksharesoutstanding": 15116786000,
"commonstocksharesissued": 15116786000,
"commonstocksincludingadditionalpaidincapital": 83276000000,
"retainedearningsaccumulateddeficit": -19154000000,
"accumulatedothercomprehensiveincomelossnetoftax": -7172000000,
"stockholdersequity": 56950000000,
"liabilitiesandstockholdersequity": 364980000000,
"commonstockparorstatedvaluepershare": 0.00001,
"commonstocksharesauthorized": 50400000000,
"stockissuedduringperiodvaluenewissues": 1423000000,
"adjustmentsrelatedtotaxwithholdingforsharebasedcompensation": 1612000000,
"adjustmentstoadditionalpaidincapitalsharebasedcompensationrequisiteserviceperiodrecognitionvalue": 12034000000,
"dividends": 15218000000,
"stockrepurchasedandretiredduringperiodvalue": 95000000000,
"commonstockdividendspersharedeclared": 0.98,
"cashcashequivalentsrestrictedcashandrestrictedcashequivalents": 29943000000,
"depreciationdepletionandamortization": 11445000000,
"sharebasedcompensation": 11688000000,
"othernoncashincomeexpense": 2266000000,
"increasedecreaseinaccountsreceivable": 3788000000,
"increasedecreaseinotherreceivables": 1356000000,
"increasedecreaseininventories": 1046000000,
"increasedecreaseinotheroperatingassets": 11731000000,
"increasedecreaseinaccountspayable": 6020000000,
"increasedecreaseinotheroperatingliabilities": 15552000000,
"netcashprovidedbyusedinoperatingactivities": 118254000000,
"paymentstoacquireavailableforsalesecuritiesdebt": 48656000000,
"proceedsfrommaturitiesprepaymentsandcallsofavailableforsalesecurities": 51211000000,
"proceedsfromsaleofavailableforsalesecuritiesdebt": 11135000000,
"paymentstoacquirepropertyplantandequipment": 9447000000,
"paymentsforproceedsfromotherinvestingactivities": 1308000000,
"netcashprovidedbyusedininvestingactivities": 2935000000,
"paymentsrelatedtotaxwithholdingforsharebasedcompensation": 5600000000,
"paymentsofdividends": 15234000000,
"paymentsforrepurchaseofcommonstock": 94949000000,
"repaymentsoflongtermdebt": 9958000000,
"proceedsfromrepaymentsofcommercialpaper": 3960000000,
"proceedsfrompaymentsforotherfinancingactivities": -361000000,
"netcashprovidedbyusedinfinancingactivities": -121983000000,
"cashcashequivalentsrestrictedcashandrestrictedcashequivalentsperiodincreasedecreaseincludingexchangerateeffect": -794000000,
"incometaxespaidnet": 26102000000,
"commercialpapercashflowsummarytabletextblock": "The following table provides a summary of cash flows associated with the issuance and maturities of commercial paper for 2024, 2023 and 2022 (in millions):",
"contractwithcustomerliabilityrevenuerecognized": 7700000000,
"contractwithcustomerliability": 12800000000,
"revenueremainingperformanceobligationpercentage": 0.02,
"revenueremainingperformanceobligationexpectedtimingofsatisfactionperiod1": "P1Y",
"incrementalcommonsharesattributabletosharebasedpaymentarrangements": 64312000,
"cash": 27199000000,
"equitysecuritiesfvnicost": 1293000000,
"equitysecuritiesfvniaccumulatedgrossunrealizedgainbeforetax": 105000000,
"equitysecuritiesfvniaccumulatedgrossunrealizedlossbeforetax": 3000000,
"equitysecuritiesfvnicurrentandnoncurrent": 1395000000,
"availableforsaledebtsecuritiesamortizedcostbasis": 132108000000,
"availableforsaledebtsecuritiesaccumulatedgrossunrealizedgainbeforetax": 583000000,
"availableforsaledebtsecuritiesaccumulatedgrossunrealizedlossbeforetax": 4635000000,
"availableforsalesecuritiesdebtsecurities": 128056000000,
"cashcashequivalentsandmarketablesecuritiescost": 160600000000,
"cashequivalentsandmarketablesecuritiesaccumulatedgrossunrealizedgainbeforetax": 688000000,
"cashequivalentsandmarketablesecuritiesaccumulatedgrossunrealizedlossbeforetax": 4638000000,
"cashcashequivalentsandmarketablesecurities": 156650000000,
"restrictedcashandcashequivalents": 2600000000,
"debtsecuritiesavailableforsalerestricted": 13200000000,
"debtsecuritiesavailableforsalematurityallocatedandsinglematuritydaterollingafteronethroughfiveyearspercentage": 0.14,
"debtsecuritiesavailableforsalematurityallocatedandsinglematuritydaterollingafterfivethroughtenyearspercentage": 0.09,
"debtsecuritiesavailableforsalematurityallocatedandsinglematuritydaterollingaftertenyearspercentage": 0.77,
"maximumlengthoftimeforeigncurrencycashflowhedge": "P18Y",
"concentrationriskpercentage1": 0.23,
"numberofsignificantvendors": 2,
"derivativenotionalamount": 91493000000,
"hedgedassetstatementoffinancialpositionextensibleenumeration": "http://fasb.org/us-gaap/2024#MarketableSecuritiesCurrent http://fasb.org/us-gaap/2024#MarketableSecuritiesNoncurrent",
"hedgedliabilityfairvaluehedge": 13505000000,
"hedgedliabilitystatementoffinancialpositionextensibleenumeration": "http://fasb.org/us-gaap/2024#LongTermDebtCurrent http://fasb.org/us-gaap/2024#LongTermDebtNoncurrent",
"propertyplantandequipmentgross": 119128000000,
"accumulateddepreciationdepletionandamortizationpropertyplantandequipment": 73448000000,
"depreciation": 8200000000,
"deferredincometaxassetsnet": 19499000000,
"otherassetsmiscellaneousnoncurrent": 55335000000,
"accruedincometaxescurrent": 1200000000,
"otheraccruedliabilitiescurrent": 51703000000,
"accruedincometaxesnoncurrent": 9254000000,
"otheraccruedliabilitiesnoncurrent": 36634000000,
"totalrestrictedcashcashequivalentsandavailableforsaledebtsecurities": 15800000000,
"currentforeigntaxexpensebenefit": 25483000000,
"currentfederaltaxexpensebenefit": 5571000000,
"unrecognizedtaxbenefitsdecreasesresultingfromsettlementswithtaxingauthorities": 1070000000,
"incomelossfromcontinuingoperationsbeforeincometaxesforeign": 77300000000,
"effectiveincometaxratereconciliationatfederalstatutoryincometaxrate": 0.21,
"deferredtaxassetstaxcreditcarryforwardsforeign": 5100000000,
"deferredtaxassetstaxcreditcarryforwardsresearch": 3600000000,
"unrecognizedtaxbenefits": 22038000000,
"unrecognizedtaxbenefitsthatwouldimpacteffectivetaxrate": 10800000000,
"decreaseinunrecognizedtaxbenefitsisreasonablypossible": 13000000000,
"deferredfederalincometaxexpensebenefit": -3080000000,
"federalincometaxexpensebenefitcontinuingoperations": 2491000000,
"currentstateandlocaltaxexpensebenefit": 1726000000,
"deferredstateandlocalincometaxexpensebenefit": -298000000,
"stateandlocalincometaxexpensebenefitcontinuingoperations": 1428000000,
"deferredforeignincometaxexpensebenefit": 347000000,
"foreignincometaxexpensebenefitcontinuingoperations": 25830000000,
"incometaxreconciliationincometaxexpensebenefitatfederalstatutoryincometaxrate": 25932000000,
"incometaxreconciliationstateandlocalincometaxes": 1162000000,
"effectiveincometaxratereconciliationimpactofthestateaiddecisionamount": 10246000000,
"incometaxreconciliationforeignincometaxratedifferential": -5311000000,
"incometaxreconciliationtaxcreditsresearch": 1397000000,
"effectiveincometaxratereconciliationsharebasedcompensationexcesstaxbenefitamount": -893000000,
"incometaxreconciliationotheradjustments": 10000000,
"effectiveincometaxratecontinuingoperations": 0.241,
"deferredtaxassetscapitalizedresearchanddevelopment": 10739000000,
"deferredtaxassetstaxcreditcarryforwards": 8856000000,
"deferredtaxassetstaxdeferredexpensereservesandaccruals": 6114000000,
"deferredtaxassetsdeferredincome": 3413000000,
"deferredtaxassetsleaseliabilities": 2410000000,
"deferredtaxassetsothercomprehensiveloss": 1173000000,
"deferredtaxassetsother": 2168000000,
"deferredtaxassetsgross": 34873000000,
"deferredtaxassetsvaluationallowance": 8866000000,
"deferredtaxassetsnet": 26007000000,
"deferredtaxliabilitiespropertyplantandequipment": 2551000000,
"deferredtaxliabilitiesleasingarrangements": 2125000000,
"deferredtaxliabilitiesminimumtaxonforeignearnings": 1674000000,
"deferredtaxliabilitiesother": 455000000,
"deferredincometaxliabilities": 6805000000,
"deferredtaxassetsliabilitiesnet": 19202000000,
"unrecognizedtaxbenefitsincreasesresultingfrompriorperiodtaxpositions": 1727000000,
"unrecognizedtaxbenefitsdecreasesresultingfrompriorperiodtaxpositions": 386000000,
"unrecognizedtaxbenefitsincreasesresultingfromcurrentperiodtaxpositions": 2542000000,
"unrecognizedtaxbenefitsreductionsresultingfromlapseofapplicablestatuteoflimitations": 229000000,
"lesseeoperatingandfinanceleasetermofcontract": "P10Y",
"operatingleasecost": 2000000000,
"variableleasecost": 13800000000,
"operatingleasepayments": 1900000000,
"rightofuseassetsobtainedinexchangeforoperatingandfinanceleaseliabilities": 1000000000,
"operatingandfinanceleaseweightedaverageremainingleaseterm": "P10Y3M18D",
"operatingandfinanceleaseweightedaveragediscountratepercent": 0.031,
"unrecordedunconditionalpurchaseobligationbalancesheetamount": 11226000000,
"lesseeoperatingandfinanceleaseleasenotyetcommencedtermofcontract": "P21Y",
"operatingleaserightofuseasset": 10234000000,
"operatingleaserightofuseassetstatementoffinancialpositionextensiblelist": "http://fasb.org/us-gaap/2024#OtherAssetsNoncurrent",
"financeleaserightofuseasset": 1069000000,
"financeleaserightofuseassetstatementoffinancialpositionextensiblelist": "http://fasb.org/us-gaap/2024#PropertyPlantAndEquipmentNet",
"operatingandfinanceleaserightofuseasset": 11303000000,
"operatingleaseliabilitycurrent": 1488000000,
"operatingleaseliabilitycurrentstatementoffinancialpositionextensiblelist": "http://fasb.org/us-gaap/2024#OtherLiabilitiesCurrent",
"operatingleaseliabilitynoncurrent": 10046000000,
"operatingleaseliabilitynoncurrentstatementoffinancialpositionextensiblelist": "http://fasb.org/us-gaap/2024#OtherLiabilitiesNoncurrent",
"financeleaseliabilitycurrent": 144000000,
"financeleaseliabilitycurrentstatementoffinancialpositionextensiblelist": "http://fasb.org/us-gaap/2024#OtherLiabilitiesCurrent",
"financeleaseliabilitynoncurrent": 752000000,
"financeleaseliabilitynoncurrentstatementoffinancialpositionextensiblelist": "http://fasb.org/us-gaap/2024#OtherLiabilitiesNoncurrent",
"operatingandfinanceleaseliability": 12430000000,
"lesseeoperatingleaseliabilitypaymentsduenexttwelvemonths": 1820000000,
"lesseeoperatingleaseliabilitypaymentsdueyeartwo": 1914000000,
"lesseeoperatingleaseliabilitypaymentsdueyearthree": 1674000000,
"lesseeoperatingleaseliabilitypaymentsdueyearfour": 1360000000,
"lesseeoperatingleaseliabilitypaymentsdueyearfive": 1187000000,
"lesseeoperatingleaseliabilitypaymentsdueafteryearfive": 5563000000,
"lesseeoperatingleaseliabilitypaymentsdue": 13518000000,
"lesseeoperatingleaseliabilityundiscountedexcessamount": 1984000000,
"operatingleaseliability": 11534000000,
"financeleaseliabilitypaymentsduenexttwelvemonths": 171000000,
"financeleaseliabilitypaymentsdueyeartwo": 131000000,
"financeleaseliabilitypaymentsdueyearthree": 59000000,
"financeleaseliabilitypaymentsdueyearfour": 38000000,
"financeleaseliabilitypaymentsdueyearfive": 36000000,
"financeleaseliabilitypaymentsdueafteryearfive": 837000000,
"financeleaseliabilitypaymentsdue": 1272000000,
"financeleaseliabilityundiscountedexcessamount": 376000000,
"financeleaseliability": 896000000,
"lesseeoperatingandfinanceleaseliabilitytobepaidyearone": 1991000000,
"lesseeoperatingandfinanceleaseliabilitytobepaidyeartwo": 2045000000,
"lesseeoperatingandfinanceleaseliabilitytobepaidyearthree": 1733000000,
"lesseeoperatingandfinanceleaseliabilitytobepaidyearfour": 1398000000,
"lesseeoperatingandfinanceleaseliabilitytobepaidyearfive": 1223000000,
"lesseeoperatingandfinanceleaseliabilitytobepaidafteryearfive": 6400000000,
"lesseeoperatingandfinanceleaseliabilitytobepaid": 14790000000,
"lesseeoperatingandfinanceleaseliabilityundiscountedexcessamount": 2360000000,
"debtinstrumentterm": "P9M",
"shorttermdebtweightedaverageinterestrate": 0.05,
"longtermdebtfairvalue": 88400000000,
"proceedsfromrepaymentsofshorttermdebtmaturinginthreemonthsorless": 3960000000,
"debtinstrumentcarryingamount": 97341000000,
"debtinstrumentunamortizeddiscountpremiumanddebtissuancecostsnet": 321000000,
"hedgeaccountingadjustmentsrelatedtolongtermdebt": 358000000,
"longtermdebt": 96662000000,
"debtinstrumentmaturityyearrangestart": 2024,
"debtinstrumentmaturityyearrangeend": 2062,
"debtinstrumentinterestratestatedpercentage": 0.0485,
"debtinstrumentinterestrateeffectivepercentage": 0.0665,
"longtermdebtmaturitiesrepaymentsofprincipalinnexttwelvemonths": 10930000000,
"longtermdebtmaturitiesrepaymentsofprincipalinyeartwo": 12342000000,
"longtermdebtmaturitiesrepaymentsofprincipalinyearthree": 9936000000,
"longtermdebtmaturitiesrepaymentsofprincipalinyearfour": 7800000000,
"longtermdebtmaturitiesrepaymentsofprincipalinyearfive": 5153000000,
"longtermdebtmaturitiesrepaymentsofprincipalafteryearfive": 51180000000,
"stockrepurchasedandretiredduringperiodshares": 499372000,
"stockissuedduringperiodsharessharebasedpaymentarrangementnetofshareswithheldfortaxes": 66097000,
"sharebasedcompensationarrangementbysharebasedpaymentawardawardvestingperiod1": "P4Y",
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsnumberofsharesofcommonstockissuedperunituponvesting": 1,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsvestedinperiodtotalfairvalue": 15800000000,
"sharespaidfortaxwithholdingforsharebasedcompensation": 31000000,
"employeeservicesharebasedcompensationnonvestedawardstotalcompensationcostnotyetrecognized": 19400000000,
"employeeservicesharebasedcompensationnonvestedawardstotalcompensationcostnotyetrecognizedperiodforrecognition1": "P2Y4M24D",
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsnonvestednumber": 163326000,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsgrantsinperiod": 80456000,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsvestedinperiod": 87633000,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsforfeitedinperiod": 9744000,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsnonvestedweightedaveragegrantdatefairvalue": 158.73,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsgrantsinperiodweightedaveragegrantdatefairvalue": 173.78,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsvestedinperiodweightedaveragegrantdatefairvalue": 127.59,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsforfeituresweightedaveragegrantdatefairvalue": 140.8,
"sharebasedcompensationarrangementbysharebasedpaymentawardequityinstrumentsotherthanoptionsaggregateintrinsicvaluenonvested": 37204000000,
"allocatedsharebasedcompensationexpense": 11688000000,
"employeeservicesharebasedcompensationtaxbenefitfromcompensationexpense": 3350000000,
"unrecordedunconditionalpurchaseobligationbalanceonfirstanniversary": 3206000000,
"unrecordedunconditionalpurchaseobligationbalanceonsecondanniversary": 2440000000,
"unrecordedunconditionalpurchaseobligationbalanceonthirdanniversary": 1156000000,
"unrecordedunconditionalpurchaseobligationbalanceonfourthanniversary": 3121000000,
"unrecordedunconditionalpurchaseobligationbalanceonfifthanniversary": 633000000,
"unrecordedunconditionalpurchaseobligationdueafterfiveyears": 670000000,
"othergeneralandadministrativeexpense": 7458000000,
"noncurrentassets": 45680000000,
"trdarrsecuritiesaggavailamt": 100000,
"insidertrdpoliciesprocadoptedflag": "true"
}
}
]
