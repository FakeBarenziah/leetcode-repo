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
  if (!head || !head.next) return head;

  let currentNode = head;
  let nextNode = currentNode.next;

  while (nextNode) {
    if (currentNode.val !== nextNode.val) {
      currentNode.next = nextNode;
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    } else if (nextNode.next === null) {
      currentNode.next = null;
      nextNode = nextNode.next;
    } else nextNode = nextNode.next;
  }
  return head;
};
