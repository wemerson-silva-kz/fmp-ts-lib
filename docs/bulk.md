Bulk
Company Profile Bulk API
Globe Flag
The FMP Profile Bulk API allows users to retrieve comprehensive company profile data in bulk. Access essential information, such as company details, stock price, market cap, sector, industry, and more for multiple companies in a single request.

Endpoint:

https://financialmodelingprep.com/stable/profile-bulk?part=0

Parameters

Query Parameter

Type

Example

part\*

string

0

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
[
{
"symbol": "SLF",
"price": "61.83",
"marketCap": "34958743830",
"beta": "0.878",
"lastDividend": "2.41717",
"range": "46.41-66.81",
"change": "-0.34",
"changePercentage": "-0.54689",
"volume": "225310",
"averageVolume": "631001",
"companyName": "Sun Life Financial Inc.",
"currency": "USD",
"cik": "0001097362",
"isin": "CA8667961053",
"cusip": "866796105",
"exchangeFullName": "New York Stock Exchange",
"exchange": "NYSE",
"industry": "Insurance - Diversified",
"website": "https://www.sunlife.com",
"description": "Sun Life Financial Inc.",
"ceo": "a financial services company",
"sector": "provides insurance",
"country": "wealth",
"fullTimeEmployees": "and asset management solutions to individuals and corporate clients worldwide. It offers term and permanent life",
"phone": "as well as personal health",
"address": "dental",
"city": "critical illness",
"state": "long-term care",
"zip": "and disability insurance products. The company also provides reinsurance products; investment counselling and portfolio management services; mutual funds and segregated funds; trust and banking services; real estate property brokerage and appraisal services; and merchant banking services. It distributes its products through direct sales agents",
"image": "managing and independent general agents",
"ipoDate": "financial intermediaries",
"defaultImage": "broker-dealers",
"isEtf": "banks",
"isActivelyTrading": "pension and benefits consultants",
"isAdr": "and other third-party marketing organizations. The company was founded in 1871 and is headquartered in Toronto",
"isFund": "Canada."
}
]

Stock Rating Bulk API
Globe Flag
The FMP Rating Bulk API provides users with comprehensive rating data for multiple stocks in a single request. Retrieve key financial ratings and recommendations such as overall ratings, DCF recommendations, and more for multiple companies at once.

Endpoint:

https://financialmodelingprep.com/stable/rating-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
[
{
"symbol": "000001.SZ",
"date": "2025-07-09",
"rating": "B+",
"discountedCashFlowScore": "5",
"returnOnEquityScore": "3",
"returnOnAssetsScore": "2",
"debtToEquityScore": "1",
"priceToEarningsScore": "4",
"priceToBookScore": "4"
}
]

DCF Valuations Bulk API
Globe Flag
The FMP DCF Bulk API enables users to quickly retrieve discounted cash flow (DCF) valuations for multiple symbols in one request. Access the implied price movement and percentage differences for all listed companies.

Endpoint:

https://financialmodelingprep.com/stable/dcf-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

1
2
3
4
5
6
7
8
[
{
"symbol": "000002.SZ",
"date": "2025-07-09",
"dcf": "179.6654688379575",
"Stock Price": "6.54"
}
]

Financial Scores Bulk API
Globe Flag
The FMP Scores Bulk API allows users to quickly retrieve a wide range of key financial scores and metrics for multiple symbols. These scores provide valuable insights into company performance, financial health, and operational efficiency.

Endpoint:

https://financialmodelingprep.com/stable/scores-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "000001.SZ",
"reportedCurrency": "CNY",
"altmanZScore": "0.29153682196643543",
"piotroskiScore": "5",
"workingCapital": "746131000000",
"totalAssets": "5777858000000",
"retainedEarnings": "255621000000",
"ebit": "32590000000",
"marketCap": "236751980000",
"totalLiabilities": "5271746000000",
"revenue": "167996000000"
}
]

Price Target Summary Bulk API
Globe Flag
The Price Target Summary Bulk API provides a comprehensive overview of price targets for all listed symbols over multiple timeframes. With this API, users can quickly retrieve price target data, helping investors and analysts compare current prices to projected targets across different periods.

Endpoint:

