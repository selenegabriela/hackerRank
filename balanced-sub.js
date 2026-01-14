function balancedSums(arr) {
    // Write your code here
    if(arr.length===1) return 'YES'

    let sum = 0
    for(let i = 0; i < arr.length; i++){
        let rightSum = arr[i+1]
        for(let j = i+1; j < arr.length-1; j++){
            if(rightSum <= sum) {
                if(j+1)rightSum += arr[j+1]
                if(rightSum>sum){
                    i++
                    j = i
                    sum += arr[i-1]
                    rightSum = arr[j+1]
                }
            } else {
                sum += arr[i]
                i++
                if(j+1)rightSum = arr[j+1]
            }
        }
        if(rightSum===sum) return 'YES'
    }
    return 'NO'
}

function balancedSums2(arr) {
    // Write your code here
    if(arr.length===1) return 'YES'
    let sumL = 0
    let sumR = arr[1]
    let index = 0
    for(let i = 0; i <= arr.length; i++){
        if(sumR<=sumL){
            if(arr[i+2]) sumR+=arr[i+2]
            if(sumR>sumL) {
                i = index
                sumL += arr[index]
                sumR = arr[i+2]
                index++
            }
        } else {
            sumL += arr[i]
            sumR = arr[i+2]
            index++
        }
    }
    return sumL===sumR ? 'YES' : 'NO'

}

function balancedSums3(arr) {
    // Write your code here
    if(arr.length===1) return 'YES'
    let sumTotal = arr.reduce(((acc,num) => acc+num),0)
    
    let currentSum = 0
    for(let i = 0; i < arr.length-1; i++){
        
        if(i >= 1){
            currentSum += arr[i-1]
            sumTotal -= arr[i-1]
        }
        if(sumTotal-arr[i]===currentSum) return 'YES'

    }
    return 'NO'

}















function balancedSumsR(arr) {
    // Write your code here
    let totalSum = arr.reduce((sum,num) => sum+num,0)
    let currentSum = 0

    for(let i = 0; i < arr.length-1; i++){
        if(i>=1){
            currentSum = currentSum + arr[i-1]

        }
        const currentTotal = totalSum - currentSum - arr[i]
        if(currentTotal === currentSum) return 'YES'
    }

    return 'NO'

}
// const example1 = [2,0,0,0]
// const example2 = [185, 170, 208, 216, 236, 155, 88, 206, 211, 209, 84, 99, 130, 245, 232, 125, 127, 232, 187, 140, 92, 213, 221, 231, 129, 197, 221, 168, 95, 186, 136, 180, 94, 125, 150, 244, 249, 248, 140, 207, 125, 84, 123, 85, 100, 175, 67, 116, 107, 143, 158, 75, 165, 172, 115, 134, 175, 123, 115, 123, 159, 181, 63, 176, 158, 109, 67, 154, 126, 141, 111, 95, 138, 161, 71, 118, 151, 189, 126, 109, 194, 176, 159, 151, 189, 71, 95, 133, 154, 157, 109, 78, 101, 174, 169, 152, 94, 193, 176, 137]
console.log(balancedSumsR([5,6,8,11]));

// console.log(185+170+208+216+236+155+88+206+211+209+84+99+130+245+232+125+127+232+187+140+92+213+221+231+129+197+221+168+95+186+136+180+94+125+150+244+249+248+140+207+125+84+123+85);
// console.log(175+67+116+107+143+158+75+165+172+115+134+175+123+115+123+159+181+63+176+158+109+67+154+126+141+111+95+138+161+71+118+151+189+126+109+194+176+159+151+189+71+95+133+154+157+109+78+101+174+169+152+94+193+176+137);