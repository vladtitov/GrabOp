/**
 * Created by Vlad on 5/12/2016.
 */
var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/myindex.html'))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});