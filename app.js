var express = require('express');
var exphbs = require('express-handlebars');
var session = require('express-session');
var db = require('./db');

var index = require('./routes/index')();

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(session({ secret: 'dfasldkfu1n',
    resave: false,
    saveUninitialized: false,
    cookie:{}
}));

// Base Routes
app.get('/', index.home);

// API
app.get('/api/tasks', index.getTasks);
app.post('/api/tasks', index.postTasks);
app.post('/api/removeTasks', index.removeTasks);
app.post('/api/completeTasks', index.completeTasks);
app.post('/api/editTasks', index.editTasks);

app.listen(process.env.PORT || 3000);
