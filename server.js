var express = require('express')
var expressLogging = require('express-logging')
var logger = require('logops');

var bodyParser = require('body-parser')

//properties
var port = process.env.PORT || 3000

//begin express(a routing and middleware framework)
var app = express()

//configure express
app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

//configure middleware(has access to request, response and next middleware function)
//middleware do => execute code, modify request, response, end cycle. call next middleware function
//if middleware function does not call end()=> it must call next()

//application level middleware

app.use(express.static(__dirname + '/public'))
app.use(expressLogging(logger));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./controllers'))

app.listen(port, function () {
  console.log('Listening on port ' + port)
})