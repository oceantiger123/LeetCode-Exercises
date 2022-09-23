/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    let rowNum = board.length;
    let colNum = board[0].length;
    
    let visitedMatrix = new Array(rowNum).fill(1).map(()=> new Array(colNum).fill(false));
    
    const checkBorder = (board, visitedMatrix) =>{
        
        for(let row = 0; row<rowNum; row++){
            if(board[row][0] === 'O') dfs(board, visitedMatrix, row, 0, false);
            if(board[row][colNum-1] === 'O') dfs(board, visitedMatrix, row, colNum-1, false);
        }
        for(let col = 1; col<colNum-1; col++){
            if(board[0][col]==='O') dfs(board, visitedMatrix, 0, col, false);
            if(board[rowNum-1][col]==='O') dfs(board, visitedMatrix, rowNum-1, col, false);
        }
    };
    
    const dfs = (board, visitedMatrix, row, col, sign)=> {
        if(row<0 || row>=rowNum || col<0 || col>=colNum || visitedMatrix[row][col] === true || board[row][col]==='X') return;
        visitedMatrix[row][col] = true;
        if(sign) board[row][col] = 'X';
        let dir = [[-1,0],[1,0],[0,-1],[0,1]];
        for(let ele of dir){
            dfs(board, visitedMatrix, row+ele[0], col+ele[1], sign);
        }
    };
     
    checkBorder(board, visitedMatrix);
    
    for(let row=1; row<rowNum-1; row++){
        for(let col=1; col<colNum-1; col++){
            if(board[row][col]==='O') dfs(board, visitedMatrix, row, col, true)
        }
    }
    
};