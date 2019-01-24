/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 第一种
var search = function(nums, target) {
  return nums.indexOf(target);
};

//第二种
// 将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。此时有序部分用二分法查找。无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环.
var search = function (nums, target) {
  // 就是先寻找排序数组，再分情况查找
  var left = 0, right = nums.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // mid 左侧是排好序的
    if (nums[mid] >= nums[left]) {
      if (nums[mid] > target && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
