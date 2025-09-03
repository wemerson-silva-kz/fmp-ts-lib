Senate
Latest Senate Financial Disclosures API
USA Flag
Access the latest financial disclosures from U.S. Senate members with the FMP Latest Senate Financial Disclosures API. Track recent trades, asset ownership, and transaction details for enhanced transparency in government financial activities.

Endpoint:

https://financialmodelingprep.com/stable/senate-latest?page=0&limit=100

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

(\*) Required | Maximum 250 records per request | Page maxed at 100
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
[
{
"symbol": "LRN",
"disclosureDate": "2025-01-31",
"transactionDate": "2025-01-02",
"firstName": "Markwayne",
"lastName": "Mullin",
"office": "Markwayne Mullin",
"district": "OK",
"owner": "Self",
"assetDescription": "Stride Inc",
"assetType": "Stock",
"type": "Purchase",
"amount": "$15,001 - $50,000",
"comment": "",
"link": "https://efdsearch.senate.gov/search/view/ptr/446c7588-5f97-42c0-8983-3ca975b91793/"
}
]

Latest House Financial Disclosures API
USA Flag
Access real-time financial disclosures from U.S. House members with the FMP Latest House Financial Disclosures API. Track recent trades, asset ownership, and financial holdings for enhanced visibility into political figures' financial activities.

Endpoint:

https://financialmodelingprep.com/stable/house-latest?page=0&limit=100

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

(\*) Required | Maximum 250 records per request | Page maxed at 100
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
"symbol": "$VIRTUALUSD",
"disclosureDate": "2025-02-03",
"transactionDate": "2025-01-03",
"firstName": "Michael",
"lastName": "Collins",
"office": "Michael Collins",
"district": "GA10",
"owner": "",
"assetDescription": "VIRTUALS PROTOCOL",
"assetType": "Cryptocurrency",
"type": "Purchase",
"amount": "$1,001 - $15,000",
"capitalGainsOver200USD": "False",
"comment": "",
"link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2025/20026696.pdf"
}
]

Senate Trading Activity API
USA Flag
Monitor the trading activity of US Senators with the FMP Senate Trading Activity API. Access detailed information on trades made by Senators, including trade dates, assets, amounts, and potential conflicts of interest.

Endpoint:

https://financialmodelingprep.com/stable/senate-trades?symbol=AAPL

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
"symbol": "AAPL",
"disclosureDate": "2025-01-08",
"transactionDate": "2024-12-19",
"firstName": "Sheldon",
"lastName": "Whitehouse",
"office": "Sheldon Whitehouse",
"district": "RI",
"owner": "Self",
"assetDescription": "Apple Inc",
"assetType": "Stock",
"type": "Sale (Partial)",
"amount": "$15,001 - $50,000",
"capitalGainsOver200USD": "False",
"comment": "--",
"link": "https://efdsearch.senate.gov/search/view/ptr/70c80513-d89a-4382-afa6-d80f6c1fcbf1/"
}
]

Senate Trades By Name API
USA Flag
Endpoint:

https://financialmodelingprep.com/stable/senate-trades-by-name?name=Jerry

Parameters

Query Parameter

Type

Example

name\*

string

Jerry

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
"symbol": "BRK/B",
"disclosureDate": "2025-01-18",
"transactionDate": "2024-12-16",
"firstName": "Jerry",
"lastName": "Moran",
"office": "Jerry Moran",
"district": "KS",
"owner": "Self",
"assetDescription": "Berkshire Hathaway Inc",
"assetType": "Stock",
"type": "Purchase",
"amount": "$1,001 - $15,000",
"capitalGainsOver200USD": "False",
"comment": "",
"link": "https://efdsearch.senate.gov/search/view/ptr/e37322e3-0829-4e3c-9faf-7a4a1a957e09/"
}
]

U.S. House Trades API
USA Flag
Track the financial trades made by U.S. House members and their families with the FMP U.S. House Trades API. Access real-time information on stock sales, purchases, and other investment activities to gain insight into their financial decisions.

Endpoint:

https://financialmodelingprep.com/stable/house-trades?symbol=AAPL

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
"symbol": "AAPL",
"disclosureDate": "2025-01-20",
"transactionDate": "2024-12-31",
"firstName": "Nancy",
"lastName": "Pelosi",
"office": "Nancy Pelosi",
"district": "CA11",
"owner": "Spouse",
"assetDescription": "Apple Inc",
"assetType": "Stock",
"type": "Sale",
"amount": "$10,000,001 - $25,000,000",
"capitalGainsOver200USD": "False",
"comment": "",
"link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2025/20026590.pdf"
}
]

House Trades By Name API
USA Flag
Endpoint:

https://financialmodelingprep.com/stable/house-trades-by-name?name=James

Parameters

Query Parameter

Type

Example

name\*

string

James

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
"symbol": "LUV",
"disclosureDate": "2025-01-13",
"transactionDate": "2024-12-31",
"firstName": "James",
"lastName": "Comer",
"office": "James Comer",
"district": "KY01",
"owner": "",
"assetDescription": "Southwest Airlines Co",
"assetType": "Stock",
"type": "Sale",
"amount": "$1,001 - $15,000",
"capitalGainsOver200USD": "False",
"comment": "",
"link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2025/20018054.pdf"
}
]
