/**
 * @param {number} n
 * @return {boolean}
 */

// 一直除2，当n !== 1的时候余数不为0就是false，n就等于除2的结果，一直循环，如果到最后n等于1，就是true
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