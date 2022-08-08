/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b)=>a[0]-b[0])
    let res = [];
    let curInterval=intervals[0];
    
    for(let i=1; i<intervals.length; i++){
        let tempInterval = intervals[i];
        if(tempInterval[0]<=curInterval[1]){
            if(tempInterval[1]>curInterval[1]) curInterval[1] = tempInterval[1];
        }else{
            res.push(curInterval);
            curInterval = tempInterval;
        }
    }
    res.push(curInterval);
    return res;
};