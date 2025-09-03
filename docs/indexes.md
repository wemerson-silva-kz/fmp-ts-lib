Indexes
Stock Market Indexes List API
Retrieve a comprehensive list of stock market indexes across global exchanges using the FMP Stock Market Indexes List API. This API provides essential information such as the symbol, name, exchange, and currency for each index, helping analysts and investors keep track of various market benchmarks.

Endpoint:

https://financialmodelingprep.com/stable/index-list

Response
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
"symbol": "^TTIN",
"name": "S&P/TSX Capped Industrials Index",
"exchange": "TSX",
"currency": "CAD"
}
]

Index Quote API
USA Flag
Access real-time stock index quotes with the Stock Index Quote API. Stay updated with the latest price changes, daily highs and lows, volume, and other key metrics for major stock indices around the world.

Endpoint:

https://financialmodelingprep.com/stable/quote?symbol=^GSPC

Parameters

Query Parameter

Type

Example

symbol\*

string

^GSPC

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
[
{
"symbol": "^GSPC",
"name": "S&P 500",
"price": 6366.13,
"changePercentage": 0.11354,
"change": 7.22,
"volume": 1498664000,
"dayLow": 6360.57,
"dayHigh": 6379.54,
"yearHigh": 6379.54,
"yearLow": 4835.04,
"marketCap": 0,
"priceAvg50": 6068.663,
"priceAvg200": 5880.0864,
"exchange": "INDEX",
"open": 6368.6,
"previousClose": 6358.91,
"timestamp": 1753374601
}
]

Index Short Quote API
USA Flag
Access concise stock index quotes with the Stock Index Short Quote API. This API provides a snapshot of the current price, change, and volume for stock indexes, making it ideal for users who need a quick overview of market movements.

Endpoint:

https://financialmodelingprep.com/stable/quote-short?symbol=^GSPC

Parameters

Query Parameter

Type

Example

symbol\*

string

^GSPC

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
[
{
"symbol": "^GSPC",
"price": 6366.13,
"change": 7.22,
"volume": 1498664000
}
]

All Index Quotes API
The All Index Quotes API provides real-time quotes for a wide range of stock indexes, from major market benchmarks to niche indexes. This API allows users to track market performance across multiple indexes in a single request, giving them a broad view of the financial markets.

Endpoint:

https://financialmodelingprep.com/stable/batch-index-quotes

Parameters

Query Parameter

Type

Example

short

boolean

true

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
[
{
"symbol": "^DJBGIE",
"price": 4155.76,
"change": 1.09,
"volume": 0
}
]

Historical Index Light Chart API
Retrieve end-of-day historical prices for stock indexes using the Historical Price Data API. This API provides essential data such as date, price, and volume, enabling detailed analysis of price movements over time.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=^GSPC

Parameters

Query Parameter

Type

Example

symbol\*

string

^GSPC

from

date

2025-04-25

to

date

2025-07-25

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
[
{
"symbol": "^GSPC",
"date": "2025-07-24",
"price": 6365.77,
"volume": 1499302000
}
]

Historical Index Full Chart API
Access full historical end-of-day prices for stock indexes using the Detailed Historical Price Data API. This API provides comprehensive information, including open, high, low, close prices, volume, and additional metrics for detailed financial analysis.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^GSPC

Parameters

Query Parameter

Type

Example

symbol\*

string

^GSPC

from

date

2025-04-25

to

date

2025-07-25

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
"symbol": "^GSPC",
"date": "2025-07-24",
"open": 6368.6,
"high": 6379.54,
"low": 6360.57,
"close": 6365.77,
"volume": 1499302000,
"change": -2.83,
"changePercent": -0.04443677,
"vwap": 6368.63
}
]

1-Minute Interval Index Price API
Retrieve 1-minute interval intraday data for stock indexes using the Intraday 1-Minute Price Data API. This API provides granular price information, helping users track short-term price movements and trading volume within each minute.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1min?symbol=^GSPC

Parameters

Query Parameter

Type

Example

symbol\*

string

^GSPC

from

date

2024-01-01

to

date

2024-03-01

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
"date": "2025-07-24 12:29:00",
"open": 6365.34,
"low": 6365.34,
"high": 6366.09,
"close": 6366.09,
"volume": 4428000
}
]

