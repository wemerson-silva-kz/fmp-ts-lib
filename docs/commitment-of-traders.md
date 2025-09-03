Commitment Of Traders
COT Report API
Access comprehensive Commitment of Traders (COT) reports with the FMP COT Report API. This API provides detailed information about long and short positions across various sectors, helping you assess market sentiment and track positions in commodities, indices, and financial instruments.

Endpoint:

https://financialmodelingprep.com/stable/commitment-of-traders-report

Parameters

Query Parameter

Type

Example

symbol

string

AAPL

from

date

2024-01-01

to

date

2024-03-01

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
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
[
{
"symbol": "KC",
"date": "2024-02-27 00:00:00",
"name": "Coffee (KC)",
"sector": "SOFTS",
"marketAndExchangeNames": "COFFEE C - ICE FUTURES U.S.",
"cftcContractMarketCode": "083731",
"cftcMarketCode": "ICUS",
"cftcRegionCode": "1",
"cftcCommodityCode": "83",
"openInterestAll": 209453,
"noncommPositionsLongAll": 75330,
"noncommPositionsShortAll": 23630,
"noncommPositionsSpreadAll": 47072,
"commPositionsLongAll": 79690,
"commPositionsShortAll": 132114,
"totReptPositionsLongAll": 202092,
"totReptPositionsShortAll": 202816,
"nonreptPositionsLongAll": 7361,
"nonreptPositionsShortAll": 6637,
"openInterestOld": 179986,
"noncommPositionsLongOld": 75483,
"noncommPositionsShortOld": 35395,
"noncommPositionsSpreadOld": 27067,
"commPositionsLongOld": 70693,
"commPositionsShortOld": 111666,
"totReptPositionsLongOld": 173243,
"totReptPositionsShortOld": 174128,
"nonreptPositionsLongOld": 6743,
"nonreptPositionsShortOld": 5858,
"openInterestOther": 29467,
"noncommPositionsLongOther": 18754,
"noncommPositionsShortOther": 7142,
"noncommPositionsSpreadOther": 1098,
"commPositionsLongOther": 8997,
"commPositionsShortOther": 20448,
"totReptPositionsLongOther": 28849,
"totReptPositionsShortOther": 28688,
"nonreptPositionsLongOther": 618,
"nonreptPositionsShortOther": 779,
"changeInOpenInterestAll": 2957,
"changeInNoncommLongAll": -3545,
"changeInNoncommShortAll": 618,
"changeInNoncommSpeadAll": 1575,
"changeInCommLongAll": 4978,
"changeInCommShortAll": 802,
"changeInTotReptLongAll": 3008,
"changeInTotReptShortAll": 2995,
"changeInNonreptLongAll": -51,
"changeInNonreptShortAll": -38,
"pctOfOpenInterestAll": 100,
"pctOfOiNoncommLongAll": 36,
"pctOfOiNoncommShortAll": 11.3,
"pctOfOiNoncommSpreadAll": 22.5,
"pctOfOiCommLongAll": 38,
"pctOfOiCommShortAll": 63.1,
"pctOfOiTotReptLongAll": 96.5,
"pctOfOiTotReptShortAll": 96.8,
"pctOfOiNonreptLongAll": 3.5,
"pctOfOiNonreptShortAll": 3.2,
"pctOfOpenInterestOl": 100,
"pctOfOiNoncommLongOl": 41.9,
"pctOfOiNoncommShortOl": 19.7,
"pctOfOiNoncommSpreadOl": 15,
"pctOfOiCommLongOl": 39.3,
"pctOfOiCommShortOl": 62,
"pctOfOiTotReptLongOl": 96.3,
"pctOfOiTotReptShortOl": 96.7,
"pctOfOiNonreptLongOl": 3.7,
"pctOfOiNonreptShortOl": 3.3,
"pctOfOpenInterestOther": 100,
"pctOfOiNoncommLongOther": 63.6,
"pctOfOiNoncommShortOther": 24.2,
"pctOfOiNoncommSpreadOther": 3.7,
"pctOfOiCommLongOther": 30.5,
"pctOfOiCommShortOther": 69.4,
"pctOfOiTotReptLongOther": 97.9,
"pctOfOiTotReptShortOther": 97.4,
"pctOfOiNonreptLongOther": 2.1,
"pctOfOiNonreptShortOther": 2.6,
"tradersTotAll": 357,
"tradersNoncommLongAll": 132,
"tradersNoncommShortAll": 77,
"tradersNoncommSpreadAll": 94,
"tradersCommLongAll": 106,
"tradersCommShortAll": 119,
"tradersTotReptLongAll": 286,
"tradersTotReptShortAll": 250,
"tradersTotOl": 351,
"tradersNoncommLongOl": 136,
"tradersNoncommShortOl": 72,
"tradersNoncommSpeadOl": 88,
"tradersCommLongOl": 94,
"tradersCommShortOl": 114,
"tradersTotReptLongOl": 269,
"tradersTotReptShortOl": 239,
"tradersTotOther": 164,
"tradersNoncommLongOther": 31,
"tradersNoncommShortOther": 34,
"tradersNoncommSpreadOther": 16,
"tradersCommLongOther": 59,
"tradersCommShortOther": 68,
"tradersTotReptLongOther": 102,
"tradersTotReptShortOther": 106,
"concGrossLe4TdrLongAll": 16,
"concGrossLe4TdrShortAll": 23.7,
"concGrossLe8TdrLongAll": 25.8,
"concGrossLe8TdrShortAll": 38.9,
"concNetLe4TdrLongAll": 9.8,
"concNetLe4TdrShortAll": 16.2,
"concNetLe8TdrLongAll": 17.7,
"concNetLe8TdrShortAll": 25.4,
"concGrossLe4TdrLongOl": 13.6,
"concGrossLe4TdrShortOl": 24.7,
"concGrossLe8TdrLongOl": 23.2,
"concGrossLe8TdrShortOl": 40.3,
"concNetLe4TdrLongOl": 11.3,
"concNetLe4TdrShortOl": 18.2,
"concNetLe8TdrLongOl": 20.3,
"concNetLe8TdrShortOl": 31.9,
"concGrossLe4TdrLongOther": 68.2,
"concGrossLe4TdrShortOther": 29.1,
"concGrossLe8TdrLongOther": 77.8,
"concGrossLe8TdrShortOther": 47.3,
"concNetLe4TdrLongOther": 64.7,
"concNetLe4TdrShortOther": 26.7,
"concNetLe8TdrLongOther": 73.9,
"concNetLe8TdrShortOther": 44.2,
"contractUnits": "(CONTRACTS OF 37,500 POUNDS)"
}
]

