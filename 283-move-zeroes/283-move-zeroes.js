/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let i=0, j=0;
    let len = nums.length
    
    while(i<len){
        if(nums[j]===0) nums.push(nums.splice(j, 1));
        else j++;
        i++;
    }
};