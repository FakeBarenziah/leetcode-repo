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
var deleteDuplicates = head => {
  if (head === null || head.next === null) return head;

  if (head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next);
    return head;
  } else {
    while (head.next !== null && head.val === head.next.val) {
      head = head.next;
    }
    return deleteDuplicates(head.next);
  }
};