https://financialmodelingprep.com/stable/price-target-summary-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "A",
"lastMonthCount": "0",
"lastMonthAvgPriceTarget": "0",
"lastQuarterCount": "1",
"lastQuarterAvgPriceTarget": "116",
"lastYearCount": "6",
"lastYearAvgPriceTarget": "142.17",
"allTimeCount": "18",
"allTimeAvgPriceTarget": "146.61",
"publishers": "[\"\"TheFly\""
}
]

ETF Holder Bulk API
Globe Flag
The ETF Holder Bulk API allows users to quickly retrieve detailed information about the assets and shares held by Exchange-Traded Funds (ETFs). This API provides insights into the weight each asset carries within the ETF, along with key financial information related to these holdings.

Endpoint:

https://financialmodelingprep.com/stable/etf-holder-bulk?part=1

Parameters

Query Parameter

Type

Example

part\*

string

1

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
[
{
"symbol": "EXCH.AS",
"name": "SAMSUNG ELECTRO MECHANICS LTD",
"sharesNumber": "15514",
"asset": "009150.KS",
"weightPercentage": "0.09611",
"cusip": "",
"isin": "KR7009150004",
"marketValue": "1553142.49",
"lastUpdated\"": "2024-09-06\""
}
]

Upgrades Downgrades Consensus Bulk API
Globe Flag
The Upgrades Downgrades Consensus Bulk API provides a comprehensive view of analyst ratings across all symbols. Retrieve bulk data for analyst upgrades, downgrades, and consensus recommendations to gain insights into the market's outlook on individual stocks.

Endpoint:

https://financialmodelingprep.com/stable/upgrades-downgrades-consensus-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
[
{
"symbol": "",
"strongBuy": "0",
"buy": "1",
"hold": "1",
"sell": "0",
"strongSell": "0",
"consensus": "Buy"
}
]

Key Metrics TTM Bulk API
Globe Flag
The Key Metrics TTM Bulk API allows users to retrieve trailing twelve months (TTM) data for all companies available in the database. The API provides critical financial ratios and metrics based on each company’s latest financial report, offering insights into company performance and financial health.

Endpoint:

https://financialmodelingprep.com/stable/key-metrics-ttm-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "000001.SZ",
"marketCap": "249171756000",
"enterpriseValueTTM": "-496959244000",
"evToSalesTTM": "-2.95816117050406",
"evToOperatingCashFlowTTM": "-2.9831814247210167",
"evToFreeCashFlowTTM": "-3.028355803098073",
"evToEBITDATTM": "-14.656106051669223",
"netDebtToEBITDATTM": "-22.004571192638906",
"currentRatioTTM": "0",
"incomeQualityTTM": "15.217593861331872",
"grahamNumberTTM": "31.017865999534138",
"grahamNetNetTTM": "-199.05514330278228",
"taxBurdenTTM": "0.8225101702576465",
"interestBurdenTTM": "1.4030970878917606",
"workingCapitalTTM": "746131000000",
"investedCapitalTTM": "772543000000",
"returnOnAssetsTTM": "0.007558510437605078",
"operatingReturnOnAssetsTTM": "0.013555578495362656",
"returnOnTangibleAssetsTTM": "0.007576346366296015",
"returnOnEquityTTM": "0.09082717681735725",
"returnOnInvestedCapitalTTM": "0.011141314993384131",
"returnOnCapitalEmployedTTM": "0.013545504233575834",
"earningsYieldTTM": "0.14960077934639543",
"freeCashFlowYieldTTM": "0.6585898925077207",
"capexToOperatingCashFlowTTM": "0.014917130388325619",
"capexToDepreciationTTM": "1.855862584017924",
"capexToRevenueTTM": "0.014792018857591847",
"salesGeneralAndAdministrativeToRevenueTTM": "0.10163337222314817",
"researchAndDevelopementToRevenueTTM": "0",
"stockBasedCompensationToRevenueTTM": "0",
"intangiblesToTotalAssetsTTM": "0.002354159621091415",
"averageReceivablesTTM": "0",
"averagePayablesTTM": "0",
"averageInventoryTTM": "0",
"daysOfSalesOutstandingTTM": "0",
"daysOfPayablesOutstandingTTM": "0",
"daysOfInventoryOutstandingTTM": "0",
"operatingCycleTTM": "0",
"cashConversionCycleTTM": "0",
"freeCashFlowToEquityTTM": "910233000000",
"freeCashFlowToFirmTTM": "-35237570137.11014",
"tangibleAssetValueTTM": "492510000000",
"netCurrentAssetValueTTM": "-4525615000000"
}
]

