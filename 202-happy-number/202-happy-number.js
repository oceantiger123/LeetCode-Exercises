/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let squareSumArray = [];
    let copyN = n;
    while(!squareSumArray.includes(copyN)){
        squareSumArray.push(copyN);
        
        let nArray = String(copyN).split('');
        copyN = nArray.reduce((pre, cur)=> pre+Math.pow(Number(cur),2), 0);
        if(copyN===1) return true;
    }
    return false;
};