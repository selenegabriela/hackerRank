const combinationSumReviewII = (arr, target) => {
const result = [];
    const path = [];
    backtrack(arr,target,0,path,result);
    return result;
};

const backtrack = (arr, target, start, path, result) => {

    if(target===0) return result.push([...path]);
    if(target < 0) return;

    for(let i = start; i < arr.length; i++){
        path.push(arr[i]);
        backtrack(arr,target-arr[i],i+1,path,result);
        path.pop();
    }
};


console.log(combinationSumReviewII([1,5,2,7,-2,3,4],10));