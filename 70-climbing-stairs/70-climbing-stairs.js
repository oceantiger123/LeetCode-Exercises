/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let arr=[];
    let i=0;
    while(i<=n){
        if(i===0||i===1) arr[i]=1;
        else arr[i]=arr[i-1]+arr[i-2];
        i++;
    }
    return arr.pop();
    
};