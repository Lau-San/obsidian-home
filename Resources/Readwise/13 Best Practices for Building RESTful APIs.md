---
obsidianEditingMode: live
obsidianUIMode: preview
---
# 13 Best Practices for Building RESTful APIs

> [!info]- Metadata
> **Tags**:: #process-me #resources/articles #dev/web-dev
> 
> **Type**:: Article
> **Source**:: [Link](https://www.sitepoint.com/build-restful-apis-best-practices/)
> **Author**:: Michiel Mulders
> **Full Title**:: 13 Best Practices for Building RESTful APIs

![rw-book-cover](https://uploads.sitepoint.com/wp-content/uploads/2020/08/1597808919build-restful-api.png)

## Highlights

> [!quote] [View Highlight](https://read.readwise.io/read/01gq0e947y3dg8qyn6qcwtwk6d)
> 1. Use HTTP methods correctly


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ea4zwq9s3v7wjs8kx7mqn)
> many developers tend to abuse GET and POST, or PUT and PATCH. Often, we see developers use a POST request to retrieve data. Furthermore, we see developers use a PUT request which replaces the resource while they only wanted to update a single field for that resource.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0eahhg4xhtg866xck7q8ey)
> 2. Naming conventions


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0edrd8gh3caqrd3s9zp72k)
> RESTful API best practices describe that an endpoint should start with the resource name, while the HTTP operation describes the action.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0edwbbnhntt4pppxw5ahg8)
> • POST api.com/authors
> • GET api.com/authors/3


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0eg9epewxw7cxph4nth63r)
> What if we want to access all books author with ID `3` has ever written? Also for this case, RESTful APIs have a solution:
> • GET api.com/authors/3/books


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0egr4pw3cpdwp13kfyrpjb)
> Lastly, what if you want to delete a book with ID `5` for an author with ID `3`. Again, let’s follow the same structured approach to form the following endpoint:
> • DELETE api.com/authors/3/books/5


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ejfk0s0k1p97cyh55a3tm)
> 3. Use plural resources


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0emn8t98brmd76s8azyy4e)
> 4. Correct use of status codes


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0emz8tazgxfesqm1mj6mtq)
> Status codes aren’t here just for fun. They have a clear purpose. A status code notifies the client about the success of its request.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ep389n9at2zvac6vn64y0)
> 5. Follow casing conventions


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0epgt0krc3draffjzkd03g)
> Most commonly, a RESTful API serves JSON data. Therefore, the camelCase casing convention should be practiced.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0eqcy3vxwy4hwhpexn955v)
> 6. How to handle searching, pagination, filtering, and sorting


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0es77tf43vm56p4e63hsn6)
> Actions such as searching, pagination, filtering, and sorting don’t represent separate endpoints. These actions can be accomplished through the use of query parameters that are provided with the API request.
> For example, let’s retrieve all authors sorted by name in ascending order. Your API request should look like this: `api.com/authors?sort=name_asc`.
> Furthermore, I want to retrieve an author with the name ‘Michiel’. The request looks like this `api.com/authors?search=Michiel`.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0esg7kzr9k4ztnkx0k86c2)
> 7. API versioning


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0et0x94x0rht5dqycx4r3h)
> I don’t see this very often, but it’s a best practice to version your API. It’s an effective way of communicating breaking changes to your users.
> Frequently, the version number of the API is incorporated in the API URL, like this: `api.com/v1/authors/3/books`.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0evbgmf0fsx2cm777ns7jj)
> 8. Send metadata via HTTP headers


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0evwjde011d9apabqrtt3v)
> HTTP headers allow a client to send additional information with their request. For example, the `Authorization` header is commonly used for sending authentication data to access the API.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ewf5454gaca9x51e74fmd)
> 9. Rate Limiting


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0exnc53rpw4x96krxexyjx)
> Rate limiting is an interesting approach to control the number of requests per client. These are the possible rate limiting headers your server can return:
> • X-Rate-Limit-Limit: Tells the number of requests a client can send within a specified time interval.
> • X-Rate-Limit-Remaining: Tells how many requests the client can still send within the current time interval.
> • X-Rate-Limit-Reset: Tells the client when the rate limit will reset.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ext7x8dqgj0wfrxev6113)
> 10. Meaningful error handling


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ez16dmd1wyxzvycye62n1)
> In case something goes wrong, it’s important that you provide a meaningful error message to the developer.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ez8r2x3g1abkgb2a6djm6)
> 11. Choose the right API framework


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0ezn4680220g9aw85q3x5a)
> Many frameworks exist for different programming languages. It’s important to pick a framework that supports the RESTful API best practices.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0f75g7sytd562cgggc5baw)
> 12. Document your API


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0f7z3ss92bt6f8f3qgj7sv)
> Although your API follows all best practices outlined for RESTful APIs, it’s still worth your time to document various elements such as the resources your API handles or what rate limits apply to your server.


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0f832pkawyqe8j1r2pmc3q)
> 13. Keep it simple!


> [!quote] [View Highlight](https://read.readwise.io/read/01gq0fcxr6xaz256389jccnm24)
> Don’t overcomplicate your API and keep resources simple. A proper definition of the different resources your API handles will help you to avoid resource-related problems in the future. Define your resources, but also accurately define its properties and the relationships between resources.

