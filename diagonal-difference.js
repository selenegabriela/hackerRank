function diagonalDifference(arr) {
    // Write your code here
    let sumDiag1 = 0
    let sumDiag2 = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            
            if(i===j){
              sumDiag1 += arr[i][j]  
            } 
            if (i+j===arr.length-1){
               sumDiag2 += arr[i][j] 
            } 
        }
    }

    
    return Math.abs(sumDiag1-sumDiag2)
}

function diagonalDifferenceOptimized(arr) {
    // Write your code here
    let sumDiagonal1 = 0
    let sumDiagonal2 = 0
    for(let i = 0; i < arr.length; i++){
        sumDiagonal1 += arr[i][i]
        sumDiagonal2 += arr[i][arr.length-1-i]
    }

    return Math.abs(sumDiagonal1-sumDiagonal2)
}










function diagonalDifferenceOptimized2(arr) {
    // Write your code here
    let sumD1 = 0
    let sumD2 = 0
    let len = arr.length

    for(let i = 0; i < len; i++){
        sumD1 += arr[i][i]
        sumD2 += arr[i][len-1-i]
    }

    return Math.abs(sumD1-sumD2)
}

console.log(diagonalDifferenceOptimized2([[11,2,4],[4,5,6],[10,8,-12]]));