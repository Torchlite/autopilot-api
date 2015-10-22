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

	this.account = new Account(this.options);
	this.contacts = new Contacts(this.options);
	this.lists = new Lists(this.options);
	this.journeys = new Journeys(this.options);
}

module.exports = Autopilot;
