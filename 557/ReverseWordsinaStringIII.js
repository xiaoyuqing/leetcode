/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let array1 = s.split(' ');
  let map = array1.map((item) => item.split('').reverse().join(''));
  return map.join(' ');
};