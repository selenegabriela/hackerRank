//  0  1 2 3 4 5  6 7  8 9
// [10,6,9,8,3,4,11,15,3,6]
// [6,10,9,8,3,4,11,15,3,6]
// [6,3,9,8,10,4,11,15,3,6]
// [6,3,4,8,10,9,11,15,3,6]
// [6,3,4,3,10,9,11,15,8,6]

//quickSort(low=0,high=i-1)
// [6,3,4,3,6,9,11,15,8,10]
// [3,6,4,3,6,9,11,15,8,10]
// [3,3,4,6,6,9,11,15,8,10]
//      j      
//  i                    
//        p
// quickSort(low=0,high=i-1)
// pivot = arr[h]
//
//quickSort(low=i+1,high=9)


const quickSort = (arr, low=0, high=arr.length-1) => {
    if(low>=high) return
    
    const indexPivot = partitioning(arr,low,high)
    quickSort(arr,low,indexPivot-1)
    quickSort(arr,indexPivot+1,high)

    return arr;
    
}

const partitioning = (arr, low, high) => {
    const pivot = arr[high]
    let i = low;

    for(let j = low; j < high; j++){
        if(pivot > arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
        }
    }
    
    [arr[i],arr[high]] = [arr[high],arr[i]];

    return i;
}









const quickSortReviewII = (nums, low=0, high=nums.length-1) => {
    if(low>=high) return;

    const indexPivot = partition(nums,low,high);
    quickSortReviewII(nums,low,indexPivot-1);
    quickSortReviewII(nums,indexPivot+1,high);

    return nums;

}

const partition = (nums,low,high) => {
    let pivot = nums[high];
    let i = low;

    for(let j = low; j < high; j++){
        if(nums[j] <= pivot){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++;
        }
    }
    [nums[i],nums[high]] = [nums[high],nums[i]];
    return i;
}


// [10,6,9,8,3,4,11,15,3,6]
// [6,10,9,8,3,4,11,15,3,6]
// [6,3,9,8,10,4,11,15,3,6]
// [6,3,4,8,10,9,11,15,3,6]
// [6,3,4,3,10,9,11,15,8,6]
// [6,3,4,3,6,9,11,15,8,10]
//            i
//                       j
//                       p



const quickSortReviewIII = (nums,low=0,high=nums.length-1) => {
    if(low>=high) return;

    const pivotIndex = partitionReviewIII(nums,low,high);

    quickSortReviewIII(nums,low,pivotIndex-1);
    quickSortReviewIII(nums,pivotIndex+1,high);

    return nums;
}

const partitionReviewIII = (nums,low,high) => {
    const pivot = nums[high];
    let i = low;

    for(let j = low; j < high; j++){
        if(pivot >= nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++;
        }
    }
    [nums[i],nums[high]] = [nums[high],nums[i]];
    return i;
}















// [10,6,9,8,3,4,11,15,3,6]
// [6,10,9,8,3,4,11,15,3,6]
// [6,3,9,8,10,4,11,15,3,6]
// [6,3,4,8,10,9,11,15,3,6]
// [6,3,4,3,10,9,11,15,8,6]
// [6,3,4,3,6,9,11,15,8,10]
//                     j
//          i
//                       p
// 
// [6,3,4,3]

const quickSortReviewIV = (nums, low=0, high=nums.length-1) => {
    if(low>=high) return nums;
    const pivot = orderingNums(nums,low,high);
    quickSortReviewIV(nums,low,pivot-1);
    quickSortReviewIV(nums,pivot+1,high);
    return nums;

}

const orderingNums = (nums,low,high) => {
    const pivot = nums[high];
    let i = low;

    for(let j = low; j < high; j++){
        if(nums[j] <= pivot){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++;
        }
    }
    [nums[i],nums[high]] = [nums[high],nums[i]];
    return i;
}

console.log(quickSortReviewIV([10,6,9,8,3,4,11,15,3,6]));











//   0 1 2 3 4 5 6  7  8 9
// [10,6,9,8,3,4,11,15,3,6]
// [6,10,9,8,3,4,11,15,3,6]
// [6,3,9,8,10,4,11,15,3,6]
// [6,3,9,4,10,8,11,15,3,6]
// [6,3,9,4,3,8,11,15,10,6]
// [6,3,9,4,3,6,11,15,10,8]
//                     i
//            j
//                       p

//
// pivot = nums[high]; = 6
// low = 0
// high = 9