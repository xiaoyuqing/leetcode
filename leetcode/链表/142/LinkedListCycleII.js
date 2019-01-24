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

var detectCycle = function (head) {
  if (head == null || head.next == null) {
    return null
  }
  let slow = head.next
  let fast = head.next.next
  let p = head

  while (true) {
    if (fast == null || fast.next == null) {
      return null
    }

    if (fast == slow) {
      // 相遇
      while (p != slow) {
        p = p.next
        slow = slow.next
      }
      return p
    }

    slow = slow.next
    fast = fast.next.next
  }
};
