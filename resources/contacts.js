var _ = require('lodash');
var request = require('axios');

function Contacts(parent) {
	this.parent = parent;
	this.options = parent.options;
}

Contacts.prototype.upsert = function (data, callback) {
	var promise;

	if (_.isArray(data)) {
		promise = request.post(this.options.api.base + '/contacts', {
			contacts: data
		}, { headers: this.options.api.headers });
	} else {
		promise = request.post(this.options.api.base + '/contact', {
			contact: data
		}, { headers: this.options.api.headers });
	}

	return this.parent.result(promise, callback);
}

Contacts.prototype.get = function (id, callback) {
	var promise = request.get(this.options.api.base + '/contact/' + id, {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

Contacts.prototype.delete = function (id, callback) {
	var promise = request.delete(this.options.api.base + '/contact/' + id, {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

Contacts.prototype.unsubscribe = function (id, callback) {
	var promise = request.post(this.options.api.base + '/contact/' + id + '/unsubscribe', {}, {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

module.exports = Contacts;
