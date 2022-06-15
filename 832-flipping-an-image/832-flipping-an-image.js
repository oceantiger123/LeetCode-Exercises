/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for(let i=0; i<image.length; i++){
        
        for(let j=0; j<Math.floor(image[0].length/2); j++){
            
            let cur = image[i][j];
            image[i][j] = image[i][image.length -1 -j];
            image[i][image.length -1 -j] = cur;
        }
    }
    
    for(let i=0; i<image.length; i++){
        
        for(let j=0; j<image.length; j++){
            
            if(image[i][j] === 1) image[i][j] = 0;
            else image[i][j] = 1;
        }
    }
    
    return image;
};