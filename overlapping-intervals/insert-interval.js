// [[1,3], [4,10], [5,20], [23,30], [25,28]]   newInterval [5,7]
//                            i   
// flag = true
// i[0] >= newInt[0] && flag: result.push(interval) flag = false
// results = [[1,3],[4,10],[5,7],[5,20],[23,30],[25,28]]  

// [[1,3],[4,10],[5,7],[5,20],[23,30],[25,28]] 
//                                        i
// current = [23,30]

// for()
//     i[0] <= current[1]
//         current[1] = max(current[1],i[1])
//     else
          //final.push(current)
//        // current = i
// final.push(current)
// final = [[1,3],[4,20],[23,30]]

var insert = function(intervals, newInterval) {
    if(!intervals.length) return [newInterval];
    let add = true;
    const allIntervals = [];

    for(let i = 0; i < intervals.length; i++){
        if(intervals[i][0] >= newInterval[0] && add){
            allIntervals.push(newInterval);
            add = false;
        }
        allIntervals.push(intervals[i]);
    }
    if(add) allIntervals.push(newInterval);

    let current = allIntervals[0];
    const finalArray = []

    for(let i = 1; i < allIntervals.length; i++){
        if(current[1] >= allIntervals[i][0]){
            current[1] = Math.max(current[1],allIntervals[i][1]);
        } else {
            finalArray.push(current);
            current = allIntervals[i];
        }
    }
    finalArray.push(current);
    return finalArray;
};

var insertOpt = function(intervals, newInterval) {
    let [start,end] = newInterval;
    let i = 0;
    let results = []

    while(i < intervals.length && intervals[i][1] < start){
        results.push(intervals[i]);
        i++;
    }

    while(i < intervals.length && intervals[i][0] <= end){
        start = Math.min(start,intervals[i][0]);
        end = Math.max(end,intervals[i][1]);
        i++;
    }

    results.push([start,end]);

    while(i<intervals.length){
        results.push(intervals[i]);
        i++;
    }
    return results
};

// [[1,2],[3,5],[6,7],[8,10],[12,16]]   newInt = [4,8]
//                             i
// start = newInt[0] = 3
// end = newInt[1] = 10
// intervals[i][1] < start: 
// resuls = [[1,2],[3,10],[12,16]]

// intervals[i][0] <= end:
//      start = min(interval[i][0],start)
//      end = max(interval[i][1],end)
// results.push([start,end])

// 




const insertInterval = (intervals,interval) => {
    const results = [];
    let i = 0;
    let first = interval[0];
    let second = interval[1];

    while(i < intervals.length && intervals[i][1] <= first){
        results.push(intervals[i]);
        i++;
    }

    while(i < intervals.length && second >= intervals[i][0]){
        first = Math.min(first,intervals[i][0]);
        second = Math.max(second,intervals[i][1]);
        i++;
    }
    results.push([first,second]);

    while(i < intervals.length){
        results.push(intervals[i]);
        i++;
    }
    return results;
}

//[1,3],[2,5],[6,7],[8,10],[12,16]],[4,8]
//         i
//finalIntervlas [1,3]
// start new[0] = 4
//end new[1] = 8
// i[1] <= start
// end >= i[0]
//[[1,3],[2,10],12,16]]

const insertIntervalIII = (intervals,newInterval) => {
    let finalIntervals = [];
    let start = newInterval[0];
    let end = newInterval[1];
    let i = 0;

    while(i < intervals.length && intervals[i][1] < start){
        finalIntervals.push(intervals[i]);
        i++;
    }

    while(i < intervals.length && intervals[i][0] <= end){
        start = Math.min(start,intervals[i][0]);
        end = Math.max(end,intervals[i][1]);
        i++;
    }

    finalIntervals.push([start,end]);

    while(i < intervals.length){
        finalIntervals.push(intervals[i]);
        i++;
    }

    return finalIntervals;

}

console.log(insertIntervalIII([[1,3],[2,5],[6,7],[8,10],[12,16]],[4,8]));
// [[1,2],[3,5],[8,10],[12,16]] newInterval = [6,7]
//                             i 
// start = 4
// end = 8

// results [[1,2]]
// i[1] < start: results.push(intervals[i])
// 

// i[0] <= end:
// start = Math.min(start,i[0]) 3
// end = Math.max(end,i[1]) 10

// results.push([start,end])
// results [[1,2],[3,10],[12,16]]
// 


