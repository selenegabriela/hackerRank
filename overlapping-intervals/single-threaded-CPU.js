// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   // Insertar elemento
//   push(item) {
//     this.heap.push(item);
//     this.bubbleUp();
//   }

//   // Sacar el menor
//   pop() {
//     if (this.size() === 1) return this.heap.pop();
//     const top = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.bubbleDown();
//     return top;
//   }

//   // Tamaño del heap
//   size() {
//     return this.heap.length;
//   }

//   bubbleUp() {
//     let i = this.heap.length - 1;
//     while (i > 0) {
//       const parent = Math.floor((i - 1) / 2);
//       if (this.compare(this.heap[i], this.heap[parent])) {
//         [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
//         i = parent;
//       } else break;
//     }
//   }

//   bubbleDown() {
//     let i = 0;
//     const n = this.heap.length;
//     while (true) {
//       let left = 2 * i + 1, right = 2 * i + 2;
//       let smallest = i;
//       if (left < n && this.compare(this.heap[left], this.heap[smallest])) smallest = left;
//       if (right < n && this.compare(this.heap[right], this.heap[smallest])) smallest = right;
//       if (smallest === i) break;
//       [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
//       i = smallest;
//     }
//   }

//   // 🔑 comparación según tu lógica (por duración y luego índice)
//   compare(a, b) {
//     return a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
//   }
// }

var getOrder = function(tasks) {
  const taskWIndexes = tasks.map((t,i) => [...t,i]);
  taskWIndexes.sort((a,b) => a[0] - b[0]);

  const pq = new MinHeap();
  const results = [];
  let currentTime = 0;
  let i = 0;

  while (i < taskWIndexes.length || pq.size()) {
    if (pq.size() === 0 && currentTime < taskWIndexes[i][0]) {
      currentTime = taskWIndexes[i][0];
    }

    while (i < taskWIndexes.length && taskWIndexes[i][0] <= currentTime) {
      const [time, processing, index] = taskWIndexes[i];
      pq.push([processing, index]);
      i++;
    }

    const [proc, idx] = pq.pop();
    currentTime += proc;
    results.push(idx);
  }

  return results;
};


// var getOrder = function(tasks) {
//     // adding index
//     const taskWIndexes = tasks.map((task,i) => [...task,i]);

//     // order as per time position [0]
//     taskWIndexes.sort((a,b) => a[0]-b[0]);

//     const pq = [], results = [];
//     let currentTime = 0;
//     let i = 0;

//     //looping if there are elements in tasks or in the pq
//     while(i < taskWIndexes.length || pq.length){
    
//         // checking if the pq is empty and so if the CPU was idle to update the current time.
//         if(!pq.length && currentTime < taskWIndexes[i][0]){
//             currentTime = taskWIndexes[i][0];
//         }
//         // looping for checking the task that meets the current time
//         while(i < taskWIndexes.length && taskWIndexes[i][0] <= currentTime){
//             const [time, processingTime, index] = taskWIndexes[i];
//             pq.push([processingTime,index]);
//             i++;
//         }
//         pq.sort((a,b) => b[0]-a[0] || b[1]-a[1]);
//         // adding the next task and sum its processing time to the current time
//         const [processingTimeCurr,indexCurr] = pq.pop();
//         results.push(indexCurr);
//         currentTime += processingTimeCurr;

//     }
//     return results;

// };



/*


    0       1       2       3
[[1, 5], [2, 3], [3, 3], [10, 1]]
[[1,5,0],[2,3,1],[3,3,2], [10,1,3]]
                              i

current = inter[0]
results.push(current[2]) = [0]
time = time + current[1] = 6
i[1] < time:
pq = [[3,1],[3,2],[2,3]]
              i
pq.sort by timeprocessing
minTime = pq[0][0] = 3
index = pq[0][1] = 1
 while
    pq[i][0] < min:
        min
    
*/

class NewHeap {
  constructor(){
    this.heap = [];
  }


  size(){
    return this.heap.length;
  }

  push(element){
    this.heap.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let indexChild = this.size()-1;
    let child = this.heap[indexChild];

    while(indexChild > 0){
      let indexParent = Math.floor((indexChild-1)/2);
      let parent = this.heap[indexParent];

      if(child[0] < parent[0] || (child[0]===parent[0] && child[1] < parent[1] )){
        [this.heap[indexParent],this.heap[indexChild]] = [this.heap[indexChild],this.heap[indexParent]];
        indexChild = indexParent;
      } else {
        break;
      }
    }
  }

