/**
 * @param {number[]} nums
 * @return {number}
 */
// 第一种
var removeDuplicates = function (nums) {

  var repeatIndex = 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[repeatIndex] = nums[i]
      repeatIndex++;
    }
  }
  return nums.length = nums.length < repeatIndex ? nums.length : repeatIndex;
};

// 第二种，用splice会慢很多
var removeDuplicates = function (nums) {
  let tag = ''
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== tag) {
      tag = nums[i]
    } else {
      nums.splice(i, 1)
    }
  }
  return nums.length
};