/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let len = haystack.length-needle.length;
    
    for(let i=0; i<=len; i++){
        if(haystack[i]===needle[0]){
            if(haystack.slice(i, i+needle.length)===needle) return i;
        }
    }
    return -1;
};