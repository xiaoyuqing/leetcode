/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 全排列会超时
// 长度为N的字符串S和T(只含字符'a'-'z')，S中字符'a'-'z'的分别的统计数和字符T中字符'a'-'z'分别的统计数相同，则T可由S的字符排列而来
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false
  }
  let diff = Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    diff[s1[i].charCodeAt() - 97]++
    diff[s2[i].charCodeAt() - 97]--
  }
  for (let i = s1.length; i < s2.length; i++) {
    if (diff.every(val => val === 0)) {
      return true
    }
    diff[s2[i - s1.length].charCodeAt() - 97]++
    diff[s2[i].charCodeAt() - 97]--
  }
  return diff.every(val => val === 0)
};
