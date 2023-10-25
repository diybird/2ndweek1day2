var express = require('express');
var app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});
// For invalid routes
app.get('*', (req,res) => {
    res.send('404! This is an invakid URL.');
});

app.listen(3000);


