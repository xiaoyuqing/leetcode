/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

 //中序遍历,取第k个元素
var kthSmallest = function (root, k) {
  const res = [];
  function mid(node) {
    if (node) {
      mid(node.left);
      res.push(node.val);
      mid(node.right);
    }
  }
  mid(root);
  return res[k - 1];
};
