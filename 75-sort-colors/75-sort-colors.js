/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let i=0;
    let pos = 0;
    while(i<nums.length){
        let cur = nums[pos];
        if(cur===0){
            nums.splice(pos, 1);
            nums.unshift(cur);
            pos++;
        }
        if(cur===2){
            nums.splice(pos, 1);
            nums.push(cur);
        }
        if(cur===1) pos++;
        i++;
    }
    return nums;
};