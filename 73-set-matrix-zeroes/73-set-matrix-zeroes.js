/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let storeZero= new Map();
    
    for(let i=0; i<matrix.length; i++){
        
        for(let j=0; j<matrix[i].length; j++){
            
            if(!storeZero.has(`${i}-${j}`)){
                
                if(matrix[i][j]===0){
                    storeZero.set(`${i}-${j}`, 0);
                for(let row=0; row<matrix.length; row++){
                    if(matrix[row][j]!==0){
                    matrix[row][j]=0;
                    storeZero.set(`${row}-${j}`, 0);
                    }
                }
                for(let col=0; col<matrix[i].length; col++){
                    if(matrix[i][col]!==0){
                    matrix[i][col]=0;
                    storeZero.set(`${i}-${col}`, 0)
                }
                }
            }
            }
        }
    }
};