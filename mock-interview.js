const product_exclusion = (nums) => {
    if(!nums.length) return []
    if(nums.length === 1) return [1]

    let product = 1;
    let counterZeros = 0
    const productArr = new Array(nums.length).fill(0)
    let zeroIndex;

    for(let i = 0; i < nums.length; i++){
        if(nums[i]===0){
            counterZeros++
            zeroIndex = i
        } else {
            product *= nums[i]
        }
    }
    // [0,3,4,0]
    if(counterZeros>1) return productArr
    // [0,2,3,4]
    if(counterZeros===1) {
        productArr[zeroIndex] = product
        return productArr
    }
    // [2,3,4,5]
    for(let i = 0; i < nums.length; i++){
        productArr[i] = product / nums[i]
    }

    return productArr

}

console.log(product_exclusion([2,3,4,5]))