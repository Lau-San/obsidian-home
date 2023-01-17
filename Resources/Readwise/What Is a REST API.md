---
obsidianEditingMode: live
obsidianUIMode: preview
---
# What Is a REST API?

> [!info]- Metadata
> **Tags**:: #process-me #resources/articles #dev/web-dev
> 
> **Type**:: Article
> **Source**:: [Link](https://www.sitepoint.com/rest-api/)
> **Author**:: Craig Buckler
> **Full Title**:: What Is a REST API?

![rw-book-cover](https://uploads.sitepoint.com/wp-content/uploads/2020/02/1661396237rest-api.jpg)

## Highlights

> [!quote] [View Highlight](https://read.readwise.io/read/01gq0bj13gch3sc7ghakbt4f51)
> REST is an acronym for *Representational State Transfer* — an almost meaningless description of the most-used web service technology! A REST API is a way for two computer systems to communicate using the HTTP technologies found in web browsers and servers.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0bp7r5rk43d0dwtaznz25d)
> Sharing data between two or more systems has always been a fundamental requirement of software development.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0bpgqp00dkdge11hxt4m9s)
> APIs (Application Programming Interfaces) help this type of communication between systems by providing an interface for them to talk to each other.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0bpyyy20kf1fb07yd50ttc)
> REST is simply a widely adopted style of API that we use to communicate with internal and external parties in a consistent and predictable way.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0bw6718wgjy93hfnnverzd)
> [https://opentdb.com/api.php?amount=1&category=18](https://opentdb.com/api.php?amount=1&category=18)
> This is a public API implemented as RESTful web service (it follows REST conventions). Your browser will show a single JSON-formatted quiz question with answers, such as:
> {
> "response_code": 0,
> "results": [
> {
> "category": "Science: Computers",
> "type": "multiple",
> "difficulty": "easy",
> "question": "What does GHz stand for?",
> "correct_answer": "Gigahertz",
> "incorrect_answers": [
> "Gigahotz",
> "Gigahetz",
> "Gigahatz"
> ]
> }
> ]
> }
> You could request the same URL and get a response using any HTTP client, such as [curl](https://curl.haxx.se/):
> curl "https://opentdb.com/api.php?amount=1&category=18"


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0c0h29e2598pqwh4fg2rtd)
> It’s not a standard but a set of recommendations and constraints for RESTful web services. These include:


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0c7f67k3d99kac84r4hema)
> **Client-Server:** SystemA makes an HTTP request to a URL hosted by SystemB, which returns a response.It’s identical to how a browser works. A browser makes a request for a specific URL. The request is routed to a web server which typically returns an HTML page.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0c7vm88wgm21esbfh1w1d6)
> **Stateless:** REST is stateless: the client request should contain all the information necessary to respond.In other words, it should be possible to make two or more HTTP requests in any order, and the same responses will be received


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0c8sx2qafnjvh1wxg7z986)
> **Cacheable:** A response should be defined as cacheable or not.Caching improves performance because it’s not necessary to regenerate a response for the same URL. Private data specific to a certain user at a certain time would not normally be cached.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0camvm7b5xzwx46wv1stbv)
> A RESTful web service **request** contains:


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0cav84k3hzk78cjr4deg27)
> **An Endpoint URL**. An application implementing a RESTful API will define one or more URL endpoints with a domain, port, path, and/or query string — for example, `https://mydomain/user/123?format=json`.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0cdbvahnpck7fqnps9m3w9)
> **The HTTP method**. Differing HTTP methods can be used on any endpoint which map to application create, read, update, and delete (CRUD) operations: 
> HTTP method
> CRUD
> Action
> GET
> read
> returns requested data
> POST
> create
> creates a new record
> PUT or PATCH
> update
> updates an existing record
> DELETE
> delete
> deletes an existing record


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ceebqjcvaabqc73ra6zq6)
> **HTTP headers**. Information such as [authentication tokens](https://www.sitepoint.com/rest-api/#restapiauthentication) or cookies can be contained in the HTTP request header.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0cetqme9hk6vtqg3nk6rxp)
> **Body Data**. Data is normally transmitted in the HTTP body in an identical way to HTML `<form>` submissions or by sending a single JSON-encoded data string.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0cf9n3j0d8ccnx2d4f41np)
> ![](https://uploads.sitepoint.com/wp-content/uploads/2022/08/1661749125REST-API-Request.png)


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0chtxbvk9mckc6qcvsbawa)
> The **response** payload can be whatever is practical: data, HTML, an image, an audio file, and so on. Data responses are typically JSON-encoded, but [XML](https://www.sitepoint.com/really-good-introduction-xml/), CSV, simple strings, or any other format can be used. You could allow the return format to be specified in the request


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ck9q1sjzxwh8yxa5t32n4)
> An appropriate [HTTP status code](https://developer.mozilla.org/docs/Web/HTTP/Status) should also be set in the response header.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0cmjjptsd40jwmct8z3f0t)
> However, there are no strict rules. Endpoint URLs, HTTP methods, body data, and response types can be implemented as you like. For example, `POST`, `PUT`, and `PATCH` are often used interchangeably so any will create or update a record as necessary.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0d002b53nevv94r9c01djh)
> // simple Express.js RESTful API 'use strict'; // initialize const port = 8888, express = require('express'), app = express(); // /hello/ GET request app.get('/hello/:name?', (req, res) => res.json( { message: `Hello ${req.params.name || 'world'}!` } ) ); // start server app.listen(port, () => console.log(`Server started on port ${port}`); );


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0d90qctw6cbagbpy9wwgj0)
> For security, browsers only permit client-side [XMLHttpRequest](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest) and [Fetch API](https://www.sitepoint.com/introduction-to-the-fetch-api/) calls to the same domain where the calling page is hosted.
> Fortunately, [Cross-origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) allows us to circumvent that security restriction. Setting an `Access-Control-Allow-Origin` HTTP response header tells the browsers permit the request. It can be set to a specific domain or `*` for all domains


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0d9q9zqwf3rtabh2ag4wq0)
> // /hello/ GET request app.get('/hello/:name?', (req, res) => res .append('Access-Control-Allow-Origin', '*') .json( { message: `Hello ${req.params.name || 'world'}!` } ) );


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dbycwe9pe4tjwa4gpvfpx)
> Note that browsers make two requests to the REST API:
> 1. An HTTP `OPTIONS` request to the same URL determine whether the `Access-Control-Allow-Origin` HTTP response header is valid
> 2. The actual REST call

