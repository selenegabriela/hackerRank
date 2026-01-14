//  0 1 2 3 4 5 6 7
// [3,2,1,5,1,6,4,6] k= 4
// [1,1,2,3,4,5,6,6]
//          i

// i = nums.length - 1
// i = nums.length - 1 - 4
// while 
// largest = 4
//  0 1 2 3 4 5 6 7 8 9  10 11 12
// [5,2,2,6,6,5,5,5,9,10,11, 4, 8] k = 4
// [5,2,2,6,6,5,5,5,4,10,11, 9, 8] k = 4
// [5,2,2,6,6,5,5,5,4,8,11, 9, 10] k = 4
// position = nums.length - k  = 9
// left = 0
// right = num.length - 1
// pivot = 8
// i = left = 9
// j = left = 12
// nums[j] <= pivot
//      [nums[i],nums[j]] = [nums[j],nums[i]]
//      i++
// [5,2,2,6,6,5,5,5,9,10,11,4,8] k = 4
// 

const findKthLargest = (nums,k) => {
    return quickSelect(nums, 0, nums.length-1,nums.length-k)
}

const quickSelect = (nums, left, right, finalPosition) => {
    if(left===right) return nums[right]

    // indexPivot = 2
    const indexPivot = partition(nums,left,right)

    if(indexPivot===finalPosition) return nums[indexPivot]
    else if(indexPivot<finalPosition){
        return quickSelect(nums,indexPivot+1,right,finalPosition)
    } else {
        return quickSelect(nums,left,indexPivot-1,finalPosition)
    }
}

const partition = (nums,left,right) => {
    const randomPivot = left + Math.floor(Math.random() * right - left + 1);
    [nums[randomPivot],nums[right]] = [nums[right],nums[randomPivot]]

    const pivot = nums[right]
    let i = left

    for(let j = left; j < right; j++){
        if(nums[j] <= pivot){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++
        } 
    }
    [nums[i],nums[right]] = [nums[right],nums[i]]

    return i;
    // [5,8,2,2,6,6,5,5,5,9,10,11,4]
    // [2,2,4,5,5,5,5,6,6,8,9,10,11]
}


