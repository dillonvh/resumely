const express = require('express');
const app = express();

app.get('/', function (req,res) {
	console.log('This is working')
	res.send('Hello World');
});

app.get('*', function (req,res) {
	res.send('404 Error');
});

app.listen(5000, function () {
	console.log('Server is listening on port 5000');
});