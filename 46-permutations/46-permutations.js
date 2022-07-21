/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let checkingMap= new Map();
    
    const helperFunc = (nums, path, res, checkingMap) =>{
        
        if(nums.length === path.length){
            res.push(path.slice());
            return
        };
        
        for(let i=0; i<nums.length; i++){
            
            if(!checkingMap.get(nums[i])){
                checkingMap.set(nums[i], true);
                path.push(nums[i]);
                
                helperFunc(nums, path, res, checkingMap);   
                path.pop();
                checkingMap.set(nums[i], false)
            }
        }       
    }
    helperFunc(nums, [], res, checkingMap);
    return res
};