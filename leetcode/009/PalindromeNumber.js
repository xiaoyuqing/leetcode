/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let string = x.toString();
  let reverseString = string.split('').reverse().join('');
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
};