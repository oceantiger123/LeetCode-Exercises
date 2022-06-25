/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    
    let aliceSum = aliceSizes.reduce((pre, cur)=>pre+cur);
    let bobSum = bobSizes.reduce((pre, cur)=>pre+cur);
    
    for(let i=0; i<aliceSizes.length; i++){
        for(let j=0; j<bobSizes.length; j++){
            
            if(aliceSum-aliceSizes[i]+bobSizes[j]===bobSum-bobSizes[j]+aliceSizes[i]){
                return [aliceSizes[i], bobSizes[j]]
                }
        }
    }
};