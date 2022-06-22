/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
   
    let newMatrix = [];
    
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(!newMatrix[j]) newMatrix[j] = [];
            newMatrix[j].push(matrix[i][j]);
        }
    }
   
    return newMatrix;
};