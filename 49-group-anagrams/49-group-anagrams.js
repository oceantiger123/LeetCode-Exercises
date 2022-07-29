/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let hash = {};
   
    for(let i=0; i<strs.length; i++){
        let cur = strs[i].split('').sort().join('');
        if(hash[cur]) {
            hash[cur].push(strs[i]); 
        }
        else {
            hash[cur] = [strs[i]]; 
        }
    }
    return Object.values(hash)
};