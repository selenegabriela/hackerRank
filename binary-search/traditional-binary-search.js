
//  0 1 2 3 4  5  6  7  8  9   target = 8
// [1,3,5,8,10,15,17,18,19,25]
//        L   
//        R
//        M
// middle = Math.floor((L+R) / 2) = 2
//nums[middle]===target return middle
//nums[middle] > target
//     R = middle - 1
//nums[middle] < target
//     L = middle + 1
// return -1


const binarySearch = (nums,target) => {

    let left = 0, right = nums.length-1;
    
    while(left <= right) {
        let middle = Math.floor((left+right) / 2)

        if(nums[middle]===target) return middle;
        else if(nums[middle] > target) right = middle - 1
        else left = middle + 1

    }

    return -1
}












//  0 1 2 3 4  5  6  7  8  9
// [1,3,5,8,10,15,17,18,19,25] target = 5
//      p1
//        p2
//       m
// while (p1 < p2)
//      middle = p1 + p2 / 2 = 4
    // nums[middle] === target
    //   return middle
//     else if(nums[middle]>target) p2 = middle-1
//     else 
//         p1 = middle+1
// 

const binarySearchReview = (nums,target) => {
    
    let p1 = 0, p2 = nums.length-1;

    while(p1 < p2) {
        const middle = Math.floor((p2+p1) / 2)
        if(nums[middle] === target) return middle;
        else if(nums[middle] > target) p2 = middle-1
        else p1 = middle+1
    }

    return -1

}











const binarySearchReviewII = (nums,t) => {
    let l = 0, r = nums.length-1;

    while(l <= r){
        const m = Math.floor((l+r)/2);
        if(nums[m]===t) return m;
        else if(nums[m] > t) r = m-1;
        else l = m+1;
    }
    return -1;
}






//  0 1 2 3 4  5  6  7  8  9
// [1,3,5,8,10,15,17,18,19,25] t = 8
//        l
//           r
//        m
// m = (l+r) / 2
// n[m]===t
// n[m]>t
//    r = m-1
// n[m]<t
//    l = m+1

const binarySearchReviewIII = (n,t) => {
    let l = 0, r = n.length-1;

    while(l<=r){
        const m = Math.floor((l+r)/2);

        if(n[m]===t) return m;
        else if(n[m]>t) r = m - 1;
        else l = m + 1;
    }
    return -1;
}











//  0 1 2 3 4  5  6  7  8  9
// [1,3,5,8,10,15,17,18,19,25], t = 8
//        l
//        r
//        m
// m = floor(l+r) / 2 = 
// m===t: return true
// nums[m] > t: r = m-1
// else l = m+1

const binarySearchIV = (nums,target) => {
    let l = 0, r = nums.length-1;

    while(l<=r) {
        const middle = Math.floor((l+r)/2);

        if(nums[middle]===target) return middle;
        else if(nums[middle] > target) r = middle - 1;
        else l = middle + 1;
    }
    return -1;
}

console.log(binarySearchIV([1,3,5,8,10,15,17,18,19,25],32))
















//  0 1 2 3 4  5  6  7  8  9
// [1,3,5,8,10,15,17,18,19,25]
//        l
//        r
//      m
// m = (r+l) / 2
// m === t
// m > t
//    r = m-1
// m < t
//    l = m+1