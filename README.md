# autopilot

A Node.js wrapper for [Autopilot](https://autopilothq.com/)'s [REST API](http://docs.autopilot.apiary.io/).

Example:

	var Autopilot = require('autopilot');
	var autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

	var contact = { FirstName: 'Slarty', LastName: 'Bartfast', Email: 'mail@me.com' };

	autopilot.contacts.upsert(contact, function (err, response) {
		if (err) {
			return console.error('Error', err);
		}

		console.log(response);
	});

### Quick links:
* [Installation](#installation)
* [API Reference](#api-reference)
	* [Contacts](#contacts)
		* [Upsert Contact](#upsert-contact)
		* [Get Contact](#get-contact)
		* [Delete Contact](#delete-contact)
		* [Unsubscribe Contact](#unsubscribe-contact)
	* [Lists](#lists)
		* [List Lists](#list-lists)
		* [Insert List](#insert-list)
		* [List Contacts in List](#list-contacts-in-list)
		* [Check if Contact is in List](#check-if-contact-is-in-list)
		* [Add Contact to List](#add-contact-to-list)
		* [Remove Contact from List](#remove-contact-from-list)
	* [Journeys](#journeys) (via triggers)
		* [Add Contact to Journey](#add-contact-to-journey)
		* [List Journeys with Triggers](#list-journeys-with-triggers)
	* [Account](#account)
		* [Get Account](#get-account)
* [License](#license)

## Installation

	npm install autopilot --save

## API Reference

Begin by initializing with your API key:

	var Autopilot = require('autopilot');
	var autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

Now you will be able to interact with system resources as described below.

### Contacts

#### Upsert Contact

* Method: `autopilot.contacts.upsert`
* Parameters:

	| Name      | Type     | Required | Description                                         |
	|-----------|----------|----------|-----------------------------------------------------|
	| contact   | object   | Yes      | The contact data to be upserted.                    |
	| callback  | function | No       | A callback function to be executed upon completion. |
* Example:

		var contact = { FirstName: 'Slarty', LastName: 'Bartfast', Email: 'mail@me.com' };

		autopilot.contacts.upsert(contact, function (err, response) {
			if (err) {
				return console.error('Error', err);
			}

			console.log(response);
		});

#### Get Contact

*Not yet impemented.*

#### Delete Contact

*Not yet impemented.*

#### Unsubscribe Contact

*Not yet impemented.*

### Lists

#### List Lists

*Not yet impemented.*

#### Insert List

*Not yet impemented.*

#### List Contacts in List

*Not yet impemented.*

#### Check if Contact is in List

*Not yet impemented.*

#### Add Contact to List

*Not yet impemented.*

#### Remove Contact from List

*Not yet impemented.*

### Journeys (via triggers)

#### Add Contact to Journey

*Not yet impemented.*

#### List Journeys with Triggers

*Not yet impemented.*

### Account

#### Get Account

*Not yet impemented.*

## License

Released under [MIT](https://github.com/Torchlite/autopilot/blob/master/LICENSE.md).
