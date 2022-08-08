/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    let curSteps = 1;
    
    for(let i=0; i<nums.length-1; i++){
        let tempSteps=nums[i];
        curSteps--;
        curSteps=Math.max(tempSteps, curSteps);
        if(curSteps<=0)return false;
    }
    return curSteps>0;
};