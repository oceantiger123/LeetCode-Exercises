/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let largestArea = 0;
    while (left < right) {
      
        if (height[left] <= height[right]){
           largestArea = Math.max(height[left]*(right - left), largestArea); 
            left++;
        } else {
            largestArea = Math.max(height[right]*(right - left), largestArea);
            right--;
        }
        
    }
    return largestArea;
};