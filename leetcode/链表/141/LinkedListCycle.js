/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 如果形成环的话set就会包含某个值·
var hasCycle = function (head) {
  let current = head, list = new Set();
  while (current != null) {
    if (list.has(current)) return true;
    list.add(current);
    current = current.next;
  }
  return false;
};
