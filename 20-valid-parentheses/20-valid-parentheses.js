/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let array1=['(','{','['];
    let array2=[')','}',']'];
    let stack=[];
    for(let i=0; i<s.length; i++){
        if(array1.includes(s[i])) stack.push(s[i]);
        else {
            let temp = stack.pop();
            if(array1.indexOf(temp)!==array2.indexOf(s[i])) return false;
            
        }
        
    }
    return stack.length===0;
};
