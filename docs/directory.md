Directory
Company Symbols List API
Globe Flag
Easily retrieve a comprehensive list of financial symbols with the FMP Company Symbols List API. Access a broad range of stock symbols and other tradable financial instruments from various global exchanges, helping you explore the full range of available securities.

Endpoint:

https://financialmodelingprep.com/stable/stock-list

Response
1
2
3
4
5
6
[
{
"symbol": "6898.HK",
"companyName": "China Aluminum Cans Holdings Limited"
}
]

Financial Statement Symbols List API
Globe Flag
Access a comprehensive list of companies with available financial statements through the FMP Financial Statement Symbols List API. Find companies listed on major global exchanges and obtain up-to-date financial data including income statements, balance sheets, and cash flow statements, are provided.

Endpoint:

https://financialmodelingprep.com/stable/financial-statement-symbol-list

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
"symbol": "6898.HK",
"companyName": "China Aluminum Cans Holdings Limited",
"tradingCurrency": "HKD",
"reportingCurrency": "HKD"
}
]

CIK List API
USA Flag
Access a comprehensive database of CIK (Central Index Key) numbers for SEC-registered entities with the FMP CIK List API. This endpoint is essential for businesses, financial professionals, and individuals who need quick access to CIK numbers for regulatory compliance, financial transactions, and investment research.

Endpoint:

https://financialmodelingprep.com/stable/cik-list?page=0&limit=1000

Parameters

Query Parameter

Type

Example

page

number

0

limit

number

1000

(\*) Required | Maximum 10000 records per request
Response
1
2
3
4
5
6
[
{
"cik": "0002036063",
"companyName": "LUZ Capital Partners, LLC"
}
]

Symbol Changes List API
USA Flag
Stay informed about the latest stock symbol changes with the FMP Stock Symbol Changes API. Track changes due to mergers, acquisitions, stock splits, and name changes to ensure accurate trading and analysis.

Endpoint:

https://financialmodelingprep.com/stable/symbol-change

Parameters

Query Parameter

Type

Example

invalid

string

false

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
[
{
"date": "2025-02-03",
"companyName": "XPLR Infrastructure, LP Common Units representing limited partner interests",
"oldSymbol": "NEP",
"newSymbol": "XIFR"
}
]

ETF Symbol Search API
Globe Flag
Quickly find ticker symbols and company names for Exchange Traded Funds (ETFs) using the FMP ETF Symbol Search API. This tool simplifies identifying specific ETFs by their name or ticker.

Endpoint:

https://financialmodelingprep.com/stable/etf-list

Response
1
2
3
4
5
6
[
{
"symbol": "GULF",
"name": "WisdomTree Middle East Dividend Fund"
}
]

Actively Trading List API
Globe Flag
List all actively trading companies and financial instruments with the FMP Actively Trading List API. This endpoint allows users to filter and display securities that are currently being traded on public exchanges, ensuring you access real-time market activity.

Endpoint:

https://financialmodelingprep.com/stable/actively-trading-list

Response
1
2
3
4
5
6
[
{
"symbol": "6898.HK",
"name": "China Aluminum Cans Holdings Limited"
}
]

Earnings Transcript List API
USA Flag
Access available earnings transcripts for companies with the FMP Earnings Transcript List API. Retrieve a list of companies with earnings transcripts, along with the total number of transcripts available for each company.

Endpoint:

https://financialmodelingprep.com/stable/earnings-transcript-list

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
"symbol": "MCUJF",
"companyName": "Medicure Inc.",
"noOfTranscripts": "16"
}
]

Available Exchanges API
Globe Flag
Access a complete list of supported stock exchanges using the FMP Available Exchanges API. This API provides a comprehensive overview of global stock exchanges, allowing users to identify where securities are traded and filter data by specific exchanges for further analysis.

Endpoint:

https://financialmodelingprep.com/stable/available-exchanges

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
"exchange": "AMEX",
"name": "New York Stock Exchange Arca",
"countryName": "United States of America",
"countryCode": "US",
"symbolSuffix": "N/A",
"delay": "Real-time"
}
]

Available Sectors API
Access a complete list of industry sectors using the FMP Available Sectors API. This API helps users categorize and filter companies based on their respective sectors, enabling deeper analysis and more focused queries across different industries.

Endpoint:

https://financialmodelingprep.com/stable/available-sectors

Response
1
2
3
4
5
[
{
"sector": "Basic Materials"
}
]

Available Industries API
Access a comprehensive list of industries where stock symbols are available using the FMP Available Industries API. This API helps users filter and categorize companies based on their industry for more focused research and analysis.

Endpoint:

https://financialmodelingprep.com/stable/available-industries

Response
1
2
3
4
5
[
{
"industry": "Steel"
}
]

Available Countries API
Access a comprehensive list of countries where stock symbols are available with the FMP Available Countries API. This API enables users to filter and analyze stock symbols based on the country of origin or the primary market where the securities are traded.

Endpoint:

https://financialmodelingprep.com/stable/available-countries

Response
1
2
3
4
5
[
{
"country": "FK"
}
]
