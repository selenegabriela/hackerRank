function sumXor(n) {
    // Write your code here
    let acc = 0

    while(n > 0) {
        if((n&1)===0) acc++
        n >>=1
    }

    return 1 << acc

}


console.log(sumXor(4));