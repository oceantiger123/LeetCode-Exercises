/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let output = [];
    const conbinationsFun = (open, close, current)=>{
        if(current.length === 2*n) {
            output.push(current);
            return
        }
        
        if(open>0) conbinationsFun(open-1, close+1, current+"(");
        if(close>0) conbinationsFun(open, close-1, current+")");
        
    }
    conbinationsFun(n, 0, "");
    
    return output;
};