Fundraisers
Latest Crowdfunding Campaigns API
USA Flag
Discover the most recent crowdfunding campaigns with the FMP Latest Crowdfunding Campaigns API. Stay informed on which companies and projects are actively raising funds, their financial details, and offering terms.

Endpoint:

https://financialmodelingprep.com/stable/crowdfunding-offerings-latest?page=0&limit=100

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
52
[
{
"cik": "0002050877",
"companyName": "PowerGreen Capital Corp",
"date": "01-27-2025",
"filingDate": "2025-02-04 00:00:00",
"acceptedDate": "2025-02-04 16:17:49",
"formType": "C/A",
"formSignification": "Offering Statement Amendement",
"nameOfIssuer": "PowerGreen Capital Corp",
"legalStatusForm": "Limited Liability Company",
"jurisdictionOrganization": "PA",
"issuerStreet": "1614 PUGHTOWN RD",
"issuerCity": "PHOENIXVILLE",
"issuerStateOrCountry": "PA",
"issuerZipCode": "19460",
"issuerWebsite": "www.powergreencapital.com",
"intermediaryCompanyName": "Honeycomb Portal LLC",
"intermediaryCommissionCik": "0001705726",
"intermediaryCommissionFileNumber": "007-00119",
"compensationAmount": "Applied at marginal rate based upon amount of total offering: up to $50,000 = 8.0%, $50,001 - $100,000 = 7.0%, $100,001+ = 6.0%. $250 posting fee. 2.85% investment fee capped at $37.25.",
"financialInterest": "None",
"securityOfferedType": "Other",
"securityOfferedOtherDescription": "SAFE (Simple Agreement for Future Equity)",
"numberOfSecurityOffered": 124000,
"offeringPrice": 1,
"offeringAmount": 60000,
"overSubscriptionAccepted": "Y",
"overSubscriptionAllocationType": "First-come, first-served basis",
"maximumOfferingAmount": 124000,
"offeringDeadlineDate": "03-13-2025",
"currentNumberOfEmployees": 2,
"totalAssetMostRecentFiscalYear": 193070,
"totalAssetPriorFiscalYear": 0,
"cashAndCashEquiValentMostRecentFiscalYear": 5957,
"cashAndCashEquiValentPriorFiscalYear": 0,
"accountsReceivableMostRecentFiscalYear": 0,
"accountsReceivablePriorFiscalYear": 0,
"shortTermDebtMostRecentFiscalYear": 0,
"shortTermDebtPriorFiscalYear": 0,
"longTermDebtMostRecentFiscalYear": 0,
"longTermDebtPriorFiscalYear": 0,
"revenueMostRecentFiscalYear": 2112,
"revenuePriorFiscalYear": 0,
"costGoodsSoldMostRecentFiscalYear": 0,
"costGoodsSoldPriorFiscalYear": 0,
"taxesPaidMostRecentFiscalYear": 0,
"taxesPaidPriorFiscalYear": 0,
"netIncomeMostRecentFiscalYear": -192010,
"netIncomePriorFiscalYear": 0
}
]

Crowdfunding Campaign Search API
USA Flag
Search for crowdfunding campaigns by company name, campaign name, or platform with the FMP Crowdfunding Campaign Search API. Access detailed information to track and analyze crowdfunding activities.

Endpoint:

https://financialmodelingprep.com/stable/crowdfunding-offerings-search?name=enotap

Parameters

Query Parameter

Type

Example

name\*

string

enotap

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
"cik": "0001912939",
"name": "Enotap LLC",
"date": null
}
]

Crowdfunding By CIK API
USA Flag
Access detailed information on all crowdfunding campaigns launched by a specific company with the FMP Crowdfunding By CIK API.

Endpoint:

https://financialmodelingprep.com/stable/crowdfunding-offerings?cik=0001916078

Parameters

Query Parameter

Type

Example

cik\*

string

