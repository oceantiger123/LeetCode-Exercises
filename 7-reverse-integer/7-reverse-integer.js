/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let arrX = String(x).split('');
    let l = 0, r = arrX.length-1;
    while(l<r){
        if(arrX[l]==="-") l++;
        [arrX[l], arrX[r]] = [arrX[r], arrX[l]];
        l++;
        r--;
    }
    let reversedX = Number(arrX.join(''));
    if(-2147483648 <= reversedX && reversedX <= 2147483647) return reversedX;
    return 0
    
};