class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.size() - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element >= parent) break;

            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();
        const element = this.heap[0];

        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let swap = null;

            if (leftIndex < length && this.heap[leftIndex] < element) {
                swap = leftIndex;
            }

            if (rightIndex < length) {
                if (
                    (swap === null && this.heap[rightIndex] < element) ||
                    (swap !== null && this.heap[rightIndex] < this.heap[leftIndex])
                ) {
                    swap = rightIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function findKthLargestMinHeap(nums, k) {
    const minHeap = new MinHeap();

    for (let num of nums) {
        if (minHeap.size() < k) {
            minHeap.push(num);
        } else if (num > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(num);
        }
    }

    return minHeap.peek();
}






//  0 1 2 3 4 5 6 7  8  9 10 
// [5,8,1,6,6,5,9,10,4,17,8] k = 5
// [5,1,8,6,6,5,9,10,4,17,8] k = 5
// [5,1,6,8,6,5,9,10,4,17,8] k = 5
// [5,1,6,6,8,5,9,10,4,17,8] k = 5
// [5,1,6,6,5,8,9,10,4,17,8] k = 5
// [5,1,6,6,5,4,9,10,8,17,8] k = 5
// [5,1,6,6,5,4,8,10,8,17,9] k = 5
//                     j
//              i
//                        p
// fp = arr.lengt - k = 6
//indexPivot = 1
// indexPivot===fP return arr[indexPivot]
// indexPivot > fP quick(arr,low,indexPivot-1)
// else quick(arr,indexPivot+1,high)














const findKthLargestQuickSortReview = (arr, k) => {
    return quickSelectReview(arr,0,arr.length-1,arr.length-k)
}

const quickSelectReview = (arr,low,high,finalPos) => {
    if(low===high) return arr[low]
    const indexPivot = partitionReview(arr,low,high);

    if(indexPivot===finalPos) return arr[finalPos]
    else if(indexPivot>finalPos) quickSelectReview(arr,low,indexPivot-1,finalPos)
    else quickSelectReview(arr,indexPivot+1,high,finalPos)
}

const partitionReview = (arr,low,high) => {
    const pivot = arr[high];
    let i = low;

    for(let j = low; j < high; j++){
        if(pivot > arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
        }
    }
    [arr[i],arr[high]] = [arr[high],arr[i]];
    return i;
}


















//           0 1 2 3 4 5 6 7  8 9  10
//          [5,8,1,6,6,5,9,10,4,17,8] k = 6
// min Heap [5,6,5,8,6,9]
// min = 1
// index = this.minHeap.size() - 1
// element = this.heap[index]
// while(index>0)
// parent = (index - 1) / 2 = 0
// this.heap[parent] <= element break
// 
// else 
//    [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]
//    index = parent

class MinHeapImp {
    constructor(){
        this.heap = []
    }

    size(){
        return this.heap.length;
    }

    peek(){
        return this.heap[0]
    }

    push(num) {
        this.heap.push(num)
        if(this.size()>1) this.bubbleUp()
    }

    bubbleUp(){
        let indexChild = this.size() - 1;
        let child = this.heap[indexChild]

        while(indexChild > 0) {
            let indexParent = Math.floor((indexChild-1) / 2)
            let parent = this.heap[indexParent]

            if(child >= parent) break;

            [this.heap[indexParent],this.heap[indexChild]] = [this.heap[indexChild],this.heap[indexParent]];
            indexChild = indexParent;
        }
    }

    pop(){
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown(){
        let indexParent = 0;
        let parent = this.heap[indexParent];

        while(true){
            let left = indexParent * 2 + 1
            let right = indexParent * 2 + 2
            let swap = null;

            if(this.heap[left] < parent){
                swap = left;
            }
            if(this.heap[right] < parent && this.heap[left] > this.heap[right]){
                swap = right;
            }

            if(swap===null) break;
            [this.heap[indexParent],this.heap[swap]] = [this.heap[swap],this.heap[indexParent]]
            indexParent = swap;
        }
    }
}

const findKthLargestMinHeapImp = (arr,k) => {
    const minHeap = new MinHeapImp();

    for(let num of arr){
        if(minHeap.size() < k){
            minHeap.push(num)
        } else {
            if(minHeap.peek()<num){

                minHeap.pop()
                minHeap.push(num)
            }
        }
    }
    return minHeap.peek()

}
















const findKthLargestQuickSortReviewII = (nums,k) => {
    const len = nums.length;
    
    return quickSortReviewII(nums,0,len-1,len-k);
}

const quickSortReviewII = (nums,low,high,finalPos) => {
    if(low===high) return nums[low];

    const indexPivot = partitionReviewII(nums,low,high);

    if(indexPivot===finalPos) return nums[indexPivot];
    if(indexPivot<finalPos) return quickSortReviewII(nums,indexPivot+1,high,finalPos);
    else return quickSortReviewII(nums,low,indexPivot-1,finalPos);
}

const partitionReviewII = (nums,low,high) => {
    let pivot = nums[high];
    let i = low;

    for(let j = low; j < high; j++){
        if(nums[j] <= pivot){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++;
        }
    }
    [nums[i],nums[high]] = [nums[high],nums[i]];
    return i;
}

class MinHeapReviewII {
    constructor(){
        this.heap = []
    }
    size(){
        return this.heap.length;
    }
    push(val){
        this.heap.push(val);
        this.bubbleUp();
    }
    peek(){
        return this.heap[0];
    }
    bubbleUp(){
        let indexChild = this.size()-1;
        let child = this.heap[indexChild];

        while(indexChild > 0) {
            let indexParent = Math.floor((indexChild-1)/2);
            let parent = this.heap[indexParent];

            if(child >= parent) break;

            [this.heap[indexChild],this.heap[indexParent]] = [this.heap[indexParent],this.heap[indexChild]];
            indexChild = indexParent;
        }
    }

    pop(){
        if(!this.size()) return null;
        if(this.size()===1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown()
        return min;
    }

    bubbleDown(){
        let indexParent = 0;
        
        while(true){
            let smallerIndex = indexParent;
            let leftIndex = indexParent * 2 + 1;
            let leftChild = this.heap[leftIndex];
            let rightIndex = indexParent * 2 + 2;
            let rightChild = this.heap[rightIndex];

            if(leftIndex < this.size() && leftChild < this.heap[smallerIndex]){
                smallerIndex = leftIndex
            }
            if(rightIndex < this.size() && rightChild < this.heap[smallerIndex]){
                smallerIndex = rightIndex;
            }
            if(smallerIndex===indexParent) break;
            [this.heap[indexParent],this.heap[smallerIndex]] = [this.heap[smallerIndex],this.heap[indexParent]];
            indexParent = smallerIndex;
        }
    }

}

const findKthLargestMinHeapReviewII = (nums,k) => {
    const minHeap = new MinHeapReviewII();

    for(let num of nums){
        if(minHeap.size() < k){
            minHeap.push(num)
        } else {
            if(minHeap.peek()<num){
                minHeap.pop();
                minHeap.push(num);
            }
        }
    }
    return minHeap.peek();
}




//   0 1 2 3 4 5 6 7 8 9  10
// [[5,8,1,6,6,5,9,10,4,17,8]]
// [[1,4,5,5,6,6,8,8,9,10,17]]
// heap.size < k = 6
// heap [5,8,1]
// heap [1,8,5,6]
// heap [1,6,5,8,6]
// heap [6,6,5,8]
// heap [5,6,6,8,5]
// heap [5,5,6,8,6]
// heap [6,5,6,8]
// heap [6,5,6,8,9]
// heap [9,5,6,8]
// heap [5,9,6,8]
// heap [5,8,6,9]
// heap [5,8,6,9,10]
// heap [10,8,6,9]
// heap [6,8,10,9]
// heap [6,8,10,9,17]

class MinHeapIII {
    constructor(){
        this.heap = []
    }

    size(){
        return this.heap.length;
    }
    peek(){
        return this.heap[0];
    }

    push(val){
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let indexChild = this.size()-1;
        let child = this.heap[indexChild];

        while(indexChild > 0){
            let indexParent = Math.floor((indexChild-1)/2);
            let parent = this.heap[indexParent];

            if(child >= parent) break;

            [this.heap[indexParent],this.heap[indexChild]] = [this.heap[indexChild],this.heap[indexParent]];
            indexChild = indexParent;
        }
    }

    pop(){
        if(this.size()===0) return null;
        else if(this.size()===1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    bubbleDown(){
        let indexParent = 0
        let minIndex = indexParent;
        
        while(true){
            let parent = this.heap[indexParent];
            let left = indexParent * 2 + 1;
            let right = indexParent * 2 + 2;

            if(left < this.size() && parent > this.heap[left]){
                minIndex = left;
            }
            if(right < this.size() && this.heap[right] < this.heap[minIndex]){
                minIndex = right;
            }
            if(minIndex === indexParent) break;

            [this.heap[indexParent],this.heap[minIndex]] = [this.heap[minIndex],this.heap[indexParent]];
            indexParent = minIndex;
        }
    }
}

const findKthLargestMinHeapReviewIII = (nums,k) => {
    const newHeap = new MinHeapIII();

    for(let num of nums){
        if(newHeap.size() < k){
            newHeap.push(num)
        } else {
            if(newHeap.peek()<num){
                newHeap.pop();
                newHeap.push(num);
            }
        }
    }
    return newHeap.peek();
}


const findKthLargestQuickSortReviewIII = (nums,k,low=0,high=nums.length-1) => {
    if(k>nums.length || !nums.length) return null;
   const finalPosition = nums.length-k;
   return quickSortReviewIII(nums,low,high,finalPosition);
    
}

const quickSortReviewIII = (nums,low,high,finalPosition) => {
    if(low===high) return nums[low];

    const pivotIndex = partitionIII(nums,low,high);
    if(pivotIndex===finalPosition) return nums[pivotIndex];
    if(pivotIndex < finalPosition){
        return quickSortReviewIII(nums,pivotIndex+1,high,finalPosition);
    } else {
        return quickSortReviewIII(nums,low,pivotIndex-1,finalPosition);
    }

}

const partitionIII = (nums,low,high) => {
    const pivot = nums[high];
    let i = low;

    for(let j = low; j < high; j++){
        if(pivot>nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++;
        }
    }
    [nums[i],nums[high]] = [nums[high],nums[i]];

    return i;
}

console.log(findKthLargestQuickSortReviewIII([5,8,1,6,6,5,9,10,4,17,8],8));
// [[5,8,1,6,6,5,9,10,4,17,8]]
// [[5,8,1,6,6,5,4,10,9,17,8]]
// [[5,8,1,6,6,5,4,8,9,17,10]]
// [[1,8,5,6,6,5,4,8,9,17,10]]
// [[1,4,5,6,6,5,8,8,9,17,10]]
//             i
//             j
//               h
// 11 - 6= 5 
// [[1,4,5,5,6,6,8,8,9,10,17]]


