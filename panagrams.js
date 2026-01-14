

const pangrams = (s) => {
    const lowerCaseStr = s.toLowerCase()
    const lettersObj = {}
    let sum = 0

    for(let i = 0; i < lowerCaseStr.length; i++){
        if(!lettersObj[lowerCaseStr[i]] && lowerCaseStr[i] !== ' '){
            sum++
            lettersObj[lowerCaseStr[i]] = true
        }
    }

    return sum===26 ? 'pangram' : 'not pangram'

}
//console.log(pangrams('We promptly judged antique ivory buckles for the next prize '))

const pangramsOptimized = (s) => {
    const lowerCaseStr = s.toLowerCase()
    const lettersSet = new Set()

    for(let i = 0; i < lowerCaseStr.length; i++){
        if(lowerCaseStr[i] !== ' '){
            lettersSet.add(lowerCaseStr[i])
        }
    }

    return lettersSet.size===26 ? 'pangram' : 'not pangram'

}

const pangramsOptimized2 = (s) => {
    const obj = {}
    let sum = 0

    for(let i = 0; i < s.length; i++){

        if(s[i] !== ' ') {
            if(!obj[s[i].toLowerCase()]) {
                obj[s[i].toLowerCase()] = true
                sum++
            }
        }
    }
    return sum===26 && 'pangram' || 'not pangram'
}

const pangramsOptimizedSet = (s) => {
    const set = new Set(s.toLowerCase())
    let size = 26
    if(set.has(' ')) size = 27

    return set.size===size ? 'pangram' : 'not pangram'
}

const pangramsOptimizedSet2 = (s) => {

    return new Set(s.toLowerCase().match(/[a-z]/g)).size === 26 ? 'pangram' : 'not pangram'
}




console.log(pangramsOptimizedSet2('We promptlyw judged antique ivory buckles for the next prize '))

