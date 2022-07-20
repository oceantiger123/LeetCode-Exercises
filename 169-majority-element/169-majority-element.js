/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b);
    let majority = nums[0];
    let maxCount = 1;
    let curCount = 1;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]===nums[i+1]) curCount++;
        else {
            if(maxCount < curCount) {
                maxCount = curCount;
                curCount = 1;
                majority = nums[i];
            }else curCount = 1;
        }
    }
    return majority;
    
};