## New highlights added January 17, 2023 at 1:21 PM

> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dgjfqj2dert1t10xzv8ff)
> Consider the following endpoints:
> • `/user/123`
> • `/user/id/123`
> • `/user/?id=123`
> All are valid options to fetch data for user `123`. The number of combinations increase further when you have more complex operations.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dh9mt92gd00gpzr4yen2t)
> Ultimately, it doesn’t matter how you format URLs, but consistency across your API is important.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dnxt4fz49q9krm6nwhkw1)
> APIs are often versioned to avoid compatibility issues. For example, `/2.0/user/123` supersedes `/user/123`. Both the new and old endpoint can remain active. Unfortunately, it then becomes necessary to maintain multiple historical APIs.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dqp4bd55g9v4rr28t5zav)
> Client-side applications on the same domain as the RESTful API will send and receive cookies just like any other HTTP request. (Note that `Fetch()` in older browsers requires the `credentials` [init option](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) to be set.) An API request can therefore be validated to ensure a user is logged in and has appropriate rights.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dr6vebnt0j2d3t9hm6gpc)
> Third-party applications must use alternative methods of authorization. Common [authentication options](https://swagger.io/docs/specification/authentication/) include:
> • **[HTTP basic authentication](https://swagger.io/docs/specification/authentication/basic-authentication/)**. An HTTP `Authorization` header containing a base64-encoded username:password string is passed in the request header.
> • **[API keys](https://swagger.io/docs/specification/authentication/api-keys/)**. A third-party application is granted permission to use an API by issuing a key which may have specific rights or be restricted to a particular domain. The key is passed in every request in the HTTP header or on the querystring.
> • **[OAuth](https://oauth.net/)**. A token is obtained before any request can be made by sending a client ID and possibly a client secret to an OAuth server. The OAuth token is then sent with each API request until it expires.
> • **[JSON Web Tokens (JWT)](https://jwt.io/)**. Digitally signed authentication tokens are securely transmitted in both the request and response header. JWTs allow the server to encode access rights so calls to a database or other authorization system is not necessary.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dsgcxtz49yhn783qxbf00)
> API authentication will vary depending on the use context:
> • In some cases, a third-party application is treated like any other another logged-in user with specific rights and permissions. For example, a map API could return directions between two points to a calling application. It must confirm the application is a valid client but doesn’t need to check user credentials.
> • In other cases, the third-party application is requesting data private to an individual user such as email content. The REST API must identify the user and their rights, but it may not care which application is calling the API.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dtzezvrq5a1ewmx5zcxxk)
> A RESTful API provides another route to access and manipulate your application. Even if it’s not a high-profile hacking target, a badly behaved client could send thousands of requests every second and crash your server.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0dvbdtk6hf35crp7j1cfnx)
> • use HTTPS
> • use [CORS](https://www.sitepoint.com/rest-api/#clientsiderestrequestsandcors) to limit client-side calls to specific domains
> • provide minimum functionality — that is, don’t create DELETE options which are not required
> • validate all endpoint URLs and body data
> • avoid exposing API tokens in client-side JavaScript
> • block access from unknown domains or IP addresses
> • block unexpectedly large payloads
> • consider rate limiting — that is, requests using the same API token or IP address are limited to N per minute
> • log requests and investigate failures


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0e1de11wprn84g4f9b9q8y)
> Consider a RESTful API which provides access to author and book data. To show data for the top 10 selling books, the client could:
> • Request the first 10 `/book/` details ordered by number of sales (top seller first). The response contains a list of books with each author ID.
> • Make up to 10 `/author/{id}` requests to fetch each author’s details.
> This is known as the **N+1 problem**; N API requests must be made for each result in the parent request.
> If this is a common use case, the RESTful API could be changed so that every returned book contained the full author details such as their name, age, country, biography, and so on. It could even provide full details of their other books — although this could considerably increase the response payload!
> To avoid unnecessarily large responses, the API could be adjusted so author details are optional — for example, `?author_details=full`. The number of options API authors need to cater for can become bewildering.

