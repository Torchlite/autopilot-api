let axios = require('axios');

let { Contacts, Journeys, Lists, Account } = require('./resources');

module.exports = class Autopilot {
	constructor(apiKey) {
		this.api = axios.create({
			baseURL: 'https://api2.autopilothq.com/v1/',
			headers: {
				autopilotapikey: apiKey,
				Accept: 'application/json'
			}
		});
	}

	account = {
		get: (callback) => {
			return this.api.delete(`account`)
				.then(callback || res => res);
		}
	},

	contacts = {
		upsert: (data, callback) => {
			let key = Array.isArray(data) ? 'contacts' : 'contact';

			return this.api.post(key, { [key]: data })
				.then(callback || res => res);
		},
		get: (contactId, callback) => {
			return this.api.get(`contact/${contactId}`)
				.then(callback || res => res);
		},
		delete: (contactId, callback) => {
			return this.api.delete(`contact/${contactId}`)
				.then(callback || res => res);
		},
		unsubscribe: (contactId, callback) => {
			return this.api.post(`contact/${contactId}/unsubscribe`)
				.then(callback || res => res);
		}
	};

	journeys = {
		list: (callback) => {
			return this.api.get('triggers')
				.then(callback || res => res);
		},
		add: (triggerId, contactId, callback) => {
			return this.api.post(`trigger/${triggerId}/contact/${contactId}`)
				.then(callback || res => res);
		}
	};

	lists = {
		list: (callback) => {
			return this.api.get('lists')
				.then(callback || res => res);
		},
		insert: (name, callback) => {
			return this.api.post('list', { name })
				.then(callback || res => res);
		},
		roster: (listId, bookmark, callback) => {
			bookmark = bookmark ? `/${bookmark}` : '';

			return this.api.get(`list/${listId}/contacts${bookmark}`)
				.then(callback || res => res);
		},
		has: (listId, contactId, callback) => {
			return this.api.get(`list/${listId}/contact/${contactId}`)
				.then(callback || res => res);
		},
		add: (listId, contactId, callback) => {
			return this.api.post(`list/${listId}/contact/${contactId}`)
				.then(callback || res => res);
		},
		remove: (listId, contactId, callback) => {
			return this.api.delete(`list/${listId}/contact/${contactId}`)
				.then(callback || res => res);
		}
	};
}