0001916078

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
52
[
{
"cik": "0001916078",
"companyName": "OYO Fitness, Inc",
"date": "12-31-2021",
"filingDate": "2022-07-21 00:00:00",
"acceptedDate": "2022-07-21 17:28:54",
"formType": "C-U",
"formSignification": "Progress Update",
"nameOfIssuer": "OYO Fitness, Inc",
"legalStatusForm": "Corporation",
"jurisdictionOrganization": "DE",
"issuerStreet": "374 N. 750TH RD",
"issuerCity": "OVERBROOK",
"issuerStateOrCountry": "KS",
"issuerZipCode": "66524",
"issuerWebsite": "https://www.oyofitness.com/",
"intermediaryCompanyName": "StartEngine Capital, LLC",
"intermediaryCommissionCik": "0001665160",
"intermediaryCommissionFileNumber": "007-00007",
"compensationAmount": "7 - 13 percent",
"financialInterest": "Two percent (2%) of securities of the total amount of investments raised in the offering, along the same terms as investors.",
"securityOfferedType": "Other",
"securityOfferedOtherDescription": "Non-Voting Common Stock",
"numberOfSecurityOffered": 5000,
"offeringPrice": 2,
"offeringAmount": 10000,
"overSubscriptionAccepted": "Y",
"overSubscriptionAllocationType": "Other",
"maximumOfferingAmount": 1070000,
"offeringDeadlineDate": "07-19-2022",
"currentNumberOfEmployees": 5,
"totalAssetMostRecentFiscalYear": 497717,
"totalAssetPriorFiscalYear": 248472,
"cashAndCashEquiValentMostRecentFiscalYear": 150142,
"cashAndCashEquiValentPriorFiscalYear": 54571,
"accountsReceivableMostRecentFiscalYear": 0,
"accountsReceivablePriorFiscalYear": 0,
"shortTermDebtMostRecentFiscalYear": 3286745,
"shortTermDebtPriorFiscalYear": 2214117,
"longTermDebtMostRecentFiscalYear": 82243,
"longTermDebtPriorFiscalYear": 105850,
"revenueMostRecentFiscalYear": 4344154,
"revenuePriorFiscalYear": 11078510,
"costGoodsSoldMostRecentFiscalYear": 2445024,
"costGoodsSoldPriorFiscalYear": 5737776,
"taxesPaidMostRecentFiscalYear": 0,
"taxesPaidPriorFiscalYear": 0,
"netIncomeMostRecentFiscalYear": -964551,
"netIncomePriorFiscalYear": -10860
}
]

Equity Offering Updates API
USA Flag
Stay informed about the latest equity offerings with the FMP Equity Offering Updates API. Track new shares being issued by companies and get insights into exempt offerings and amendments.

Endpoint:

https://financialmodelingprep.com/stable/fundraising-latest?page=0&limit=10

Parameters

Query Parameter

Type

Example

page

number

0

limit

number

10

cik

string

0002013736

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
[
{
"cik": "0002013736",
"companyName": "XO Generation Fund LP",
"date": "2024-03-01",
"filingDate": "2024-08-08 00:00:00",
"acceptedDate": "2024-08-08 17:29:48",
"formType": "D/A",
"formSignification": "Notice of Exempt Offering of Securities Amendement",
"entityName": "XO Generation Fund LP",
"issuerStreet": "842 S HIGHLAND AVE",
"issuerCity": "LOS ANGELES",
"issuerStateOrCountry": "CA",
"issuerStateOrCountryDescription": "CALIFORNIA",
"issuerZipCode": "90036",
"issuerPhoneNumber": "201-961-3356",
"jurisdictionOfIncorporation": "DELAWARE",
"entityType": "Limited Partnership",
"incorporatedWithinFiveYears": true,
"yearOfIncorporation": "2024",
"relatedPersonFirstName": "-",
"relatedPersonLastName": "XO Capital LLC",
"relatedPersonStreet": "842 S Highland Ave",
"relatedPersonCity": "Los Angeles",
"relatedPersonStateOrCountry": "CA",
"relatedPersonStateOrCountryDescription": "CALIFORNIA",
"relatedPersonZipCode": "90036",
"relatedPersonRelationship": "Promoter",
"industryGroupType": "Pooled Investment Fund",
"revenueRange": null,
"federalExemptionsExclusions": "06b, 3C, 3C.1",
"isAmendment": true,
"dateOfFirstSale": "2024-03-01",
"durationOfOfferingIsMoreThanYear": true,
"securitiesOfferedAreOfEquityType": true,
"isBusinessCombinationTransaction": false,
"minimumInvestmentAccepted": 100000,
"totalOfferingAmount": 0,
"totalAmountSold": 5000,
"totalAmountRemaining": 0,
"hasNonAccreditedInvestors": false,
"totalNumberAlreadyInvested": 1,
"salesCommissions": 0,
"findersFees": 0,
"grossProceedsUsed": 0
}
]

Equity Offering Search API
USA Flag
Easily search for equity offerings by company name or stock symbol with the FMP Equity Offering Search API. Access detailed information about recent share issuances to stay informed on company fundraising activities.

Endpoint:

https://financialmodelingprep.com/stable/fundraising-search?name=NJOY

Parameters

Query Parameter

Type

Example

name\*

string

NJOY

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
"cik": "0001547416",
"name": "NJOY INC",
"date": "2014-02-28 16:00:25"
}
]

Equity Offering By CIK API
USA Flag
Access detailed information on equity offerings announced by specific companies with the FMP Company Equity Offerings by CIK API. Track offering activity and identify potential investment opportunities.

Endpoint:

https://financialmodelingprep.com/stable/fundraising?cik=0001547416

Parameters