COT Analysis By Dates API
Gain in-depth insights into market sentiment with the FMP COT Report Analysis API. Analyze the Commitment of Traders (COT) reports for a specific date range to evaluate market dynamics, sentiment, and potential reversals across various sectors.

Endpoint:

https://financialmodelingprep.com/stable/commitment-of-traders-analysis

Parameters

Query Parameter

Type

Example

symbol

string

AAPL

from

date

2024-01-01

to

date

2024-03-01

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
18
19
20
[
{
"symbol": "B6",
"date": "2024-02-27 00:00:00",
"name": "British Pound (B6)",
"sector": "CURRENCIES",
"exchange": "BRITISH POUND - CHICAGO MERCANTILE EXCHANGE",
"currentLongMarketSituation": 66.85,
"currentShortMarketSituation": 33.15,
"marketSituation": "Bullish",
"previousLongMarketSituation": 67.97,
"previousShortMarketSituation": 32.03,
"previousMarketSituation": "Bullish",
"netPostion": 46358,
"previousNetPosition": 46312,
"changeInNetPosition": 0.1,
"marketSentiment": "Increasing Bullish",
"reversalTrend": false
}
]

COT Report List API
Access a comprehensive list of available Commitment of Traders (COT) reports by commodity or futures contract using the FMP COT Report List API. This API provides an overview of different market segments, allowing users to retrieve and explore COT reports for a wide variety of commodities and financial instruments.

Endpoint:

https://financialmodelingprep.com/stable/commitment-of-traders-list

Response
1
2
3
4
5
6
[
{
"symbol": "NG",
"name": "Natural Gas (NG)"
}
]
