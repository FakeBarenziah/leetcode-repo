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
var sumNumbers = function(root) {
  let total = 0;

  const treeTraverse = (node, path = []) => {
    const newPath = [...path];
    newPath.push(node.val);
    if (node.left) treeTraverse(node.left, newPath);
    if (node.right) treeTraverse(node.right, newPath);
    if (!node.left && !node.right) total += Number(newPath.join(""));
  };

  if (root) treeTraverse(root);

  return total;
};
