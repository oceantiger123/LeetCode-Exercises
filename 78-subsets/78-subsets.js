/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let res = [];
    let path = [];
    
    const dfs = (nums, start, path, res)=>{
        
        res.push(path.slice());
        for(let i=start; i<nums.length; i++){
            
            path.push(nums[i]);
            dfs(nums, i+1, path, res);
            path.pop();
            
        }
    }
    dfs(nums, 0, path, res);
    
    return res;
};