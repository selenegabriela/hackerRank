var countGoodSubstrings = function(s) {
    let totalGoodSubstrings = 0

    for(let i = 0; i < s.length-2; i++){
        const existingLetters = new Set()
        for(let j = i + 1; j <= s.length; j++){
            if(!existingLetters.has(s[j-1])){
                existingLetters.add(s[j-1])
            } else {
                break
            }
            if(j-i > 2){
                if(existingLetters.size===3){

                    totalGoodSubstrings++;
                }
                break;
            }
        }
    }
    return totalGoodSubstrings
};

// Sliding window

const countGoodSubstrings2 = (s) => {
    // aababcabc = 4
    // [   ]

    // Firs iteration
    // set(ab) 
    // set.size===3 {goodSubstringsTotal++}

    let goodSubstringsTotal = 0

    for(let i = 0; i < s.length-2; i++){
        const window = new Set(s.slice(i, i+3))
        if(window.size===3) goodSubstringsTotal++
    }

    return goodSubstringsTotal
    
}

// aababcabc
//  i
//   j
//    k
// set = ab
// set.size === 3
// totalGoodSub++ 
const countGoodSubstringsReview = (s) => {

    let goodSubsTotal = 0 
    
    for(let i = 0; i <= s.length - 3; i++){
        const j = i+1;
        const k = i+2
        const newSet = new Set([s[i],s[j],s[k]])

        if(newSet.size===3) goodSubsTotal++
    }
    return goodSubsTotal
}













// aababcabc
// i
//  l
//   r
// set [a,b]
// size === 3
//      totalGood++



const countGoodSubstringsReviewIII = (s) => {
    let totalGood = 0;
    for(let i = 0; i < s.length-3; i++){
        let l = i + 1, r = i+2;
        const newSet = new Set([s[i],s[l],s[r]]);

        if(newSet.size===3) totalGood++;
    }
    return totalGood;
}

console.log(countGoodSubstringsReview("aababcabc"));