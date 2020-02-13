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
var addTwoNumbers = function(l1, l2) {
  /*
   * Initialize a dummy list.
   * The final sum will begin at resultList.next.
   * Include a pointer to the tail.
   */
  const resultList = new ListNode(0);
  let currentDigit = resultList;

  // The carry variable stores whether a 1 is being carried or not
  let carry = 0;

  /*
   * Iterate through the lists as ling as one of them has values.
   * Add the value from each list together with the carry value.
   * Set the carry value if the sum is 10 or greater.
   * Append a new ListNode with the value of the sum's first digit to the tail of the resultList.
   * Set the currentList pointer to this new tail.
   * Finally, iterate to the next values of the two lists if they have a next node.
   */
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = sum >= 10 ? 1 : 0;
    currentDigit.next = new ListNode(sum % 10);
    currentDigit = currentDigit.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  /*
   * If there is a carry value after both lists have ended, it needs to be added to the tail of the resultList.
   *
   * Return the sum that begins at the .next pointer of the resultList.
   */
  if (carry) currentDigit.next = new ListNode(carry);
  return resultList.next;
};
