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

  function treeTraverse(node, num = 0, path = []) {
    // Defines a new path array for each call of the recursor
    const newPath = [...path];
    newPath.push(node.val);
    const newNum = num + node.val;
    if (node.left) treeTraverse(node.left, newNum, newPath);
    if (node.right) treeTraverse(node.right, newNum, newPath);
    if (!node.left && !node.right && newNum === sum) paths.push(newPath);
  }
  if (root) treeTraverse(root);
  return paths;
};
