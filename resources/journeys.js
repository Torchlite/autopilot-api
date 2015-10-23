var _ = require('lodash');
var request = require('axios');

function Journeys(parent) {
	this.parent = parent;
	this.options = parent.options;
}

Journeys.prototype.list = function (callback) {
	var promise = request.get(this.options.api.base + '/triggers', {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

Journeys.prototype.add = function (triggerId, contactId, callback) {
	var promise = request.post(this.options.api.base + '/trigger/' + triggerId + '/contact/' + contactId, {}, {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

module.exports = Journeys;
