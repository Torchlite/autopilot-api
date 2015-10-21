var Contacts = require('./resources/contacts.js');
var Journeys = require('./resources/journeys.js');
var Lists = require('./resources/lists.js');
var Account = require('./resources/account.js');

function Autopilot(apiKey) {
	this.options = {
		api: {
			key: apiKey,
			base: 'https://api2.autopilothq.com',
			version: 'v1'
		}
	};

	this.account = new Account(this);
	this.contacts = new Contacts(this);
	this.lists = new Lists(this);
	this.journeys = new Journeys(this);
}

Autopilot.prototype.getApiBase = function getApiBase() {
	return this.options.api.base + '/' + this.options.api.version + '/'
}

module.exports = Autopilot;
