/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    
    let lastIndex = nums.length -1;
    
    if(nums[0]<=nums[lastIndex]){
        for(let i=0; i<nums.length-1; i++){
            if(nums[i]>nums[i+1]) return false;
        }
    }
    else if(nums[0]>=nums[lastIndex]){
        for(let i=0; i<nums.length-1; i++){
            if(nums[i]<nums[i+1]) return false;
        }
    }
    return true;
};