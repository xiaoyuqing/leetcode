/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  let max = -Infinity,
      last = -Infinity;
  nums.forEach(val => {
    last = last < 0 ? val : val + last;
    max = Math.max(max, last);
  })
  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))