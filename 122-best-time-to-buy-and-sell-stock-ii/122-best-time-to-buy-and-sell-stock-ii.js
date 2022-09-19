/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0;
    let buyingPrice = prices[0];
    
    for(let i=1; i<prices.length; i++){
        
        let curPrice=prices[i];
        if(buyingPrice > curPrice) buyingPrice = curPrice;
        else if(buyingPrice < curPrice){
            profit += curPrice - buyingPrice;
            buyingPrice = curPrice;
        }
    }
    return profit;
};