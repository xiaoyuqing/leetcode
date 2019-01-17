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
var levelOrder = function (root) {
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
  result[level].push(root.val);
  if (!root.left && !root.right) {
    return;
  }
  getResult(root.left, level + 1, result); // 递归算一下左边
  getResult(root.right, level + 1, result); // 递归算一下右边
  return;
}
