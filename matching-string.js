function matchingStrings(strings, queries) {
    // Write your code here
    const map = {}
    const numberOfTimes = []
    
    for(let string of strings){
        map[string] = (map[string] || 0) + 1 
    }
    console.log(map)
    
    for(let i = 0; i < queries.length; i++){
        numberOfTimes[i] = map[queries[i]] || 0
    }
    return numberOfTimes
}










function matchingStrings2(strings, queries) {
    // Write your code here
    const obj = {}
    const numberOfTimes = []

    for(let i = 0; i < strings.length; i++){
        obj[strings[i]] = (obj[strings[i]] || 0) + 1
    }

    for(let i = 0; i < queries.length; i++){
        numberOfTimes[i] = obj[queries[i]] || 0
    }

    return numberOfTimes
}

console.log(matchingStrings2(['ab','ab','abc'],['ab','abc','bc']));