/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    let res = 0;
    let exp=0;
    for(let j=columnTitle.length-1; j>=0; j--){
        res+=(columnTitle.charCodeAt(j)%64)*Math.pow(26, exp);
        exp++;
    }
    
    return res
};