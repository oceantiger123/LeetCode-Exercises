/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let preFix ='';
    for(let i=0; i<strs[0].length; i++){
        
        let curPrefix = strs[0][i];
        let j=1;
        while(j<strs.length){
            if(curPrefix!==strs[j][i]) return preFix;
            j++;
        
        }
        preFix+=curPrefix;
    }
    return preFix
};