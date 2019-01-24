/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 用root来存储反转后的第一个节点
var reverseList = function (head) {
  var root = null,
    currentNode = head;
    while (currentNode) {
      const next = currentNode.next;
      currentNode.next = root;
      root = currentNode;
      currentNode = next;
    }
  return root;
}