Forex
Forex Currency Pairs API
Access a comprehensive list of all currency pairs traded on the forex market with the FMP Forex Currency Pairs API. Analyze and track the performance of currency pairs to make informed investment decisions.

Endpoint:

https://financialmodelingprep.com/stable/forex-list

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
"symbol": "ARSMXN",
"fromCurrency": "ARS",
"toCurrency": "MXN",
"fromName": "Argentine Peso",
"toName": "Mexican Peso"
}
]

Forex Quote API
USA Flag
Access real-time forex quotes for currency pairs with the Forex Quote API. Retrieve up-to-date information on exchange rates and price changes to help monitor market movements.

Endpoint:

https://financialmodelingprep.com/stable/quote?symbol=EURUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

EURUSD

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
"symbol": "EURUSD",
"name": "EUR/USD",
"price": 1.17598,
"changePercentage": -0.14754,
"change": -0.0017376,
"volume": 184065,
"dayLow": 1.17371,
"dayHigh": 1.17911,
"yearHigh": 1.18303,
"yearLow": 1.01838,
"marketCap": null,
"priceAvg50": 1.15244,
"priceAvg200": 1.08866,
"exchange": "FOREX",
"open": 1.17744,
"previousClose": 1.17772,
"timestamp": 1753374603
}
]

Forex Short Quote API
USA Flag
Quickly access concise forex pair quotes with the Forex Quote Snapshot API. Get a fast look at live currency exchange rates, price changes, and volume in real time.

Endpoint:

https://financialmodelingprep.com/stable/quote-short?symbol=EURUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

EURUSD

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
"symbol": "EURUSD",
"price": 1.17598,
"change": -0.0017376,
"volume": 184065
}
]

Batch Forex Quotes API
Easily access real-time quotes for multiple forex pairs simultaneously with the Batch Forex Quotes API. Stay updated on global currency exchange rates and monitor price changes across different markets.

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
"price": 0.41372,
"change": 0.00153892,
"volume": 0
}
]

Historical Forex Light Chart API
Access historical end-of-day forex prices with the Historical Forex Light Chart API. Track long-term price trends across different currency pairs to enhance your trading and analysis strategies.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=EURUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

EURUSD

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
"symbol": "EURUSD",
"date": "2025-07-24",
"price": 1.17639,
"volume": 182290
}
]

Historical Forex Full Chart API
Access comprehensive historical end-of-day forex price data with the Full Historical Forex Chart API. Gain detailed insights into currency pair movements, including open, high, low, close (OHLC) prices, volume, and percentage changes.

Endpoint:

https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=EURUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

EURUSD

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
"symbol": "EURUSD",
"date": "2025-07-24",
"open": 1.17744,
"high": 1.17911,
"low": 1.17371,
"close": 1.17639,
"volume": 182290,
"change": -0.00105,
"changePercent": -0.08917652,
"vwap": 1.18
}
]

1-Minute Interval Forex Chart API
Access real-time 1-minute intraday forex data with the 1-Minute Forex Interval Chart API. Track short-term price movements for precise, up-to-the-minute insights on currency pair fluctuations.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1min?symbol=EURUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

EURUSD

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
"open": 1.17582,
"low": 1.17582,
"high": 1.17599,
"close": 1.17598,
"volume": 184
}
]

5-Minute Interval Forex Chart API
Track short-term forex trends with the 5-Minute Forex Interval Chart API. Access detailed 5-minute intraday data to monitor currency pair price movements and market conditions in near real-time.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/5min?symbol=EURUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

EURUSD

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
"open": 1.17612,
"low": 1.17571,
"high": 1.17613,
"close": 1.17578,
"volume": 873
}
]

1-Hour Interval Forex Chart API
Track forex price movements over the trading day with the 1-Hour Forex Interval Chart API. This tool provides hourly intraday data for currency pairs, giving a detailed view of trends and market shifts.

Endpoint:

https://financialmodelingprep.com/stable/historical-chart/1hour?symbol=EURUSD

Parameters

Query Parameter

Type

Example

symbol\*

string

EURUSD

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
"date": "2025-07-24 12:00:00",
"open": 1.17639,
"low": 1.17571,
"high": 1.1773,
"close": 1.17578,
"volume": 4909
}
]
