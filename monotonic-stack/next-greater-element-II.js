var nextGreaterElements = function(nums) {
    const res = Array.from({length: nums.length}, () => -1);
    const stackIndexes = []

    for(let i = 0; i < nums.length * 2; i++){

        let currIndex = i % nums.length;
        let currNum = nums[currIndex];

        while(stackIndexes.length && nums[stackIndexes[stackIndexes.length-1]] < currNum){
            res[stackIndexes.pop()] = currNum;
        }

        i < nums.length && stackIndexes.push(i);
    }
    return res;
};







const nextGreaterElementsReviewII = (nums) => {

    const stack = [];
    const results = Array.from({length: nums.length}, () => -1);

    for(let i = 0; i < nums.length*2; i++){
        let index = i % nums.length;

        while(stack.length && nums[stack[stack.length-1]] < nums[index]){
            results[stack.pop()] = nums[index];
        }

        if(i<nums.length) stack.push(i);
    }
    return results;
}










console.log(nextGreaterElementsReviewII([10,3,4,2,7,8,9,5,1]));
//res   [-1, 4, 7, 7, 8, 9,10,10,10]
//       0   1  2  3  4  5  6  7  8
// nums [10, 3, 4, 2, 7, 8, 9, 5, 1]
//          i=10 i % nums.length
// num = 10
// stack = [0] (indexes)
// while stack.len && nums[stack[stack.length-1]] < num
//                                             10  <  3
        // res[stack.pop()] = num
// i < nums.length: stack.push(i)



// [-1, 4, 7, 7, 8, 9,10,10,10]
