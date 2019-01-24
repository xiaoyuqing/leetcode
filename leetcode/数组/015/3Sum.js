/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);// 先排序
  const result = [];
  let i = 0;
  while (i < nums.length) {
    let one = nums[i];
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = one + nums[start] + nums[end];
      if (sum === 0) {
        result.push([one, nums[start], nums[end]]);
        start++;
        end--;
        // 跳过重复值
        while (start < end && nums[start] === nums[start - 1]) {
          start++;
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end--;
        }
      } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
    i++;
    // 跳过重复值
    while (i < nums.length && nums[i] === nums[i - 1]) i++;
  }
  return result;
}