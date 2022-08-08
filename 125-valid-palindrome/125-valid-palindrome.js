/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let newS = s.split('').filter(char=>(/[a-zA-Z]/).test(char) || Number.isInteger(Number(char))).join('').replace(/\s+/g, '').trim();
    
    let l=0, r=newS.length-1;
    while(l<=r){
        if(newS[l].toLowerCase()!==newS[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true
};