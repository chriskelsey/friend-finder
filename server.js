var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

//Initialize express app
var app = express();
var PORT = process.env.PORT || 3000;

// Routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

//Listener 
app.listen(PORT,function() {
	console.log('Listening on Port '+PORT);
});