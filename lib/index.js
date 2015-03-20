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

	function applySchema (obj) {

		for (var key in obj) {

			// Check if property transform available
			if (schema[key]) {

				// Apply property transform
				obj[key] = schema[key].apply(obj[key]);
			}
		}

		return obj;
	}
}

module.exports = ctr;
