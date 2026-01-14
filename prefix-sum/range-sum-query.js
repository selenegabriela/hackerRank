var NumArray = function(nums) {

    this.prefix = [0];
    for(let i = 0; i < nums.length; i++){
        this.prefix.push(nums[i]+this.prefix[i]);
    }
    
};

//            0   1   2    3   4    5   6
// nums   [  -2,  0,  3,  -5,  2,  -1,]
//                                 i=3
// prefix [   0, -2, -2,   1, -4,  -2, -3]

// prefix.push(nums[i]+prefix[i])
// left = 2
// rigth = 4
// return prefix[rigth+1]-prefix[left] = -2 + 2


//[  -2,  0,  3,  -5,  2,  -1,]
//[  0,  -2,  -2,  1,  -4,  -2,  -3,]

NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right+1] - this.prefix[left];
};

const obj = new NumArray( [  -2,  0,  3,  -5,  2,  -1]);
console.log(obj.sumRange(0, 2)); // → 1
console.log(obj.sumRange(2, 5)); // → -1
console.log(obj.sumRange(0, 5)); // → -3

