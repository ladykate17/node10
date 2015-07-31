var express = require('express');
var bodyParser = require('body-parser');
var countryData = require('./models/countries.json');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/get-countries', indexController.getCountries) // get json data 
app.get('/countries', indexController.renCountries) // render jade file

app.post('/search', indexController.renCountries)

var server = app.listen(3940, function() {
	console.log('Express server listening on port ' + server.address().port);
});
