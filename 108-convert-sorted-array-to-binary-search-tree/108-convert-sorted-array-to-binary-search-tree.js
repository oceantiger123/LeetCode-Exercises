/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    if(nums.length < 1) return null;
        
    let l=0, r=nums.length-1;
    
    let midPivot = Math.floor((l+r)/2);
    
    let newNode = new TreeNode(nums[midPivot]);
    
    newNode.left = sortedArrayToBST(nums.slice(l, midPivot));
    newNode.right = sortedArrayToBST(nums.slice(midPivot+1));
    
    return newNode
};