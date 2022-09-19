/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0
    nums.sort((a, b)=> a-b);
    let output = 0;
    let curSeq = 0;
    for(let i=0; i< nums.length; i++){
        
        if(nums[i+1]-nums[i]===1) curSeq++;
        else if(nums[i+1]===nums[i]) continue;
        else {
            if(curSeq>output)output=curSeq;
            curSeq = 0;
        }
        
}
    return output+1;
};