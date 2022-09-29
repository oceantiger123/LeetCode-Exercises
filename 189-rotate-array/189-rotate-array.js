/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    let len=nums.length;
    if(len===k)return nums;
    if(k > len) k = k % len;
    let rotateArr = nums.splice(len-k);
    nums.splice(0, 0, ...rotateArr);
    
};
