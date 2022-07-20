/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    //check each row if without repetition
    for(let r=0; r<board.length; r++){
        let map = new Map();
        for(let c=0; c<board.length; c++){
            if(!isNaN(board[r][c])){
                if(map.has(board[r][c])) return false;
                map.set(board[r][c])
            }
                
        }
    }
    //check each column if without repetition
    for(let c=0; c<board.length; c++){
        let map = new Map();
        for(let r=0; r<board.length; r++){
            if(!isNaN(board[r][c])){
                if(map.has(board[r][c])) return false;
                map.set(board[r][c])
            }      
        }
    }
    //check each 3x3 if without repetition
    let eachRow = [[0,1,2],[3,4,5],[6,7,8]];
    let eachCol = [[0,1,2],[3,4,5],[6,7,8]];
    for(let i of eachRow){
        for(let j of eachCol){
            let map = new Map();
            for(let num1 of i){
                for(let num2 of j){
                    if(!isNaN(board[num1][num2])){
                        if(map.has(board[num1][num2])) return false;
                        map.set(board[num1][num2])
                     }
                }
            }
        }
    }
    return true
};