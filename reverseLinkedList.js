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
var reverseList = function(head) {
  let newNext = null;
  let current = head;
  while (current) {
    let tempNode = current.next;
    current.next = newNext;
    newNext = current;
    current = tempNode;
  }
  return newNext;
};
