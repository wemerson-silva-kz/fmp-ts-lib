Quote
Stock Quote API
Globe Flag
Access real-time stock quotes with the FMP Stock Quote API. Get up-to-the-minute prices, changes, and volume data for individual stocks.

Endpoint:

https://financialmodelingprep.com/stable/quote?symbol=AAPL

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
15
16
17
18
19
20
21
[
{
"symbol": "AAPL",
"name": "Apple Inc.",
"price": 232.8,
"changePercentage": 2.1008,
"change": 4.79,
"volume": 44489128,
"dayLow": 226.65,
"dayHigh": 233.13,
"yearHigh": 260.1,
"yearLow": 164.08,
"marketCap": 3500823120000,
"priceAvg50": 240.2278,
"priceAvg200": 219.98755,
"exchange": "NASDAQ",
"open": 227.2,
"previousClose": 228.01,
"timestamp": 1738702801
}
]

Stock Quote Short API
Globe Flag
Get quick snapshots of real-time stock quotes with the FMP Stock Quote Short API. Access key stock data like current price, volume, and price changes for instant market insights.

Endpoint:

https://financialmodelingprep.com/stable/quote-short?symbol=AAPL

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
[
{
"symbol": "AAPL",
"price": 232.8,
"change": 4.79,
"volume": 44489128
}
]

Aftermarket Trade API
USA Flag
Track real-time trading activity occurring after regular market hours with the FMP Aftermarket Trade API. Access key details such as trade prices, sizes, and timestamps for trades executed during the post-market session.

Endpoint:

https://financialmodelingprep.com/stable/aftermarket-trade?symbol=AAPL

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
[
{
"symbol": "AAPL",
"price": 232.53,
"tradeSize": 132,
"timestamp": 1738715334311
}
]

Aftermarket Quote API
USA Flag
Access real-time aftermarket quotes for stocks with the FMP Aftermarket Quote API. Track bid and ask prices, volume, and other relevant data outside of regular trading hours.

Endpoint:

https://financialmodelingprep.com/stable/aftermarket-quote?symbol=AAPL

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
"bidSize": 1,
"bidPrice": 232.45,
"askSize": 3,
"askPrice": 232.64,
"volume": 41647042,
"timestamp": 1738715334311
}
]

Stock Price Change API
Globe Flag
Track stock price fluctuations in real-time with the FMP Stock Price Change API. Monitor percentage and value changes over various time periods, including daily, weekly, monthly, and long-term.

Endpoint:

https://financialmodelingprep.com/stable/stock-price-change?symbol=AAPL

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
15
16
[
{
"symbol": "AAPL",
"1D": 2.1008,
"5D": -2.45946,
"1M": -4.33925,
"3M": 4.86014,
"6M": 5.88556,
"ytd": -4.53147,
"1Y": 24.04092,
"3Y": 35.04264,
"5Y": 192.05871,
"10Y": 678.8558,
"max": 181279.04168
}
]

Stock Batch Quote API
Globe Flag
Retrieve multiple real-time stock quotes in a single request with the FMP Stock Batch Quote API. Access current prices, volume, and detailed data for multiple companies at once, making it easier to track large portfolios or monitor multiple stocks simultaneously.

Endpoint:

https://financialmodelingprep.com/stable/batch-quote?symbols=AAPL

Parameters

Query Parameter

Type

Example

symbols\*

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
15
16
17
18
19
20
21
[
{
"symbol": "AAPL",
"name": "Apple Inc.",
"price": 232.8,
"changePercentage": 2.1008,
"change": 4.79,
"volume": 44489128,
"dayLow": 226.65,
"dayHigh": 233.13,
"yearHigh": 260.1,
"yearLow": 164.08,
"marketCap": 3500823120000,
"priceAvg50": 240.2278,
"priceAvg200": 219.98755,
"exchange": "NASDAQ",
"open": 227.2,
"previousClose": 228.01,
"timestamp": 1738702801
}
]

Stock Batch Quote Short API
Globe Flag
Access real-time, short-form quotes for multiple stocks with the FMP Stock Batch Quote Short API. Get a quick snapshot of key stock data such as current price, change, and volume for several companies in one streamlined request.

