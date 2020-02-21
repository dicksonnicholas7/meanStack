var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/contacts');



mongoose.connection.on('connected',
function () {
    console.log('connected to mongodb');
}
);

mongoose.connection.on('error',
function (err) {
    if(err){
        console.log('connection failed with error : ' + err);
    }
}
);

var app = express();
var port = 3000;


app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

app.use(bodyparser.json());

app.use('/api', route);

app.get('/',
function (req,res) {
    res.send('homepage');
}
);

app.listen(port,
    function () {
        console.log('sever started at port : ' + port);
    });