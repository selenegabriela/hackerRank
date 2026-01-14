

//  0 1 2 3 4 5 6 7 8
// [4,4,6,7,8,9,1,2,3] target = 3
//                  L
//                  R
//                  M
// middle = Math.floor((L+R) / 2)
// nums[middle]===target return middle
// nums[middle] > nums[L] 
//     nums[middle] > target >= nums[left]
//            R = middle - 1
//     else
//            L = middle +1
//else 
//    num[middle] < target <= nums[right]
//            L = middle +1
//    else
//            R = middle - 1
//     




var search = function(nums, target) {
    //  0 1 2 3 4 5 6 7 8
    // [4,4,6,7,8,9,1,2,3] target = 3
    //                  L
    //                  R
    //              M
    // (L+R) / 2
    // nums[middle]===target return middle
    // nums[middle] >= nums[L]
    //     nums[middle] > target >= nums[L]
    //         R = middle - 1
    //     else 
    //         L = middle + 1
    // else 
    //     nums[middle] < target <= nums[R]
    //          L = middle + 1
    //      else
    //          R = middle - 1

    let left = 0, right = nums.length-1;

    while(left <= right) {
        let middle = Math.floor((left+right) / 2)

        if(nums[middle]===target) return middle
        if(nums[middle] >= nums[left]) {
            if(nums[middle] > target && target >= nums[left]){
                right = middle - 1
            } else {
                left = middle + 1
            }
        } else {
            if(nums[middle] < target && target <= nums[right]){
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }

    return -1
    
};













// 0 1 2 3 4 5 6 7 8
//[7,7,8,1,2,3,4,5,6] target = 6
//     p1
//       p2
//   M
// middle = (p1 + p2) / 2 = 4
// nums[middle] === target 
//     return middle
// nums[middle] >= nums[left]
//     nums[middle] > target && target >= p1
//         p2 = middle - 1
//     else 
//         p1 = middle + 1
// else
//     nums[middle] < target && target <= p2
//         p1 = middle + 1
//     else
//         p2 = middle - 1


const searchRotatedAarrayReview = (nums, target) => {
    let p1 = 0, p2 = nums.length - 1;

    while(p1 <= p2) {
        const middle = Math.floor((p1+p2) / 2);

        if(nums[middle]===target) return middle
        
        if(nums[middle] > nums[p1]){
            if(nums[middle] > target && target >= nums[p1]){
                p2 = middle - 1
            } else {
                p1 = middle + 1
            }
        } else {
            if(nums[middle] < target && target <= nums[p2]) {
                p1 = middle + 1
            } else {
                p2 = middle - 1
            }
        }
    }

    return -1
}
























//  0 1 2 3 4 5 6 7 8 
// [4,4,6,7,8,9,1,2,3],3
//  l
//                  r
//          m
// m= (l+r) / 2
// nums[m]===t
// nums[m] > nums[l]:
//      nums[m] > t && t >= nums[l]:
//           r = m-1
//      else 
//           l = m+1
// else 
//      nums[m] < t && t <= nums[r]:
//            l = m+1
//      else 
//            r = m-1

const searchRotatedAarrayReviewII = (n,t) => {
    let l = 0, r = n.length-1;

    while(l <= r){
        const m = Math.floor((l+r) /2);

        if(n[m]===t) {
            return m
        } else {
            if(n[m] >= n[l]){
                if(n[m] > t && t >= n[l]){
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if(n[m] < t && t <= n[r]){
                    l = m + 1;
                } else {
                    r = m -1;
                }
            }
        }
    }
    return -1;

}



//  0 1 2 3 4 5 6 7 8
// [4,4,6,7,8,9,1,2,3]
//            l
//            r
//              m
// m = (l+r) / 2
// n[m]===t return m
// n[m] < t
//   n[l] < n[m]
    //   n[m] > t && t >= l
    //        r = m-1
    //   else
    //        l = m+1
//   else
//       n[m] < t && t <= r
//            l = m+1
//       else
    //        r = m-1






const searchRotatedAarrayReviewIII = (n,t) => {
    
    let l = 0, r = n.length-1;

    while(l <= r){
        const m = Math.floor((l+r)/2);

        if(n[m]===t) return m;
        else if(n[m] > n[l]){
            if(n[m] > t && t >= n[l]){
                r = m-1;
            } else {
                l = m+1;
            }
        } else {
            if(n[m] < t && t <= n[r]){
                l = m+1;
            } else {
                r = m-1;
            }
        }
    }
    return -1;
}


console.log(searchRotatedAarrayReviewIII([4,4,6,7,8,9,1,2,3],3));