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

app.get('/universities/:univid/user/:uid', function (req, res) {
	res.render('main', {uid: req.params.uid, univid: req.params.univid});
});

app.get('/signup', function (req, res) {
	res.render('signup');
});

app.get('/login', function (req, res) {
	res.render('login');
});

app.get('/post/:pid', function (req, res) {
	res.render('post', {pid: req.params.pid});
});

app.get('/search', function (req, res) {
	res.render('search');
});

app.get('/write', function (req, res) {
	res.render('write');
});

app.get('/mypage/:uid', function (req, res) {
	res.render('mypage', {uid: req.params.uid});
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port: ' + app.get('port'));
});