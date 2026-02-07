
// [1,2,1,2,1,2,5,3,1,3,2,4,4,4,6,7] k = 4 result [1,2,4,3]
//                                i
// freqNums = {
//      "1": 4,
//      "2": 4,
//      "5": 1,
//      "3": 2,
//      "4": 3,
//      "6": 1,
//      "7": 1,
// }
// mostFreq = 4
// [[],[5,6,7],[3],[4],[1,2]]
// results [1,2,4,3]



var topKFrequent = function(nums, k) {
    const map = {};
    let mostFrequent = 0

    for(let num of nums){
        map[num] = map[num] ? map[num] + 1 : 1;
        mostFrequent = Math.max(mostFrequent,map[num]);
    }

    const buckets = Array.from({length: mostFrequent+1},()=>[]);

    for(let [key,value] of Object.entries(map)){
        buckets[value].push(key);
    }
    const results = [];
    for(let i = buckets.length-1; i > 0; i--){
        for(let j = 0; j < buckets[i].length; j++){

        }
    }
    return results;


};

// freqNums = {
//      "1": 4,
//      "2": 4,
//      "5": 1,
//      "3": 2,
//      "4": 3,
//      "6": 1,
//      "7": 1,
// }

// heap [{"5":1},{"1":4},{"2":4},{"3":2}]
// heap [{"5":1},{"3":2},{"2":4},{"1":4}]
// heap [{"1":4},{"3":2},{"2":4}]
// heap [{"3":2},{"1":4},{"2":4},{"4": 3}]
// heap [{"3":2},{"4":3},{"2":4},{"1": 4}]

// for(let [key,value] of Object.entries(freqNums)){
//    
// }

class MinHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(element) {
        this.heap.push(element);
        this.bubbleUp();
    }
// heap [{num: 5, freq: 1}, {num: 1, freq: 4}, {num: 2, freq: 4}, {num: 3, freq: 2}]
// heap [{num: 5, freq: 1}, {num: 3, freq: 2}, {num: 2, freq: 4}, {num: 1, freq: 4}]
// heap [{num: 1, freq: 4}, {num: 3, freq: 2}, {num: 2, freq: 4}]
// heap [{num: 3, freq: 2}, {num: 1, freq: 4}, {num: 2, freq: 4}, {num: 4, freq: 3}]
// heap [{num: 3, freq: 2}, {num: 4, freq: 3}, {num: 2, freq: 4}, {num: 1, freq: 4}]

    bubbleUp(){
        let indexChild = this.size()-1;
        let freqChild = this.heap[indexChild]['freq'];

        while(indexChild > 0){
            let indexParent = Math.floor((indexChild - 1) / 2)
            let freqParent = this.heap[indexParent]['freq'];

            if(freqChild >= freqParent) break;

            [this.heap[indexParent],this.heap[indexChild]] = [this.heap[indexChild],this.heap[indexParent]];
            indexChild = indexParent;
        }
    }

    pop(){
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return min;
    }

bubbleDown() {
    let indexParent = 0;
    
    while(true){
        let swap = null;
        let left = indexParent * 2 + 1;
        let right = indexParent * 2 + 2;
        let freqParent = this.heap[indexParent].freq;

        if(left < this.heap.length && this.heap[left].freq < freqParent){
            swap = left;
        }
        
        if(right < this.heap.length && this.heap[right].freq < this.heap[swap || indexParent].freq){
            swap = right;
        }

        if(!swap) break;
        

        [this.heap[indexParent], this.heap[swap]] = [this.heap[swap], this.heap[indexParent]];
        indexParent = swap;
    }
}


}

const topKFrequentMinHeap = (nums,k) => {
    const freqMap = {};

    for(let num of nums){
        freqMap[num] = freqMap[num] ? freqMap[num] + 1: 1; 
    }

    const minHeap = new MinHeap();

    for(let [key,value] of Object.entries(freqMap)){
        if(minHeap.size() < k){
            minHeap.push({num: key, freq: value});
        } else {
            if(value > minHeap.peek().freq){
                minHeap.pop()
                minHeap.push({num: key, freq: value});
            }
        }
    }
    
    const results = [];
    while(minHeap.size()){
        results.push(Number(minHeap.pop().num));
    }
    results.reverse();

    return results;
}





// [3,3,3,2,2,2,2,2,1,4,4,7,7,7,7,7,10] 3
//                      i
/* map = {
    2: 5,
    7: 5,
    3: 3,
    1: 2,
    10: 1,
} 
mostFreq = 5

buckets = [[],[10],[1],[3],[],[2,7]]
                                 i
                            j 

*/

const topKFrequentBuckSort = (nums, target) => {
    if(target > nums.length) return null;

    const map = {};
    let mostFreq = 0;
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        mostFreq = Math.max(mostFreq, map[nums[i]]);
    }

    const buckets = Array.from({length: mostFreq+1}, () => []);
    
    for(let [key,value] of Object.entries(map)){
        buckets[value].push(key);
    }
    let results = [];

    for(let i = buckets.length-1; i > 0; i--){
        for(let j = 0; j < buckets[i].length; j++){

            if(results.length<target){
                results.push(Number(buckets[i][j]));
            } else {
                break;
            }
        }
    }

    return results;
}

// [ [], [ '1', '10' ], [ '4' ], [ '3' ], [], [ '2', '7' ] ]

console.log(topKFrequentBuckSort([3,3,3,3,3,2,2,2,2,2,1,4,4,7,7,7,7,7,10],2));// [3,7,10]