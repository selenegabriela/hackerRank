const maximizeNumber = (arr) =>{
    if(arr.length===1) return arr[0]
    let sum = 0
    let n = (arr.length)/2
    for(let i = 0; i< n; i++){
        for(let j = (arr.length-1); j >= n; j--){
            sum = sum + Math.max(arr[i][j], arr[i][(arr.length-1)-j], arr[(arr.length-1)-i][(arr.length-1)-j],arr[(arr.length-1)-i][j])
        }
    }
    return sum
}


const maximizeNumber2 = (arr) =>{
    const n = arr.length / 2
    const getMirrors = (i,j) => {
        return [
            arr[i][j], 
            arr[i][2*n-1-j], 
            arr[2*n-1-i][j],
            arr[2*n-1-i][2*n-1-j],
        ]
    }
    let sum = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            sum += Math.max(...getMirrors(i,j))

        }
    }
    return sum
    
}

console.log(maximizeNumber2([[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]));