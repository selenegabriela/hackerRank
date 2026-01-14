function flippingBits(n) {
    // Write your code here
    let binFlipped = ''
    let number = n
    while(number){
        binFlipped = (number % 2) ? '0' + binFlipped : '1' + binFlipped
        number = Math.floor(number/2)
    }
    let size = 32 - binFlipped.length
    for(let i = 0; i < size; i++){
        binFlipped = '1' + binFlipped
    }
    let sum = 0;
    for(let i = 0; i < binFlipped.length; i++){
            sum += Math.pow(2,(binFlipped.length-1)-i) * (binFlipped[i]*1)
    }
    return sum

}

function flippingBits2(n) {
    // Write your code here
 let flippedBits = ((~n)) >>> 0;

 return flippedBits

}

console.log(flippingBits2(1));