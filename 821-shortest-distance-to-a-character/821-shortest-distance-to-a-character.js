/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let cLocator = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === c) cLocator.push(i);
    }
    //console.log(cLocator)
    let minDistanceMap = new Map();
    for(let i=0; i<cLocator.length; i++){
        for(let j=0; j<s.length; j++){
            
    minDistanceMap.set(j, minDistanceMap.has(j) ? Math.min(Math.abs(cLocator[i]-j), minDistanceMap.get(j)) :       Math.abs(cLocator[i]-j))
        }
    }
    let output = [];
    minDistanceMap.forEach((value) => output.push(value));
    
    return output;
    
};