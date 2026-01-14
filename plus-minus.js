function plusMinus(arr) {
    // Write your code here
    const counter = [0,0,0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            counter[0] += 1
        } else if(arr[i] < 0){
            counter[1] += 1
        } else {
            counter[2] += 1
        }
    }
    
    let first = (counter[0]) && (counter[0] / arr.length).toFixed(6);
    let second = (counter[1]) && (counter[1] / arr.length).toFixed(6);
    let third = (counter[2]) && (counter[2] / arr.length).toFixed(6);
    
    console.log(first)
    console.log(second)
    console.log(third)
  
    
    
}





function plusMinus2(arr) {
    // Write your code here
    const length = arr.length

    const counter = [0,0,0]
    for(let i = 0; i < length; i++){
        if(arr[i] > 0){
            counter[0] += 1
        } else if(arr[i] < 0) {
            counter[1] += 1
        } else {
            counter[2] += 1
        }
    }

    const first = counter[0] && (counter[0] / length).toFixed(6) 
    const second = counter[1] && (counter[1] / length).toFixed(6) 
    const third = counter[2] && (counter[2] / length).toFixed(6)

    console.log(first)
    console.log(second)
    console.log(third)
    
}

console.log(plusMinus2([1,1,0,-1,-1]));
