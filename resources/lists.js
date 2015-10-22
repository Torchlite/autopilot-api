var _ = require('lodash');
var request = require('axios');

function Lists(options) {
	this.options = options;
}

Lists.prototype.list = function (callback) {
	var result = request.get(this.options.api.base + '/lists', {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

Lists.prototype.insert = function (name, callback) {
	var result = request.post(this.options.api.base + '/list', {
		name: name 
	}, { headers: this.options.api.headers });

	return callback ? result.then(callback).catch(callback) : result;
}

Lists.prototype.roster = function (id, callback) {
	var result = request.get(this.options.api.base + '/list/' + id + '/contacts', {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

Lists.prototype.has = function (listId, contactId, callback) {
	var result = request.get(this.options.api.base + '/list/' + listId + '/contact/' + contactId, {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

Lists.prototype.add = function (listId, contactId, callback) {
	var result = request.post(this.options.api.base + '/list/' + listId + '/contact/' + contactId, {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

Lists.prototype.remove = function (listId, contactId, callback) {
	var result = request.delete(this.options.api.base + '/list/' + listId + '/contact/' + contactId, {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

module.exports = Lists;