5-Minute Interval Index Price API
Retrieve 5-minute interval intraday price data for stock indexes using the Intraday 5-Minute Price Data API. This API provides crucial insights into price movements and trading volume within 5-minute windows, ideal for traders who require short-term data.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/5min?symbol=^GSPC

Parameters

Query Parameter

Type

Example

symbol\*

string

^GSPC

from

date

2024-01-01

to

date

2024-03-01

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
"date": "2025-07-24 12:30:00",
"open": 6366.18,
"low": 6365.57,
"high": 6366.18,
"close": 6365.69,
"volume": 1574690
}
]

1-Hour Interval Index Price API
Access 1-hour interval intraday data for stock indexes using the Intraday 1-Hour Price Data API. This API provides detailed price movements and volume within hourly intervals, making it ideal for tracking medium-term market trends during the trading day.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1hour?symbol=^GSPC

Parameters

Query Parameter

Type

Example

symbol\*

string

^GSPC

from

date

2024-01-01

to

date

2024-03-01

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
"date": "2025-07-24 12:30:00",
"open": 6366.18,
"low": 6365.57,
"high": 6366.18,
"close": 6365.69,
"volume": 1574690
}
]

S&P 500 Index API
Access detailed data on the S&P 500 index using the S&P 500 Index API. Track the performance and key information of the companies that make up this major stock market index.

Endpoint:

https://financialmodelingprep.com/stable/sp500-constituent

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
"symbol": "DDOG",
"name": "Datadog",
"sector": "Technology",
"subSector": "Software - Application",
"headQuarter": "New York City, New York",
"dateFirstAdded": "2025-07-09",
"cik": "0001561550",
"founded": "2010"
}
]

Nasdaq Index API
Access comprehensive data for the Nasdaq index with the Nasdaq Index API. Monitor real-time movements and track the historical performance of companies listed on this prominent stock exchange.

Endpoint:

https://financialmodelingprep.com/stable/nasdaq-constituent

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
"symbol": "ADBE",
"name": "Adobe Inc.",
"sector": "Technology",
"subSector": "Software - Infrastructure",
"headQuarter": "San Jose, CA",
"dateFirstAdded": null,
"cik": "0000796343",
"founded": "1982-12-01"
}
]

Dow Jones API
Access data on the Dow Jones Industrial Average using the Dow Jones API. Track current values, analyze trends, and get detailed information about the companies that make up this important stock index.

Endpoint:

https://financialmodelingprep.com/stable/dowjones-constituent

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
"symbol": "NVDA",
"name": "Nvidia",
"sector": "Technology",
"subSector": "Semiconductors",
"headQuarter": "Santa Clara, CA",
"dateFirstAdded": "2024-11-08",
"cik": "0001045810",
"founded": "1993-04-05"
}
]

Historical S&P 500 API
Retrieve historical data for the S&P 500 index using the Historical S&P 500 API. Analyze past changes in the index, including additions and removals of companies, to understand trends and performance over time.

Endpoint:

https://financialmodelingprep.com/stable/historical-sp500-constituent

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
"dateAdded": "July 9, 2025",
"addedSecurity": "Datadog",
"removedTicker": "JNPR",
"removedSecurity": "Juniper Networks",
"date": "2025-07-08",
"symbol": "DDOG",
"reason": "S&P 500 constituent Hewlett Packard Enterprise Co. acquired Juniper Networks."
}
]

Historical Nasdaq API
Access historical data for the Nasdaq index using the Historical Nasdaq API. Analyze changes in the index composition and view how it has evolved over time, including company additions and removals.

Endpoint:

https://financialmodelingprep.com/stable/historical-nasdaq-constituent

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
"dateAdded": "May 19, 2025",
"addedSecurity": "Shopify",
"removedTicker": "MDB",
"removedSecurity": "MongoDB",
"date": "2025-05-18",
"symbol": "SHOP",
"reason": "MongoDB did not meet the minimum monthly weight requirements."
}
]

Historical Dow Jones API
Access historical data for the Dow Jones Industrial Average using the Historical Dow Jones API. Analyze changes in the index’s composition and study its performance across different periods.

Endpoint:

https://financialmodelingprep.com/stable/historical-dowjones-constituent

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
"dateAdded": "November 8, 2024",
"addedSecurity": "Nvidia",
"removedTicker": "INTC",
"removedSecurity": "Intel Corporation",
"date": "2024-11-07",
"symbol": "NVDA",
"reason": "Market capitalization change"
}
]
