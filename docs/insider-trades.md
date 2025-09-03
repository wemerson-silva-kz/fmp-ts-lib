Insider Trades
Latest Insider Trading API
USA Flag
Access the latest insider trading activity using the Latest Insider Trading API. Track which company insiders are buying or selling stocks and analyze their transactions.

Endpoint:

https://financialmodelingprep.com/stable/insider-trading/latest?page=0&limit=100

Parameters

Query Parameter

Type

Example

date

date

2025-04-24

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
12
13
14
15
16
17
18
19
20
[
{
"symbol": "APA",
"filingDate": "2025-02-04",
"transactionDate": "2025-02-01",
"reportingCik": "0001380034",
"companyCik": "0001841666",
"transactionType": "M-Exempt",
"securitiesOwned": 104398,
"reportingName": "Hoyt Rebecca A",
"typeOfOwner": "officer: Sr. VP, Chief Acct Officer",
"acquisitionOrDisposition": "A",
"directOrIndirect": "D",
"formType": "4",
"securitiesTransacted": 3450,
"price": 0,
"securityName": "Common Stock",
"url": "https://www.sec.gov/Archives/edgar/data/1841666/000194906025000035/0001949060-25-000035-index.htm"
}
]

Search Insider Trades API
USA Flag
Search insider trading activity by company or symbol using the Search Insider Trades API. Find specific trades made by corporate insiders, including executives and directors.

Endpoint:

https://financialmodelingprep.com/stable/insider-trading/search?page=0&limit=100

Parameters

Query Parameter

Type

Example

symbol

string

AAPL

page

number

0

limit

number

100

reportingCik

string

0001496686

companyCik

string

0000320193

transactionType

string

S-Sale

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
12
13
14
15
16
17
18
19
20
[
{
"symbol": "AAPL",
"filingDate": "2025-02-04",
"transactionDate": "2025-02-03",
"reportingCik": "0001214128",
"companyCik": "0000320193",
"transactionType": "S-Sale",
"securitiesOwned": 4159576,
"reportingName": "LEVINSON ARTHUR D",
"typeOfOwner": "director",
"acquisitionOrDisposition": "D",
"directOrIndirect": "D",
"formType": "4",
"securitiesTransacted": 1516,
"price": 226.3501,
"securityName": "Common Stock",
"url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000019/0000320193-25-000019-index.htm"
}
]

Search Insider Trades by Reporting Name API
USA Flag
Search for insider trading activity by reporting name using the Search Insider Trades by Reporting Name API. Track trading activities of specific individuals or groups involved in corporate insider transactions.

Endpoint:

https://financialmodelingprep.com/stable/insider-trading/reporting-name?name=Zuckerberg

Parameters

Query Parameter

Type

Example

name\*

string

Zuckerberg

(\*) Required
Response
1
2
3
4
5
6
[
{
"reportingCik": "0001548760",
"reportingName": "Zuckerberg Mark"
}
]

All Insider Transaction Types API
USA Flag
Access a comprehensive list of insider transaction types with the All Insider Transaction Types API. This API provides details on various transaction actions, including purchases, sales, and other corporate actions involving insider trading.

Endpoint:

https://financialmodelingprep.com/stable/insider-trading-transaction-type

Response
1
2
3
4
5
[
{
"transactionType": "A-Award"
}
]

Insider Trade Statistics API
USA Flag
Analyze insider trading activity with the Insider Trade Statistics API. This API provides key statistics on insider transactions, including total purchases, sales, and trends for specific companies or stock symbols.

Endpoint:

https://financialmodelingprep.com/stable/insider-trading/statistics?symbol=AAPL

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
[
{
"symbol": "AAPL",
"cik": "0000320193",
"year": 2024,
"quarter": 4,
"acquiredTransactions": 6,
"disposedTransactions": 38,
"acquiredDisposedRatio": 0.1579,
"totalAcquired": 994544,
"totalDisposed": 2297088,
"averageAcquired": 165757.3333,
"averageDisposed": 60449.6842,
"totalPurchases": 0,
"totalSales": 22
}
]

Acquisition Ownership API
USA Flag
Track changes in stock ownership during acquisitions using the Acquisition Ownership API. This API provides detailed information on how mergers, takeovers, or beneficial ownership changes impact the stock ownership structure of a company.

Endpoint:

https://financialmodelingprep.com/stable/acquisition-of-beneficial-ownership?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

limit

number

2000

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
"filingDate": "2024-02-14",
"acceptedDate": "2024-02-14",
"cusip": "037833100",
"nameOfReportingPerson": "National Indemnity Company",
"citizenshipOrPlaceOfOrganization": "State of Nebraska",
"soleVotingPower": "0",
"sharedVotingPower": "755059877",
"soleDispositivePower": "0",
"sharedDispositivePower": "755059877",
"amountBeneficiallyOwned": "755059877",
"percentOfClass": "4.8",
"typeOfReportingPerson": "IC, EP, IN, CO",
"url": "https://www.sec.gov/Archives/edgar/data/320193/000119312524036431/d751537dsc13ga.htm"
}
]
