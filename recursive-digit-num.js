function superDigit(n, k) {
    // Write your code here
    if(n.length==1) return n*1
    let p = n
    let sum = 0
    for(let i = 1; i < k; i++){
        p += n
    }

    let i = 0
    while(i<p.length){

        sum += p[i] * 1
        i++
        if(i===p.length && sum.toString().length>1) {
            p = sum.toString()
            i=0
            sum=0
        }    
    }

    return sum

}

function superDigit(n, k) {
    // Write your code here
    let sum = 0
    for(let i = 0; i < n.length; i++){
        sum += 1 * n[i]
    }
    let superDigitVar = sum = (sum * k).toString()

    let i = 0
    sum = 0
    while(superDigitVar.length>1){
        sum += superDigitVar[i] * 1
        i++
        if(i===superDigitVar.length){
            superDigitVar = sum.toString()
            if(sum.toString().length>1){
                sum = 0
                i = 0
            } 
        }
    }


    return sum
}

//console.log(9/10);
console.log(superDigit('148',3));