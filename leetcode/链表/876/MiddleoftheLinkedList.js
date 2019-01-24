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
var middleNode = function(head) {
  if (head === null || head.next === null) return head;
  let fast = head;
  let slow = head;

  while (slow!=null && fast!=null && fast.next!=null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};