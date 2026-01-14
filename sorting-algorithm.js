const bubbleSort = (arr) => {
    let swapped = false

    do {
        for(let i = 0; i < arr.length; i++){
            if(arr[i]>arr[i+1]){
                swapped = true;
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }
    } while(swapped)

    return arr
}


const selectionSort = (arr) => {
    
    for(let i = 0; i < arr.length; i++){
        let small = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[small] > arr[j]){
                small = j
            }
        }
        [arr[i],arr[small]] = [arr[small],arr[i]]
    }
    return arr

}

const insertionSort = (arr) => {
//  [7,5,3,8,10,2,1]
//  [2,3,5,7,8,10,1]
//              i 
// j
//   current = arr[i] = 2
//   arr[i]<arr[j]
//   while current < arr[j] && j >=0

//        arr[j+1] = arr[j]
//        j--
//    arr[j] = current
//  

    for(let i = 1; i < arr.length; i++){
        let current = arr[i], j = i - 1

        while(current < arr[j] && j >= 0){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    
    return arr;
}

//         [7,5,3,8,10,2,1]
//     [7,5,3]       [8,10,2,1]
//   [7]  [5,3]    [8,10]    [2,1]
//       [5]  [3] [8]  [10] [2]  [1]
//         [5,3]    [8,10]    [1,2]
//        [3,5,7]      [1,2,8,10]
//             [1,2,3,5,7,8,10]

const mergeSort = (arr) => {
    if(arr.length===1) return arr
    const left = mergeSort(arr.slice(0,Math.floor(arr.length / 2)))
    const right = mergeSort(arr.slice(Math.floor(arr.length / 2)))

    return merge(left,right)
}

const merge = (left,right) => {
    const result = []
    let j = 0, i = 0;

    while(j < left.length && i < right.length){
        if(left[j] < right[i]){
            result.push(left[j])
            j++
        } else {
            result.push(right[i])
            i++
        }
    }
    return result.concat(left.slice(j),right.slice(i))
}

// const quickSort = (arr) => {
//     let pivot = arr.length-1
//     let i = -1;
    
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[pivot]>arr[j]){
//             i++
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         } 
//     }
    
//     [arr[i+1],arr[pivot]] = [arr[pivot],arr[i+1]]
//     //console.log(arr.slice(0,i+1));
//     //quickSort(arr.slice(0,arr[i]))
//     // return arr.slice(0,i+1)
//     if(arr.length<=2) return arr

//     return quickSort(arr.slice(0,i+1)).concat(arr[i+1]).concat(quickSort(arr.slice(i+2)))
// }

// arr.length <= 1 return arr
// [8,2,4,7,1,3,9,6,5]
//                i 
//  left = [2,4,1,3]
//  right = [8,7,9,6]
// pivot = arr[arr.length-1] = 5

// return [...quickSort([2,4,1,3],5,...quickSort([6,7,8,9]),
// [8,7,9,6]
//  i
// left = []
// right = [8,7,9]
// pivot = 6
// return [...quickSort([6],...quickSort([7,8,9]),

// [8,7,9]
//  i
// left = [8,7]
// right = []
// pivot = 9

// return [...quickSort([7,8,9],...quickSort([]),

// [8,7]
//  i
// left = []
// right = [8]
// pivot = 7
// return [...quickSort([],7,...quickSort([8]),

const quickSort = (arr) => {
    if(arr.length < 2) return arr
    const pivot = arr[arr.length-1]
    const left = [], right = []

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low-1

    for(let j = low; j < high; j++){
        if(pivot > arr[j]) {
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]

    return i + 1
}

const quickSortInPlace = (arr, low=0, high=arr.length-1) => {
    
    if(low < high){
        const indexPivot = partition(arr,low,high)
        quickSortInPlace(arr,low,indexPivot-1)
        quickSortInPlace(arr,indexPivot+1,high)
    }


    return arr;
}


console.log(quickSortInPlace([8,2,4,7,1,3,9,6,5]));


















// const mergeSort = (arr) => {
//     if(arr.length===1) return arr
//     const middle = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0,middle))
//     const right = mergeSort(arr.slice(middle))

//     return merge(left,right)
// }

// const merge = (left, right) => {

//     const result = []

//     let j = 0;
//     let i = 0;

//     while(i < left.length && j < right.length){
//         if(right[j] < left[i]){
//             result.push(right[j])
//             j++
//         } else {
//             result.push(left[i])
//             i++
//         }
//     }
    
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

//console.log(mergeSort([7,5,3,8,10,2,1]));
