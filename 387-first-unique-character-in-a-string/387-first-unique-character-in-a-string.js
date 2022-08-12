/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let lettersMap = new Map();
    
    for(let i=0; i<s.length; i++){ 
        lettersMap.set(s[i], lettersMap.get(s[i])+1 || 1)
    }
    
    for(let ele of Array.from(lettersMap)){
        if(ele[1]===1) return s.indexOf(ele[0])
    }
    
    return -1
};