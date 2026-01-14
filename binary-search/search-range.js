

/*

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
0 1 2 3 4 5 6 7 8 9 10 11 12 
1,2,2,2,3,4,5,7,8,8,8,8, 10] || 
              L
                         R
                  M



middle = Math.floor((left + right) / 2) = 5

*/


/*

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
0 1 2 3 4 5 6 7 8 9 10 11 12 
1,2,2,2,3,4,5,7,8,8,8,8, 10] || 
              L
                         R
                  M



middle = Math.floor((left + right) / 2) = 5

*/
function binaryRange(nums,target) {
    
    let left = 0, right = nums.length-1;
    const result = []

    while(left <= right && result.length < 1) {
        let middle = Math.floor((left+right)/2)
        if(target===nums[middle]){
            if(nums[middle-1] < target || middle === 0){
                result.push(middle) 
                break;
            } else {
                right = middle - 1
            }
        } else if(target < nums[middle]){
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    left = 0, right = nums.length-1;
    while(left <= right && result.length < 2) {
        let middle = Math.floor((left+right)/2)
        if(target===nums[middle]){
            if(nums[middle+1] > target || middle===nums.length-1){
                result.push(middle) 
                break;
            } else {
                left = middle + 1
            }
        } else if(target < nums[middle]){
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return result.length ? result : [-1,-1]
}
// [1,2,2,2,3,4,5,5,7,8, 8, 8, 8, 10,10]
//  0 1 2 3 4 5 6 7 8 9 10 11 12  13 14
//                    L
//                  R
//                  M
// L <= R
// Math.floor((L + R) / 2)
// bound = 9
// nums[middle] === target
//         8    ===   8
//         bound = middle
//         right = middle - 1
// nums[middle] < target
//         7    <     8
//         L = middle + 1
// [9]   


var searchRange = function(nums, target) {
    const result = []
    let bound = -1

    const searcheRangeWhile = (isLast) => {
        let left = 0, right = nums.length - 1;

        while(left <= right) {
            let middle = Math.floor((left+right) / 2)

            if(nums[middle]===target){
                bound = middle
                if(isLast){
                    left = middle + 1
                } else {
                    right = middle - 1
                }
            } else if(nums[middle] < target) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
        return bound
    }

    result.push(searcheRangeWhile(false))
    if(bound===-1) return [-1,-1]
    result.push(searcheRangeWhile(true))
    return result
};














// [1,2,2,2,3,4,5,5,7,8, 8, 8, 8, 10,10] = 8
//  0 1 2 3 4 5 6 7 8 9 10 11 12  13 14
//                    p1
//                  p2
//                  M
// bound = -1
// p1 < p2
// middle = (p1+p2) / 2 = 8
// nums[middle] === target
//    bound = middle = 9
//    p2 = middle - 1
// nums[middle] > target
//    p2 = middle - 1
// else
//    p1 = middle + 1


const binaryRangeReview = (nums,target) => {
    const results = [];

    const findingBounds = (isLeft) => {

        let bound = -1, p1 = 0, p2 = nums.length - 1;
    
        while(p1 <= p2){
            const middle = Math.floor((p1+p2) / 2)
    
            if(nums[middle] === target){
                bound = middle
                if(isLeft) {
                    p2 = middle - 1
                } else {
                    p1 = middle + 1
                }
    
            } else if(nums[middle] < target){
                p1 = middle + 1
            } else {
                p2 = middle - 1
            }
        }
        return bound;
    }
    results.push(findingBounds(true))
    if(results[0]===-1) return [-1,-1];
    results.push(findingBounds(false))

    return results;
}














//  0 1 2 3 4 5 6 7 8 9 10  11 12 13 14
// [1,2,2,2,3,4,5,5,7,8, 8, 8, 8, 10,10],2
//    l                             
//  r
//    m
// m = (l+r) / 2 = 7
// nums[m] === t
// first = m = 1
// r = m-1
// nums[m] > t
//     r = m-1
// nums[m] < t
//     l = m+1


const binaryRangeReviewII = (nums,t) => {
    const result = [];
    let idxT = -1;

    const loop = (isFirst) => {
        let l = 0, r = nums.length-1;


        while(l <= r){
            const m = Math.floor((l+r) / 2);

            if(nums[m]===t){
                idxT = m;
                if(isFirst){
                    r = m - 1
                } else {
                    l = m + 1;
                }
            } else if(nums[m]>t){
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return idxT
    }

    result.push(loop(true));
    if(result[0]===-1) return [-1,-1];
    result.push(loop(false));
    return result;
}




//  0 1 2 3 4 5 6 7 8 9 10 11 12  13 14
// [1,2,2,2,3,4,5,5,7,8, 8, 8, 8, 10,10], t=8
//                    l
//                  r
//                  m
// m = (l+r) / 2 = 7
// bound = -1 -> 11 -> 9
// n[m] === t
//    bound = m
//    r = m - 1
// n[m] < t
//    l = m + 1

const binaryRangeReviewIII = (n,t) => {
    let range = [];
    const searchingBounds = (isFirst) => {
        let l = 0, r = n.length-1;
        let bound = -1;

        while(l <= r){
            const m = Math.floor((l+r)/2);

            if(n[m]===t){
                bound = m;
                if(isFirst){
                    r = m-1;
                } else {
                    l = m+1;
                }

            } else if(n[m]<t) l = m+1;
            else r = m-1;
        }
        return bound;
    }
    range.push(searchingBounds(true));
    if(range[0]===-1) return [-1,-1];
    range.push(searchingBounds(false));
    return range;
}


console.log(binaryRangeReviewIII([1,2,2,2,3,4,5,5,7,8, 8, 8, 8, 10,10],500));