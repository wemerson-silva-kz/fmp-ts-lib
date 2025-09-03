News
FMP Articles API
USA Flag
Access the latest articles from Financial Modeling Prep with the FMP Articles API. Get comprehensive updates including headlines, snippets, and publication URLs.

Endpoint:

https://financialmodelingprep.com/stable/fmp-articles?page=0&limit=20

Parameters

Query Parameter

Type

Example

page

number

0

limit

number

20

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
[
{
"title": "Merck Shares Plunge 8% as Weak Guidance Overshadows Strong Revenue Growth",
"date": "2025-02-04 09:33:00",
"content": "<p><a href='https://financialmodelingprep.com/financial-summary/MRK'>Merck & Co (NYSE:MRK)</a> saw its stock sink over 8% in pre-market today after delivering mixed fourth-quarter results, with earnings missing expectations, revenue exceeding forecasts, and full-year guidance coming in below analyst estimates.</p>\n<p>For Q4, the pharmaceutical giant reported adjusted earnings per share (EPS) of $1.72, falling short of the $1.81 consensus estimate. However, revenue climbed 7% year-over-year to $1...",
"tickers": "NYSE:MRK",
"image": "https://cdn.financialmodelingprep.com/images/fmp-1738679603793.jpg",
"link": "https://financialmodelingprep.com/market-news/fmp-merck-shares-plunge-8-as-weak-guidance-overshadows-strong-revenue-growth",
"author": "Davit Kirakosyan",
"site": "Financial Modeling Prep"
}
]

General News API
Globe Flag
Access the latest general news articles from a variety of sources with the FMP General News API. Obtain headlines, snippets, and publication URLs for comprehensive news coverage.

Endpoint:

https://financialmodelingprep.com/stable/news/general-latest?page=0&limit=20

Parameters

Query Parameter

Type

Example

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": null,
"publishedDate": "2025-02-03 23:51:37",
"publisher": "CNBC",
"title": "Asia tech stocks rise after Trump pauses tariffs on China and Mexico",
"image": "https://images.financialmodelingprep.com/news/asia-tech-stocks-rise-after-trump-pauses-tariffs-on-20250203.jpg",
"site": "cnbc.com",
"text": "Gains in Asian tech companies were broad-based, with stocks in Japan, South Korea and Hong Kong advancing. Semiconductor players Advantest and Lasertec led gains among Japanese tech stocks.",
"url": "https://www.cnbc.com/2025/02/04/asia-tech-stocks-rise-after-trump-pauses-tariffs-on-china-and-mexico.html"
}
]

Press Releases API
USA Flag
Access official company press releases with the FMP Press Releases API. Get real-time updates on corporate announcements, earnings reports, mergers, and more.

Endpoint:

https://financialmodelingprep.com/stable/news/press-releases-latest?page=0&limit=20

Parameters

Query Parameter

Type

Example

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "LNW",
"publishedDate": "2025-02-03 23:32:00",
"publisher": "PRNewsWire",
"title": "Rosen Law Firm Encourages Light & Wonder, Inc. Investors to Inquire About Securities Class Action Investigation - LNW",
"image": "https://images.financialmodelingprep.com/news/rosen-law-firm-encourages-light-wonder-inc-investors-to-20250203.jpg",
"site": "prnewswire.com",
"text": "NEW YORK , Feb. 3, 2025 /PRNewswire/ -- Why: Rosen Law Firm, a global investor rights law firm, continues to investigate potential securities claims on behalf of shareholders of Light & Wonder, Inc. (NASDAQ: LNW) resulting from allegations that Light & Wonder may have issued materially misleading business information to the investing public. So What: If you purchased Light & Wonder securities you may be entitled to compensation without payment of any out of pocket fees or costs through a contingency fee arrangement.",
"url": "https://www.prnewswire.com/news-releases/rosen-law-firm-encourages-light--wonder-inc-investors-to-inquire-about-securities-class-action-investigation--lnw-302366877.html"
}
]

