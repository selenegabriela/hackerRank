function lengthOfLongestSubstring(str) {
    // R = 2
    // L = 0
    //      str[R]   R
    // obj {a:       0, b: 1, c: 2, }
    // longestSubFinal = 3

    // a b c b a d c a e
    //     L R


    let longestSubFinal = 0
    const existingChars = {}
    let left = 0

    for(let right = 0; right < str.length; right++){
        if(!existingChars[str[right]]){
            existingChars[str[right]] = right
            longestSubFinal++
        } else {
            if(existingChars[str[right]] >= left){
                left = existingChars[str[right]] + 1
            }
    
        }
    }

    // if(str.length <= 1) return str.length
    // for(let p1 = 0; p1 < str.length; p1++){
    //     let longestSubByIteration = 1
    //     if((str.length - longestSubFinal) < longestSubByIteration) break
    //     const set = new Set()
    //     set.add(str[p1])
    //     for(let p2 = p1 + 1; p2 < str.length; p2++){
    //         if(!set.has(str[p2])) {
    //             longestSubByIteration++
    //             set.add(str[p2])
    //         } else {
    //             break;
    //         }
    //     }
    //     longestSubFinal = Math.max(longestSubByIteration, longestSubFinal)
    // }

    // return longestSubFinal
}

var lengthOfLongestSubstringL = function(s) {
    const existingLetter = {}
    let maxLength = 0, left = 0

    for(let right = 0; right < s.length; right++){
        const currentLetter = s[right]
        if(!existingLetter[currentLetter] && existingLetter[currentLetter] !== 0){
            existingLetter[currentLetter] = right
            maxLength++
        } else {
            if(existingLetter[currentLetter] >= left){
                while(s[right]===s[right-1]){
                    right++
                    left = existingLetter[currentLetter] + 1
                    existingLetter[currentLetter] = right
                }
            }
        }
        maxLength = Math.max(maxLength, right-left+1)
    }
    return maxLength
};


console.log(lengthOfLongestSubstringL('pwwkew'));