const containerMostWater = (arr) => {
    //[3,4,8,7,6,3,2]
    // i j
    // Math.min(arr[i],arr[j]) * j - i
    // max = Math.max(max,Math.min(arr[i],arr[j]) * j - i)
    if(arr.lenght <= 1) return 0

    let max = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            max = Math.max(max,(Math.min(arr[j],arr[i]) * (j - i)))
        }
    }

    return max

}

const containerMostWaterOpt = (arr) => {
    // [4,8,1,2,3,9]
    let max = 0
    let p1 = 0
    let p2 = arr.length-1

    while(p1 < p2){

        max = Math.max(max,Math.min(arr[p1],arr[p2]) * (p2-p1))

        if(arr[p1] < arr[p2]){
            p1++
        } else {
            p2--
        }
    }
    return max

}

console.log(containerMostWaterOpt([6,9,3,4,5,8]));