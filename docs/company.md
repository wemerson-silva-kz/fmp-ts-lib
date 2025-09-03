Company
Company Profile Data API
Globe Flag
Access detailed company profile data with the FMP Company Profile Data API. This API provides key financial and operational information for a specific stock symbol, including the company's market capitalization, stock price, industry, and much more.

Endpoint:

https://financialmodelingprep.com/stable/profile?symbol=AAPL

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
"symbol": "AAPL",
"price": 232.8,
"marketCap": 3500823120000,
"beta": 1.24,
"lastDividend": 0.99,
"range": "164.08-260.1",
"change": 4.79,
"changePercentage": 2.1008,
"volume": 0,
"averageVolume": 50542058,
"companyName": "Apple Inc.",
"currency": "USD",
"cik": "0000320193",
"isin": "US0378331005",
"cusip": "037833100",
"exchangeFullName": "NASDAQ Global Select",
"exchange": "NASDAQ",
"industry": "Consumer Electronics",
"website": "https://www.apple.com",
"description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discov...",
"ceo": "Mr. Timothy D. Cook",
"sector": "Technology",
"country": "US",
"fullTimeEmployees": "164000",
"phone": "(408) 996-1010",
"address": "One Apple Park Way",
"city": "Cupertino",
"state": "CA",
"zip": "95014",
"image": "https://images.financialmodelingprep.com/symbol/AAPL.png",
"ipoDate": "1980-12-12",
"defaultImage": false,
"isEtf": false,
"isActivelyTrading": true,
"isAdr": false,
"isFund": false
}
]

Company Profile by CIK API
USA Flag
Retrieve detailed company profile data by CIK (Central Index Key) with the FMP Company Profile by CIK API. This API allows users to search for companies using their unique CIK identifier and access a full range of company data, including stock price, market capitalization, industry, and much more.

Endpoint:

https://financialmodelingprep.com/stable/profile-cik?cik=320193

Parameters

Query Parameter

Type

Example

cik\*

string

320193

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
[
{
"symbol": "AAPL",
"price": 232.8,
"marketCap": 3500823120000,
"beta": 1.24,
"lastDividend": 0.99,
"range": "164.08-260.1",
"change": 4.79,
"changePercentage": 2.1008,
"volume": 0,
"averageVolume": 50542058,
"companyName": "Apple Inc.",
"currency": "USD",
"cik": "0000320193",
"isin": "US0378331005",
"cusip": "037833100",
"exchangeFullName": "NASDAQ Global Select",
"exchange": "NASDAQ",
"industry": "Consumer Electronics",
"website": "https://www.apple.com",
"description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discov...",
"ceo": "Mr. Timothy D. Cook",
"sector": "Technology",
"country": "US",
"fullTimeEmployees": "164000",
"phone": "(408) 996-1010",
"address": "One Apple Park Way",
"city": "Cupertino",
"state": "CA",
"zip": "95014",
"image": "https://images.financialmodelingprep.com/symbol/AAPL.png",
"ipoDate": "1980-12-12",
"defaultImage": false,
"isEtf": false,
"isActivelyTrading": true,
"isAdr": false,
"isFund": false
}
]

Company Notes API
USA Flag
Retrieve detailed information about company-issued notes with the FMP Company Notes API. Access essential data such as CIK number, stock symbol, note title, and the exchange where the notes are listed.

Endpoint:

https://financialmodelingprep.com/stable/company-notes?symbol=AAPL

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
"cik": "0000320193",
"symbol": "AAPL",
"title": "1.000% Notes due 2022",
"exchange": "NASDAQ"
}
]

Stock Peer Comparison API
Globe Flag
Identify and compare companies within the same sector and market capitalization range using the FMP Stock Peer Comparison API. Gain insights into how a company stacks up against its peers on the same exchange.

Endpoint:

https://financialmodelingprep.com/stable/stock-peers?symbol=AAPL

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
"symbol": "GPRO",
"companyName": "GoPro, Inc.",
"price": 0.9668,
"mktCap": 152173717
}
]

Delisted Companies API
USA Flag
Stay informed with the FMP Delisted Companies API. Access a comprehensive list of companies that have been delisted from US exchanges to avoid trading in risky stocks and identify potential financial troubles.

Endpoint:

