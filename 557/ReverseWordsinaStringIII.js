/**
 * @param {string} s
 * @return {string}
 */

// 先把字符串变成数组再反转数组，再合并数组为字符串
var reverseWords = function(s) {
  let array1 = s.split(' ');
  let map = array1.map((item) => item.split('').reverse().join(''));
  return map.join(' ');
};