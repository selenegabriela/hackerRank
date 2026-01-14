function birthday(s, d, m) {
    // Write your code here
    if(s.length === 1 && s[0]===d && m===1) return 1
    let totalSum = 0
    let sum = s[0]
    for(let i = 0; i<s.length; i++){
        if(i>0) {
            sum = sum - s[i-1] + s[i+m-1]
        } 
        let j = i+1
        while(j-i<m && i==0){
            sum = sum + s[j]
            j++
        }
        if(sum===d) totalSum++
    }
    return totalSum
}

function birthday2(s, d, m) {
    // Write your code here
    if(s.length === 1 && s[0]===d && m===1) return 1
    let totalSum = 0
    let sum = s[0]

    for(let i = 1; i < m; i++){
        sum += s[i]
    }
    if(sum===d) totalSum++
    for(let i = m; i < s.length; i++){
        sum = sum - s[i-m] + s[i]
        if(sum===d) totalSum++
    }
    
  return totalSum
}


function birthdayR(s, d, m) {
    // Write your code here
    let totalSum = 0

    let sum = s[0]

    for(let i = 1; i < m; i++){
        sum += s[i]
    }
    if(sum === d) totalSum++
    
    for(let i = m; i < s.length; i++){
        sum = sum - s[i - m] + s[i]
        if(sum === d) totalSum++     
    }

    return totalSum
}
console.log(birthdayR([1, 2, 3, 1, 1, 4, 2, 2, 2, 0, 3, 3],6,3));