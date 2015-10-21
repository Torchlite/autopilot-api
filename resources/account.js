var _ = require('lodash');
var request = require('superagent');

function Account(autopilot) {
	this.autopilot = autopilot;
}

Account.prototype.get = function (callback) {
	// Stub.
}

module.exports = Account;
