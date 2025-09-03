Earnings Transcript
Latest Earning Transcripts API
Globe Flag
Access available earnings transcripts for companies with the FMP Latest Earning Transcripts API. Retrieve a list of companies with earnings transcripts, along with the total number of transcripts available for each company.

Endpoint:

https://financialmodelingprep.com/stable/earning-call-transcript-latest

Parameters

Query Parameter

Type

Example

limit

number

100

page

number

0

(\*) Required | Maximum 100 records per request | Page maxed at 100
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
"symbol": "CSWC",
"period": "Q3",
"fiscalYear": 2025,
"date": "2025-02-04"
}
]

Earnings Transcript API
Globe Flag
Access the full transcript of a company’s earnings call with the FMP Earnings Transcript API. Stay informed about a company’s financial performance, future plans, and overall strategy by analyzing management's communication.

Endpoint:

https://financialmodelingprep.com/stable/earning-call-transcript?symbol=AAPL&year=2020&quarter=3

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

year\*

string

2020

quarter\*

string

3

limit

number

1

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
"period": "Q3",
"year": 2020,
"date": "2020-07-30",
"content": "Operator: Good day, everyone. Welcome to the Apple Incorporated Third Quarter Fiscal Year 2020 Earnings Conference Call. Today's call is being recorded. At this time, for opening remarks and introductions, I would like to turn things over to Mr. Tejas Gala, Senior Manager, Corporate Finance and Investor Relations. Please go ahead, sir.\nTejas Gala: Thank you. Good afternoon and thank you for joining us. Speaking first today is Apple's CEO, Tim Cook; and he'll be followed by CFO, Luca Maestri. Aft..."
}
]

Transcripts Dates By Symbol API
Globe Flag
Access earnings call transcript dates for specific companies with the FMP Transcripts Dates By Symbol API. Get a comprehensive overview of earnings call schedules based on fiscal year and quarter.

Endpoint:

https://financialmodelingprep.com/stable/earning-call-transcript-dates?symbol=AAPL

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
[
{
"quarter": 1,
"fiscalYear": 2025,
"date": "2025-01-30"
}
]

Available Transcript Symbols API
Globe Flag
Access a complete list of stock symbols with available earnings call transcripts using the FMP Available Earnings Transcript Symbols API. Retrieve information on which companies have earnings transcripts and how many are accessible for detailed financial analysis.
