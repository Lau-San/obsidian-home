---
obsidianEditingMode: live
obsidianUIMode: preview
---
# An Overview of HTTP

> [!info]- Metadata
> **Tags**:: #process-me #resources/articles #internet
> 
> **Author**:: mozilla.org
> **Source**:: [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
> **Full Title**:: An Overview of HTTP

![rw-book-cover](https://developer.mozilla.org/mdn-social-share.0ca9dbda.png)

## Highlights

> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdej44zzsndthwv190cd3j)
> **HTTP** is a [protocol](https://developer.mozilla.org/en-US/docs/Glossary/Protocol) for fetching resources such as HTML documents.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdew7y92rwvp55sse04v0f)
> A complete document is reconstructed from the different sub-documents fetched


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdf10703qtps5m8xvxrr2s)
> ![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png)


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdfgewa2ykkjry0aj46mdv)
> Clients and servers communicate by exchanging individual messages


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdfjwxz4q65pmckwmh9bn9)
> The messages sent by the client, usually a Web browser, are called *requests* and the messages sent by the server as an answer are called *responses*.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdhh8n1x51wtm5j46xvdp9)
> Due to its extensibility, it is used to not only fetch hypertext documents, but also images and videos or to post content to servers


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdn6j9c58n2pp5j12msk4d)
> HTTP is a client-server protocol: requests are sent by one entity, the user-agent


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdnesh8px7patwym9xhnk8)
> Each individual request is sent to a server, which handles it and provides an answer called the *response*.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdnvce2yp5qb5bba2xxx72)
> Between the client and the server there are numerous entities, collectively called [proxies](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server), which perform different operations and act as gateways or [caches](https://developer.mozilla.org/en-US/docs/Glossary/Cache), for example.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdnzqp34axj8zn6pma9g6p)
> ![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/client-server-chain.png)


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdtfqrvdjn6mh5ew01pna4)
> The *user-agent* is any tool that acts on behalf of the user. This role is primarily performed by the Web browser, but it may also be performed by programs used by engineers and Web developers to debug their applications.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdvp4svr6qpaqdnh6ah3xk)
> The browser is **always** the entity initiating the request. It is never the server (though some mechanisms have been added over the years to simulate server-initiated messages).


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdye71r3pry9q1ajz3sbmd)
> To display a Web page, the browser sends an original request to fetch the HTML document that represents the page. It then parses this file, making additional requests corresponding to execution scripts, layout information (CSS) to display, and sub-resources contained within the page (usually images and videos). The Web browser then combines these resources to present the complete document, the Web page.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvdygx9wdp8p8py3mrjjrws)
> Scripts executed by the browser can fetch more resources in later phases and the browser updates the Web page accordingly.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmve08ktfht8r2y6pehqmvgs)
> some parts of the displayed content are links, which can be activated (usually by a click of the mouse) to fetch a new Web page, allowing the user to direct their user-agent and navigate through the Web. The browser translates these directions into HTTP requests, and further interprets the HTTP responses to present the user with a clear response.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmve0qaf1fp327ebqnvae0a6)
> On the opposite side of the communication channel is the server, which *serves* the document as requested by the client.

## New highlights added December 21, 2022 at 6:06 PM

> [!quote] [View Highlight](https://read.readwise.io/read/01gmveacn96vk7fykav8sp9cyx)
> Between the Web browser and the server, numerous computers and machines relay the HTTP messages.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmveb1v95gzchbsg7c5c8bap)
> Due to the layered structure of the Web stack, most of these operate at the transport, network or physical levels, becoming transparent at the HTTP layer and potentially having a significant impact on performance. Those operating at the application layers are generally called **proxies**.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvec4q111m2pafshp70t4gg)
> These can be transparent, forwarding on the requests they receive without altering them in any way, or non-transparent, in which case they will change the request in some way before passing it along to the server.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvecafvkq0dm1v0h247990y)
> Proxies may perform numerous functions:
> • caching (the cache can be public or private, like the browser cache)
> • filtering (like an antivirus scan or parental controls)
> • load balancing (to allow multiple servers to serve different requests)
> • authentication (to control access to different resources)
> • logging (allowing the storage of historical information)


