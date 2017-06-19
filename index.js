var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err) {
		console.log('Could NOT connect to database: ' + err);
	} else {
		console.log('Connected to database: ' + config.db);
	}
});

app.get('*', (req, res) => {
	res.send('Hello world!');
});

app.listen(8080, () => {
	console.log('Listening on port 8080');
});