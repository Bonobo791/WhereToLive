// server.js
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();

// Set default directories
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use assets in public folder
app.use('/static', express.static(path.join(__dirname, 'public')))

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
    res.render('index');
});

// About page
app.get('/about', function (req, res) {
    res.render('index');
});

app.listen(3000, function() {
  console.log('listening on 3000')
})