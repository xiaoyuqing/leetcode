/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var slength = s.length
  var ans = 0
  var stringMap = new Map()
  for (var i = 0, j = 0; i < slength; i++) {
    var char = s.charAt(i)
    if (stringMap.has(char)) {
      var j = Math.max(stringMap.get(char), j)
    }
    ans = Math.max(ans, i - j + 1)
    stringMap.set(char, i + 1)
  }
  return ans
};
