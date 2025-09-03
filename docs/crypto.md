Crypto
Cryptocurrency List API
Access a comprehensive list of all cryptocurrencies traded on exchanges worldwide with the FMP Cryptocurrencies Overview API. Get detailed information on each cryptocurrency to inform your investment strategies.

Endpoint:

https://financialmodelingprep.com/stable/cryptocurrency-list

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
"symbol": "ALIENUSD",
"name": "Alien Inu USD",
"exchange": "CCC",
"icoDate": "2021-11-22",
"circulatingSupply": 0,
"totalSupply": null
}
]

Full Cryptocurrency Quote API
Access real-time quotes for all cryptocurrencies with the FMP Full Cryptocurrency Quote API. Obtain comprehensive price data including current, high, low, and open prices.

Endpoint:

https://financialmodelingprep.com/stable/quote?symbol=BTCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

BTCUSD

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
"symbol": "BTCUSD",
"name": "Bitcoin USD",
"price": 118741.16,
"changePercentage": -0.03193323,
"change": -37.93,
"volume": 75302985728,
"dayLow": 117435.22,
"dayHigh": 119535.45,
"yearHigh": 123091.61,
"yearLow": 49121.24,
"marketCap": 2344693699320,
"priceAvg50": 109824.32,
"priceAvg200": 98161.086,
"exchange": "CRYPTO",
"open": 118779.09,
"previousClose": 118779.09,
"timestamp": 1753374602
}
]

Cryptocurrency Quote Short API
Access real-time cryptocurrency quotes with the FMP Cryptocurrency Quick Quote API. Get a concise overview of current crypto prices, changes, and trading volume for a wide range of digital assets.

Endpoint:

https://financialmodelingprep.com/stable/quote-short?symbol=BTCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

BTCUSD

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
"symbol": "BTCUSD",
"price": 118741.16,
"change": -37.93,
"volume": 75302985728
}
]

All Cryptocurrencies Quotes API
Access live price data for a wide range of cryptocurrencies with the FMP Real-Time Cryptocurrency Batch Quotes API. Get real-time updates on prices, market changes, and trading volumes for digital assets in a single request.

Endpoint:

https://financialmodelingprep.com/stable/batch-crypto-quotes

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
"symbol": "00USD",
"price": 0.01755108,
"change": 0.00035108,
"volume": 3719492.41
}
]

Historical Cryptocurrency Light Chart API
Access historical end-of-day prices for a variety of cryptocurrencies with the Historical Cryptocurrency Price Snapshot API. Track trends in price and trading volume over time to better understand market behavior.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=BTCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

BTCUSD

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
"symbol": "BTCUSD",
"date": "2025-07-24",
"price": 118741.16,
"volume": 75302985728
}
]

Historical Cryptocurrency Full Chart API
Access comprehensive end-of-day (EOD) price data for cryptocurrencies with the Full Historical Cryptocurrency Data API. Analyze long-term price trends, market movements, and trading volumes to inform strategic decisions.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=BTCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

BTCUSD

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
"symbol": "BTCUSD",
"date": "2025-07-24",
"open": 118779.09,
"high": 119535.45,
"low": 117435.22,
"close": 118741.16,
"volume": 75302985728,
"change": -37.93,
"changePercent": -0.03193323,
"vwap": 118570.61
}
]

1-Minute Interval Cryptocurrency Data API
Get real-time, 1-minute interval price data for cryptocurrencies with the 1-Minute Cryptocurrency Intraday Data API. Monitor short-term price fluctuations and trading volume to stay updated on market movements.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1min?symbol=BTCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

BTCUSD

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
"open": 118797.96,
"low": 118760.42,
"high": 118818.11,
"close": 118784.04,
"volume": 52293740.08888889
}
]

5-Minute Interval Cryptocurrency Data API
Analyze short-term price trends with the 5-Minute Interval Cryptocurrency Data API. Access real-time, intraday price data for cryptocurrencies to monitor rapid market movements and optimize trading strategies.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/5min?symbol=BTCUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

BTCUSD

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
"date": "2025-07-24 12:25:00",
"open": 118988.32,
"low": 118797.03,
"high": 118997.22,
"close": 118797.03,
"volume": 208601161.95555556
}
]

1-Hour Interval Cryptocurrency Data API
Access detailed 1-hour intraday price data for cryptocurrencies with the 1-Hour Interval Cryptocurrency Data API. Track hourly price movements to gain insights into market trends and make informed trading decisions throughout the day.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1hour?symbol=BTCUSD

Parameters
