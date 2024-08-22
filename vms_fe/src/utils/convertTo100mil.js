export function convertToHundredMillion(amount, decimalPlaces = 1) {
  const hundredMillionAmount = amount / 100000000;
  return hundredMillionAmount.toFixed(decimalPlaces);
}
