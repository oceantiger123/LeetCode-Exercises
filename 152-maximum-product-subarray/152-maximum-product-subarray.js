/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let largest = nums[0];
    
    let curMax = largest;
    let curMin = largest;
    
    for(let i=1; i<nums.length; i++){
       
        let cur1 = curMax * nums[i];
        let cur2 = curMin * nums[i];
        
        curMax = Math.max(cur1, cur2, nums[i]);
        curMin = Math.min(cur1, cur2, nums[i]);
        
        largest = Math.max(curMax, largest);
    }
    return largest;
};
 