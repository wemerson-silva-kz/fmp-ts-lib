Sec Filings
Latest 8-K SEC Filings API
USA Flag
Stay up-to-date with the most recent 8-K filings from publicly traded companies using the FMP Latest 8-K SEC Filings API. Get real-time access to significant company events such as mergers, acquisitions, leadership changes, and other material events that may impact the market.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-8k?from=2024-01-01&to=2024-03-01&page=0&limit=100

Parameters

Query Parameter

Type

Example

from\*

string

2024-01-01

to\*

string

2024-03-01

page

number

0

limit

number

100

(\*) Required | Maximum 1000 records per request | Page maxed at 100 | Max 90-day date range
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
"symbol": "BROS",
"cik": "0001866581",
"filingDate": "2024-03-01 00:00:00",
"acceptedDate": "2024-02-29 21:43:41",
"formType": "8-K",
"hasFinancials": false,
"link": "https://www.sec.gov/Archives/edgar/data/1866581/000162828024008098/0001628280-24-008098-index.htm",
"finalLink": "https://www.sec.gov/Archives/edgar/data/1866581/000162828024008098/exhibit11-8xkfeb2024.htm"
}
]

Latest SEC Filings API
USA Flag
Stay updated with the most recent SEC filings from publicly traded companies using the FMP Latest SEC Filings API. Access essential regulatory documents, including financial statements, annual reports, 8-K, 10-K, and 10-Q forms.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-financials?from=2024-01-01&to=2024-03-01&page=0&limit=100

Parameters

Query Parameter

Type

Example

from\*

string

2024-01-01

to\*

string

2024-03-01

page

number

0

limit

number

100

(\*) Required | Maximum 1000 records per request | Page maxed at 100 | Max 90-day date range
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
"symbol": "MTZ",
"cik": "0000015615",
"filingDate": "2024-03-01 00:00:00",
"acceptedDate": "2024-02-29 21:24:32",
"formType": "8-K",
"hasFinancials": true,
"link": "https://www.sec.gov/Archives/edgar/data/15615/000119312524054015/0001193125-24-054015-index.htm",
"finalLink": "https://www.sec.gov/Archives/edgar/data/15615/000119312524054015/d775448dex991.htm"
}
]

SEC Filings By Form Type API
USA Flag
Search for specific SEC filings by form type with the FMP SEC Filings By Form Type API. Retrieve filings such as 10-K, 10-Q, 8-K, and others, filtered by the exact type of document you're looking for.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-search/form-type?formType=8-K&from=2024-01-01&to=2024-03-01&page=0&limit=100

Parameters

Query Parameter

Type

Example

formType\*

string

8-K

from\*

string

2024-01-01

to\*

string

2024-03-01

page

number

0

limit

number

100

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
[
{
"symbol": "BROS",
"cik": "0001866581",
"filingDate": "2024-03-01 00:00:00",
"acceptedDate": "2024-02-29 21:43:41",
"formType": "8-K",
"link": "https://www.sec.gov/Archives/edgar/data/1866581/000162828024008098/0001628280-24-008098-index.htm",
"finalLink": "https://www.sec.gov/Archives/edgar/data/1866581/000162828024008098/exhibit11-8xkfeb2024.htm"
}
]

SEC Filings By Symbol API
USA Flag
Search and retrieve SEC filings by company symbol using the FMP SEC Filings By Symbol API. Gain direct access to regulatory filings such as 8-K, 10-K, and 10-Q reports for publicly traded companies.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-search/symbol?symbol=AAPL&from=2024-01-01&to=2024-03-01&page=0&limit=100

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

from\*

string

2024-01-01

to\*

string

2024-03-01

page

number

0

limit

number

100

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
[
{
"symbol": "AAPL",
"cik": "0000320193",
"filingDate": "2024-02-28 00:00:00",
"acceptedDate": "2024-02-28 17:09:05",
"formType": "8-K",
"link": "https://www.sec.gov/Archives/edgar/data/320193/000114036124010155/0001140361-24-010155-index.htm",
"finalLink": "https://www.sec.gov/Archives/edgar/data/320193/000114036124010155/ny20022580x1_image01.jpg"
}
]

SEC Filings By CIK API
USA Flag
Search for SEC filings using the FMP SEC Filings By CIK API. Access detailed regulatory filings by Central Index Key (CIK) number, enabling you to track all filings related to a specific company or entity.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-search/cik?cik=0000320193&from=2024-01-01&to=2024-03-01&page=0&limit=100

Parameters

Query Parameter

Type

Example

cik\*

string

0000320193

from\*

string

2024-01-01

to\*

string

2024-03-01

page

number

0

limit

number

100

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
[
{
"symbol": "AAPL",
"cik": "0000320193",
"filingDate": "2024-02-28 00:00:00",
"acceptedDate": "2024-02-28 17:09:05",
"formType": "8-K",
"link": "https://www.sec.gov/Archives/edgar/data/320193/000114036124010155/0001140361-24-010155-index.htm",
"finalLink": "https://www.sec.gov/Archives/edgar/data/320193/000114036124010155/ny20022580x1_image01.jpg"
}
]

SEC Filings By Name API
USA Flag
Search for SEC filings by company or entity name using the FMP SEC Filings By Name API. Quickly retrieve official filings for any organization based on its name.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-company-search/name?company=Berkshire

