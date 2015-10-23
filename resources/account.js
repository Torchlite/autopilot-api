var _ = require('lodash');
var request = require('axios');

function Account(parent) {
	this.parent = parent;
	this.options = parent.options;
}

Account.prototype.get = function (id, callback) {
	var promise = request.get(this.options.api.base + '/account', {
		headers: this.options.api.headers
	});

	return this.parent.result(promise, callback);
}

module.exports = Account;
