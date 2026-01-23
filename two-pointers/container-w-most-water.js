// 1,8,30,2,5,4,8,3,7
//     p1
//              p2
// maxCointener = 49
// min(height[p1],height[p2]) * p2-p1
//                          6 * 1 = 6
// maxContainer(maxContainer, 49)
// if(heigth[p1] < height[p2]) p1++
// if(heigth[p1] >=height[p2]) p2--


var maxArea = function(height) {
    let maxContainer = 0, p1 = 0, p2 = height.length-1;

    while(p1 < p2){
        const h = Math.min(height[p1],height[p2])
        const base = p2-p1
        maxContainer = Math.max(h * base, maxContainer)
        if(height[p1] < height[p2]){
            p1++
        } else {
            p2--
        }
    }
    return maxContainer
};
//  0 1 2 3 4 5 6 7 8
// [1,8,6,2,5,4,8,3,7]
//    p1
//    p2
// finalHeight = min(heigh[p1],height[p2]) = 1 
// base = p2 - p1 = 8
//area = base * finalHeight = 1 * 8 = 8
// maximun = Max(maximun, area) = 49
// if(p1 < p2) 
//      p1++
// else 
//      p2--

const maxAreaReview = (heights) => {
    let maximunArea = 0
    let p1 = 0, p2 = heights.length-1
    while(p1 < p2){
        const h = Math.min(heights[p1],heights[p2]);
        const b = p2 - p1;
        const currentArea = b * h;

        maximunArea = Math.max(maximunArea,currentArea)
        if(heights[p1] < heights[p2]){
            p1++
        } else {
            p2--
        }
    }
    return maximunArea
}


//  0 1 2 3 4 5 6 7 8
// [1,8,6,2,5,4,8,3,7]
//              l
//              r


// h = min(nums[l], nums[r]) = 2
// b = r-l = 6 - 3 = 3
// area = h * b = 2 * 3 = 6;
// maximunArea = (maximunArear,area) = 49
const maxAreaReviewII = (nums) => {
    let maximunArea = 0;
    let left = 0, right = nums.length-1; 

    while(left < right){
        const h = Math.min(nums[left],nums[right]);
        const b = right - left;
        const currArea = b * h;
        maximunArea = Math.max(maximunArea, currArea);

        if(nums[left] < nums[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maximunArea;
}
















//  0 1 2 3 4 5 6 7 8
// [1,8,6,2,5,4,8,3,7]
//              l
//              r
// w = r-l = 1
// h = min(heights[r],height[l]) = 4
// currArea = w * h = 1 * 4 = 4
// maxAarea = max(maxArea,currArea) = 49


const maxAreaReviewIII = (heights) => {

    let l = 0, r = heights.length-1;
    let maxArea = 0;

    while(l < r){
        const w = r-l, h = Math.min(heights[l],heights[r]);
        const currArea = w * h;
        maxArea = Math.max(maxArea, currArea);
        if(heights[l] < heights[r]) l++;
        else r--;
    }
    return maxArea;
}












// [1,8,6,2,5,4,8,3,7]
//  l
//                  r
// h = Math.min(s[heights[l],heights[r]])
// b = r-l
// currArea = b * h
// maxArea = Math.max(curr,max)


const maxAreaIV = (heights) => {
    let l = 0, r = heights.length-1;
    let maxArea = 0;
    while(l<r){
        const h = Math.min(heights[l],heights[r]);
        const b = r-l;
        const currArea = h * b;
        maxArea = Math.max(maxArea,currArea);
        if(heights[l]>heights[r]){
            r--;
        } else {
            l++;
        }
    }
    return maxArea;
}

console.log(maxAreaIV([1,8,6,2,5,4,8,3,7]));