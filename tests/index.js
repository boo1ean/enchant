var test = require('tape');
var tr = require('../');

test('Simple transform', function (t) {
	t.equal(tr().lowercase().apply('BEEP'), 'beep');
	t.end();
});

test('Object schema', function (t) {
	var e = tr({
		email: tr().lowercase()
	});

	t.equal(e({ email: 'BEEP' }).email, 'beep');
	t.end();
});
