var subarraySum2 = function(nums, k) {
    const prefix = [0];
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        prefix.push(prefix[i]+nums[i]);
    }

    let j = 1;
    let i = 0;
    while(i< j &&i <= nums.length && j <= nums.length){

        if((prefix[j]-prefix[i])===k){
            total++;
            i++;
            j++
        } else if((prefix[j]-prefix[i]) > k){
            i++;
        } else{
            j++;
        }

    }

    return total;
};

var subarraySum = function(nums, k) {
  let sum = 0;
  let counter = 0;
  const map = new Map();
  map.set(0,1);

  for(let num of nums) {
    sum += num;


    if(map.get(sum-k)){
      counter += map.get(sum-k);
    }

    map.set(sum, (map.get(sum) ? map.get(sum) + 1 : 1));
  }
  return counter;
};


// [1, -1, 1, -1, 1] k = 0 total = 6
//            i=3
// map = {0 =>3 1=>2}
// counter = 2 + 2 = 4
// sum = 0

//for
// sum = sum + num[i] = 1
//        1  +  -1  = 0
// sum - k
//  1  - 0 = 1 

//1.[1,-1]


//total = 4

console.log(subarraySum([1, -1, 1, -1, 1],0)); // 1 2 3 4
//     [1, -1, 1, -1, 1]
//map  {0=>2,1=>2}
// sum = 1
// sum - 0 = 1
// counter = 3

// [1,2,3,4,5,6] = 6
//  0=>2 
// sum=1-6 = 5
//counter=0