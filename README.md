# autopilot-api

A third-party Node.js wrapper for [Autopilot](https://autopilothq.com/)'s [REST API](http://docs.autopilot.apiary.io/).

Example:

	let Autopilot = require('autopilot-api');
	let autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

	let contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@priceisright.com' };

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
		* [List Custom Contact Fields](#list-custom-contact-fields)
	* [Lists](#lists)
		* [List Lists](#list-lists)
		* [Insert List](#insert-list)
		* [List Contacts in List](#list-contacts-in-list)
		* [Check if Contact is in List](#check-if-contact-is-in-list)
		* [Add Contact to List](#add-contact-to-list)
		* [Remove Contact from List](#remove-contact-from-list)
	* [Smart Segments](#smart-segments)
		* [List Smart Segments](#list-smart-segments)
		* [List Contacts in Smart Segment](#list-contacts-in-smart-segment)
	* [Journeys](#journeys) (via triggers)
		* [Add Contact to Journey](#add-contact-to-journey)
		* [List Journeys with Triggers](#list-journeys-with-triggers)
	* [Account](#account)
		* [Get Account](#get-account)
	* [REST Hooks](#rest-hooks)
		* [List REST Hooks](#list-rest-hooks)
		* [Register REST Hook](#register-rest-hook)
		* [Unregister REST Hook](#unregister-rest-hook)
		* [Delete All REST Hooks](#delete-all-rest-hooks)
* [License](#license)

## Installation

	npm install autopilot-api --save

## Usage

Begin by initializing with your API key:

	let Autopilot = require('autopilot-api');
	let autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

Now you will be able to interact with Autopilot resources as described below.

Optionally you can pass an endpoint to use. This can be useful in testing if you want to call the sandbox api.

	let Autopilot = require('autopilot-api');
	let autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e', 'https://private-anon-5efcbf2622-autopilot.apiary-mock.com/v1');

### Contacts

#### Upsert Contact

* Method: `autopilot.contacts.upsert(data[, callback])`
* Parameters:

	| Name       | Type                | Required | Description                                                                           |
	|------------|---------------------|----------|---------------------------------------------------------------------------------------|
	| `data`     | `object` or `array` | Yes      | The contact data to be upserted. If an array is provided, a bulk upsert is performed. |
	| `callback` | `function`          | No       | A callback function to be executed upon completion.                                   |
* Promise example:

		let contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@priceisright.com' };

		autopilot.contacts.upsert(contact)
			.then(console.log)
			.catch(console.error);

* Callback example:

		let contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@priceisright.com' };

		autopilot.contacts.upsert(contact, (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Get Contact

* Method: `autopilot.contacts.get(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.contacts.get('bob@priceisright.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.contacts.get('bob@priceisright.com', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Delete Contact

* Method: `autopilot.contacts.delete(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.contacts.delete('bob@priceisright.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.contacts.delete('bob@priceisright.com', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Unsubscribe Contact

* Method: `autopilot.contacts.unsubscribe(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.contacts.unsubscribe('bob@priceisright.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.contacts.unsubscribe('bob@priceisright.com', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### List Custom Contact Fields

* Method: `autopilot.contacts.fields([callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

		autopilot.contacts.fields()
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.contacts.fields((err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

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

		autopilot.lists.list((err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

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

		autopilot.lists.insert('Animal Rights Supporters', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

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

		autopilot.lists.roster('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', () => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Check if Contact is in List

* Method: `autopilot.lists.has(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

		autopilot.lists.has('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@priceisright.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.lists.has('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@priceisright.com', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Add Contact to List

* Method: `autopilot.lists.add(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

		autopilot.lists.add('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@priceisright.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.lists.add('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@priceisright.com', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Remove Contact from List

* Method: `autopilot.lists.remove(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

		autopilot.lists.remove('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@priceisright.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.lists.remove('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@priceisright.com', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

### Smart Segments

#### List Smart Segments

* Method: `autopilot.smartSegments.list([callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.smartSegments.list()
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.smartSegments.list((err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### List Contacts in Smart Segment

* Method: `autopilot.smartSegments.roster(id[, bookmark, callback])`
* Parameters:

	| Name             | Type       | Required | Description                                                          |
	|------------------|------------|----------|----------------------------------------------------------------------|
	| `id`             | `string`   | Yes      | The `id` of the smart segment to query.                              |
	| `bookmark`       | `string`   | No       | If there are more contacts on the smart segment than have been returned, the bookmark will allow you to access the next group of contacts. |
	| `callback`       | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.smartSegments.roster('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.smartSegments.roster('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

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

		autopilot.lists.add('0001', 'bob@priceisright.com')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.lists.add('0001', 'bob@priceisright.com', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

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

		autopilot.journeys.list((err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

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

		autopilot.account.get((err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

### REST Hooks

#### List REST Hooks

* Method: `autopilot.restHooks.list([callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.restHooks.list()
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.restHooks.list((err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Register REST Hook

* Method: `autopilot.restHooks.register(event, targetUrl, [callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                                    |
	|-------------|------------|----------|--------------------------------------------------------------------------------|
	| `event`     | `string`   | Yes      | The event name that you wish to be told about.                                 |
	| `targetUrl` | `string`   | Yes      | The URL in your API which you want Autopilot to POST to when the event occurs. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                            |
* Promise example:

		autopilot.restHooks.register('contact_added', 'http://www.priceisright.com/tracking')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.restHooks.register('contact_added', 'http://www.priceisright.com/tracking', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		})

#### Unregister REST Hook

* Method: `autopilot.restHooks.unregister(hookId, [callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `hookId`    | `string`   | Yes      | The `id` of the hook to unregister.                                    |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.restHooks.unregister('hook_ED75BA78-2405-4564-B24C-F2B8F936C7C6')
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.restHooks.unregister('hook_ED75BA78-2405-4564-B24C-F2B8F936C7C6', (err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

#### Delete All REST Hooks

* Method: `autopilot.restHooks.deleteAll([callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

		autopilot.restHooks.deleteAll()
			.then(console.log)
			.catch(console.error);

* Callback example:

		autopilot.restHooks.deleteAll((err, response) => {
			if (err) {
				return console.error(err, response);
			}

			console.log(response);
		});

## License

Released under [MIT](https://raw.githubusercontent.com/Torchlite/autopilot-api/master/LICENSE).
