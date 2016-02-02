var express = require('express'),
	app = express(),
	ejs = require('ejs'),
	favicon = require('serve-favicon');

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(favicon(__dirname + '/../../public/icons.ico/favicon.ico'));

app.listen(app.get('port'), function() {
	console.log('Express server listening on port' + app.get('port'));
});