  pop(){
    if(this.size()===1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;

  }

  bubbleDown(){
    let indexParent = 0;
    let smaller = indexParent;

    while(true){

      let left = indexParent * 2 + 1;
      let right = indexParent * 2 + 2;

      if(left < this.size() && (this.heap[left][0] < this.heap[smaller][0] || (this.heap[left][0]===this.heap[smaller][0] && this.heap[left][1] < this.heap[smaller][1]))){
        smaller = left;
      }
      if(right < this.size() && (this.heap[right][0] < this.heap[smaller][0] || (this.heap[right][0]===this.heap[smaller][0] && this.heap[right][1] < this.heap[smaller][1]))){
        smaller = right;
      }
      if(smaller===indexParent) break;
      [this.heap[indexParent],this.heap[smaller]] = [this.heap[smaller],this.heap[indexParent]]
      indexParent = smaller;
    }
  }
}

var getOrder = function(tasks){
  const tasksWIndexes = tasks.map((task,i) => [...task,i]);
  tasksWIndexes.sort(([a,b],[c,d]) => a-c);

  const orderedTasksIndexes = [];
  const pq = new NewHeap();
  let i = 0, currentTime = 0;


  while(i < tasksWIndexes.length || pq.size()){

    if(!pq.size() && currentTime < tasksWIndexes[i][0]){
      currentTime = tasksWIndexes[i][0];
    }

    while(i < tasksWIndexes.length && tasksWIndexes[i][0] <= currentTime){
      const [timeEnqueued,timeProcessing,index] = tasksWIndexes[i];
      pq.push([timeProcessing,index]);
      i++;
    }

    const [timeProcessing,index] = pq.pop(); 
    orderedTasksIndexes.push(index);
    currentTime += timeProcessing;

  }


  return orderedTasksIndexes;
}

// [[10, 1], [1, 5], [2, 3], [4,3], [3, 3], [5,3],[6,2], [10, 1], [19,3]]
// [[10, 1,0], [1, 5,1], [2, 3,2], [4,3,3], [3, 3,4], [5,3,5],[6,2,6], [10, 1,7], [19,3,9]]
// [[1, 5,1], [2, 3,2], [3, 3,4], [4,3,3], [5,3,5],[6,2,6], [10, 1,0], [10, 1,7], [19,3,9]]
//                                                            i=5
//currentTime = 0 -> 1 -> 6 -> 8
// results = [1,6]
// pq = [[3,2]]
// push:
   // heap = [[3,4],[2,6],[3,2],[3,3],[3,5]]
                    //CH
             //PA
   // bubbleUp(){}
   // 

// pop:
    // if size===1: return this.heap.pop()
    // min = [2,6];
    // this.heap[0] = this.heap.pop()
    // bubbleDown()
    // heap [[3,3],[3,2],[3,4],[3,5]]
    //                          PA=0
    //                                             CHL
    //                                                     CHR
    // indexParent = 0 -> smaller
    // smaller = indexParent = 0 -> 1 -> 3

    //return min


// i < tasks.len or pq.len:
//     
//     !pq.len and currentTime < i[0]:
//        currentTime = i[0];

//     i < tsks.len && i[0] <= currentTime:
//         let [enqueueTime, timeProcessing, index] = i
//         pq.push([timeProcessing,index])
//         i++;
//     
//     let [processingTime, index] = pq.pop();
//     results.push(index);
//     currentTime = currentTime + processingTime

const getOrderReviewII = (tasks) => {
  const tasksWithIndexes = tasks.map((task,i) => [...task,i]);

  tasksWithIndexes.sort((a,b) => a[0]-b[0]);
  let pq = [];
  let currTime = 0;
  let i = 0;
  let indexes = [];

  while(pq.length || i < tasksWithIndexes.length){

    if(!pq.length && currTime < tasksWithIndexes[i][0]){
      currTime = tasksWithIndexes[i][0];
    }

    while( i < tasksWithIndexes.length && tasksWithIndexes[i][0] <= currTime){
      const [enqueueTime,processingTime,index] = tasksWithIndexes[i];
      pq.push([processingTime,index]);
      i++;
    }

    pq.sort((a,b) => a[0] - b[0] || a[1] - b[1]);

    const [proTime,index] = pq.shift();
    indexes.push(index);
    currTime += proTime;
  }

  return indexes;
}



const getOrderReviewIII = (tasks) => {
  const indexTasks = tasks.map((task,i) => [...task,i]);
  indexTasks.sort((a,b)=>a[0]-b[0]);
  const results = []

  let pq = new NewHeap();
  let currTime = 0;
  let i = 0;

  while(i < indexTasks.length || pq.size()){
    if(!pq.size() && currTime < indexTasks[i][0]){
      currTime = indexTasks[i][0];
    }
    
    while(i < indexTasks.length && indexTasks[i][0] <= currTime){
      const [timeArrived,timeProcessing,index] = indexTasks[i];
      pq.push([timeProcessing,index]);
      i++;
    }
    const [timeProcessing,index] = pq.pop();
    results.push(index);
    currTime += timeProcessing;
  }



  return results;
}


console.log(getOrderReviewII([[10, 1], [1, 5], [2, 3], [4,3], [3, 3], [5,3],[6,2], [10, 1], [19,3]]));
// [10, 1, 0], [1, 5, 1], [2, 3, 2], [3, 3, 3], [10, 1, 4], [20, 3, 5]
// [1, 5, 1], [2, 3, 2], [3, 3, 3], [10, 1, 0], [10, 1, 4], [20, 3, 5]
//                                                                      i
// pq = [[3, 5]]
// currTime = 0 -> 1 -> 6 -> 12 -> 13 -> 14 -> 23
// i = 0

// orderedResults = [1,2,3,0,4,5]

// i < tasks || pq:
//    !pq and currTime < i[0]
//        currTime = i[0]

//    i < tasks and i[0] <= currTime:
  //    [timeEnqueued,timeProcessing,index] = i
  //    pq.push(timeProcessing,index)
  //    i++

  // pq.sort(([a,b],[c,d]) => c-a || d-b)
  // [timeProcessing,index] = pq.pop();
  // currentTime = currentTime + timeProcessing
  // orderedResults.push(index)




























// [[10, 1], [1, 5], [2, 3], [3, 3], [10, 1], [20,3]]
// [[10,1,0],[1,5,1],[2,3,2],[3,3,3],[10,1,4],[20,3,5]]
// [[1,5,1],[2,3,2],[3,3,3],[10,1,0],[10,1,4],[20,3,5]]
//                                                       i
// time = 23
// pq = [[3,5]]
// i = 0

//  !pq && time < i[0]: time i[0]: 20

// i[0] <= time:
//  processingTime = i[1] = 3
//  index = i[2] = 5
//  pq.push([pro,in])
//  i++

// pq.sort((a,b) => b[0] - a[0] || b[1] - a[1])

// [proTime, index] = pq.pop() = 3,5
// results.push(index) [1,2,3,0,4,5]
// time = time + proTime; 