> [!quote] [View Highlight](https://read.readwise.io/read/01gmved1sfmrrt7hgnax1x1ccj)
> HTTP is generally designed to be simple and human readable, even with the added complexity introduced in HTTP/2 by encapsulating HTTP messages into frames. HTTP messages can be read and understood by humans, providing easier testing for developers, and reduced complexity for newcomers.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvedv2cww7ae5wzq7t61m5c)
> Introduced in HTTP/1.0, [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) make this protocol easy to extend and experiment with. New functionality can even be introduced by a simple agreement between a client and a server about a new header's semantics.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvegczt9xthd8qg4cewqd14)
> HTTP is stateless: there is no link between two requests being successively carried out on the same connection. This immediately has the prospect of being problematic for users attempting to interact with certain pages coherently, for example, using e-commerce shopping baskets. But while the core of HTTP itself is stateless, HTTP cookies allow the use of stateful sessions. Using header extensibility, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvesk1wbkd6wjjpwgavwcq5)
> When a client wants to communicate with a server, either the final server or an intermediate proxy, it performs the following steps:
> 1. Open a TCP connection: The TCP connection is used to send a request, or several, and receive an answer. The client may open a new connection, reuse an existing connection, or open several TCP connections to the servers.
> 2. Send an HTTP message: HTTP messages (before HTTP/2) are human-readable. With HTTP/2, these simple messages are encapsulated in frames, making them impossible to read directly, but the principle remains the same. For example:
> GET / HTTP/1.1
> Host: developer.mozilla.org
> Accept-Language: fr
> Copy to Clipboard
> 3. Read the response sent by the server, such as:
> HTTP/1.1 200 OK
> Date: Sat, 09 Oct 2010 14:28:02 GMT
> Server: Apache
> Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
> ETag: "51142bc1-7449-479b075b2891b"
> Accept-Ranges: bytes
> Content-Length: 29769
> Content-Type: text/html
> <!DOCTYPE html>… (here come the 29769 bytes of the requested web page)
> Copy to Clipboard
> 4. Close or reuse the connection for further requests.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvew37n762mwefpdh76jnpx)
> There are two types of HTTP messages, requests and responses, each with its own format.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvew6vfx7yt9rmk9ht0cb5h)
> An example HTTP request:
> ![A basic HTTP request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_request.png)


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvewqftqbd4gm89qjrny40c)
> Requests consist of the following elements:
> • An HTTP [method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), usually a verb like [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET), [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST), or a noun like [`OPTIONS`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) or [`HEAD`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) that defines the operation the client wants to perform. Typically, a client wants to fetch a resource (using `GET`) or post the value of an [HTML form](https://developer.mozilla.org/en-US/docs/Learn/Forms) (using `POST`), though more operations may be needed in other cases.
> • The path of the resource to fetch; the URL of the resource stripped from elements that are obvious from the context, for example without the [protocol](https://developer.mozilla.org/en-US/docs/Glossary/Protocol) (`http://`), the [domain](https://developer.mozilla.org/en-US/docs/Glossary/Domain) (here, `developer.mozilla.org`), or the TCP [port](https://developer.mozilla.org/en-US/docs/Glossary/Port) (here, `80`).
> • The version of the HTTP protocol.
> • Optional [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) that convey additional information for the servers.
> • A body, for some methods like `POST`, similar to those in responses, which contain the resource sent.


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvewxa7xf2ak6788qqx04f4)
> An example response:
> ![HTTP Response image](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_response.png)


> [!quote] [View Highlight](https://read.readwise.io/read/01gmvex1jg301qzs799s2k8aqr)
> Responses consist of the following elements:
> • The version of the HTTP protocol they follow.
> • A [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), indicating if the request was successful or not, and why.
> • A status message, a non-authoritative short description of the status code.
> • HTTP [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers), like those for requests.
> • Optionally, a body containing the fetched resource.

