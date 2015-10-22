var _ = require('lodash');
var request = require('axios');

function Journeys(options) {
	this.options = options;
}

Journeys.prototype.list = function (callback) {
	var result = request.get(this.options.api.base + '/triggers', {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

Journeys.prototype.add = function (triggerId, contactId, callback) {
	var result = request.post(this.options.api.base + '/trigger/' + triggerId + '/contact/' + contactId, {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

module.exports = Journeys;
