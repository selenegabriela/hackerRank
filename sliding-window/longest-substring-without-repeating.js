function longestSubstringWithoutRepeatingCgaracters(s) {
    // 'abcabcbb'
    //        i
    //          j
    // s[i][j-1]
    // setChars = newSet(c,b)
    // longest = max(set.size,longest)

    let longest = 0

    for(let i = 0; i < s.length; i++){
        const charsSeen = new Set()
        for(let j = i+1; j <= s.length; j++){
            if(!charsSeen.has(s[j-1])){
                charsSeen.add(s[j-1])
            } else {
                longest = Math.max(longest,charsSeen.size)
                break;
            }
        }
    }
    return longest

}

function longestSubstringWithoutRepeatingCgaractersOptimized(s) {
    // 'abcabcbb'
    //  R
    //  L
    //  not seen -> seenChars(b) - logest = max(longest, r-l+1)
    //  seen -> remove s[L] form seenChars - L++ - add s[R] to seenChars
    //  longest = 0
    //  seenChars = set()
    if(s.length <= 1) return s.length
    let longest = 0, l = 0;
    const seenChars = new Set()

    for(let r = 0; r < s.length; r++){
        if(!seenChars.has(s[r])){
            seenChars.add(s[r])
        } else {
            while(seenChars.has(s[r])){
                seenChars.delete(s[l])
                l++
            }
            seenChars.add(s[r])
        }
        longest = Math.max(longest, r-l+1)

    }
    return longest

}

// abcabcbb
//        l
//        r
// s[r] exists in set
//     set.delete(s[l])
//     l++
// set = [b]
// longest = Max(longest,r-l+1) = 3

const longestSubstringWithoutRepeatingCharactersReview = (s) => {
    let l = 0
    let totalGoodSubstring = 0
    const subStringSet = new Set()

    for(let r = 0; r < s.length; r++){
        if(!subStringSet.has(s[r])){
            subStringSet.add(s[r])
        } else {
            while(subStringSet.has(s[r])){
                subStringSet.delete(s[l])
                l++
            }
            subStringSet.add(s[r])
        }
        totalGoodSubstring = Math.max(totalGoodSubstring, r-l+1)
    }
    return totalGoodSubstring;
}
//abcabcbb
//       i
//      j
// set [b]
// maxGoodSub =3
const longestSubWithoutRepeatReview = (s) => {
    let maxGoodSub = 0;
    let j = 0;
    const set = new Set();

    for(let i = 0; i < s.length; i++){
        if(!set.has(s[i])) {
            set.add(s[i]);
            maxGoodSub = Math.max(maxGoodSub, i-j+1);
        } else {
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }
    return maxGoodSub;
}












// abcabcbb
//        l
//        r

// set [b]
// 
// max = max(r-l+1) = 3



const longestSubWithoutRepeatReviewIII = (s) => {
    const newSet = new Set();
    let longest = 0;
    let l= 0;
    for(let r = 0; r < s.length; r++){

        if(!newSet.has(s[r])){
            newSet.add(s[r]);
        } else {
            while(newSet.has(s[r])){
                newSet.delete(s[l]);
                l++;
            }
            newSet.add(s[r]);
        }
        longest = Math.max(longest,r-l+1);
    }
    return longest;
}


console.log(longestSubWithoutRepeatReviewIII('abcabcbb'));