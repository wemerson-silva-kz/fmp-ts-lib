Analyst
Financial Estimates API
Globe Flag
Retrieve analyst financial estimates for stock symbols with the FMP Financial Estimates API. Access projected figures like revenue, earnings per share (EPS), and other key financial metrics as forecasted by industry analysts to inform your investment decisions.

Endpoint:

https://financialmodelingprep.com/stable/analyst-estimates?symbol=AAPL&period=annual&page=0&limit=10

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

period\*

string

annual,quarter

page

number

0

limit

number

10

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
[
{
"symbol": "AAPL",
"date": "2029-09-28",
"revenueLow": 483092500000,
"revenueHigh": 483093500000,
"revenueAvg": 483093000000,
"ebitdaLow": 155952166036,
"ebitdaHigh": 155952488856,
"ebitdaAvg": 155952327446,
"ebitLow": 140628295747,
"ebitHigh": 140628586847,
"ebitAvg": 140628441297,
"netIncomeLow": 139446957701,
"netIncomeHigh": 157185372990,
"netIncomeAvg": 149150359609,
"sgaExpenseLow": 31694652812,
"sgaExpenseHigh": 31694718420,
"sgaExpenseAvg": 31694685616,
"epsAvg": 9.68,
"epsHigh": 10.20148,
"epsLow": 9.05024,
"numAnalystsRevenue": 16,
"numAnalystsEps": 6
}
]

Ratings Snapshot API
Globe Flag
Quickly assess the financial health and performance of companies with the FMP Ratings Snapshot API. This API provides a comprehensive snapshot of financial ratings for stock symbols in our database, based on various key financial ratios.

Endpoint:

https://financialmodelingprep.com/stable/ratings-snapshot?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

1

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
[
{
"symbol": "AAPL",
"rating": "A-",
"overallScore": 4,
"discountedCashFlowScore": 3,
"returnOnEquityScore": 5,
"returnOnAssetsScore": 5,
"debtToEquityScore": 4,
"priceToEarningsScore": 2,
"priceToBookScore": 1
}
]

Historical Ratings API
Globe Flag
Track changes in financial performance over time with the FMP Historical Ratings API. This API provides access to historical financial ratings for stock symbols in our database, allowing users to view ratings and key financial metric scores for specific dates.

Endpoint:

https://financialmodelingprep.com/stable/ratings-historical?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

1

(\*) Required | Maximum 10000 records per request
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
"date": "2025-02-04",
"rating": "A-",
"overallScore": 4,
"discountedCashFlowScore": 3,
"returnOnEquityScore": 5,
"returnOnAssetsScore": 5,
"debtToEquityScore": 4,
"priceToEarningsScore": 2,
"priceToBookScore": 1
}
]

Price Target Summary API
USA Flag
Gain insights into analysts' expectations for stock prices with the FMP Price Target Summary API. This API provides access to average price targets from analysts across various timeframes, helping investors assess future stock performance based on expert opinions.

Endpoint:

https://financialmodelingprep.com/stable/price-target-summary?symbol=AAPL

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
10
11
12
13
14
[
{
"symbol": "AAPL",
"lastMonthCount": 1,
"lastMonthAvgPriceTarget": 200.75,
"lastQuarterCount": 3,
"lastQuarterAvgPriceTarget": 204.2,
"lastYearCount": 48,
"lastYearAvgPriceTarget": 232.99,
"allTimeCount": 167,
"allTimeAvgPriceTarget": 201.21,
"publishers": "[\"Benzinga\",\"StreetInsider\",\"TheFly\",\"Pulse 2.0\",\"TipRanks Contributor\",\"MarketWatch\",\"Investing\",\"Barrons\",\"Investor's Business Daily\"]"
}
]

Price Target Consensus API
USA Flag
Access analysts' consensus price targets with the FMP Price Target Consensus API. This API provides high, low, median, and consensus price targets for stocks, offering investors a comprehensive view of market expectations for future stock prices.

Endpoint:

https://financialmodelingprep.com/stable/price-target-consensus?symbol=AAPL

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
"targetHigh": 300,
"targetLow": 200,
"targetConsensus": 251.7,
"targetMedian": 258
}
]

Price Target News API
USA Flag
Stay informed with real-time updates on analysts' price targets for stocks using the FMP Price Target News API. Access the latest forecasts, stock prices at the time of the update, and direct links to trusted news sources for deeper insights.

Endpoint:

https://financialmodelingprep.com/stable/price-target-news?symbol=AAPL&page=0&limit=10

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

10

page

number

0

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
[
{
"symbol": "AAPL",
"publishedDate": "2025-01-21T01:24:32.000Z",
"newsURL": "https://www.benzinga.com/markets/equities/25/01/43087992/apple-gets-rare-downgrade-from-jefferies-analyst-warns-on-slowing-revenue-growth-missed-forecast",
"newsTitle": "Apple Gets Rare Downgrade From Jefferies, Analyst Warns On Slowing Revenue Growth, Missed Forecasts, And Falling iPhone Demand",
"analystName": "Edison Lee",
"priceTarget": 200.75,
"adjPriceTarget": 200.75,
"priceWhenPosted": 229.98,
"newsPublisher": "Benzinga",
"newsBaseURL": "benzinga.com",
"analystCompany": "Jefferies"
}
]

