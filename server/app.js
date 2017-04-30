// Express internals - https://evanhahn.com/understanding-express/

var express = require("express");
var http = require("http");
var logger = require("morgan");

// Build the app(this is a express made function. A reqiest handler through wich all reuquest will go)
var app = express();

// Add some middleware-1-(request handler)
app.use((req, res, next) => {
    console.log("middleware1" + req.method + " to " + req.url);
    next()
});

//third party middleware for express - morgan
app.use(logger());

//Middleware-2-Send "hello world"
app.use((request, response) => {
    console.log("middleware2");
    response.writeHead(200, { "Content-Type": "text/plain" });
    //response.end("Hello world!\n");
});

/*Request Routing - this can be manually implemente also(using a if else ladder)*/
//next('route') , can be used to bypass the remaining of current route 
//so, can do some pre evaluation first and : if no sense of executing current route => then next('route') => it calls the next route and by pass current

//app.get("/hello/:who", function(req, res) 

app.all("*", (request, response, next) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    next();
});


app.get("/print/:who", (req, res) => {
    res.end("Hello, " + req.params.who + ".");
    // Fun fact: this has security issues
});

app.get("/", function (request, response) {
    response.end("Welcome to the homepage!");
});

app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});

app.get("*", function (request, response) {
    response.end("404!");
});


app.post("*", (req, res) => {
    res.end("Received a post request")
})

// Start it up!
http.createServer(app).listen(3001); // equals to app.listen(3001)


/*
syntax for : Middleware(chabale)
------------------------
function myFunMiddleware(request, response, next) {
    // Do stuff with the request and response.
    // When we're all done, call next() to defer to the next middleware.
    next();
}
*/

//some express features(which are not provided by nodejs http) - provided by extending request and response objects of nodejs http module

//response redirect
//response.redirect("/hello/anime");
//response.redirect("http://www.myanimelist.net");

//sending a file
//response.sendFile("/path/to/anime.mp4");

//Express request object
//request.ip
//requst.files => get all uploaded files

//views (Templating)
//=================================================
/*
//pug

// Start Express
var express = require("express");
var app = express();

// Set the view directory to /views
app.set("views", __dirname + "/views");

// Let's use the Pug templating language
app.set("view engine", "pug");
*/

//template index.pug
/*doctype 5
html
  body
    h1 Hello, world!
    p= message */
/*
app.get("/", function(request, response) {
  response.render("index", { message: "I love anime" });
});
 */

//start a project - FAST( Code generation)
//----------------------------
/*
npm install -g express-generator
express --ejs --css less myApp       //EJS templating and LESS for css
*/



