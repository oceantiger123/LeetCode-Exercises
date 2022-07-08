/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left=0, right = nums.length-1;
    
    while(left <= right){
        
        let midPivot = Math.floor((left+right)/2);
        
        if(nums[midPivot]===target) return midPivot;
        
        if(nums[midPivot]>=nums[left]){
            if(target>=nums[left] && target < nums[midPivot]) right = midPivot -1;
            else left = midPivot + 1;
    } else {
        if (target <=nums[right] && target>nums[midPivot]) left = midPivot +1;
        else right = midPivot -1;
    }
    }
    return -1
};