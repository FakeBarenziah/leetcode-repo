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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const paths = [];

  function treeTraverse(node, num, path = []) {
    // Defines a new path array for each call of the recursor
    const newPath = [...path];
    newPath.push(node.val);
    const newNum = num - node.val;
    if (node.left && newNum > 0) treeTraverse(node.left, newNum, newPath);
    if (node.right && newNum > 0) treeTraverse(node.right, newNum, newPath);
  }
  treeTraverse(root, sum);
  return paths;
};
