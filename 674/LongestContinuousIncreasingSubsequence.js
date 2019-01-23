/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length < 1) return 0;
  let length = 1;
  let max = 1;
  for (let i = 1;i < nums.length; i++) {
    let item = nums[i];
    if (item > nums[i-1]) {
      length++;
    } else {
      if (length > max) {
        max = length;
        length = 1;
      }
    }
  }
  return max;
};