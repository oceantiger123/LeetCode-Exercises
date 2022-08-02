/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let total = 0;
    let twoLettersObject = {'IV':4,'IX':9,'XL':40,'XC':90,'CD':400,'CM':900};
    let oneLetterObject = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    
    let i=0;
    while(i<s.length){
        let cur = s.slice(i, i+2);
        if(twoLettersObject.hasOwnProperty(cur)) {
            total += twoLettersObject[cur];
            i+=2;
        } else{
            total+=oneLetterObject[s[i]];
            i++;
        }
    }
    return total;
};