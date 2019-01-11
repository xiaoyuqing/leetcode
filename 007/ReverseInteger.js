/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let symbol = '';
  if (x < 0) symbol = '-';
  x = Math.abs(x);
  let string = x.toString();
  x = string.split('').reverse().join('');
  x = symbol + x;
  let num = parseInt(x);
  if (num < -Math.pow(2,31) || num > (Math.pow(2,31) - 1)) {
    return 0
  }
  return num;
};