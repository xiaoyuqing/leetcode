/**
 * @param {string[]} strs
 * @return {string}
 */

 //第一种 把数组里面的字符串的长度用arr存起来，再arr排序，选arr最短的字符串循环，把strs里面的字符串跟它比较，选出最长公共前缀
var longestCommonPrefix = function (strs) {
  let arr = []
  let result = ""
  for (let i = 0; i < strs.length; i++) {
    arr.push(strs[i].length)
  }
  arr.sort((a, b) => a - b)
  for (let j = 0; j < arr[0]; j++) {
    let s = strs[0][j]
    if (strs.every(val => val[j] == s)) {
      result += s
    } else {
      break
    }
  }
  return result
};

//第二种
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  let str = ''
  let first = strs[0]
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (first[i] !== strs[j][i]) {
        return str
      }
    }
    str += first[i]
  }
  return str
}
