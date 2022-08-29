/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits===null || digits.length===0) return [];
    let digitsHash = {'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'};
    let lettersArr=[''];
    let depth = 0;
    
    while(depth < digits.length){
        let len = lettersArr.length;
        
        let curDigit = digitsHash[digits[depth]];
        
        for(let i=0; i<len; i++){
            let curLetters = lettersArr.shift();
            
            for(let j=0; j<curDigit.length; j++){
                
                lettersArr.push(curLetters + curDigit[j]);
            }
        }
        
        depth++;
    }
    return lettersArr;    
    
};