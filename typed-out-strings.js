// sele#ne
//   12
// string1 = selne
// counterHash = 2
// if 1 === 2 
// selee##ne
//      12
// string2 = sele

//

const iterateString = (str) => {
    let outStr = '';

    for(let i = 0; i < str.length; i++){
        if(str[i] != '#'){
            if(str[i+1] != '#'){
                outStr += str[i]
            }

        } else {
            if(str[i]===str[i+1]){
                outStr = outStr.slice(0,-1)
            }
        }
    }
    return outStr
}
const iterateString2 = (str) => {
    let outStr = '';

    for(let i = 0; i < str.length; i++){
        if(str[i] === '#'){
            outStr = outStr.slice(0,-1)
        } else {
            outStr += str[i]
        }
    }
    return outStr
}



const typedOutString = (str1,str2) => {

    const outStr1 = iterateString2(str1)
    const outStr2 = iterateString2(str2)

    return outStr1===outStr2
}

const iterateStringStack = (str) => {
const stack = []

    for(let i = 0; i < str.length; i++){
        if(str[i] !== '#'){
            stack.push(str[i])
        } else {
            stack.pop()
        }
    }
    return stack;
}


const typedOutStack = (str1,str2) => {

    const outArr1 = iterateString2(str1)
    const outArr2 = iterateString2(str2)

    if (outArr1.length !== outArr2.length) return false;

    for(let i = 0; i < outArr1.length; i++){
        if(outArr1[i] !== outArr2[i]){
            return false
        }
    }
    return true
}

//console.log(typedOutString('a###B','b'));

const typedOutMemoryOn = (str1,str2) => {


    let i = str1.length-1
    let j = str2.length-1
    while(i >= 0 || j >= 0){

        if(str1[i] === '#' || str2[j] === '#'){
            if(str1[i]==='#'){
                let backCount = 2
                while(backCount > 0){
                    i--
                    backCount--
                    if(str1[i]==='#'){
                        backCount += 2
                    }
                }
            }
            if(str2[j]==='#'){
                let backCount = 2
                while(backCount > 0){
                    j--
                    backCount--
                    if(str2[j]==='#'){
                        backCount += 2
                    }
                }
            }
        }
        if(str1[i]!==str2[j]) return false
        i--
        j--
    }
    return true
}

console.log(typedOutMemoryOn('ab#cc##d','abzz###d'));