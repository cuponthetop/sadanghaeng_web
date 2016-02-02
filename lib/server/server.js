var express = require('express'),
	app = express(),
	ejs = require('ejs'),
	favicon = require('serve-favicon'),
	path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve('/../../views/pages'));
app.set('port', process.env.PORT || 3000);

app.use(favicon(__dirname + '/../../public/icons.ico/favicon.ico'));
app.use(express.static(__dirname + '/../../public'));

app.get('/', function (req, res) {
	res.render('index');
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port' + app.get('port'));
});