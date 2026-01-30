//  0  1 2 3 4 5  6 7  8 9
// [10,6,9,8,3,              4,11,15,3,6]
// [10,6,9,8,3]             [4,11,15,3,6]
// [10,6,9] [8,3]           [4,11,15] [3,6]
// [10,6] [9]               [4,11] [15]
// [10] [6]                 [4] [11]
// [6,10] [9]               [4,11] [15]
// [6,9,10] [8,3]           [4,11,15] [3,6]
// [3,6,8,9,10]             [3,4,6,11,15]
//             [3,3,4,6,6,8,9,10,15]

const mergeSort = (arr) => {
    if(arr.length===1) return arr
    const left = mergeSort(arr.slice(0,Math.floor((arr.length) / 2)))
    const right = mergeSort(arr.slice(Math.floor((arr.length) / 2)))

    return orderingArrays(left,right)
}

const orderingArrays = (right,left) => {
    let i = 0
    let j = 0
    const orderedArr = []

    while(i < right.length && j < left.length){
        if(left[j] < right[i]){
            orderedArr.push(left[j]);
            j++;
        } else {
            orderedArr.push(right[i])
            i++;
        }
    }
    return orderedArr.concat(left.slice(j)).concat(right.slice(i))
}






//  0 1 2 3 4 5 6  7  8 9
//[10,6,9,8,3,4,11,15,3,6]
// left [10,6,9,8,3,4]
// left [6,9,10]
// right [8,3,4]
// right [11,15,3,6]

// left = [6,9,10] right = [8,3,4]
// [3,4]


// left slice(0,len/2)



const mergeSortReviewII = (nums) => {
    if(nums.length < 2) return nums;
    const left = mergeSortReviewII(nums.slice(0, Math.floor(nums.length/2)));
    const right = mergeSortReviewII(nums.slice(Math.floor(nums.length/2)));

    return joinArrsInOrder(left,right);
}

const joinArrsInOrder = (left,right) => {
    let l = 0, r = 0;
    const result = []

    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    return result.concat(left.slice(l)).concat(right.slice(r))
}





//  0 1 2 3 4 5 6  7  8 9
//[10,6,9,8,3,4,11,15,3,6]
//[10,6,9,8,3]
//[10,6,]
//[10]
//[6]
//[6,10]
//[9,8,3]
//[3,6,8,9,10]


const mergeSortReviewIII = (n) => {
    if(n.length<=1) return n;
    const half = Math.floor(n.length/2) 
    const l = mergeSortReviewIII(n.slice(0,half));
    const r = mergeSortReviewIII(n.slice(half))

    return joinArr(l,r);
}

const joinArr = (left,right) => {
    const arr = [];
    let l = 0, r = 0;

    while(l<left.length && r<right.length){
        if(left[l]<right[r]){
            arr.push(left[l]);
            l++;
        } else {
            arr.push(right[r]);
            r++;
        }
    }
    return arr.concat(left.slice(l).concat(right.slice(r)));
}






// 0  1 2 3 4 5 6  7  8 9
//[10,6,9,8,3,4,11,15,3,6]
// [10,6,9,8,3]
// [10,6,9]
// [10] [6,9]
// [6],[9]
// floor(arr.length / 2) = 




const mergeSortReviewIV = (nums) => {
    if(nums.length<2) return nums;

    const half = Math.floor(nums.length / 2);
    const left = mergeSortReviewIV(nums.slice(0,half));
    const right = mergeSortReviewIV(nums.slice(half));

    return merging(left,right);
}

const merging = (left,right) => {
    let l = 0;
    let r = 0;
    const finalArr = [];

    while(l < left.length && r < right.length){
        if(left[l] <= right[r]){
            finalArr.push(left[l]);
            l++;
        } else {
            finalArr.push(right[r]);
            r++;

        }
    }
    return finalArr.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSortReviewIV([10,6,9,8,3,4,11,15,3,6]));

