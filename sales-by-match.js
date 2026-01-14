function sockMerchant(n, ar) {
    // Write your code here
    const newSet = new Set()
    let totalSum = 0;
    for(let i = 0; i < n; i++){
        if(!newSet.has(ar[i])){
            newSet.add(ar[i])
            let sum = 1
            for(let j = i+1; j < n; j++){
                if(ar[i]===ar[j]){
                    sum += 1
                }
            }
            totalSum += Math.floor(sum/2)
        }
    }
    return totalSum
}

function sockMerchant2(n, ar) {
    const newMap = new Map()
    let totalSum = 0
    for(let i = 0; i < n; i++){
        if(newMap.has(ar[i])){
            newMap.set(ar[i], newMap.get(ar[i]) + 1);
        } else {
            newMap.set(ar[i],1)
        }
    }
    for(const [key,value] of newMap){
        totalSum += Math.floor(value/2)
    }
    return totalSum
}























function sockMerchant2R(n, ar) {
    const newMap = new Map()

    for(let i = 0; i < n; i++){
        if(newMap.has(ar[i])){
            newMap.set(ar[i], newMap.get(ar[i]) + 1)
        } else {
            newMap.set(ar[i],1)
        }
    }
    let totalSum = 0
    for([key,value] of newMap){
        totalSum += Math.floor(value/2)
    }
    return totalSum
}

console.log(sockMerchant2R(10,[1,1,3,1,2,1,3,3,3,3]));