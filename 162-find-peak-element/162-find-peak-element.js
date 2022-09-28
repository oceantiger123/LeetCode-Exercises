/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    let l=0;
    let r=nums.length-1;
    
    while(l<r){
        
        if(nums[l]<nums[l+1] && nums[l+1]>nums[l+2]) return l+1;
        if(nums[r]<nums[r-1] && nums[r-1]>nums[r-2]) return r-1;
        
        l++;
        r--;
    }
    return nums[0]>nums[nums.length-1] ? 0 : nums.length-1;
};