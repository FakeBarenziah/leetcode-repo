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

var mergeTwoLists = function(l1, l2) {
  // Initialize a new List to fill and return with a dummy value that will be skipped at the end
  const newList = new ListNode(0);
  // Also initialize a pointer so it can assign each next value. This way an insert function doesn't need to be defined
  let tail = newList;

  // Until one of the lists is nulled out, insert the smaller value of the two list heads and move the pointer
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      tail.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    tail = tail.next;
  }
  /*
  Now one of the original lists has been completely spliced into the new list, but there may be some left over
  The tail.next should be the remainder of whichever list is not null.
  Since they are already sorted, it will be in the correct order.
  If both lists are null, then the tail.next will be null anyway, gg.
  */

  tail.next = l1 ? l1 : l2;

  return newList.next;
};