Ratios TTM Bulk API
Globe Flag
The Ratios TTM Bulk API offers an efficient way to retrieve trailing twelve months (TTM) financial ratios for stocks. It provides users with detailed insights into a company’s profitability, liquidity, efficiency, leverage, and valuation ratios, all based on the most recent financial report.

Endpoint:

https://financialmodelingprep.com/stable/ratios-ttm-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "000001.SZ",
"grossProfitMarginTTM": "1.1622776732779352",
"ebitMarginTTM": "0.22525536322293388",
"ebitdaMarginTTM": "0.2018381390033096",
"operatingProfitMarginTTM": "0.4658682349579752",
"pretaxProfitMarginTTM": "0.3160551441700993",
"continuousOperationsProfitMarginTTM": "0.25995857044215337",
"netProfitMarginTTM": "0.25995857044215337",
"bottomLineProfitMarginTTM": "0.25995857044215337",
"receivablesTurnoverTTM": "0",
"payablesTurnoverTTM": "0",
"inventoryTurnoverTTM": "0",
"fixedAssetTurnoverTTM": "13.114441842310695",
"assetTurnoverTTM": "0.029075827062555015",
"currentRatioTTM": "0",
"quickRatioTTM": "0",
"solvencyRatioTTM": "0.008534174446189174",
"cashRatioTTM": "0",
"priceToEarningsRatioTTM": "6.68445715569793",
"priceToEarningsGrowthRatioTTM": "-3.6096068640768793",
"forwardPriceToEarningsGrowthRatioTTM": "2.4481492401413427",
"priceToBookRatioTTM": "0.576796465809228",
"priceToSalesRatioTTM": "1.483200528584014",
"priceToFreeCashFlowRatioTTM": "1.518395607609901",
"priceToOperatingCashFlowRatioTTM": "1.7523793147342828",
"debtToAssetsRatioTTM": "0",
"debtToEquityRatioTTM": "0",
"debtToCapitalRatioTTM": "0",
"longTermDebtToCapitalRatioTTM": "0",
"financialLeverageRatioTTM": "11.416164801466868",
"workingCapitalTurnoverRatioTTM": "0.23544250931631752",
"operatingCashFlowRatioTTM": "0",
"operatingCashFlowSalesRatioTTM": "0.991612895545132",
"freeCashFlowOperatingCashFlowRatioTTM": "0.9850828696116743",
"debtServiceCoverageRatioTTM": "0.24758322210087771",
"interestCoverageRatioTTM": "0.7914088096104842",
"shortTermOperatingCashFlowCoverageRatioTTM": "0",
"operatingCashFlowCoverageRatioTTM": "0",
"capitalExpenditureCoverageRatioTTM": "67.03702213279678",
"dividendPaidAndCapexCoverageRatioTTM": "6.192364879934577",
"dividendPayoutRatioTTM": "0.5590996519509067",
"dividendYieldTTM": "0.10335",
"enterpriseValueTTM": "-496959244000",
"revenuePerShareTTM": "7.389154370023568",
"netIncomePerShareTTM": "1.9208740068077172",
"interestDebtPerShareTTM": "4.349676503966586",
"cashPerShareTTM": "32.81790720767194",
"bookValuePerShareTTM": "22.260885357516656",
"tangibleBookValuePerShareTTM": "21.662613507347245",
"shareholdersEquityPerShareTTM": "22.260885357516656",
"operatingCashFlowPerShareTTM": "7.327180760489036",
"capexPerShareTTM": "0.10930051078304583",
"freeCashFlowPerShareTTM": "7.21788024970599",
"netIncomePerEBTTTM": "0.8225101702576465",
"ebtPerEbitTTM": "0.6784217520188082",
"priceToFairValueTTM": "0.576796465809228",
"debtToMarketCapTTM": "0",
"effectiveTaxRateTTM": "0.17748982974235347",
"enterpriseValueMultipleTTM": "-14.656106051669223",
"dividendPerShareTTM": "1.327"
}
]

Stock Peers Bulk API
Globe Flag
The Stock Peers Bulk API allows you to quickly retrieve a comprehensive list of peer companies for all stocks in the database. By accessing this data, you can easily compare a stock’s performance with its closest competitors or similar companies within the same industry or sector.

