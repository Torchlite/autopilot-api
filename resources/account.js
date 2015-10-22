var _ = require('lodash');
var request = require('axios');

function Account(options) {
	this.options = options;
}

Account.prototype.get = function (id, callback) {
	var result = request.get(this.options.api.base + '/account', {
		headers: this.options.api.headers
	});

	return callback ? result.then(callback).catch(callback) : result;
}

module.exports = Account;
