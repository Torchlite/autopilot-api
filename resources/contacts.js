var _ = require('lodash');
var request = require('superagent');

function Contacts(autopilot) {
	this.autopilot = autopilot;
}

Contacts.prototype.upsert = function (data, callback) {
	request.post(this.autopilot.getApiBase() + 'contact')
		.set('autopilotapikey', this.autopilot.options.api.key)
		.set('Accept', 'application/json')
		.send({ contact: data })
		.end(callback || _.noop);
}

Contacts.prototype.get = function (callback) {
	// Stub.
}

Contacts.prototype.delete = function (callback) {
	// Stub.
}

Contacts.prototype.unsubscribe = function (callback) {
	// Stub.
}

module.exports = Contacts;
