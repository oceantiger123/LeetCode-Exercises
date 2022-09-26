/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    let output = 0;
    let curRemaining = 0;
    let totalCost = 0;
    
    for(let i=0; i<gas.length; i++){
        let curCost = gas[i] - cost[i];
        totalCost += gas[i]-cost[i];
        
        if(curRemaining>=0) curRemaining+=curCost;
        else {
            curRemaining = curCost;
            output = i;
        }
        
    }
    
    return totalCost>=0 ? output : -1;
    
};