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

test('Object schema undefined properties clean up', function (t) {
	var e = tr({});
	t.deepEqual(e({ a: 'beep', b: undefined, c: undefined }), { a: 'beep' });
	t.end();
});

test('transform def', function (t) {
	t.equal(tr().def('abc').apply(null), 'abc');
	t.equal(tr().def('abc').apply('bcd'), 'bcd');
	t.end();
})

test('transform del', function (t) {
	var e = tr({
		a: tr().del(),
		b: tr().lowercase()
	});

	t.deepEqual(
		e({ a: 'beep', b: 'BOOP' }),
		{ b: 'boop' }
	);

	t.end();
});
