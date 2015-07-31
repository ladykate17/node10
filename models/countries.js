var mongoose = require('mongoose');

var getCountires = mongoose.model('countries');

module.exports = {
	getCountires : getCountires
}