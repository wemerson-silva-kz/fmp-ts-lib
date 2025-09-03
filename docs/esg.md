ESG
ESG Investment Search API
USA Flag
Align your investments with your values using the FMP ESG Investment Search API. Discover companies and funds based on Environmental, Social, and Governance (ESG) scores, performance, controversies, and business involvement criteria.

Endpoint:

https://financialmodelingprep.com/stable/esg-disclosures?symbol=AAPL

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
[
{
"date": "2024-12-28",
"acceptedDate": "2025-01-30",
"symbol": "AAPL",
"cik": "0000320193",
"companyName": "Apple Inc.",
"formType": "8-K",
"environmentalScore": 52.52,
"socialScore": 45.18,
"governanceScore": 60.74,
"ESGScore": 52.81,
"url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000007/0000320193-25-000007-index.htm"
}
]

ESG Ratings API
USA Flag
Access comprehensive ESG ratings for companies and funds with the FMP ESG Ratings API. Make informed investment decisions based on environmental, social, and governance (ESG) performance data.

Endpoint:

https://financialmodelingprep.com/stable/esg-ratings?symbol=AAPL

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
"cik": "0000320193",
"companyName": "Apple Inc.",
"industry": "CONSUMER ELECTRONICS",
"fiscalYear": 2024,
"ESGRiskRating": "B",
"industryRank": "4 out of 5"
}
]

ESG Benchmark Comparison API
USA Flag
Evaluate the ESG performance of companies and funds with the FMP ESG Benchmark Comparison API. Compare ESG leaders and laggards within industries to make informed and responsible investment decisions.

Endpoint:

https://financialmodelingprep.com/stable/esg-benchmark

Parameters

Query Parameter

Type

Example

year

string

2023

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
"fiscalYear": 2023,
"sector": "APPAREL RETAIL",
"environmentalScore": 61.36,
"socialScore": 67.44,
"governanceScore": 68.1,
"ESGScore": 65.63
}
]
