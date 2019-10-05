/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;
  const runningTotal = sum - root.val;
  if (root.left === null && root.right === null) return runningTotal === 0;
  return (
    hasPathSum(root.left, runningTotal) || hasPathSum(root.right, runningTotal)
  );
};