Price Target Latest News API
USA Flag
Stay updated with the most recent analyst price target updates for all stock symbols using the FMP Price Target Latest News API. Get access to detailed forecasts, stock prices at the time of the update, analyst insights, and direct links to news sources for deeper analysis.

Endpoint:

https://financialmodelingprep.com/stable/price-target-latest-news?page=0&limit=10

Parameters

Query Parameter

Type

Example

limit

number

10

page

number

0

(\*) Required | Maximum 1000 records per request | Page maxed at 100
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
"symbol": "OLN",
"publishedDate": "2025-02-03T18:23:58.000Z",
"newsURL": "https://www.benzinga.com/25/02/43444520/these-analysts-cut-their-forecasts-on-olin-after-q4-earnings",
"newsTitle": "These Analysts Cut Their Forecasts On Olin After Q4 Earnings",
"analystName": "Peter Osterland",
"priceTarget": 32,
"adjPriceTarget": 32,
"priceWhenPosted": 27.76,
"newsPublisher": "Benzinga",
"newsBaseURL": "benzinga.com",
"analystCompany": "Truist Financial"
}
]

Stock Grades API
Globe Flag
Access the latest stock grades from top analysts and financial institutions with the FMP Grades API. Track grading actions, such as upgrades, downgrades, or maintained ratings, for specific stock symbols, providing valuable insight into how experts evaluate companies over time.

Endpoint:

https://financialmodelingprep.com/stable/grades?symbol=AAPL

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
10
[
{
"symbol": "AAPL",
"date": "2025-01-31",
"gradingCompany": "Morgan Stanley",
"previousGrade": "Overweight",
"newGrade": "Overweight",
"action": "maintain"
}
]

Historical Stock Grades API
Globe Flag
Access a comprehensive record of analyst grades with the FMP Historical Grades API. This tool allows you to track historical changes in analyst ratings for specific stock symbol

Endpoint:

https://financialmodelingprep.com/stable/grades-historical?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

100

(\*) Required | Maximum 1000 records per request
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
[
{
"symbol": "AAPL",
"date": "2025-02-01",
"analystRatingsBuy": 8,
"analystRatingsHold": 14,
"analystRatingsSell": 2,
"analystRatingsStrongSell": 2
}
]

Stock Grades Summary API
Globe Flag
Quickly access an overall view of analyst ratings with the FMP Grades Summary API. This API provides a consolidated summary of market sentiment for individual stock symbols, including the total number of strong buy, buy, hold, sell, and strong sell ratings. Understand the overall consensus on a stock’s outlook with just a few data points.

Endpoint:

https://financialmodelingprep.com/stable/grades-consensus?symbol=AAPL

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
10
11
[
{
"symbol": "AAPL",
"strongBuy": 1,
"buy": 29,
"hold": 11,
"sell": 4,
"strongSell": 0,
"consensus": "Buy"
}
]

Stock Grade News API
USA Flag
Stay informed on the latest analyst grade changes with the FMP Grade News API. This API provides real-time updates on stock rating changes, including the grading company, previous and new grades, and the action taken. Direct links to trusted news sources and stock prices at the time of the update help you stay ahead of market trends and analyst opinions for specific stock symbols.

Endpoint:

https://financialmodelingprep.com/stable/grades-news?symbol=AAPL&page=0&limit=1

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

page

number

0

limit

number

1

(\*) Required | Maximum 100 records per request
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
"publishedDate": "2025-01-31T10:11:47.000Z",
"newsURL": "https://www.benzinga.com/25/01/43379061/why-apple-shares-are-trading-higher-here-are-20-stocks-moving-premarket",
"newsTitle": "Why Apple Shares Are Trading Higher; Here Are 20 Stocks Moving Premarket",
"newsBaseURL": "benzinga.com",
"newsPublisher": "Benzinga",
"newGrade": "Buy",
"previousGrade": "Hold",
"gradingCompany": "Maxim Group",
"action": "initialise",
"priceWhenPosted": 237.59
}
]

Stock Grade Latest News API
USA Flag
Stay informed on the latest stock rating changes with the FMP Grade Latest News API. This API provides the most recent updates on analyst ratings for all stock symbols, including links to the original news sources. Track stock price movements, grading firm actions, and market sentiment shifts in real time, sourced from trusted publishers.

Endpoint:

https://financialmodelingprep.com/stable/grades-latest-news?page=0&limit=10

Parameters

Query Parameter

Type

Example

page

number

0

limit

number

10

(\*) Required | Maximum 1000 records per request | Page maxed at 100
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
"symbol": "PYPL",
"publishedDate": "2025-02-04T19:18:04.000Z",
"newsURL": "https://www.benzinga.com/25/02/43475080/paypal-beats-q4-estimates-as-transaction-margins-and-payment-volume-drive-growth-eyes-2025-growth-with-strong-tmd",
"newsTitle": "PayPal Transaction Margins and Payment Volume Drive Growth, Eyes 2025 Growth With Strong TMD Ahead of Investor Day: Analyst",
"newsBaseURL": "benzinga.com",
"newsPublisher": "Benzinga",
"newGrade": "Overweight",
"previousGrade": "Overweight",
"gradingCompany": "J.P. Morgan",
"action": "hold",
"priceWhenPosted": 77.725
}
]
