const { findSmallestMultiple } = require('./main.js');

describe('findSmallestMultiple', () => {
  it('returns the same value when upper limit of divisors is 0-2', () => {
    expect(findSmallestMultiple(1)).toBe(1);
    expect(findSmallestMultiple(2)).toBe(2);
  });
  it('returns the smallest multiple (6) when upper limit of divisors is 3', () => {
    expect(findSmallestMultiple(3)).toBe(6);
  });
  it("returns the smallest multiple (6) when upper limit of divisors is larger than 3", () => {
    expect(findSmallestMultiple(4)).toBe(12);
    expect(findSmallestMultiple(10)).toBe(2520);
    expect(findSmallestMultiple(20)).toBe(232792560);
    
  });
});