Endpoint:

https://financialmodelingprep.com/stable/peers-bulk

Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

1
2
3
4
5
6
[
{
"symbol": "000001.SZ",
"peers": "600036.SS"
}
]

Earnings Surprises Bulk API
Globe Flag
The Earnings Surprises Bulk API allows users to retrieve bulk data on annual earnings surprises, enabling quick analysis of which companies have beaten, missed, or met their earnings estimates. This API provides actual versus estimated earnings per share (EPS) for multiple companies at once, offering valuable insights for investors and analysts.

Endpoint:

https://financialmodelingprep.com/stable/earnings-surprises-bulk?year=2025

Parameters

Query Parameter

Type

Example

year\*

string

2025

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "AMKYF",
"date": "2025-07-09",
"epsActual": "0.3631",
"epsEstimated": "0.3615",
"lastUpdated": "2025-07-09"
}
]

Income Statement Bulk API
Globe Flag
The Bulk Income Statement API allows users to retrieve detailed income statement data in bulk. This API is designed for large-scale data analysis, providing comprehensive insights into a company's financial performance, including revenue, gross profit, expenses, and net income.

Endpoint:

https://financialmodelingprep.com/stable/income-statement-bulk?year=2025&period=Q1

Parameters

Query Parameter

Type

Example

year\*

string

2025

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"date": "2025-03-31",
"symbol": "000001.SZ",
"reportedCurrency": "CNY",
"cik": "0000000000",
"filingDate": "2025-03-31",
"acceptedDate": "2025-03-31 00:00:00",
"fiscalYear": "2025",
"period": "Q1",
"revenue": "33644000000",
"costOfRevenue": "0",
"grossProfit": "33644000000",
"researchAndDevelopmentExpenses": "0",
"generalAndAdministrativeExpenses": "9055000000",
"sellingAndMarketingExpenses": "0",
"sellingGeneralAndAdministrativeExpenses": "9055000000",
"otherExpenses": "314000000",
"operatingExpenses": "9369000000",
"costAndExpenses": "9369000000",
"netInterestIncome": "22788000000",
"interestIncome": "44938000000",
"interestExpense": "22150000000",
"depreciationAndAmortization": "0",
"ebitda": "16802000000",
"ebit": "0",
"nonOperatingIncomeExcludingInterest": "24275000000",
"operatingIncome": "24275000000",
"totalOtherIncomeExpensesNet": "-7392000000",
"incomeBeforeTax": "16883000000",
"incomeTaxExpense": "2787000000",
"netIncomeFromContinuingOperations": "14096000000",
"netIncomeFromDiscontinuedOperations": "0",
"otherAdjustmentsToNetIncome": "0",
"netIncome": "14096000000",
"netIncomeDeductions": "0",
"bottomLineNetIncome": "14096000000",
"eps": "0.62",
"epsDiluted": "0.62",
"weightedAverageShsOut": "22735483871",
"weightedAverageShsOutDil": "22735483871"
}
]

Income Statement Growth Bulk API
Globe Flag
The Bulk Income Statement Growth API provides access to growth data for income statements across multiple companies. Track and analyze growth trends over time for key financial metrics such as revenue, net income, and operating income, enabling a better understanding of corporate performance trends.

Endpoint:

https://financialmodelingprep.com/stable/income-statement-growth-bulk?year=2025&period=Q1

Parameters

Query Parameter

Type

Example

year\*

string

2025

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "000001.SZ",
"date": "2025-03-31",
"fiscalYear": "2025",
"period": "Q1",
"reportedCurrency": "CNY",
"growthRevenue": "-0.04159070191431176",
"growthCostOfRevenue": "0",
"growthGrossProfit": "-0.04159070191431176",
"growthGrossProfitRatio": "0",
"growthResearchAndDevelopmentExpenses": "0",
"growthGeneralAndAdministrativeExpenses": "1.7466809598416757",
"growthSellingAndMarketingExpenses": "0",
"growthOtherExpenses": "-0.9860376183912135",
"growthOperatingExpenses": "-0.095830920671685",
"growthCostAndExpenses": "-0.095830920671685",
"growthInterestIncome": "-0.003105727849505302",
"growthInterestExpense": "-0.08421879522057303",
"growthDepreciationAndAmortization": "0",
"growthEBITDA": "0",
"growthOperatingIncome": "-0.018874787810201278",
"growthIncomeBeforeTax": "1.4139262224764084",
"growthIncomeTaxExpense": "0.2582392776523702",
"growthNetIncome": "1.9495710399665203",
"growthEPS": "1.6956521739130435",
"growthEPSDiluted": "1.6956521739130435",
"growthWeightedAverageShsOut": "0.09825852256371011",
"growthWeightedAverageShsOutDil": "0.09825852256371011",
"growthEBIT": "1",
"growthNonOperatingIncomeExcludingInterest": "-0.5659209985158163",
"growthNetInterestIncome": "0.09080465272126753",
"growthTotalOtherIncomeExpensesNet": "0.5835023664638269",
"growthNetIncomeFromContinuingOperations": "1.9495710399665203",
"growthOtherAdjustmentsToNetIncome": "0",
"growthNetIncomeDeductions": "0"
}
]

