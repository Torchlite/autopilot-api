var _ = require('lodash');
var request = require('axios');

function Lists(parent) {
	this.parent = parent;
	this.options = parent.options;
}

Lists.prototype.list = function (callback) {
	var promise = request.get(this.options.api.base + '/lists', {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

Lists.prototype.insert = function (name, callback) {
	var promise = request.post(this.options.api.base + '/list', {
		name: name 
	}, { headers: this.options.api.headers });

	return this.parent.result(promise, callback);
}

Lists.prototype.roster = function (id, bookmark, callback) {
	var promise = request.get(this.options.api.base + '/list/' + id + '/contacts' + (bookmark ? '/' + bookmark : ''), {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

Lists.prototype.has = function (listId, contactId, callback) {
	var promise = request.get(this.options.api.base + '/list/' + listId + '/contact/' + contactId, {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

Lists.prototype.add = function (listId, contactId, callback) {
	var promise = request.post(this.options.api.base + '/list/' + listId + '/contact/' + contactId, {}, {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

Lists.prototype.remove = function (listId, contactId, callback) {
	var promise = request.delete(this.options.api.base + '/list/' + listId + '/contact/' + contactId, {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

module.exports = Lists;
