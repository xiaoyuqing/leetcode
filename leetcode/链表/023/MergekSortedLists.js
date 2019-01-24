/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 跟021解题思路一样，先把链表转为数组，再合并数组，再把数组转为链表
const sorted = l => {
  const result = [];
  let current = l;
  while(current) {
      result.push(current.val);
      current = current.next;
  }
  
  return result;
}
var mergeKLists = function(lists) {
  let resultArr = [];
  for (let item of lists) {
    resultArr = resultArr.concat(sorted(item))
  };
  resultArr = resultArr.sort((a, b) => a - b);
  const result = new ListNode(null);
  let current = result;
  for (let num of resultArr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return result.next;
};