Balance Sheet Statement Bulk API
Globe Flag
The Bulk Balance Sheet Statement API provides comprehensive access to balance sheet data across multiple companies. It enables users to analyze financial positions by retrieving key figures such as total assets, liabilities, and equity. Ideal for comparing the financial health and stability of different companies on a large scale.

Endpoint:

https://financialmodelingprep.com/stable/balance-sheet-statement-bulk?year=2025&period=Q1

Parameters

Query Parameter

Type

Example

year\*

string

2025

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
[
{
"date": "2025-03-31",
"symbol": "MTLRP.ME",
"reportedCurrency": "RUB",
"cik": "0000000000",
"filingDate": "2025-05-31",
"acceptedDate": "2025-03-31 07:00:00",
"fiscalYear": "2025",
"period": "Q1",
"cashAndCashEquivalents": "1985000",
"shortTermInvestments": "0",
"cashAndShortTermInvestments": "1985000",
"netReceivables": "9666577000",
"accountsReceivables": "9666577000",
"otherReceivables": "0",
"inventory": "4520000",
"prepaids": "0",
"otherCurrentAssets": "27293000",
"totalCurrentAssets": "9700830000",
"propertyPlantEquipmentNet": "194000",
"goodwill": "0",
"intangibleAssets": "5665000",
"goodwillAndIntangibleAssets": "5665000",
"longTermInvestments": "237373355000",
"taxAssets": "791813000",
"otherNonCurrentAssets": "0",
"totalNonCurrentAssets": "238171027000",
"otherAssets": "0",
"totalAssets": "247871857000",
"totalPayables": "3861497000",
"accountPayables": "3861497000",
"otherPayables": "0",
"accruedExpenses": "0",
"shortTermDebt": "4842848000",
"capitalLeaseObligationsCurrent": "0",
"taxPayables": "2484576000",
"deferredRevenue": "0",
"otherCurrentLiabilities": "146647000",
"totalCurrentLiabilities": "8851455000",
"longTermDebt": "178923999000",
"capitalLeaseObligationsNonCurrent": "0",
"deferredRevenueNonCurrent": "0",
"deferredTaxLiabilitiesNonCurrent": "737391000",
"otherNonCurrentLiabilities": "52574304000",
"totalNonCurrentLiabilities": "232235780000",
"otherLiabilities": "0",
"capitalLeaseObligations": "0",
"totalLiabilities": "244087635000",
"treasuryStock": "0",
"preferredStock": "0",
"commonStock": "5550277000",
"retainedEarnings": "-5066509000",
"additionalPaidInCapital": "6023340000",
"accumulatedOtherComprehensiveIncomeLoss": "0",
"otherTotalStockholdersEquity": "0",
"totalStockholdersEquity": "6784622000",
"totalEquity": "6784622000",
"minorityInterest": "0",
"totalLiabilitiesAndTotalEquity": "247871857000",
"totalInvestments": "237373355000",
"totalDebt": "183766847000",
"netDebt": "183764862000"
}
]

Balance Sheet Statement Growth Bulk API
Globe Flag
The Balance Sheet Growth Bulk API allows users to retrieve growth data across multiple companies’ balance sheets, enabling detailed analysis of how financial positions have changed over time.

Endpoint:

https://financialmodelingprep.com/stable/balance-sheet-statement-growth-bulk?year=2025&period=Q1

Parameters

Query Parameter

Type

Example

year\*

string

