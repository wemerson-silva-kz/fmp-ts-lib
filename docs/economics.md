Economics
Treasury Rates API
Access real-time and historical Treasury rates for all maturities with the FMP Treasury Rates API. Track key benchmarks for interest rates across the economy.

Endpoint:

https://financialmodelingprep.com/stable/treasury-rates

Parameters

Query Parameter

Type

Example

from

date

2025-04-24

to

date

2025-07-24

(\*) Required | Max 90-day date range
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
[
{
"date": "2024-02-29",
"month1": 5.53,
"month2": 5.5,
"month3": 5.45,
"month6": 5.3,
"year1": 5.01,
"year2": 4.64,
"year3": 4.43,
"year5": 4.26,
"year7": 4.28,
"year10": 4.25,
"year20": 4.51,
"year30": 4.38
}
]

Economics Indicators API
Access real-time and historical economic data for key indicators like GDP, unemployment, and inflation with the FMP Economic Indicators API. Use this data to measure economic performance and identify growth trends.

Endpoint:

https://financialmodelingprep.com/stable/economic-indicators?name=GDP

Parameters

Query Parameter

Type

Example

name\*

string

GDP,realGDP,nominalPotentialGDP,realGDPPerCapita,federalFunds,CPI,inflationRate,inflation,retailSales,consumerSentiment,durableGoods,unemploymentRate,totalNonfarmPayroll,initialClaims,industrialProductionTotalIndex,newPrivatelyOwnedHousingUnitsStartedTotalUnits,totalVehicleSales,retailMoneyFunds,smoothedUSRecessionProbabilities,3MonthOr90DayRatesAndYieldsCertificatesOfDeposit,commercialBankInterestRateOnCreditCardPlansAllAccounts,30YearFixedRateMortgageAverage,15YearFixedRateMortgageAverage

from

date

2024-07-24

to

date

2025-07-24

(\*) Required | Max 90-day date range
Response
1
2
3
4
5
6
7
[
{
"name": "GDP",
"date": "2024-01-01",
"value": 28624.069
}
]

Economic Data Releases Calendar API
Stay informed with the FMP Economic Data Releases Calendar API. Access a comprehensive calendar of upcoming economic data releases to prepare for market impacts and make informed investment decisions.

Endpoint:

https://financialmodelingprep.com/stable/economic-calendar

Parameters

Query Parameter

Type

Example

from

date

2025-04-24

to

date

2025-07-24

(\*) Required | Max 90-day date range
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
"date": "2024-03-01 03:35:00",
"country": "JP",
"event": "3-Month Bill Auction",
"currency": "JPY",
"previous": -0.112,
"estimate": null,
"actual": -0.096,
"change": 0.016,
"impact": "Low",
"changePercentage": 14.286
}
]

Market Risk Premium API
Access the market risk premium for specific dates with the FMP Market Risk Premium API. Use this key financial metric to assess the additional return expected from investing in the stock market over a risk-free investment.

Endpoint:

https://financialmodelingprep.com/stable/market-risk-premium

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
"country": "Zimbabwe",
"continent": "Africa",
"countryRiskPremium": 13.17,
"totalEquityRiskPremium": 17.77
}
]
