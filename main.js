const findSmallestMultiple = (upperDivisorLimit) => {
  if (upperDivisorLimit > -1 && upperDivisorLimit < 3) return upperDivisorLimit;
  const divisorArray = Array.from(
    { length: upperDivisorLimit },
    (value, i) => i + 1
  );
  // HCF = 1

  // Find LCM
  // [range*]/HCF(range)
};

module.exports = { findSmallestMultiple };
