# autopilot-api

A Node.js wrapper for [Autopilot](https://autopilothq.com/)'s [REST API](http://docs.autopilot.apiary.io/).

Example:
```javascript
var Autopilot = require('autopilot-api');
var autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

var contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@bobbarker.com' };

autopilot.contacts.upsert(contact)
	.then(function (response) {
		console.log(response);
	})
	.catch(function (response) {
		console.log('Error', response);
	});
```

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

	var Autopilot = require('autopilot-api');
	var autopilot = new Autopilot('c5359558cf764d17bc49f13a87e8a56e');

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

	```javascript
	var contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@bobbarker.com' };

	autopilot.contacts.upsert(contact)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	var contact = { FirstName: 'Bob', LastName: 'Barker', Email: 'bob@bobbarker.com' };

	autopilot.contacts.upsert(contact, function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### Get Contact

* Method: `autopilot.contacts.get(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

	```javascript
	autopilot.contacts.get('bob@bobbarker.com')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.contacts.get('bob@bobbarker.com', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### Delete Contact

* Method: `autopilot.contacts.delete(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

	```javascript
	autopilot.contacts.delete('bob@bobbarker.com')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.contacts.delete('bob@bobbarker.com', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### Unsubscribe Contact

* Method: `autopilot.contacts.unsubscribe(id[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

	```javascript
	autopilot.contacts.unsubscribe('bob@bobbarker.com')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.contacts.unsubscribe('bob@bobbarker.com', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

### Lists

#### List Lists

* Method: `autopilot.lists.list([callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

	```javascript
	autopilot.lists.list()
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.lists.list(function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### Insert List

* Method: `autopilot.lists.insert(name[, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                      |
	|------------|------------|----------|------------------------------------------------------------------|
	| `name`     | `string`   | Yes      | The name for a new list.                                         |
	| `callback` | `function` | No       | A callback function to be executed upon completion.              |
* Promise example:

	```javascript
	autopilot.lists.insert('Animal Rights Supporters')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.lists.insert('Animal Rights Supporters', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### List Contacts in List

* Method: `autopilot.lists.roster(id[, bookmark, callback])`
* Parameters:

	| Name       | Type       | Required | Description                                                                                                                       |
	|------------|------------|----------|-----------------------------------------------------------------------------------------------------------------------------------|
	| `id`       | `string`   | Yes      | The `id` of the list to query.                                                                                                    |
	| `bookmark` | `string`   | No       | If there are more contacts on the list than have been returned, the bookmark will allow you to access the next group of contacts. |
	| `callback` | `function` | No       | A callback function to be executed upon completion.                                                                               |
* Promise example:

	```javascript
	autopilot.lists.roster('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.lists.roster('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', null, function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### Check if Contact is in List

* Method: `autopilot.lists.has(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

	```javascript
	autopilot.lists.has('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.lists.has('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### Add Contact to List

* Method: `autopilot.lists.add(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

	```javascript
	autopilot.lists.add('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.lists.add('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### Remove Contact from List

* Method: `autopilot.lists.remove(listId, contactId[, callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                       |
	|-------------|------------|----------|-------------------------------------------------------------------|
	| `listId`    | `string`   | Yes      | The `id` of the list to query.                                    |
	| `contactId` | `string`   | Yes      | Either the Autopilot `contact_id` or the contact's email address. |
	| `callback`  | `function` | No       | A callback function to be executed upon completion.               |
* Promise example:

	```javascript
	autopilot.lists.remove('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.lists.remove('contactlist_06444749-9C0F-4894-9A23-D6872F9B6EF8', 'bob@bobbarker.com', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

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

	```javascript
	autopilot.lists.add('0001', 'bob@bobbarker.com')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.lists.add('0001', 'bob@bobbarker.com', function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

#### List Journeys with Triggers

* Method: `autopilot.journeys.list([callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

	```javascript
	autopilot.journeys.list()
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.journeys.list(function (err, response) {
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

### Account

#### Get Account

* Method: `autopilot.account.get([callback])`
* Parameters:

	| Name        | Type       | Required | Description                                                          |
	|-------------|------------|----------|----------------------------------------------------------------------|
	| `callback`  | `function` | No       | A callback function to be executed upon completion.                  |
* Promise example:

	```javascript
	autopilot.account.get()
		.then(function (response) {
			console.log(response);
		})
		.catch(function (response) {
			console.log('Error', response);
		});
	```

* Callback example:

	```javascript
	autopilot.account.get(function (err, response))
		if (err) {
			return console.log('Error', response);
		}

		console.log(response);
	});
	```

## License

Released under [MIT](https://raw.githubusercontent.com/Torchlite/autopilot-api/master/LICENSE).
