/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoBST = function(root, val) {
  function insert(root, val) {
    if (!root.right && root.val <= val) {
      root.right = { val, left: null, right: null }
      return;
    } else if (!root.left && root.val > val) {
      root.left = { val, left: null, right: null }
      return;
    }
    if (root.val < val) {
      insert(root.right, val)
    } else if (root.val > val) {
      insert(root.left, val)
    }
  }
  insert(root, val);
  return root;
};

log(
  new TreeNode(8,
    null, 
    new TreeNode(55, 
      new TreeNode(39, 
        new TreeNode(11,
          null,
          new TreeNode(23)
        )
      )
    )
  )
, 17);

function log(i, v) {
  console.log(JSON.stringify(insertIntoBST(i,v)));
}
