/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    
    for(let ele of nums){
        map.set(ele, map.get(ele)+1 || 1);
        if(map.get(ele)>1) return true
    }
    return false
};