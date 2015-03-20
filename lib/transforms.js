var _ = require('lodash');

function lowercase (val) {
	return val.toLowerCase();
}

function slice (val, start, end) {
	return val.slice(start, end);
}

function def (val, defaultValue) {
	if (_.isUndefined(val) || _.isNull(val)) {
		return defaultValue;
	}

	return val;
}

function del () {
	return undefined;
}

module.exports = {
	lowercase: lowercase,
	slice: slice,
	def: def
};
