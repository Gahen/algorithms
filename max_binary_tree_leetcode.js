/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) return null;
  var max = Math.max(...nums);
  var arrLeft = nums.slice(0, nums.indexOf(max));
  var arrRight = nums.slice(nums.indexOf(max)+1);
  return {
    val: max,
    left: constructMaximumBinaryTree(arrLeft),
    right: constructMaximumBinaryTree(arrRight)
  };
};


log([3,2,1,6,0,5]);


function log(i) {
  console.log(constructMaximumBinaryTree(i));
}
