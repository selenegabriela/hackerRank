function caesarCipher(s, k) {
    // Write your code here
    const orderedAlph = 'abcdefghijklmnopqrstuvwxyz'
    const objAlph = {}
    let cipheredTxt = ''
    
    if(k > 26) k = (Math.ceil(k/26) * 26) - k
    
    for(let i = 0; i < orderedAlph.length; i++){
        objAlph[orderedAlph[i]] = i
    }
    
    for(let i = 0; i < s.length; i++){
        if(objAlph[s[i]]){
            if(orderedAlph[objAlph[s[i]]+k]){
                cipheredTxt += orderedAlph[objAlph[s[i]]+k]
            } else {
                cipheredTxt += orderedAlph[objAlph[s[i]]+k-26]
            }
        } else if(objAlph[s[i].toLowerCase()] !== undefined){
            if(orderedAlph[objAlph[s[i].toLowerCase()]+k]){
                cipheredTxt += orderedAlph[objAlph[s[i].toLowerCase()]+k].toUpperCase()
            } else {
                cipheredTxt += orderedAlph[objAlph[s[i].toLowerCase()]+k-26].toUpperCase()
            }
        } else {
            cipheredTxt += s[i]
        }
    }
    return cipheredTxt
    
    
}
function caesarCipher2(s, k) {
    // Write your code here
    let cipheredTxt = ''
    const setAlph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    k = k % 26

    for(let i = 0; i < s.length; i++){
        const char = s[i]
        const isUpper = s[i] === char.toUpperCase()
        const charLower = s[i].toLowerCase()

        if(setAlph.includes(charLower)){
            const index = setAlph.indexOf(charLower)
            !isUpper ? cipheredTxt += setAlph[(index+k)%26] : cipheredTxt += setAlph[(index+k)%26].toUpperCase()
        } else {
            cipheredTxt += s[i]
        }

    }
    return cipheredTxt

}


function caesarCipher3(s, k) {
    // Write your code here
    alphabet = {0: 'a',1: 'b',2: 'c',3: 'd',4: 'e',5: 'f',6: 'g',7: 'h',8: 'i',9: 'j',10: 'k',11: 'l',12: 'm',13: 'n',14: 'o',15: 'p',16: 'q',17: 'r',18: 's',19: 't',20: 'u',21: 'v',22: 'w',23: 'x',24: 'y',25: 'z'}

    alphabet2 = {'a': 0,'b': 1,'c': 2,'d': 3,'e': 4,'f': 5,'g': 6,'h': 7,'i': 8,'j': 9,'k': 10,'l': 11,'m': 12,'n': 13,'o': 14,'p': 15,'q': 16,'r': 17,'s': 18,'t': 19,'u': 20,'v': 21,'w': 22,'x': 23,'y': 24, 'z': 25}

    let newString = ''
    for(let i = 0; i < s.length; i++){
      
        if(alphabet[alphabet2[s[i].toLowerCase()]]){
            let index = (alphabet2[s[i].toLowerCase()] + k) % 26
            let indexFirst = alphabet2[s[i].toLowerCase()]

            if(!(s[i]===alphabet[indexFirst])){
                newString += alphabet[index].toUpperCase()
            } else {
                newString += alphabet[index]
            }
        }  else {
            newString += s[i]
        }
    }
    return newString
}






function caesarCipher3(s, k) {
    // Write your code here
    alphabet = {0: 'a',1: 'b',2: 'c',3: 'd',4: 'e',5: 'f',6: 'g',7: 'h',8: 'i',9: 'j',10: 'k',11: 'l',12: 'm',13: 'n',14: 'o',15: 'p',16: 'q',17: 'r',18: 's',19: 't',20: 'u',21: 'v',22: 'w',23: 'x',24: 'y',25: 'z'}

    alphabet2 = {'a': 0,'b': 1,'c': 2,'d': 3,'e': 4,'f': 5,'g': 6,'h': 7,'i': 8,'j': 9,'k': 10,'l': 11,'m': 12,'n': 13,'o': 14,'p': 15,'q': 16,'r': 17,'s': 18,'t': 19,'u': 20,'v': 21,'w': 22,'x': 23,'y': 24, 'z': 25}

    let newString = ''
    for(let i = 0; i < s.length; i++){
      
        if(alphabet[alphabet2[s[i].toLowerCase()]]){
            let index = (alphabet2[s[i].toLowerCase()] + k) % 26
            let indexFirst = alphabet2[s[i].toLowerCase()]

            if(!(s[i]===alphabet[indexFirst])){
                newString += alphabet[index].toUpperCase()
            } else {
                newString += alphabet[index]
            }
        }  else {
            newString += s[i]
        }
    }
    return newString
}

function caesarCipherR(s, k) {
    // Write your code here
    const setAlph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    k = k % 26
    
    let caesarTxt = ''
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        const isUpper = char === s[i].toUpperCase()
        const lowerChar = char.toLowerCase()

        if(setAlph.includes(lowerChar)){
            const index = setAlph.indexOf(lowerChar)
            const newIndex = (index + k) % 26

            caesarTxt += isUpper ? setAlph[newIndex].toUpperCase() : setAlph[newIndex]
        } else {
            caesarTxt += char
        }
    }

    return caesarTxt

}

// Bffng-Qwvb  
// dCcAe  
console.log(caesarCipherR('Middle-Outz', 2))