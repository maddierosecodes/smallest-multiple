const { findSmallestMultiple } = require('./main.js')

describe('findSmallestMultiple', () => {
	it('returns a number', () => {
		expect(typeof findSmallestMultiple()).toBe('number')
	});
	it('returns 0 when upper limit of divisors is 0', () => {
		expect(findSmallestMultiple(0)).toBe(0);
	});
});
