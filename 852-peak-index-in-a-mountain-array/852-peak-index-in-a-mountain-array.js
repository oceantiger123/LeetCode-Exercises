/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let inclinedIndex, declinedIndex;
    
    for(let i=0; i<arr.length; i++){
        
        if(arr[i]>arr[i+1]) {
            inclinedIndex = i;
            break;
        }
    }
    
    for(let i=arr.length-1; i>=0; i--){
        
        if(arr[i]>arr[i-1]) {
            declinedIndex = i;
            break;
        }
    }
        
    if(inclinedIndex === declinedIndex) return inclinedIndex;
};