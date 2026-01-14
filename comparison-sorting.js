function countingSort(arr) {
    // Write your code here
    const max = Math.max(...arr)

    const output = Array(max+1).fill(0)

    for(let item of arr){
        output[item] += 1
    }

    const final = []

    for(let i = 0; i < output.length; i++){
        if(output[i] !== 0){
            let j = output[i]
            while(j){
                final.push(i)
                j--
            }
        }
    }

    return final
}

function countingSort2(arr) {
    // Write your code here
    const newArr = new Array(100).fill(0)

    for(let i = 0; i < arr.length; i++){
        newArr[arr[i]] = newArr[arr[i]] + 1
    }

    return newArr
}



function countingSort(arr) {
    // Write your code here
        // Write your code here
    let max = arr[0]

    for(let item of arr){
        if(item>max) max = item;
    }

    const output = Array(100).fill(0)

    for(let item of arr){
        output[item] += 1
    }
    
    
    return output
    
}

console.log(countingSort([4,7,8,10,7,7,9,8]))