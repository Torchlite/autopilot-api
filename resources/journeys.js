var _ = require('lodash');
var request = require('superagent');

function Journeys(autopilot) {
	this.autopilot = autopilot;
}

Journeys.prototype.list = function (callback) {
	// Stub.
}

Journeys.prototype.add = function (callback) {
	// Stub.
}

module.exports = Journeys;
