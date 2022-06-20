/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let hashMap = new Map();
    
    for(let i=0; i<numbers.length; i++){
        let diff = target - numbers[i];
        if(hashMap.has(diff)) return [hashMap.get(diff)+1, i+1]
        
        hashMap.set(numbers[i], i);
    }
};