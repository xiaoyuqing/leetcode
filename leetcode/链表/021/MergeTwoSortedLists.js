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
// 先把链表转为数组，再合并数组，再把数组转为链表
const sorted = l => {
  const result = [];
  let current = l;
  while(current) {
      result.push(current.val);
      current = current.next;
  }
  
  return result;
}
var mergeTwoLists = function(l1, l2) {
  const arr1 = sorted(l1);
  const arr2 = sorted(l2);
  
  const resultArr = arr1.concat(arr2).sort((a, b) => a - b);
  
  const result = new ListNode(null);
  let current = result;
  
  for (const item of resultArr) {
      current.next = new ListNode(item);
      current = current.next;
  }
  return result.next;
};
