/**
 * @param {number[]} nums
 * @return {number}
 */
// 先去重再排序，再找连续的子序列
var longestConsecutive = function (nums) {
  let arr = Array.from(new Set(nums.sort((a, b) => { return a - b })))
  let num = 0
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      num = 1
      max = 1
    } else {
      if (arr[i] === arr[i - 1] + 1) {
        num += 1
        if (num > max) {
          max = num
        }
      } else {
        num = 1
      }
    }
  }
  return max
};