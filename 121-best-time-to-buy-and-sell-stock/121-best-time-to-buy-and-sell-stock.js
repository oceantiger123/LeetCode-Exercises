/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit =0;
    let curPrice = prices[0];
    
    for(let i=1; i<prices.length; i++){
        
        if(curPrice>=prices[i]) curPrice=prices[i];
        else {
            maxProfit = Math.max(maxProfit, prices[i]-curPrice);
        }
    }
    
    return maxProfit;
};