/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
   const helpRotateFunc = (matrix, start, end)=>{
       
       for(let i=0; i<end-start; i++){
           let temp = matrix[start][start+i];
           
           //bottom to top
           matrix[start][start+i] = matrix[end-i][start];
           //right to left
           matrix[end-i][start] = matrix[end][end-i];
           //top to bottom
           matrix[end][end-i] = matrix[start+i][end];
           //left to right
           matrix[start+i][end] = temp;
       }   
   }
   for(let j=0; j<Math.floor(matrix.length/2); j++){
          
          helpRotateFunc(matrix, j, matrix.length-1-j)
      } 
   
};