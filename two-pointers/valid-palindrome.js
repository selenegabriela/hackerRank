var isPalindrome = function(s) {
    //amanaplanacanalpanama
    //          p1                
    //          p2 
    if(!s || s.trim() === '') return true 
    
    let finalStr = ''

    for(let i = 0; i < s.length; i++){
        if(/[a-zA-Z0-9]/.test(s[i])){
            finalStr += s[i].toLowerCase()
        }
    }
    let p1 = 0, p2 = finalStr.length-1

    while(p1 <= p2){
        if(finalStr[p1] !== finalStr[p2]) {
            return false
        } 
        p1++;
        p2--;

    }

    return true
};

// anita lava la tina
//         p1
//         p2
// /[a-zA-Z0-9]/
//      s[p1] !== s[p2]
//         false 
//       else
//          p1++
//          p2--
// else   while()
//       while(!/[a-zA-Z0-9]/.s[p1]) p1++
//       while(!/[a-zA-Z0-9]/.s[p2]) p2--

const isPalindromeReview = (s) => {
    if(!s || s.trim() === '') return true 
    let p1 = 0, p2 = s.length-1

    while(p1 <= p2){
        if(/[a-zA-Z0-9]/.test(s[p1]) && /[a-zA-Z0-9]/.test(s[p2])){
            if(s[p1].toLowerCase() !== s[p2].toLowerCase()) return false
            p1++
            p2--

        } else {
            while(!/[a-zA-Z0-9]/.test(s[p1])) p1++
            while(!/[a-zA-Z0-9]/.test(s[p2])) p2--
        }
    }
    return true
}



const isNumberOrLetter = (char) => {
    return /[a-zA-Z0-9]/.test(char);
}

const isPalindromeReviewII = (s) => {
    if(!s || s.trim() === '') return true
    let left = 0, rigth = s.length-1;

    while(left <= rigth){

        if(!isNumberOrLetter(s[left])){
            left++;
        } else if(!isNumberOrLetter(s[rigth])){
            rigth--;
        } else {
            if(s[rigth].toLowerCase() !== s[left].toLowerCase()) return false;
            left++;
            rigth--;
        }
    }
    return true;
}












// Anita lava la tina
//         l
//         r

const validCharacter = (char) => {
    return /[a-zA-Z0-9]/.test(char);
}

const isPalindromeReviewIII = (s) => {

    let l = 0, r = s.length-1;

    while(r>l){
        if(validCharacter(s[l]) && validCharacter(s[r])){
            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false
            l++;
            r--;
        } else {
            while(l < r && !validCharacter(s[l])) l++;
            while(l < r && !validCharacter(s[r])) r--;
        }
    }
    return true;
}



const isValidChar = (char) => {
    return /[a-zA-Z0-9]/.test(char);
}


const isPalindromeIV = (s) => {

    let l = 0;
    let r = s.length-1;

    while(r>l){
        while(r > l && !isValidChar(s[l])) l++;
        while(r > l && !isValidChar(s[r])) r--;
        if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
}

console.log(isPalindromeIV('Anita lava la tinaa'));