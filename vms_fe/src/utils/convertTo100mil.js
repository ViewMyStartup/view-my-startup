export function convertToHundredMillion(amount, decimalPlaces = 2) {
  const hundredMillionAmount = amount / 100000000;
  return hundredMillionAmount.toFixed(decimalPlaces); // 소수점 이하 자리수 처리
}
