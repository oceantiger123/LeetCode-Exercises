/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
 
    let changeMap = new Map();
    changeMap.set(5,0);
    changeMap.set(10,0);
    changeMap.set(20,0);
    
    for(let i=0; i<bills.length; i++){
        let cur = bills[i];
        let change = cur - 5;
        if(change === 0){
            changeMap.set(5,changeMap.get(5)+1);
        }
        if(change === 5){
            if(changeMap.get(5)===0) return false;
            changeMap.set(5,changeMap.get(5) - 1);
            changeMap.set(10,changeMap.get(10) + 1);
        }
        if(change === 15) {
            if(changeMap.get(10) === 0){
                if(changeMap.get(5)<3) return false;
                changeMap.set(20,changeMap.get(20) + 1);
                changeMap.set(5,changeMap.get(5) -3);
                
            } 
            else {
                if(changeMap.get(5) ===0) return false;
                changeMap.set(20,changeMap.get(20) + 1);
                changeMap.set(10,changeMap.get(10) -1);
                changeMap.set(5,changeMap.get(5) - 1);
            }
        }
        
    }
    
    return true;
    
}    