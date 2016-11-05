const axios = require('axios');

module.exports = class Autopilot {
	constructor(apiKey) {
		const api = axios.create({
			baseURL: 'https://api2.autopilothq.com/v1/',
			headers: {
				autopilotapikey: apiKey,
				Accept: 'application/json'
			}
		});

		this.contacts = {
			upsert: (data, callback) => {
				const key = Array.isArray(data) ? 'contacts' : 'contact';

				return this.handle(api.post(key, { [key]: data }), callback);
			},
			list: (bookmark, callback) => {
				if (typeof bookmark === 'function') {
					callback = bookmark;
					bookmark = undefined;
				}

				const append = bookmark ? `/${bookmark}` : '';

				return this.handle(api.get(`contacts${append}`), callback);
			},
			get: (contactId, callback) => {
				return this.handle(api.get(`contact/${contactId}`), callback);
			},
			delete: (contactId, callback) => {
				return this.handle(api.delete(`contact/${contactId}`), callback);
			},
			unsubscribe: (contactId, callback) => {
				return this.handle(api.post(`contact/${contactId}/unsubscribe`), callback);
			},
			fields: () => {
				return this.handle(api.get(`contacts/custom_fields`), callback);
			}
		};

		this.journeys = {
			list: (callback) => {
				return this.handle(api.get('triggers'), callback);
			},
			add: (triggerId, contactId, callback) => {
				return this.handle(api.post(`trigger/${triggerId}/contact/${contactId}`), callback);
			}
		};

		this.lists = {
			list: (callback) => {
				return this.handle(api.get('lists'), callback);
			},
			insert: (name, callback) => {
				return this.handle(api.post('list', { name }), callback);
			},
			roster: (listId, bookmark, callback) => {
				if (typeof bookmark === 'function') {
					callback = bookmark;
					bookmark = undefined;
				}

				const append = bookmark ? `/${bookmark}` : '';

				return this.handle(api.get(`list/${listId}/contacts${append}`), callback);
			},
			has: (listId, contactId, callback) => {
				return this.handle(api.get(`list/${listId}/contact/${contactId}`), callback);
			},
			add: (listId, contactId, callback) => {
				return this.handle(api.post(`list/${listId}/contact/${contactId}`), callback);
			},
			remove: (listId, contactId, callback) => {
				return this.handle(api.delete(`list/${listId}/contact/${contactId}`), callback);
			}
		};

		this.smartSegments = {
			list: (callback) => {
				return this.handle(api.get('smart_segments'), callback);
			},
			roster: (smartSegmentId, bookmark, callback) => {
				if (typeof bookmark === 'function') {
					callback = bookmark;
					bookmark = undefined;
				}

				const append = bookmark ? `/${bookmark}` : '';

				return this.handle(api.get(`smart_segments/${smartSegmentId}/contacts${append}`), callback);
			}
		};

		this.account = {
			get: (callback) => {
				return this.handle(api.delete(`account`), callback);
			}
		};
	}

	handle(result, callback) {
		if (callback) {
			result
				.then(res => callback(null, res))
				.catch(err => {
					const sent = err.hasOwnProperty('response');
					const reason = sent ? err.response.status : err.message;
					const response = sent ? error.response : null;

					callback(new Error(reason), response);
				});
		}

		return result;
	}
};
