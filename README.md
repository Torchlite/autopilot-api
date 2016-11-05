# autopilot-api

A Node.js wrapper for [Autopilot](https://autopilothq.com/)'s [REST API](http://docs.autopilot.apiary.io/).

Example:

	let Autopilot = require('autopilot-api');
	let autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

	let contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@bobbarker.com' };

	autopilot.contacts.upsert(contact)
		.then(console.log)
		.catch(console.error);

### Quick links:
* [Installation](#installation)
* [Usage](#usage)
	* [Contacts](#contacts)
		* [Upsert Contact](#upsert-contact)(s)
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

	npm install autopilot-api --save

## Usage

Begin by initializing with your API key:

	let Autopilot = require('autopilot-api');
	let autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

Now you will be able to interact with Autopilot resources as described below.

### Contacts

#### Upsert Contact

* Method: `autopilot.contacts.upsert(data[, callback])`
* Parameters:

	| Name       | Type                | Required | Description                                                                           |
	|------------|---------------------|----------|---------------------------------------------------------------------------------------|
	| `data`     | `object` or `array` | Yes      | The contact data to be upserted. If an array is provided, a bulk upsert is performed. |
	| `callback` | `function`          | No       | A callback function to be executed upon completion.                                   |
* Promise example:

		let contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@bobbarker.com' };

		autopilot.contacts.upsert(contact)
			.then(console.log)
			.catch(console.error);

* Callback example:

		let contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@bobbarker.com' };

		try {
			autopilot.contacts.upsert(contact, console.log);
		} catch (err) {
			console.error(err);
		}

#### Get Contact

* Method: `autopilot.contacts.get(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.contacts.get('bob@bobbarker.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.contacts.get('bob@bobbarker.com', console.log);
		} catch (err) {
			console.error(err);
		}

#### Delete Contact

* Method: `autopilot.contacts.delete(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.contacts.delete('bob@bobbarker.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.contacts.delete('bob@bobbarker.com', console.log);
		} catch (err) {
			console.error(err);
		}

#### Unsubscribe Contact

* Method: `autopilot.contacts.unsubscribe(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.contacts.unsubscribe('bob@bobbarker.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.contacts.unsubscribe('bob@bobbarker.com', console.log);
		} catch (err) {
			console.error(err);
		}

### Lists

#### List Lists

* Method: `autopilot.lists.list([callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.lists.list()
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.lists.list(console.log);
		} catch (err) {
			console.error(err);
		}

#### Insert List

* Method: `autopilot.lists.insert(name[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `name`     | `string`   | Yes      | The name for a new list.                                         |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.lists.insert('Animal Rights Supporters')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.lists.insert('Animal Rights Supporters', console.log);
		} catch (err) {
			console.error(err);
		}

#### List Contacts in List

* Method: `autopilot.lists.roster(id[, bookmark, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                                                                                       |
	|------------|------------|----------|-----------------------------------------------------------------------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | The `id` of the list to query.                                                                                                    |
	| `bookmark` | `string`   | No       | If there are more contacts on the list than have been returned, the bookmark will allow you to access the next group of contacts. |
	| `callback` | `function` | No       | A callback function to be executed upon completion.                                                                               |
* Promise example:

		autopilot.lists.roster('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.lists.roster('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', null, console.log);
		} catch (err) {
			console.error(err);
		}

#### Check if Contact is in List

* Method: `autopilot.lists.has(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

		autopilot.lists.has('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.lists.has('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com', console.log);
		} catch (err) {
			console.error(err);
		}

#### Add Contact to List

* Method: `autopilot.lists.add(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

		autopilot.lists.add('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.lists.add('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com', console.log);
		} catch (err) {
			console.error(err);
		}

#### Remove Contact from List

* Method: `autopilot.lists.remove(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

		autopilot.lists.remove('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.lists.remove('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com', console.log);
		} catch (err) {
			console.error(err);
		}

### Journeys (via triggers)

#### Add Contact to Journey

* Method: `autopilot.journeys.add(triggerId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `triggerId` | `string`   | Yes      | The `id` of the trigger associated with the Journey we're adding to. |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address.    |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.lists.add('0001', 'bob@bobbarker.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.lists.add('0001', 'bob@bobbarker.com', console.log);
		} catch (err) {
			console.error(err);
		}

#### List Journeys with Triggers

* Method: `autopilot.journeys.list([callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.journeys.list()
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.journeys.list(console.log);
		} catch (err) {
			console.error(err);
		}

### Account

#### Get Account

* Method: `autopilot.account.get([callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.account.get()
			.then(console.log)
			.catch(console.error);

* Callback example:

		try {
			autopilot.account.get(console.log);
		} catch (err) {
			console.error(err);
		}

## License

Released under [MIT](https://raw.githubusercontent.com/Torchlite/autopilot-api/master/LICENSE).
