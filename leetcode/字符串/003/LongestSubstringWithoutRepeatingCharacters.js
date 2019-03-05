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


/* 1.初始化两个指针（head,tail）指向字符串开头
   2.tail++,如果tail指针指向的字符不与head和tail-1之间的字符重复，tail继续向后移动，更新max；反之，head一直加到没有重复字符为止
   3.重复第二步骤，直到tail指针指向字符串结尾
*/
var lengthOfLongestSubstring = function (s) {
  const map = {};
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}