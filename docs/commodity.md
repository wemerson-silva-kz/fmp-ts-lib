Commodity
Commodities List API
Access an extensive list of tracked commodities across various sectors, including energy, metals, and agricultural products. The FMP Commodities List API provides essential data on tradable commodities, giving investors the ability to explore market options in real-time.

Endpoint:

https://financialmodelingprep.com/stable/commodities-list

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
"symbol": "HEUSX",
"name": "Lean Hogs Futures",
"exchange": null,
"tradeMonth": "Dec",
"currency": "USX"
}
]

Commodities Quote API
USA Flag
Access real-time price quotes for all commodities traded worldwide with the FMP Global Commodities Quotes API. Track market movements and identify investment opportunities with comprehensive price data.

Endpoint:

https://financialmodelingprep.com/stable/quote?symbol=GCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

GCUSD

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
"symbol": "GCUSD",
"name": "Gold Futures",
"price": 3375.3,
"changePercentage": -0.65635,
"change": -22.3,
"volume": 170936,
"dayLow": 3355.2,
"dayHigh": 3401.1,
"yearHigh": 3509.9,
"yearLow": 2354.6,
"marketCap": null,
"priceAvg50": 3358.706,
"priceAvg200": 3054.501,
"exchange": "COMMODITY",
"open": 3398.6,
"previousClose": 3397.6,
"timestamp": 1753372205
}
]

Commodities Quote Short API
USA Flag
Get fast and accurate quotes for commodities with the FMP Commodities Quick Quote API. Instantly access the current price, recent changes, and trading volume for various commodities in real-time.

Endpoint:

https://financialmodelingprep.com/stable/quote-short?symbol=GCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

GCUSD

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
"symbol": "GCUSD",
"price": 3375.3,
"change": -22.3,
"volume": 170936
}
]

All Commodities Quotes API
Access real-time quotes for multiple commodities at once with the FMP Real-Time Batch Commodities Quotes API. Instantly track price changes, volume, and other key metrics for a broad range of commodities.

Endpoint:

https://financialmodelingprep.com/stable/batch-commodity-quotes

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
"symbol": "DCUSD",
"price": 17.18,
"change": -0.21,
"volume": 284
}
]

Light Chart API
Access historical end-of-day prices for various commodities with the FMP Historical Commodities Price API. Analyze past price movements, trading volume, and trends to support informed decision-making.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=GCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

GCUSD

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
"symbol": "GCUSD",
"date": "2025-07-24",
"price": 3373.8,
"volume": 174758
}
]

Full Chart API
Access full historical end-of-day price data for commodities with the FMP Comprehensive Commodities Price API. This API enables users to analyze long-term price trends, patterns, and market movements in great detail.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=GCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

GCUSD

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
"symbol": "GCUSD",
"date": "2025-07-24",
"open": 3398.6,
"high": 3401.1,
"low": 3355.2,
"close": 3373.8,
"volume": 174758,
"change": -24.8,
"changePercent": -0.72971223,
"vwap": 3376.7
}
]

1-Minute Interval Commodities Chart API
Track real-time, short-term price movements for commodities with the FMP 1-Minute Interval Commodities Chart API. This API provides detailed 1-minute interval data, enabling precise monitoring of intraday market changes.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1min?symbol=GCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

GCUSD

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
"date": "2025-07-24 12:18:00",
"open": 3374.5,
"low": 3373.7,
"high": 3374.5,
"close": 3374,
"volume": 123
}
]

5-Minute Interval Commodities Chart API
Monitor short-term price movements with the FMP 5-Minute Interval Commodities Chart API. This API provides detailed 5-minute interval data, enabling users to track near-term price trends for more strategic trading and investment decisions.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/5min?symbol=GCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

GCUSD

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
"date": "2025-07-24 12:15:00",
"open": 3374,
"low": 3374,
"high": 3374.8,
"close": 3374.4,
"volume": 193
}
]

1-Hour Interval Commodities Chart API
Monitor hourly price movements and trends with the FMP 1-Hour Interval Commodities Chart API. This API provides hourly data, offering a detailed look at price fluctuations throughout the trading day to support mid-term trading strategies and market analysis.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1hour?symbol=GCUSD

Parameters
