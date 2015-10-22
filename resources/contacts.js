var _ = require('lodash');
var request = require('axios');

function Contacts(options) {
	this.options = options;
}

Contacts.prototype.upsert = function (data, callback) {
	if (_.isArray(data)) {
		var result = request.post(this.options.api.base + '/contacts', {
			contacts: data
		}, { headers: this.options.api.headers });
	} else {
		var result = request.post(this.options.api.base + '/contact', {
			contact: data
		}, { headers: this.options.api.headers });
	}

	return callback ? result.then(callback).catch(callback) : result;
}

Contacts.prototype.get = function (id, callback) {
	var result = request.get(this.options.api.base + '/contact/' + id, {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

Contacts.prototype.delete = function (id, callback) {
	var result = request.delete(this.options.api.base + '/contact/' + id, {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

Contacts.prototype.unsubscribe = function (id, callback) {
	var result = request.post(this.options.api.base + '/contact/' + id + '/unsubscribe', {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

module.exports = Contacts;