2025

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "000001.SZ",
"date": "2025-03-31",
"fiscalYear": "2025",
"period": "Q1",
"reportedCurrency": "CNY",
"growthCashAndCashEquivalents": "0.09574482145872953",
"growthShortTermInvestments": "0",
"growthCashAndShortTermInvestments": "0.09574482145872953",
"growthNetReceivables": "0",
"growthInventory": "0",
"growthOtherCurrentAssets": "0",
"growthTotalCurrentAssets": "0.09574482145872953",
"growthPropertyPlantEquipmentNet": "-0.06373337231398918",
"growthGoodwill": "0",
"growthIntangibleAssets": "-0.03270278935556268",
"growthGoodwillAndIntangibleAssets": "-0.01477618426770969",
"growthLongTermInvestments": "-0.0774117797082201",
"growthTaxAssets": "0",
"growthOtherNonCurrentAssets": "0.07678934705504345",
"growthTotalNonCurrentAssets": "-0.01112505367669385",
"growthOtherAssets": "0.001488576544346165",
"growthTotalAssets": "0.001488576544346165",
"growthAccountPayables": "0",
"growthShortTermDebt": "0",
"growthTaxPayables": "-0.0279424216765453",
"growthDeferredRevenue": "0",
"growthOtherCurrentLiabilities": "0.12022416350749959",
"growthTotalCurrentLiabilities": "0",
"growthLongTermDebt": "0",
"growthDeferredRevenueNonCurrent": "0",
"growthDeferredTaxLiabilitiesNonCurrent": "0",
"growthOtherNonCurrentLiabilities": "0",
"growthTotalNonCurrentLiabilities": "0",
"growthOtherLiabilities": "-0.0005084911577141635",
"growthTotalLiabilities": "-0.0005084911577141635",
"growthPreferredStock": "0",
"growthCommonStock": "0",
"growthRetainedEarnings": "0.049325752755485314",
"growthAccumulatedOtherComprehensiveIncomeLoss": "0",
"growthOthertotalStockholdersEquity": "-0.0035208940994345805",
"growthTotalStockholdersEquity": "0.022774946346510602",
"growthMinorityInterest": "0",
"growthTotalEquity": "0.022774946346510602",
"growthTotalLiabilitiesAndStockholdersEquity": "0.001488576544346165",
"growthTotalInvestments": "-0.0774117797082201",
"growthTotalDebt": "0",
"growthNetDebt": "-0.09574482145872953",
"growthAccountsReceivables": "0",
"growthOtherReceivables": "0",
"growthPrepaids": "0",
"growthTotalPayables": "-0.12022416350749959",
"growthOtherPayables": "-0.12022416350749959",
"growthAccruedExpenses": "0",
"growthCapitalLeaseObligationsCurrent": "0",
"growthAdditionalPaidInCapital": "0",
"growthTreasuryStock": "0"
}
]

Cash Flow Statement Bulk API
Globe Flag
The Cash Flow Statement Bulk API provides access to detailed cash flow reports for a wide range of companies. This API enables users to retrieve bulk cash flow statement data, helping to analyze companies’ operating, investing, and financing activities over time.

Endpoint:

https://financialmodelingprep.com/stable/cash-flow-statement-bulk?year=2025&period=Q1

Parameters

Query Parameter

Type

Example

year\*

string

2025

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"date": "2025-03-31",
"symbol": "000001.SZ",
"reportedCurrency": "CNY",
"cik": "0000000000",
"filingDate": "2025-03-31",
"acceptedDate": "2025-03-31 00:00:00",
"fiscalYear": "2025",
"period": "Q1",
"netIncome": "0",
"depreciationAndAmortization": "0",
"deferredIncomeTax": "0",
"stockBasedCompensation": "0",
"changeInWorkingCapital": "0",
"accountsReceivables": "0",
"inventory": "0",
"accountsPayables": "0",
"otherWorkingCapital": "0",
"otherNonCashItems": "162946000000",
"netCashProvidedByOperatingActivities": "162946000000",
"investmentsInPropertyPlantAndEquipment": "-338000000",
"acquisitionsNet": "0",
"purchasesOfInvestments": "-227916000000",
"salesMaturitiesOfInvestments": "253172000000",
"otherInvestingActivities": "25000000",
"netCashProvidedByInvestingActivities": "24943000000",
"netDebtIssuance": "0",
"longTermNetDebtIssuance": "0",
"shortTermNetDebtIssuance": "0",
"netStockIssuance": "0",
"netCommonStockIssuance": "0",
"commonStockIssuance": "0",
"commonStockRepurchased": "0",
"netPreferredStockIssuance": "0",
"netDividendsPaid": "-2538000000",
"commonDividendsPaid": "-2538000000",
"preferredDividendsPaid": "0",
"otherFinancingActivities": "-155860000000",
"netCashProvidedByFinancingActivities": "-158398000000",
"effectOfForexChangesOnCash": "-130000000",
"netChangeInCash": "29361000000",
"cashAtEndOfPeriod": "286307000000",
"cashAtBeginningOfPeriod": "256946000000",
"operatingCashFlow": "162946000000",
"capitalExpenditure": "-338000000",
"freeCashFlow": "162608000000",
"incomeTaxesPaid": "0",
"interestPaid": "0"
}
]

