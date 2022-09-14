/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    const dfs = (board, word, index, row, col, visiting) =>{
        
        if(row<0 || row>board.length-1 || col<0 || col>board[row].length-1 || board[row][col]!==word[index] || visiting.get(`${row}&${col}`)){
            return;
        }
        
        if(index === word.length-1) return true;
        visiting.set(`${row}&${col}`, true)
        
        let dir = [[-1,0],[1,0],[0,-1],[0,1]];
        for(let pos of dir){
            
            if(dfs(board, word, index+1, row+pos[0], col+pos[1], visiting)) return true;
        }
        
        visiting.set(`${row}&${col}`, false);
    }
    
    let visiting = new Map();
    for(let i=0; i<board.length; i++){
        
        for(let j=0; j<board[i].length; j++){
            
            if(board[i][j]===word[0]){
            
                if(dfs(board, word, 0, i, j, visiting)) return true;
            }
        }
    }
    return false;
};