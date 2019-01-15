/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) {
    return false;
  }
  let mode;
  while(n != 1) {
    mode = n % 2;
    if (mode === 0) {
      n = n / 2;
    }else {
      return false;
    }
  }
  if (n === 1) {
    return true;
  }
};