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
var deleteDuplicates = function(head) {
  let falseHead = new ListNode(false);
  falseHead.next = head;
  // a pointer which never includes duplicates on its left
  let pointer = falseHead;
  let dupeFinder = pointer.next;

  while (dupeFinder) {
    if (dupeFinder.next && dupeFinder.val === dupeFinder.next.val) {
      let dupeVal = dupeFinder.val;
      while (dupeFinder && dupeFinder.val === dupeVal) {
        dupeFinder = dupeFinder.next;
        if (!dupeFinder) pointer.next = dupeFinder;
      }
    } else {
      pointer.next = dupeFinder;
      pointer = pointer.next;
      dupeFinder = pointer.next;
    }
  }
  return falseHead.next;
};
