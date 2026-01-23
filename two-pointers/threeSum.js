var threeSum = function(nums) {
    //-1,0,1,2,-1,-4 [[-1,0,1],[2,-1,-1]]
    //-4,-1,-1,0,1,2
    // i
    //         p1
    //             p2
    // let sum = nums[i] + nums[p1] + nums[p2] = 3
    // if(sum===0) 
        // p1++
        // p2++
        // results.push([nums[i], nums[p1], nums[p2]])
    // if(sum < 0) p1++
    // if(sum > 0) p2--
    //results = [[-1,-1,2], [-1,0,1]]
    nums = nums.sort((a,b) => a-b)
    const results = []
    
    for(let i = 0; i < nums.length; i++){
        if( i > 0 && nums[i]===nums[i-1]) continue;
        let p1 = i+1, p2 = nums.length - 1;
        
        while(p1 < p2) {
            let sum = nums[i] + nums[p1] + nums[p2]
            if(sum===0) {
                results.push([nums[i], nums[p1], nums[p2]])
                p1++
                p2--
                while(nums[p1]===nums[p1-1]){
                    p1++
                }
                while(nums[p2]===nums[p2+1]){
                    p2--
                }
            } else if(sum < 0) p1++
            else p2--
        }

    }

    return results


};

// [-2,0,1,2,-2,-4] = [[-2,0,2]]
// [-4,-2,-2,0,1,2]
//           i   
//             p1
//             p2
// if nums[i]===nums[i-1] continue
//sum = 3
// sum ([i] + nums[p1] + nums[p2]) === 0
//      results = [[-2,0,2]]
// while(p1 < p2)
    // while(sum < 0 && nums[p1] !== nums[p1+1])
    //      p1++


const threeSumReview = (nums) => {
    const results = []
    nums = nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i]===nums[i-1]) continue;
        let p1 = i+1, p2 = nums.length-1;

        while(p1 < p2){
            const sum = nums[i] + nums[p1] + nums[p2]

            if(sum===0){
                results.push([nums[i], nums[p1], nums[p2]])
                p1++
                p2--
                while(nums[p1]===nums[p1-1]) p1++
                while(nums[p2]===nums[p2+1]) p2--

            } else if(sum < 0) {
                p1++
            } else {
                p2--
            }
        }
    }

    return results;
}
















const threeSumReviewII = (nums) => {
    const results = [];

    nums.sort((a,b) => a-b);

    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i]===nums[i-1]) continue;
        let l = i+1, r = nums.length-1;

        while(l < r){
            const sum = nums[i] + nums[l] + nums[r];

            if(sum===0) {
                results.push([nums[i], nums[l], nums[r]])
                l++;
                r--;
                while(l < r && nums[l]===nums[l-1]) l++;
                while(l < r && nums[r]===nums[r+1]) r--;
            } else if(sum < 0){
                l++;
            } else {
                r--;
            }
        }
    }
    return results;
}






// [-2,0,1,2,-2,-4,4,0]
// [-4,-2,-2,0,0,1,2,4]
//               i
//                l
//                   r
// n[i]+n[l]+n[r] === 0
//     results.push([n[i],n[l],n[r]]);
// results [[-4,0,4],[-2,-2,0][-2,0,2]]


const threeSumReviewIII = (n) => {
    n.sort((a,b) => a-b);
    const results = [];

    for(let i = 0; i < n.length; i++){
        if(i > 0 && n[i]===n[i-1]) continue;
        if(n[i] > 0) break;
        let l = i + 1, r = n.length-1;

        while(r > l){
            const sum = n[i]+n[l]+n[r];
            if(sum===0){
                results.push([n[i],n[l],n[r]])
                l++;
                r--;
                while(l < r && n[l]===n[l-1]) l++;
                while(l < r && n[r]===n[r+1]) r--;
    
            } else if(sum < 0) l++;
            else r--;
        }
    }
    return results;
}













// [-1, 0, 1, 2, -1, -4]
// [-4, -1, -1, 0, 1, 2]
//       i
//          p1
//                    p2

// sum = n[i] + n[p1] + n[p2] = 0
// while sum===0:
    // push
    // p1++
    // p2--
// sum < 0: 
//  p1++
// else:
//  p2--

// [[-1,0,1],[-1,2-1]]
// 

const threeSumIV = (nums) => {
    nums.sort((a,b) => a-b);
    const results = [];
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i]===nums[i-1]) continue;

        let p1 = i + 1, p2 = nums.length - 1;

        while(p1 < p2){
            let sum = nums[i] + nums[p1] + nums[p2];
            if(sum===0){
               results.push([nums[i],nums[p1],nums[p2]]);
               p1++;
               p2--;
                while(p1 < p2 && nums[p1] === nums[p1-1]) p1++;
                while(p1 < p2 && nums[p2] === nums[p2+1]) p2--;

            } else if(sum<0){
                p1++;
            } else {
                p2--;
            }
        }
    }
    return results;
}


console.log(threeSumIV([-1, 0, 1, 2, -1, -4]));

















// [-2,0,1,2,-2,-4,4,0]
// [-4,-2,-2,0,0,1,2,4]
//      i
//           r
//                 l
// results = [[-4,0,4],[-2,-2,4],[-2,0,2]]
// n[i]+n[l]+n[r] === 0:
// results.push({n[i],n[l],n[r]})