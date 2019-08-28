/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  return traverse(root, 0);

  function sumAll(node, base = 0) {
    if (!node) return base;
    return node.val + base + sumAll(node.right) + sumAll(node.left);
  }

  function traverse(node, base) {
    console.log(node.val, base);
    node.val = sumAll(node.right, base + node.val);
    if (node.left) {
      node.left = traverse(node.left, node.val);
    }
    if (node.right) {
      node.right = traverse(node.right, base);
    }
    return node;
  }
};


log({ 
  val: 4, 
  left: { 
    val: 1, 
    left: { 
      val: 0, 
      right: null, 
      left: null 
    }, 
    right: { 
      val: 2, 
      left: null, 
      right: {
        val: 3,
        left: null,
        right: null
      }
    } 
  }, 
  right: { 
    val: 6, 
    left: { 
      val: 5, 
      right: null, 
      left: null 
    }, 
    right: { 
      val: 7, 
      left: null,
      right: { 
        val: 8, 
        left: null, 
        right: null
      }, 
    } 
  }
}, 

  [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]);


function log(i, o) {
  // console.log((bstToGst(i)));
  console.log(JSON.stringify(bstToGst(i)));
}

