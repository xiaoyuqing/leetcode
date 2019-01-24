/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  var result = [];
  getResult(root, 0, result);
  return result;
};

var getResult = function (root, level, result) {
  if (!root) {
    return;
  }
  if (result[level] === undefined) {
    result[level] = [];
  }
  if (level % 2 === 0) {// 双数层数从尾部增加
    result[level].push(root.val);
  } else { // 单数层数从头部增加
    result[level].unshift(root.val);
  }
  if (!root.left && !root.right) {
    return;
  }
  getResult(root.left, level + 1, result); // 递归算一下左边
  getResult(root.right, level + 1, result); // 递归算一下右边
  return;
}
