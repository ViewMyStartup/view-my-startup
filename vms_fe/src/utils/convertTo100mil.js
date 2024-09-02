export function convertToHundredMillion(amount, decimalPlaces = 0) {
  const hundredMillionAmount = amount / 100000000;
  return hundredMillionAmount.toFixed(decimalPlaces);
}
