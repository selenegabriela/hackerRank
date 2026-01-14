

function maxMin(k, arr) {
    // Write your code here
    let min;
    arr.sort((a,b) => a-b)
    for(let i = k-1; i < arr.length; i++){
        if(!min || min > arr[i]-arr[i-k+1]) min = arr[i]-arr[i-k+1]
    }
    return min;
}

function maxMin2(k, arr) {
    // Write your code here
    const sortedArr = arr.sort((a,b) => a-b)
    let min = sortedArr[k-1] - sortedArr[0]

    for(let i = 1; i <= sortedArr.length-k; i++){

        const newMin = sortedArr[i+k-1] - sortedArr[i]
        min = min > newMin ? newMin : min
    } 
    return min
}

console.log(maxMin2(3,[1,51,100,201,203,210,450,500,600]));
// [203,1,100,51,210,201,500,450,600]
// 1,2,3,4,[5,7,8,9],10,12,30