function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

function counterGame(n) {
    // Write your code here

    let player = 'Louise'

    let i = n
    let counter = 0
    do{
        
        let isPower = isPowerOfTwo(i)
        if(isPower) {
            if(counter>0){
                i = n - i
                counter = 0
            } else {
                i = i / 2
            }
            if(i!==1)player = player==='Louise' ? 'Richard' : 'Louise'
        } else {
            i--
            counter++
        }

    } while(i !== 1)
    return player
}
function counterGame2(n) {
    // Write your code here
    let player = 'Louise'
    let currentNum = n
    while(currentNum!==1){
        if(isPowerOfTwo(currentNum)){
            currentNum /= 2
        } else {
            currentNum = currentNum - Math.pow(2, Math.floor(Math.log2(currentNum)))
        }
        if(currentNum!==1) player = player==='Louise' ? 'Richard' : 'Louise'
    }
    return player
}

console.log(counterGame2(132));

// console.log((Math.log2(132)))
// console.log(Math.floor(Math.log2(132)))
// console.log(Math.pow(2, Math.floor(Math.log2(132))))