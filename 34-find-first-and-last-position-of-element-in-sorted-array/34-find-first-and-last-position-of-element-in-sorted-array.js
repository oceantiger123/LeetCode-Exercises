/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let l=0, r=nums.length-1;
    
    
    while(l<=r){
        let midPivot = Math.floor((l+r)/2);
        
        if(nums[midPivot]===target){
            let i=midPivot, j=midPivot;
            while(nums[i]===target){i--};
            while(nums[j]===target){j++};
    
            return [i+1, j-1];
        }
        //on left side
        else if(nums[midPivot]>target){
            r = midPivot-1;
        } else{//on right side;
            l = midPivot+1;
        }
    }
    return [-1, -1];
};