var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Initialize express app
var app = express();
var PORT = process.env.PORT || 3000;

//Listener 
app.listen(PORT,function() {
	console.log('Listening on Port '+PORT);
});