Stock News API
Stay informed with the latest stock market news using the FMP Stock News Feed API. Access headlines, snippets, publication URLs, and ticker symbols for the most recent articles from a variety of sources.

Endpoint:

https://financialmodelingprep.com/stable/news/stock-latest?page=0&limit=20

Parameters

Query Parameter

Type

Example

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "INSG",
"publishedDate": "2025-02-03 23:53:40",
"publisher": "Seeking Alpha",
"title": "Q4 Earnings Release Looms For Inseego, But Don't Expect Miracles",
"image": "https://images.financialmodelingprep.com/news/q4-earnings-release-looms-for-inseego-but-dont-expect-20250203.jpg",
"site": "seekingalpha.com",
"text": "Inseego's Q3 beat was largely due to a one-time debt restructuring gain, not sustainable earnings growth, raising concerns about future performance. The sale of its telematics business for $52 million allows INSG to focus on North America, but it remains to be seen if this was wise. Despite improved margins and reduced debt, Inseego's revenue growth is insufficient, and its high stock price remains unjustifiable for new investors.",
"url": "https://seekingalpha.com/article/4754485-inseego-stock-q4-earnings-preview-monitor-growth-margins-closely"
}
]

Crypto News API
Stay informed with the latest cryptocurrency news using the FMP Crypto News API. Access a curated list of articles from various sources, including headlines, snippets, and publication URLs.

Endpoint:

https://financialmodelingprep.com/stable/news/crypto-latest?page=0&limit=20

Parameters

Query Parameter

Type

Example

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "BTCUSD",
"publishedDate": "2025-02-03 23:32:19",
"publisher": "Coingape",
"title": "Crypto Prices Today Feb 4: BTC & Altcoins Recover Amid Pause On Trump's Tariffs",
"image": "https://images.financialmodelingprep.com/news/crypto-prices-today-feb-4-btc-altcoins-recover-amid-20250203.webp",
"site": "coingape.com",
"text": "Crypto prices today have shown signs of recovery as U.S. President Donald Trump's newly announced import tariffs on Canada and Mexico were paused for 30 days. Bitcoin (BTC) price regained its value, hitting a $102K high amid broader market recovery.",
"url": "https://coingape.com/crypto-prices-today-feb-4-btc-altcoins-recover-amid-pause-on-trumps-tariffs/"
}
]

Forex News API
Stay updated with the latest forex news articles from various sources using the FMP Forex News API. Access headlines, snippets, and publication URLs for comprehensive market insights.

Endpoint:

https://financialmodelingprep.com/stable/news/forex-latest?page=0&limit=20

Parameters

Query Parameter

Type

Example

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "XAUUSD",
"publishedDate": "2025-02-03 23:55:44",
"publisher": "FX Street",
"title": "United Arab Emirates Gold price today: Gold steadies, according to FXStreet data",
"image": "https://images.financialmodelingprep.com/news/united-arab-emirates-gold-price-today-gold-steadies-according-20250203.jpg",
"site": "fxstreet.com",
"text": "Gold prices remained broadly unchanged in United Arab Emirates on Tuesday, according to data compiled by FXStreet.",
"url": "https://www.fxstreet.com/news/united-arab-emirates-gold-price-today-gold-steadies-according-to-fxstreet-data-202502040455"
}
]

Search Press Releases API
USA Flag
Search for company press releases with the FMP Search Press Releases API. Find specific corporate announcements and updates by entering a stock symbol or company name.

Endpoint:

https://financialmodelingprep.com/stable/news/press-releases?symbols=AAPL

Parameters

Query Parameter

Type

Example

symbols\*

string

