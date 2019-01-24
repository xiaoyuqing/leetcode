/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  while(str.indexOf('  ') > -1) {
      str = str.replace('  ', ' ');
  }
  return str.trim().split(' ').reverse().join(' ');
};