/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    let res = [];
    let curRow=0, curCol=0, lastRow=matrix.length-1, lastCol=matrix[curRow].length-1;
    
    while(curRow<=lastRow && curCol<=lastCol){
        
        for(let col=curCol; col<=lastCol; col++){
            res.push(matrix[curRow][col]);
        }
        
        for(let row=curRow+1; row<=lastRow; row++){
            res.push(matrix[row][lastCol])
        }
        
        if(curRow<lastRow && curCol<lastCol){
            for(let col=lastCol-1; col>=curCol; col--){
                res.push(matrix[lastRow][col])
            }
            for(let row=lastRow-1; row>=curRow+1; row--){
                res.push(matrix[row][curCol])
            }
        }
        curRow++; curCol++; lastRow--; lastCol--;
    }
    return res;
};