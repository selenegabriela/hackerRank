function pageCount(n, p) {
    // Write your code here
    if(p===1) return 0
    if(n-p===1 && n%2===0) return 1
    return Math.min(Math.floor((n-p)/2),Math.floor(p/2))
}

console.log(pageCount(6,2));