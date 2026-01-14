// [[1,2],[1,3],[2,3],[3,4]]
//                      i
// current = intervals[0] = [2,3]
// min = infinity
// current[1] > i[0] && min > i[0]:
//     min = (current[1],i[1]) ----> 2
//     current[1] = max(current[1],i[1])
// else
    // results.push(current)
//     current = i
// results = [[1,3]]
// intervals.length - results.length

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1]-b[1]);
    let lastIntervalNum = intervals[0][1];
    let counter = 0;

    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0]<lastIntervalNum){
            counter++;
        } else {
            lastIntervalNum = intervals[i][1];
        }
    }
    return counter;

};

var eraseOverlapIntervalsOth = function(intervals) {
    if(!intervals.length || intervals.length < 2) return 0;

    intervals.sort(([a,b],[c,d]) => b-d);

    let endsInt = intervals[0][1];
    let removedCounter = 0;

    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < endsInt){
            removedCounter++;
        } else {
            endsInt = intervals[i][1];
        }
    }
    return removedCounter;

};

const eraseOverlapIntervalsReviewII = (intervals) => {
    if(!intervals.length || intervals.length < 2) return 0;
    intervals.sort((a,b) => a[1]-b[1]);
    let counter = 0;

    let end = intervals[0][1];

    for(let i = 1; i < intervals.length; i++){
        if(end > intervals[i][0]){
            counter++;
        } else {
            end = intervals[i][1];
        }
    }
    return counter;
}

const eraseOverlapIntervalsReviewIII = (intervals) => {
    if(intervals.length < 2) return null;
    intervals.sort((a,b)=>a[1]-b[1]);
    let counter = 0;
    let lastIntervalNum = intervals[0][1];
    
    for(let i = 1; i < intervals.length; i++){
        if(lastIntervalNum > intervals[i][0]){
            counter++;
        } else {
            lastIntervalNum = intervals[i][1];
        }
    }
    return counter;
}


console.log(eraseOverlapIntervalsReviewIII([[9, 12],[10, 11], [11, 13], [12, 14], [13, 15], [16, 18], [17, 19]]));
// [[9, 12],[10, 11], [11, 13], [12, 14], [13, 15], [16, 18], [17, 19]]
// [[10, 11],[9, 12], [11, 13], [12, 14], [13, 15], [16, 18], [17, 19]]

// [[10, 11],         , [11, 13],          , [13, 15], [16, 18]]
//                                                                i
// lastIntervalNum = intervals[0][1] = 11 -> 13 -> 15 -> 18
// intervals[i][0] < lastIntervalNum:
//      counter++
// else 
    // lastIntervalNum = intervals[i][1]
//counter = 3


// [[9, 12],[10, 11], [11, 13], [12, 14], [13, 15], [16, 18], [17, 19]]
// 1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20

//                            10  11
//                         9          12
//                                11      13
// 12      14
//                                        13      15
//                                                    16      18
// 17          20
