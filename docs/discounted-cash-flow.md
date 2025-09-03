Discounted Cash Flow
DCF Valuation API
Globe Flag
Estimate the intrinsic value of a company with the FMP Discounted Cash Flow Valuation API. Calculate the DCF valuation based on expected future cash flows and discount rates.

Endpoint:

https://financialmodelingprep.com/stable/discounted-cash-flow?symbol=AAPL

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
"symbol": "AAPL",
"date": "2025-02-04",
"dcf": 147.2669883190846,
"Stock Price": 231.795
}
]

Levered DCF API
Globe Flag
Analyze a company’s value with the FMP Levered Discounted Cash Flow (DCF) API, which incorporates the impact of debt. This API provides post-debt company valuation, offering investors a more accurate measure of a company's true worth by accounting for its debt obligations.

Endpoint:

https://financialmodelingprep.com/stable/levered-discounted-cash-flow?symbol=AAPL

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
"symbol": "AAPL",
"date": "2025-02-04",
"dcf": 147.2669883190846,
"Stock Price": 231.795
}
]

Custom DCF Advanced API
Globe Flag
Run a tailored Discounted Cash Flow (DCF) analysis using the FMP Custom DCF Advanced API. With detailed inputs, this API allows users to fine-tune their assumptions and variables, offering a more personalized and precise valuation for a company.

Endpoint:

https://financialmodelingprep.com/stable/custom-discounted-cash-flow?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

revenueGrowthPct

number

0.1094119804597946

ebitdaPct

number

0.31273548388

depreciationAndAmortizationPct

number

0.0345531631720999

cashAndShortTermInvestmentsPct

number

0.2344222126801843

receivablesPct

number

0.1533770531229388

inventoriesPct

number

0.0155245674227653

payablePct

number

0.1614868903169657

ebitPct

number

0.2781823207138459

capitalExpenditurePct

number

0.0306025847141713

operatingCashFlowPct

number

0.2886333485760204

sellingGeneralAndAdministrativeExpensesPct

number

0.0662854095187211

taxRate

number

0.14919579658453103

longTermGrowthRate

number

4

costOfDebt

number

3.64

costOfEquity

number

9.51168

marketRiskPremium

number

4.72

beta

number

1.244

riskFreeRate

number

3.64

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
41
42
43
44
45
46
47
48
49
50
51
[
{
"year": "2029",
"symbol": "AAPL",
"revenue": 657173266965,
"revenuePercentage": 10.94,
"ebitda": 205521399637,
"ebitdaPercentage": 31.27,
"ebit": 182813984515,
"ebitPercentage": 27.82,
"depreciation": 22707415125,
"depreciationPercentage": 3.46,
"totalCash": 154056011356,
"totalCashPercentage": 23.44,
"receivables": 100795299078,
"receivablesPercentage": 15.34,
"inventories": 10202330691,
"inventoriesPercentage": 1.55,
"payable": 106124867281,
"payablePercentage": 16.15,
"capitalExpenditure": 20111200574,
"capitalExpenditurePercentage": 3.06,
"price": 232.8,
"beta": 1.244,
"dilutedSharesOutstanding": 15408095000,
"costofDebt": 3.64,
"taxRate": 24.09,
"afterTaxCostOfDebt": 2.76,
"riskFreeRate": 3.64,
"marketRiskPremium": 4.72,
"costOfEquity": 9.51,
"totalDebt": 106629000000,
"totalEquity": 3587004516000,
"totalCapital": 3693633516000,
"debtWeighting": 2.89,
"equityWeighting": 97.11,
"wacc": 9.33,
"taxRateCash": 14919580,
"ebiat": 155538906468,
"ufcf": 197876962552,
"sumPvUfcf": 616840860880,
"longTermGrowthRate": 4,
"terminalValue": 3863553224578,
"presentTerminalValue": 2473772391290,
"enterpriseValue": 3090613252170,
"netDebt": 76686000000,
"equityValue": 3013927252170,
"equityValuePerShare": 195.61,
"freeCashFlowT1": 205792041054
}
]

Custom DCF Levered API
Globe Flag
Run a tailored Discounted Cash Flow (DCF) analysis using the FMP Custom DCF Advanced API. With detailed inputs, this API allows users to fine-tune their assumptions and variables, offering a more personalized and precise valuation for a company.

Endpoint:

https://financialmodelingprep.com/stable/custom-levered-discounted-cash-flow?symbol=AAPL

Parameters

Query Parameter

Type

Example

symbol\*

string

AAPL

revenueGrowthPct

number

0.1094119804597946

ebitdaPct

number

0.31273548388

depreciationAndAmortizationPct

number

0.0345531631720999

cashAndShortTermInvestmentsPct

number

0.2344222126801843

receivablesPct

number

0.1533770531229388

inventoriesPct

number

0.0155245674227653

payablePct

number

0.1614868903169657

ebitPct

number

0.2781823207138459

capitalExpenditurePct

number

0.0306025847141713

operatingCashFlowPct

number

0.2886333485760204

sellingGeneralAndAdministrativeExpensesPct

number

0.0662854095187211

taxRate

number

0.14919579658453103

longTermGrowthRate

number

4

costOfDebt

number

3.64

costOfEquity

number

9.51168

marketRiskPremium

number

4.72

beta

number

1.244

riskFreeRate

number

3.64

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
[
{
"year": "2029",
"symbol": "AAPL",
"revenue": 657173266965,
"revenuePercentage": 10.94,
"capitalExpenditure": 20111200574,
"capitalExpenditurePercentage": 3.06,
"price": 232.8,
"beta": 1.244,
"dilutedSharesOutstanding": 15408095000,
"costofDebt": 3.64,
"taxRate": 24.09,
"afterTaxCostOfDebt": 2.76,
"riskFreeRate": 3.64,
"marketRiskPremium": 4.72,
"costOfEquity": 9.51,
"totalDebt": 106629000000,
"totalEquity": 3587004516000,
"totalCapital": 3693633516000,
"debtWeighting": 2.89,
"equityWeighting": 97.11,
"wacc": 9.33,
"operatingCashFlow": 189682120638,
"pvLfcf": 134327365439,
"sumPvLfcf": 652368547936,
"longTermGrowthRate": 4,
"freeCashFlow": 209793321212,
"terminalValue": 4096220460472,
"presentTerminalValue": 2622745564702,
"enterpriseValue": 3275114112638,
"netDebt": 76686000000,
"equityValue": 3198428112638,
"equityValuePerShare": 207.58,
"freeCashFlowT1": 218185054060,
"operatingCashFlowPercentage": 28.86
}
]
