/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let res = [];
    
    for(let i=0; i<numRows; i++){
        
        let curArr = [];
        
        for(let j=0; j<=i; j++){
            if(j===0)curArr.push(1);
            else if(j===i) curArr.push(1);
            else curArr.push(res[i-1][j-1]+res[i-1][j])
        }
        res.push(curArr)
    }
    return res
};