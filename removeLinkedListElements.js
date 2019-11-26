/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head === null) return head;
  const falseHead = new ListNode("dummy");
  falseHead.next = head;
  let pointer = falseHead;
  while (pointer) {
    if (pointer.next && pointer.next.val === val) {
      pointer.next = pointer.next.next;
    } else pointer = pointer.next;
  }
  return falseHead.next;
};
