Market Hours
Global Exchange Market Hours API
Globe Flag
Retrieve trading hours for specific stock exchanges using the Global Exchange Market Hours API. Find out the opening and closing times of global exchanges to plan your trading strategies effectively.

Endpoint:

https://financialmodelingprep.com/stable/exchange-market-hours?exchange=NASDAQ

Parameters

Query Parameter

Type

Example

exchange\*

string

NASDAQ

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
"exchange": "NASDAQ",
"name": "NASDAQ Global Market",
"openingHour": "09:30 AM -04:00",
"closingHour": "04:00 PM -04:00",
"timezone": "America/New_York",
"isMarketOpen": true
}
]

Holidays By Exchange API
Globe Flag
Endpoint:

https://financialmodelingprep.com/stable/holidays-by-exchange?exchange=NASDAQ

Parameters

Query Parameter

Type

Example

exchange\*

string

NASDAQ

from

date

2024-07-24

to

date

2025-07-24

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
"exchange": "NASDAQ",
"date": "2025-06-19",
"name": "Juneteenth",
"isClosed": true,
"adjOpenTime": null,
"adjCloseTime": null
}
]

All Exchange Market Hours API
Globe Flag
View the market hours for all exchanges. Check when different markets are active.

Endpoint:

https://financialmodelingprep.com/stable/all-exchange-market-hours

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
"exchange": "ASX",
"name": "Australian Stock Exchange",
"openingHour": "10:00 AM +10:00",
"closingHour": "04:00 PM +10:00",
"timezone": "Australia/Sydney",
"isMarketOpen": false
}
]