Endpoint:

https://financialmodelingprep.com/stable/batch-quote-short?symbols=AAPL

Parameters

Query Parameter

Type

Example

symbols\*

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
[
{
"symbol": "AAPL",
"price": 232.8,
"change": 4.79,
"volume": 44489128
}
]

Batch Aftermarket Trade API
USA Flag
Retrieve real-time aftermarket trading data for multiple stocks with the FMP Batch Aftermarket Trade API. Track post-market trade prices, volumes, and timestamps across several companies simultaneously.

Endpoint:

https://financialmodelingprep.com/stable/batch-aftermarket-trade?symbols=AAPL

Parameters

Query Parameter

Type

Example

symbols\*

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
[
{
"symbol": "AAPL",
"price": 232.53,
"tradeSize": 132,
"timestamp": 1738715334311
}
]

Batch Aftermarket Quote API
USA Flag
Retrieve real-time aftermarket quotes for multiple stocks with the FMP Batch Aftermarket Quote API. Access bid and ask prices, volume, and other relevant data for several companies during post-market trading.

Endpoint:

https://financialmodelingprep.com/stable/batch-aftermarket-quote?symbols=AAPL

Parameters

Query Parameter

Type

Example

symbols\*

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
"bidSize": 1,
"bidPrice": 232.45,
"askSize": 3,
"askPrice": 232.64,
"volume": 41647042,
"timestamp": 1738715334311
}
]

Exchange Stock Quotes API
Globe Flag
Retrieve real-time stock quotes for all listed stocks on a specific exchange with the FMP Exchange Stock Quotes API. Track price changes and trading activity across the entire exchange.

Endpoint:

https://financialmodelingprep.com/stable/batch-exchange-quote?exchange=NASDAQ

Parameters

Query Parameter

Type

Example

exchange\*

string

NASDAQ

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
"symbol": "AAACX",
"price": 6.38,
"change": 0,
"volume": 0
}
]

Mutual Fund Price Quotes API
USA Flag
Access real-time quotes for mutual funds with the FMP Mutual Fund Price Quotes API. Track current prices, performance changes, and key data for various mutual funds.

Endpoint:

https://financialmodelingprep.com/stable/batch-mutualfund-quotes

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
"symbol": "ARCFX",
"price": 9.84,
"change": 0.01,
"volume": 0
}
]

ETF Price Quotes API
Globe Flag
Get real-time price quotes for exchange-traded funds (ETFs) with the FMP ETF Price Quotes API. Track current prices, performance changes, and key data for a wide variety of ETFs.

Endpoint:

https://financialmodelingprep.com/stable/batch-etf-quotes

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
"symbol": "GULF",
"price": 16.335,
"change": 0.13,
"volume": 3032
}
]

Full Commodities Quotes API
Get up-to-the-minute quotes for commodities with the FMP Real-Time Commodities Quotes API. Track the latest prices, changes, and volumes for a wide range of commodities, including oil, gold, and agricultural products.

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
"price": 19.89,
"change": 0.23,
"volume": 442
}
]

Full Cryptocurrency Quotes API
Access real-time cryptocurrency quotes with the FMP Full Cryptocurrency Quotes API. Track live prices, trading volumes, and price changes for a wide range of digital assets.

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
"price": 0.03071157,
"change": -0.0026034,
"volume": 169600
}
]

Full Forex Quote API
Retrieve real-time quotes for multiple forex currency pairs with the FMP Batch Forex Quote API. Get real-time price changes and updates for a variety of forex pairs in a single request.

Endpoint:

https://financialmodelingprep.com/stable/batch-forex-quotes

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
"symbol": "AEDAUD",
"price": 0.43575,
"change": 0.0009547891,
"volume": 344
}
]

Full Index Quotes API
Track real-time movements of major stock market indexes with the FMP Stock Market Index Quotes API. Access live quotes for global indexes and monitor changes in their performance.

Endpoint:

https://financialmodelingprep.com/stable/batch-index-quotes

Parameters
