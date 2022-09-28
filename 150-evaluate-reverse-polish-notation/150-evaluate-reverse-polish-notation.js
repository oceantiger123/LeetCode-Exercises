/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if(tokens.length === 1) return Number(tokens[0]);
    let stack = [];
    let res;
    for(let i=0; i<tokens.length; i++){
        if(!Number(tokens[i]) && Number(tokens[i]) !== 0 ){
            //put helper fun;
            let num2 = stack.pop();
            let num1 = stack.pop();
            if(tokens[i]==="+") res = num1+num2;
            if(tokens[i]==="-") res = num1-num2;
            if(tokens[i]==="*") res = num1*num2;
            if(tokens[i]==="/") res = Math.trunc(num1/num2);
            stack.push(res);
         } else{
            stack.push(Number(tokens[i]))
        }
        
    }
    return res;
};