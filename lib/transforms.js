function lowercase (val) {
	return val.toLowerCase();
}

function slice (val, start, end) {
	return val.slice(start, end);
}

module.exports = {
	lowercase: lowercase,
	slice: slice
};
