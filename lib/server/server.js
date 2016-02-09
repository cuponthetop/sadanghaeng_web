var express = require('express'),
	app = express(),
	ejs = require('ejs'),
	favicon = require('serve-favicon'),
	path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../../views/pages'));
app.set('port', process.env.PORT || 3000);

app.use(favicon(__dirname + '/../../public/icons.ico/favicon.ico'));
app.use(express.static(__dirname + '/../../public'));

app.get('/', function (req, res) {
	res.render('main');
});

app.get('/signup', function (req, res) {
	res.render('signup');
});

app.get('/login', function (req, res) {
	res.render('login');
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port' + app.get('port'));
});