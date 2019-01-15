/**
 * @param {string} s
 * @return {string}
 */
// 先把字符串变成数组再反转数组，再合并数组为字符串
var reverseString = function(s) {
  return s.split('').reverse().join('');
};
