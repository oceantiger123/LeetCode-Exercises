/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let largest = -Infinity;   
    let curTotal = 0;
    for(let i=0; i< nums.length; i++){
        
        let cur = nums[i];
        curTotal+=cur;
        if(cur>largest && cur>curTotal){
            largest=cur;
            curTotal = cur;
        } else if(curTotal>largest){
            largest = curTotal;
            
        }
        else if(cur>curTotal){
                curTotal = cur;
                }
    }
    return largest;
};