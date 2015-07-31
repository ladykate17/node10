var getCountries = require('../models/countries.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	
	rencountries: function(req, res) {
		// console.log(getCountries)
		res.render('countries');
	},

	countries: function(req, res){

		getCountries.find({}, function(err, doc){
			if (err){
				res.send({err: err});
			}
			else {
				res.send({data: doc.name})
			}
		})
		// res.send('TEST');
	}
};

module.exports = indexController;