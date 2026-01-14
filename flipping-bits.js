function flippingBits(n) {
    // Write your code here
 let flippedBits = ((~n)) >>> 0;

 return flippedBits

}

function flippingBits2(n) {
    // Write your code here
    let bits32 = n.toString(2).padStart(32, '0')
    let flippedBits = ''

    for(let i = 0; i < 32; i++){
        flippedBits += bits32[i]==='0' ? '1' : '0' 
    }

    return parseInt(flippedBits,2)
}

console.log(flippingBits(9))