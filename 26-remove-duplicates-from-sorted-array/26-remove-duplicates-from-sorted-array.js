/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=0;
    let i=0
    while(nums[i]!=='_'){
        
        if(nums[i]===nums[i+1]){
            nums.splice(i+1, 1);
            nums.push("_");
           } else {
               i++;
               k++;
           }
    }
    return k;
};