Parameters

Query Parameter

Type

Example

company\*

string

Berkshire

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
"symbol": "None",
"name": "BERKSHIRE MULTIFAMILY VALUE FUND II LP",
"cik": "0001418405",
"sicCode": "",
"industryTitle": "",
"businessAddress": "c/o Berkshire Property Advisors LLC, Boston MA 02108",
"phoneNumber": "(617) 646-2300"
}
]

SEC Filings Company Search By Symbol API
USA Flag
Find company information and regulatory filings using a stock symbol with the FMP SEC Filings Company Search By Symbol API. Quickly access essential company details based on stock ticker symbols.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-company-search/symbol?symbol=AAPL

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
"name": "APPLE INC.",
"cik": "0000320193",
"sicCode": "3571",
"industryTitle": "ELECTRONIC COMPUTERS",
"businessAddress": "ONE APPLE PARK WAY, CUPERTINO CA 95014",
"phoneNumber": "(408) 996-1010"
}
]

SEC Filings Company Search By CIK API
USA Flag
Easily find company information using a CIK (Central Index Key) with the FMP SEC Filings Company Search By CIK API. Access essential company details and filings linked to a specific CIK number.

Endpoint:

https://financialmodelingprep.com/stable/sec-filings-company-search/cik?cik=0000320193

Parameters

Query Parameter

Type

Example

cik\*

string

0000320193

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
"name": "APPLE INC.",
"cik": "0000320193",
"sicCode": "3571",
"industryTitle": "ELECTRONIC COMPUTERS",
"businessAddress": "ONE APPLE PARK WAY, CUPERTINO CA 95014",
"phoneNumber": "(408) 996-1010"
}
]

SEC Company Full Profile API
USA Flag
Retrieve detailed company profiles, including business descriptions, executive details, contact information, and financial data with the FMP SEC Company Full Profile API.

Endpoint:

https://financialmodelingprep.com/stable/sec-profile?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

cik-A

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
[
{
"symbol": "AAPL",
"cik": "0000320193",
"registrantName": "Apple Inc.",
"sicCode": "3571",
"sicDescription": "Electronic Computers",
"sicGroup": "Consumer Electronics",
"isin": "US0378331005",
"businessAddress": "ONE APPLE PARK WAY,CUPERTINO CA 95014,(408) 996-1010",
"mailingAddress": "ONE APPLE PARK WAY,CUPERTINO CA 95014",
"phoneNumber": "(408) 996-1010",
"postalCode": "95014",
"city": "Cupertino",
"state": "CA",
"country": "US",
"description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discov...",
"ceo": "Mr. Timothy D. Cook",
"website": "https://www.apple.com",
"exchange": "NASDAQ",
"stateLocation": "CA",
"stateOfIncorporation": "CA",
"fiscalYearEnd": "09-28",
"ipoDate": "1980-12-12",
"employees": "164000",
"secFilingsUrl": "https://www.sec.gov/cgi-bin/browse-edgar?CIK=0000320193",
"taxIdentificationNumber": "94-2404110",
"fiftyTwoWeekRange": "164.08 - 260.1",
"isActive": true,
"assetType": "stock",
"openFigiComposite": "BBG000B9XRY4",
"priceCurrency": "USD",
"marketSector": "Technology",
"securityType": null,
"isEtf": false,
"isAdr": false,
"isFund": false
}
]

Industry Classification List API
USA Flag
Retrieve a comprehensive list of industry classifications, including Standard Industrial Classification (SIC) codes and industry titles with the FMP Industry Classification List API.

Endpoint:

https://financialmodelingprep.com/stable/standard-industrial-classification-list

Parameters

Query Parameter

Type

Example

industryTitle

string

SERVICES

sicCode

string

7371

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
"office": "Office of Life Sciences",
"sicCode": "100",
"industryTitle": "AGRICULTURAL PRODUCTION-CROPS"
}
]

Industry Classification Search API
USA Flag
Search and retrieve industry classification details for companies, including SIC codes, industry titles, and business information, with the FMP Industry Classification Search API.

Endpoint:

https://financialmodelingprep.com/stable/industry-classification-search

Parameters

Query Parameter

Type

Example

symbol

string

AAPL

cik

string

320193

sicCode

string

7371

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
"name": "APPLE INC.",
"cik": "0000320193",
"sicCode": "3571",
"industryTitle": "ELECTRONIC COMPUTERS",
"businessAddress": "['ONE APPLE PARK WAY', 'CUPERTINO CA 95014']",
"phoneNumber": "(408) 996-1010"
}
]

All Industry Classification API
USA Flag
Access comprehensive industry classification data for companies across all sectors with the FMP All Industry Classification API. Retrieve key details such as SIC codes, industry titles, and business contact information.

Endpoint:

https://financialmodelingprep.com/stable/all-industry-classification

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
"symbol": "0Q16.L",
"name": "BANK OF AMERICA CORP /DE/",
"cik": "0000070858",
"sicCode": "6021",
"industryTitle": "NATIONAL COMMERCIAL BANKS",
"businessAddress": "['BANK OF AMERICA CORPORATE CENTER', 'CHARLOTTE NC 28255']",
"phoneNumber": "7043868486"
}
]