https://financialmodelingprep.com/stable/delisted-companies?page=0&limit=100

Parameters

Query Parameter

Type

Example

page

number

0

limit

number

100

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
[
{
"symbol": "BRQSF",
"companyName": "Borqs Technologies, Inc.",
"exchange": "PNK",
"ipoDate": "2017-08-24",
"delistedDate": "2025-02-03"
}
]

Company Employee Count API
USA Flag
Retrieve detailed workforce information for companies, including employee count, reporting period, and filing date. The FMP Company Employee Count API also provides direct links to official SEC documents for further verification and in-depth research.

Endpoint:

https://financialmodelingprep.com/stable/employee-count?symbol=AAPL

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
[
{
"symbol": "AAPL",
"cik": "0000320193",
"acceptanceTime": "2024-11-01 06:01:36",
"periodOfReport": "2024-09-28",
"companyName": "Apple Inc.",
"formType": "10-K",
"filingDate": "2024-11-01",
"employeeCount": 164000,
"source": "https://www.sec.gov/Archives/edgar/data/320193/000032019324000123/0000320193-24-000123-index.htm"
}
]

Company Historical Employee Count API
USA Flag
Access historical employee count data for a company based on specific reporting periods. The FMP Company Historical Employee Count API provides insights into how a company’s workforce has evolved over time, allowing users to analyze growth trends and operational changes.

Endpoint:

https://financialmodelingprep.com/stable/historical-employee-count?symbol=AAPL

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
[
{
"symbol": "AAPL",
"cik": "0000320193",
"acceptanceTime": "2024-11-01 06:01:36",
"periodOfReport": "2024-09-28",
"companyName": "Apple Inc.",
"formType": "10-K",
"filingDate": "2024-11-01",
"employeeCount": 164000,
"source": "https://www.sec.gov/Archives/edgar/data/320193/000032019324000123/0000320193-24-000123-index.htm"
}
]

Company Market Cap API
Globe Flag
Retrieve the market capitalization for a specific company on any given date using the FMP Company Market Capitalization API. This API provides essential data to assess the size and value of a company in the stock market, helping users gauge its overall market standing.

Endpoint:

https://financialmodelingprep.com/stable/market-capitalization?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

(\*) Required | Currency is as Trading
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
"symbol": "AAPL",
"date": "2025-02-04",
"marketCap": 3500823120000
}
]

Batch Market Cap API
Globe Flag
Retrieve market capitalization data for multiple companies in a single request with the FMP Batch Market Capitalization API. This API allows users to compare the market size of various companies simultaneously, streamlining the analysis of company valuations.

Endpoint:

https://financialmodelingprep.com/stable/market-capitalization-batch?symbols=AAPL,MSFT,GOOG

Parameters

Query Parameter

Type

Example

symbols\*

string

AAPL,MSFT,GOOG

(\*) Required
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
"symbol": "AAPL",
"date": "2025-02-04",
"marketCap": 3500823120000
}
]

Historical Market Cap API
Globe Flag
Access historical market capitalization data for a company using the FMP Historical Market Capitalization API. This API helps track the changes in market value over time, enabling long-term assessments of a company's growth or decline.

Endpoint:

https://financialmodelingprep.com/stable/historical-market-capitalization?symbol=AAPL

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

from

date

2025-04-24

to

date

2025-07-24

(\*) Required | Maximum 5000 records per request | Currency is as Trading
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
"symbol": "AAPL",
"date": "2024-02-29",
"marketCap": 2784608472000
}
]

Company Share Float & Liquidity API
Globe Flag
Understand the liquidity and volatility of a stock with the FMP Company Share Float and Liquidity API. Access the total number of publicly traded shares for any company to make informed investment decisions.

Endpoint:

https://financialmodelingprep.com/stable/shares-float?symbol=AAPL

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
"date": "2025-02-04 17:01:35",
"freeFloat": 99.9095,
"floatShares": 15024290700,
"outstandingShares": 15037900000
}
]

All Shares Float API
Globe Flag
Access comprehensive shares float data for all available companies with the FMP All Shares Float API. Retrieve critical information such as free float, float shares, and outstanding shares to analyze liquidity across a wide range of companies.

Endpoint:

https://financialmodelingprep.com/stable/shares-float-all?page=0&limit=1000

