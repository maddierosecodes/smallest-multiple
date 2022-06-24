const findSmallestMultiple = (upperDivisorLimit) => {
  if (upperDivisorLimit > -1 && upperDivisorLimit < 3) return upperDivisorLimit;
  // Create array of divisors between 1 and upperDivisorLimit
  const divisorArray = Array.from(
    { length: upperDivisorLimit },
    (value, i) => i + 1
  );
  let smallestMultiple = upperDivisorLimit
  while (true) {
    if (divisorArray.every((divisor) => smallestMultiple % divisor === 0 )) return smallestMultiple
    smallestMultiple += upperDivisorLimit
  }
};

module.exports = { findSmallestMultiple };
