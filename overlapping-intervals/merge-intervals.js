

var merge = function(intervals) {
    if(!intervals.length) return [];

    intervals.sort(([a,b],[c,d]) => a-c);

    let currInterval = intervals[0]; //[1,3]
    let results = []

    for(let i = 1; i < intervals.length; i++){
        if(currInterval[1] >= intervals[i][0]){
            currInterval[1] = Math.max(currInterval[1], intervals[i][1]);
        } else {
            results.push(currInterval);
            currInterval = intervals[i];
        }
    }
    results.push(currInterval);
    return results;
};

// [[15,18], [1,3], [2,5], [17,20], [23,30], [25,28]]
// [[1,3], [2,5], [15,18], [17,20], [23,30], [25-28]]
//                                                     i
// currInterval = [23,30]
// results = [[1,5],[15,20],[23,30]]
// intervals[i][0] <= currInterval[1]: currInterval[1] = max(currInterval[1],intervals[i][0])

// 1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
// 1     
//             5 
//                                                15           
//                                                                    20
//                                                                                23                           30
// 




const mergeIntervals = (intervals) => {
    if(!intervals.length) return [];
    intervals.sort((a,b) => a[0]-b[0]);
    let results = [] 

    let current = intervals[0];
    for(let i = 1; i < intervals.length; i++){
        if(current[1] >= intervals[i][0]){
            current[1] = Math.max(current[1],intervals[i][1]);
        } else {
            results.push(current);
            current = intervals[i];
        }
    }
    results.push(current);
    return results;
}

const mergeIntervalsIII = (intervals) => {
    intervals.sort((a,b) => a[0]-b[0]);
    let currInterval = intervals[0];
    let finalIntervals = [];

    for(let i = 1; i < intervals.length; i++){
        if(currInterval[1] >= intervals[i][0]){
            currInterval[1] = Math.max(currInterval[1],intervals[i][1]);
        } else {
            finalIntervals.push(currInterval);
            currInterval = intervals[i]
        }
    }
    finalIntervals.push(currInterval);
    return finalIntervals;
}


// [[1,3],[2,6], [4,10], [15,18], [17,20], [23,30], [25,28]]
//                                                    i
// [[1,10],[15,20],[23,28]]
//results [[1,10],[15,20]]

// currRange [23,30]
// currRange[1] > intervals[i][0]
//      currRange[1] = max(currRange[1],intervals[i][1])
// else
//      results.push(currRange)
//      currRange = intervals[i]
// results.push(currRange)











console.log(mergeIntervalsIII([[1,3],[2,6], [4,10], [15,18], [17,20], [23,30], [25,28]]));


// [[1,3],[2,6], [4,10], [15,18], [17,20], [23,30], [25,28]]
//                                                           i
// current [23,30]
// current[1] >= i[0]
//     current[1] = max(current[1],i[1])
// else
//     result.push(current) [[1,6],[4,10],[15,20]]
//     current = i
// result.push(current) [[1,6],[4,10],[15,20],[23,30]]    