Parameters

Query Parameter

Type

Example

limit

number

1000

page

number

0

(\*) Required | Maximum 5000 records per request
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
"symbol": "6898.HK",
"date": "2025-02-04 17:27:01",
"freeFloat": 33.2536,
"floatShares": 318128880,
"outstandingShares": 956675009
}
]

Latest Mergers & Acquisitions API
USA Flag
Access real-time data on the latest mergers and acquisitions with the FMP Latest Mergers and Acquisitions API. This API provides key information such as the transaction date, company names, and links to detailed filing information for further analysis.

Endpoint:

https://financialmodelingprep.com/stable/mergers-acquisitions-latest?page=0&limit=100

Parameters

Query Parameter

Type

Example

page

number

0

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
11
12
13
[
{
"symbol": "NLOK",
"companyName": "NortonLifeLock Inc.",
"cik": "0000849399",
"targetedCompanyName": "MoneyLion Inc.",
"targetedCik": "0001807846",
"targetedSymbol": "ML",
"transactionDate": "2025-02-03",
"acceptedDate": "2025-02-03 06:01:10",
"link": "https://www.sec.gov/Archives/edgar/data/849399/000114036125002752/ny20039778x6_s4.htm"
}
]

Search Mergers & Acquisitions API
USA Flag
Search for specific mergers and acquisitions data with the FMP Search Mergers and Acquisitions API. Retrieve detailed information on M&A activity, including acquiring and targeted companies, transaction dates, and links to official SEC filings.

Endpoint:

https://financialmodelingprep.com/stable/mergers-acquisitions-search?name=Apple

Parameters

Query Parameter

Type

Example

name\*

string

Apple

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
"symbol": "PEGY",
"companyName": "Pineapple Energy Inc.",
"cik": "0000022701",
"targetedCompanyName": "Communications Systems, Inc.",
"targetedCik": "0000022701",
"targetedSymbol": "JCS",
"transactionDate": "2021-11-12",
"acceptedDate": "2021-11-12 09:54:22",
"link": "https://www.sec.gov/Archives/edgar/data/22701/000089710121000932/a211292_s-4.htm"
}
]

Company Executives API
Globe Flag
Retrieve detailed information on company executives with the FMP Company Executives API. This API provides essential data about key executives, including their name, title, compensation, and other demographic details such as gender and year of birth.

Endpoint:

https://financialmodelingprep.com/stable/key-executives?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

active

string

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
9
10
11
[
{
"title": "Vice President of Worldwide Sales",
"name": "Mr. Michael Fenger",
"pay": null,
"currencyPay": "USD",
"gender": "male",
"yearBorn": null,
"active": null
}
]

Executive Compensation API
USA Flag
Retrieve comprehensive compensation data for company executives with the FMP Executive Compensation API. This API provides detailed information on salaries, stock awards, total compensation, and other relevant financial data, including filing details and links to official documents.

Endpoint:

https://financialmodelingprep.com/stable/governance-executive-compensation?symbol=AAPL

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
[
{
"cik": "0000320193",
"symbol": "AAPL",
"companyName": "Apple Inc.",
"filingDate": "2025-01-10",
"acceptedDate": "2025-01-10 16:31:18",
"nameAndPosition": "Kate Adams Senior Vice President, General Counsel and Secretary",
"year": 2023,
"salary": 1000000,
"bonus": 0,
"stockAward": 22323641,
"optionAward": 0,
"incentivePlanCompensation": 3571150,
"allOtherCompensation": 46914,
"total": 26941705,
"link": "https://www.sec.gov/Archives/edgar/data/320193/000130817925000008/0001308179-25-000008-index.htm"
}
]

Executive Compensation Benchmark API
USA Flag
Gain access to average executive compensation data across various industries with the FMP Executive Compensation Benchmark API. This API provides essential insights for comparing executive pay by industry, helping you understand compensation trends and benchmarks.

Endpoint:

https://financialmodelingprep.com/stable/executive-compensation-benchmark

Parameters

Query Parameter

Type

Example

year

string

2024

(\*) Required
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
"industryTitle": "ABRASIVE, ASBESTOS & MISC NONMETALLIC MINERAL PRODS",
"year": 2023,
"averageCompensation": 694313.1666666666
}
]
