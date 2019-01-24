/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 一个指针先走n步，另一个指针再一起走，第一个指针走完，第二个指针正好走到倒数第n个
var removeNthFromEnd = function (head, n) {
  if (!head) {
    return head;
  }
  var dummyHead = new ListNode(0);
  dummyHead.next = head;
  var p = dummyHead;
  var q = dummyHead;
  for (var i = 0; i < n + 1; i++) {
    q = q.next;
  }
  while (q !== null) {
    p = p.next;
    q = q.next;
  }
  p.next = p.next.next;
  if (dummyHead.next === null) { // head被删掉了
    return null;
  } else {
    return dummyHead.next
  }
};

// 最快的解法
let removeNthFromEnd = function (head, n) {
  return removeNthFromEndHelper(head, n, 0) === n ? head.next : head;
};

let removeNthFromEndHelper = function (head, n, count) {
  if (head.next !== null) {
    count = removeNthFromEndHelper(head.next, n, count);
  }
  if (count === n) {
    head.next = head.next.next;
  }
  return ++count;
};