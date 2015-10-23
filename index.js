var Contacts = require('./resources/contacts.js');
var Journeys = require('./resources/journeys.js');
var Lists = require('./resources/lists.js');
var Account = require('./resources/account.js');

function Autopilot(apiKey) {
	this.options = {
		api: {
			base: 'https://api2.autopilothq.com/v1',
			key: apiKey,
			headers: {
				'autopilotapikey': apiKey,
				'Accept': 'application/json'
			}
		}
	};

	this.account = new Account(this);
	this.contacts = new Contacts(this);
	this.lists = new Lists(this);
	this.journeys = new Journeys(this);
}

Autopilot.prototype.result = function (promise, callback) {
	if (callback) {
		promise
			.then(function (res) {
				callback(null, res);
			})
			.catch(function (res) {
				callback(new Error(), res);
			});
	}

	return promise;
}

module.exports = Autopilot;
