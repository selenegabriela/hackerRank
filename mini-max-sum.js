function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let min = arr[0]
    let max = arr[0]
    
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(arr[i]>max) max = arr[i]
        if(arr[i]<min) min = arr[i]
    }
    console.log(sum-max,sum-min)
}


















function miniMaxSum2(arr) {
    // Write your code here
    let max = arr[0]
    let min = arr[0]
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(arr[i] > max){
            max = arr[i]
        } else if(arr[i] < min) {
            min = arr[i]
        }
    }

    console.log(sum-max,sum-min);
}

console.log(miniMaxSum2([3,1,5,7,9]));