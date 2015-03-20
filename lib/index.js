var _ = require('lodash');
var Transform = require('./transform');

function ctr (schema) {
	if (_.isObject(schema)) {
		return createSchema(schema);
	}

	return new Transform();
}

function createSchema (schema) {
	return applySchema;

	function applySchema (obj, cb) {
		if (_.isFunction(cb)) {
			return applyAsync(obj, cb);
		}

		return applySync(obj);
	}

	function applyAsync (obj, cb) {
		throw new Error('Async transforms currently not available');
	}

	function applySync (obj) {

		for (var key in obj) {

			// Check if property transform available
			if (schema[key]) {

				// Apply property transform
				obj[key] = schema[key].apply(obj[key]);
			}

			if (_.isUndefined(obj[key])) {
				delete obj[key];
			}
		}

		return obj;
	}
}

module.exports = ctr;
