var express = require('express')
    , passport = require('passport')
    , util = require('util')
    , http = require('http')
    , io = require('socket.io')
    , user ='';

var app = express();

// configure Express
app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.logger());
    app.use(express.cookieParser());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

//From the ChatServer.js file
server = http.createServer(app)
server.listen(8080);


var env = process.env.NODE_ENV || 'development'
    , config = require('./config/config')[env]

// bootstrap passport config
require('./config/passport')(passport, config)

// Bootstrap routes
require('./config/routes')(app, passport)

// Bootstrap socket configuration
var io = io.listen(server);
require('./config/socket')(io)


