/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let returnVal = 0;

  function legTraverse(node) {
    if (node === null) return 0;
    const left = legTraverse(node.left);
    const right = legTraverse(node.right);
    let leftLeg = 0;
    let rightLeg = 0;
    if (node.left !== null && node.val === node.left.val) leftLeg += left + 1;
    if (node.right !== null && node.val === node.right.val)
      rightLeg += right + 1;
    returnVal = Math.max(returnVal, leftLeg + rightLeg);
    return Math.max(leftLeg, rightLeg);
  }

  legTraverse(root);
  return returnVal;
};
