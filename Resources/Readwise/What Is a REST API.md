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

