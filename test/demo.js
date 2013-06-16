var express = require('express');
var sitemap = require('../index');

var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));

	app.use(sitemap());
	app.use(app.router);
});

app.get('/', function(req, res) {
	res.send('Index');
});

app.get('/sitemap.xml', function(req, res) {
	req.sitemap({
		gzip: true
	});
});

app.listen(8000);