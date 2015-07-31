var express = require('express');
var bodyParser = require('body-parser');
var getCountries = require('./models/countries.json');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/countries', indexController.rencountries)

app.post('/countries', function(){
	res.send(getCountries)
})

var server = app.listen(3940, function() {
	console.log('Express server listening on port ' + server.address().port);
});
