const twoArrays = (k, A, B) => {
    const sortedA = A.sort((a,b) => a-b)
    const sortedB = B.sort((a,b) => b-a)
    
    console.log(sortedA)
    console.log(sortedB)
    for(let i = 0; i < sortedA.length; i++){
        if(!(sortedA[i]+sortedB[i]>=k)) return 'NO'
    }
    return 'YES'
}


const twoArrays2 = (k, A, B) => {
    const sortedA = A.sort((a,b) => a-b)
    const sortedB = B.sort((a,b) => a-b)
    
    while(sortedA.length){
        if(sortedA[0]+sortedB[0]>=k) {
            sortedB.shift()
            sortedA.shift()
            break
        } else {
            for(let j = 0; j < sortedB.length; j++) {
                if(sortedA[0]+sortedB[j]>=k){
                    sortedB.splice(j,1)
                    sortedA.shift()
                    break
                }
                if(j===sortedB.length-1) return 'NO'
            }
        }

    }
    return 'YES'
    
}

const twoArraysR = (k, A, B) => {
    const sortedArrA = A.sort((a,b) => a-b) 
    const sortedArrB = B.sort((a,b) => b-a) 

    for(let i = 0; i < sortedArrA.length; i++){
        if(sortedArrA[i] + sortedArrB[i] < k) return 'NO'
    }

    return 'YES'
}


console.log(twoArraysR(10,[2,1,3],[7,8,9]))
// console.log(twoArrays2(130,[82, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2],[53, 102, 40, 17, 33, 92, 18, 79, 66, 23, 84, 25, 38, 43, 27, 55, 8, 19]))
// console.log([82, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2].sort((a,b) => a-b));
// console.log([53, 102, 40, 17, 33, 92, 18, 79, 66, 23, 84, 25, 38, 43, 27, 55, 8].sort((a,b) => a-b));