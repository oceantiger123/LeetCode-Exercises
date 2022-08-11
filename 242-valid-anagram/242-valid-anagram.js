/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let ss=s.split('').sort();
    let tt=t.split('').sort();
    let i=0;
    while(i< ss.length || i< tt.length){
        if(ss[i]!==tt[i]) return false;
        i++;
    }
    return true;
};