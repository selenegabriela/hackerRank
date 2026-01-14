function lonelyinteger(a) {
    // Write your code here
    let orderedArray = a.sort();
    
    console.log(orderedArray)
    let len = orderedArray.length
    while(len>1){
        let i = 0
        if(orderedArray[i]===orderedArray[i+1]){
            orderedArray.shift()
            orderedArray.shift()
            len=orderedArray.length
        } else {
            return orderedArray[0]
        }
    }
    return orderedArray[0]

}

function lonelyinteger2(a) {
    // Write your code here
    const map = new Map()

    for(let i = 0; i < a.length; i++){
        if(map.get(a[i])){
            map.set(a[i], map.get(a[i]) + 1)
        } else {
            map.set(a[i],1)
        }
    }

    for([key,value] of map){
        if(value===1) return key
    }
}

function lonelyinteger(a) {
    // Write your code here
    a.sort()
    const repeated = []
    let len = a.length
    let i = 0
    while(len>1){
        if(a[i]===a[i+1]){
            repeated.push(a.shift())
            repeated.push(a.shift())
        } else {
            if(a[i]===repeated[repeated.length-1]){
                repeated.push(a.shift())
            } else {
                return a[i]
            }
        }
    }
}

//[1,1,2,2,3,3,4]
console.log(lonelyinteger([1,1,1,3,2,3,4,3,2,1]));

