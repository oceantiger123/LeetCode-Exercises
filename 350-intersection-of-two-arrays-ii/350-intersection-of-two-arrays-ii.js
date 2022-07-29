/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    const helperFunc = (array1, array2) => {
        let res=[];
        for(let i=0; i<array1.length; i++){
            if(array2.includes(array1[i])){
                array2.splice(array2.indexOf(array1[i]), 1);
                res.push(array1[i])
            }
        }
        return res
    }
    if(nums1.length<=nums2.length) return helperFunc(nums1, nums2);
    else return helperFunc(nums2, nums1)
};