AAPL

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "AAPL",
"publishedDate": "2025-01-30 16:30:00",
"publisher": "Business Wire",
"title": "Apple reports first quarter results",
"image": "https://images.financialmodelingprep.com/news/apple-reports-first-quarter-results-20250130.jpg",
"site": "businesswire.com",
"text": "CUPERTINO, Calif.--(BUSINESS WIRE)--Apple® today announced financial results for its fiscal 2025 first quarter ended December 28, 2024. The Company posted quarterly revenue of $124.3 billion, up 4 percent year over year, and quarterly diluted earnings per share of $2.40, up 10 percent year over year. “Today Apple is reporting our best quarter ever, with revenue of $124.3 billion, up 4 percent from a year ago,” said Tim Cook, Apple's CEO. “We were thrilled to bring customers our best-ever lineup.",
"url": "https://www.businesswire.com/news/home/20250130261281/en/Apple-reports-first-quarter-results/"
}
]

Search Stock News API
Search for stock-related news using the FMP Search Stock News API. Find specific stock news by entering a ticker symbol or company name to track the latest developments.

Endpoint:

https://financialmodelingprep.com/stable/news/stock?symbols=AAPL

Parameters

Query Parameter

Type

Example

symbols\*

string

AAPL

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "AAPL",
"publishedDate": "2025-02-03 21:05:14",
"publisher": "Zacks Investment Research",
"title": "Apple & China Tariffs: A Closer Look",
"image": "https://images.financialmodelingprep.com/news/apple-china-tariffs-a-closer-look-20250203.jpg",
"site": "zacks.com",
"text": "Tariffs have been the talk of the town over recent weeks, regularly overshadowing other important developments and causing volatility spikes.",
"url": "https://www.zacks.com/stock/news/2408814/apple-china-tariffs-a-closer-look?cid=CS-STOCKNEWSAPI-FT-stocks_in_the_news-2408814"
}
]

Search Crypto News API
Search for cryptocurrency news using the FMP Search Crypto News API. Retrieve news related to specific coins or tokens by entering their name or symbol.

Endpoint:

https://financialmodelingprep.com/stable/news/crypto?symbols=BTCUSD

Parameters

Query Parameter

Type

Example

symbols\*

string

BTCUSD

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "BTCUSD",
"publishedDate": "2025-02-03 23:32:19",
"publisher": "Coingape",
"title": "Crypto Prices Today Feb 4: BTC & Altcoins Recover Amid Pause On Trump's Tariffs",
"image": "https://images.financialmodelingprep.com/news/crypto-prices-today-feb-4-btc-altcoins-recover-amid-20250203.webp",
"site": "coingape.com",
"text": "Crypto prices today have shown signs of recovery as U.S. President Donald Trump's newly announced import tariffs on Canada and Mexico were paused for 30 days. Bitcoin (BTC) price regained its value, hitting a $102K high amid broader market recovery.",
"url": "https://coingape.com/crypto-prices-today-feb-4-btc-altcoins-recover-amid-pause-on-trumps-tariffs/"
}
]

Search Forex News API
Search for foreign exchange news using the FMP Search Forex News API. Find targeted news on specific currency pairs by entering their symbols for focused updates.

Endpoint:

https://financialmodelingprep.com/stable/news/forex?symbols=EURUSD

Parameters

Query Parameter

Type

Example

symbols\*

string

EURUSD

from

date

2025-04-24

to

date

2025-07-25

page

number

0

limit

number

20

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
[
{
"symbol": "EURUSD",
"publishedDate": "2025-02-03 18:43:01",
"publisher": "FX Street",
"title": "EUR/USD trims losses but still sheds weight",
"image": "https://images.financialmodelingprep.com/news/eurusd-trims-losses-but-still-sheds-weight-20250203.jpg",
"site": "fxstreet.com",
"text": "EUR/USD dropped sharply following fresh tariff threats from US President Donald Trump, impacting the markets. However, significant declines in global risk markets eased as the Trump administration offered 30-day concessions on impending tariffs for Canada and Mexico.",
"url": "https://www.fxstreet.com/news/eur-usd-trims-losses-but-still-sheds-weight-202502032343"
}
]
