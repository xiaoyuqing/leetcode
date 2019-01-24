/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 用的递归，左右两边深度最大的 + 1
var maxDepth = function(root) {
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}