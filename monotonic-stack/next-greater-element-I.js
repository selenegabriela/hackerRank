var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = new Map();

    for(let num of nums2){

        while(stack.length && num > stack[stack.length-1]){
            map.set(stack.pop(), num);
        }

        stack.push(num);
    }

    return nums1.map(num => map.get(num) ?? -1);
};

const nums1 = [4,1,2,5,8]
const nums2 = [1,3,4,2,8,5]


const nextGreaterElementI = (nums1,nums2) => {
    const stack = [];
    const map = new Map();
    const results = [];

    for(let num of nums2) {

        while(stack.length && stack[stack.length-1] < num){
            map.set(stack.pop(),num);
        }

        stack.push(num);
    }


    return nums1.map(num => map.get(num) ?? -1);
}


console.log(nextGreaterElementI(nums1,nums2));



// [1,3,4,2,8,5]
//               i
// stack [5]
// [4,1,2,5,8]
//            
// map {1=>3, 3=>4, 2=>8, 4=>8}
// results = [8,3,8,-1,-1]
