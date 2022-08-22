/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    let x=0;
    while(n>=Math.pow(4, x)){
        
        if(n===Math.pow(4, x)) return true;
        x++;
    }
    return false;
};