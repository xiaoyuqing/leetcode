/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode('hh');
  let l3 = result;
  let carry = 0;
  while (l1 || l2) {
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;
    let value = value1 + value2 + carry;
    carry = Math.floor(value / 10);
    value = value % 10;
    l3.next = new ListNode(value);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    l3 = l3.next;
  }
  l3.next = l1 || l2;
  if (carry > 0) {
    l3.next = new ListNode(carry);
  }
  return result.next;
};
