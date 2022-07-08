/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let advance =0;
    let res;
    if(digits[digits.length-1]+1===10){
        advance = 1;
        res=[0];
    } else {res=[digits[digits.length-1]+1]}
    for(let i=digits.length-2; i>=0; i--){
        let cur = digits[i]+advance;
        if(cur===10){
            res.unshift(0);
            advance = 1
        } else {
            res.unshift(cur);
            advance = 0
        }
    }
    if(advance ===1)res.unshift(1);
    return res;
};