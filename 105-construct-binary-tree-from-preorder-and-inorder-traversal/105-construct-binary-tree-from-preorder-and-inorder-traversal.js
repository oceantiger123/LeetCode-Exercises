/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    if(!preorder.length || !inorder.length) return null;
    
    let newNode = new TreeNode(preorder[0]);
    
    let pix = inorder.indexOf(preorder[0]);
    
    newNode.left = buildTree(preorder.slice(1, pix+1), inorder.slice(0, pix));
    newNode.right = buildTree(preorder.slice(pix+1), inorder.slice(pix+1));
    
    return newNode
};