Cash Flow Statement Growth Bulk API
Globe Flag
The Cash Flow Statement Growth Bulk API allows you to retrieve bulk growth data for cash flow statements, enabling you to track changes in cash flows over time. This API is ideal for analyzing the cash flow growth trends of multiple companies simultaneously.

Endpoint:

https://financialmodelingprep.com/stable/cash-flow-statement-growth-bulk?year=2025&period=Q1

Parameters

Query Parameter

Type

Example

year\*

string

2025

period\*

string

Q1,Q2,Q3,Q4,FY

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "000001.SZ",
"date": "2025-03-31",
"fiscalYear": "2025",
"period": "Q1",
"reportedCurrency": "CNY",
"growthNetIncome": "0",
"growthDepreciationAndAmortization": "0",
"growthDeferredIncomeTax": "0",
"growthStockBasedCompensation": "0",
"growthChangeInWorkingCapital": "0",
"growthAccountsReceivables": "0",
"growthInventory": "0",
"growthAccountsPayables": "0",
"growthOtherWorkingCapital": "0",
"growthOtherNonCashItems": "3.2072823819457614",
"growthNetCashProvidedByOperatingActivites": "3.2072823819457614",
"growthInvestmentsInPropertyPlantAndEquipment": "0.7332280978689818",
"growthAcquisitionsNet": "0",
"growthPurchasesOfInvestments": "-0.12254537395030414",
"growthSalesMaturitiesOfInvestments": "0.3847853673478318",
"growthOtherInvestingActivites": "-0.8417721518987342",
"growthNetCashUsedForInvestingActivites": "2.1699343339587243",
"growthDebtRepayment": "1",
"growthCommonStockIssued": "0",
"growthCommonStockRepurchased": "0",
"growthDividendsPaid": "0.6798284344644885",
"growthOtherFinancingActivites": "-1.7077146619443309",
"growthNetCashUsedProvidedByFinancingActivities": "-3.2122934677858628",
"growthEffectOfForexChangesOnCash": "-1.0731570061902083",
"growthNetChangeInCash": "2.348938711752274",
"growthCashAtEndOfPeriod": "0.11426914604625096",
"growthCashAtBeginningOfPeriod": "-0.07809495106059301",
"growthOperatingCashFlow": "3.2072823819457614",
"growthCapitalExpenditure": "0.7332280978689818",
"growthFreeCashFlow": "3.16553689621649",
"growthNetDebtIssuance": "1",
"growthLongTermNetDebtIssuance": "1",
"growthShortTermNetDebtIssuance": "0",
"growthNetStockIssuance": "0",
"growthPreferredDividendsPaid": "0.6798284344644885",
"growthIncomeTaxesPaid": "0",
"growthInterestPaid": "0"
}
]

Eod Bulk API
Globe Flag
The EOD Bulk API allows users to retrieve end-of-day stock price data for multiple symbols in bulk. This API is ideal for financial analysts, traders, and investors who need to assess valuations for a large number of companies.

Endpoint:

https://financialmodelingprep.com/stable/eod-bulk?date=2024-10-22

Parameters

Query Parameter

Type

Example

date\*

string

2024-10-22

(\*) Required
Response
This endpoint returns the response as a CSV file. The provided sample response represents an individual record.

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
"symbol": "EGS745W1C011.CA",
"date": "2024-10-22",
"open": "2.67",
"low": "2.7",
"high": "2.9",
"close": "2.93",
"adjClose": "2.93",
"volume": "920904"
}
]
