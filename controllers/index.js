var CountryData = require('../models/countries.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	
	getCountries: function(req, res) {
		// console.log(GetCountries)
		res.send(CountryData);
	},

	renCountries: function(req, res){
		res.render('countries');
		// res.send('TEST');
	},

	getSearchTerm: function(req, res){
		var getSearchTerm = {
			name : req.body.search
		}
	}
};

module.exports = indexController;