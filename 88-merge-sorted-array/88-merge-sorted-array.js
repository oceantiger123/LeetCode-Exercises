/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //console.log(nums1.length)
    //if(nums1.length === 0) nums1 = nums2;
    let i=0, j=0;
    while(j<m && i<n){
        
        if(nums1[j]<nums2[i]) j++;
        else {
            nums1.splice(j, 0, nums2[i]);
            nums1.pop();
            i++;
            m++;
            
        }
    }
    //console.log(m, j, i)
    if(i<n){
       for(let k=i; k<n; k++){
        nums1.splice(j, 1, nums2[k]);
        j++;
       
    } 
    }
    

};