const reverseStr = (str) => {
    const reversed = reversedFunc(str,'')
    return reversed
}

const reversedFunc = (str,reversed) => {
    const char = str[str.length-1]
    str = str.slice(0,-1)
    if(char){
        reversed += char
        return reversedFunc(str,reversed)
    }
    return reversed
}

const reverseStr2 = (str) => {
    if (str === '') return '';
    return reverseStr2(str.slice(1)) + str[0];
}

console.log(reverseStr2('hola')); // 'aloh'
//console.log(reverseStr('hola'));


const isPalindrom = (str) => {
    let arr = []
    
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            arr.push(str[i])
        }
    }
    const isItPalindrom = isPalindromFunc(arr)
    return isItPalindrom
}

const isPalindromFunc = (arr) => {
    const firstChar = arr.shift()
    const lastChar = arr.pop()

    if(firstChar && lastChar){
        if(firstChar !== lastChar){
            return false
        } else {
            return isPalindromFunc(arr)
        }
    }
    return true;
}

//console.log(isPalindrom('anita lava la tina'));

const isPalindromCool = (str) => {
    str = str.replace(/\s/g, '').toLowerCase()

    const helper = (str, indexFirst, indexLast) => {
        if(indexFirst >= indexLast) return true
        if(str[indexFirst] !== str[indexLast]) return false
        return helper(str, indexFirst+1, indexLast-1)
    }

    return helper(str, 0, str.length-1)
}

//console.log(isPalindromCool('Anita lavas la tina'))