//simple http server using nodejs http module

//node js http module(built in)
const http = require('http')

//function which gets called for every request
const requestHandler = (request, response) => {

    console.log(request.url + ":" + request.method + ":" + JSON.stringify(request.headers))

    //check the url and form the output
    if (request.url === "/") {
        response.end("Welcome to the homepage!");
    }
    else if (request.url === "/about") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("Welcome to the about page!");
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 error! File not found.");
    }

}

//creating the server
const server = http.createServer(requestHandler)

//tell the server to start and listen on port 3000
server.listen(3000, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on port 3000`)
})


/* HTTP headers.
{
    "host": "localhost:3000",
    "connection": "keep-alive",
    "cache-control": "max-age=0",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows NT 6.1;WOW64) AppleWebKit /537.36(KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
    "accept":"text/ html, application / xhtml + xml, application / xml; q =0.9, image / webp,*;q=0.8",
    "accept-encoding":"gzip, deflate, sdch, br",
    "accept-language":"en-US,en;q=0.8"
}

*/