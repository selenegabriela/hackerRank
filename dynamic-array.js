function dynamicArray(n, queries) {
    // Write your code here
    const arr = []
    let lastAnswer = 0

    for(let i = 0; i < n; i++){
        arr[i] = []
    }

    for(let i = 0; i < queries.length; i++){
        const queryType = queries[i][0]
        const x = queries[i][1]
        const y = queries[i][2]
        const idx = ((x^lastAnswer) % n)

        if(queryType===1) {
            arr[idx].push(y)
        } else {
            lastAnswer = arr[idx][y % arr[idx].length]
            console.log(lastAnswer);
        }
    }
}

function dynamicArray2(n, queries) {
    let results = [];
    let lastAnswer = 0;
    
    // make an array that contains n number of array
    const arr = new Array(n);
    for(let i=0; i<arr.length; i++) {
        arr[i] = new Array();
    }
    
    queries.forEach( q => {
        let [qType, x , y] = q;
        
        let idx = (x ^ lastAnswer) % n;
        
        if(qType === 1) { 
            arr[idx].push(y);
        } else {
            lastAnswer = arr[idx][y % arr[idx].length];
            
            results.push(lastAnswer);
        }
    });
    
    return results;
}

function dynamicArrayR(n, queries) {
    const twoDimArr = new Array(n)
    let lastAnswer = 0

    for(let i = 0; i < n; i++){
        twoDimArr[i] = new Array()
    }

    for(let i = 0; i < queries.length; i++){
        let idx = (i^lastAnswer) % n
        twoDimArr[idx] = idx
    }

    return twoDimArr
}

console.log(dynamicArray(2,[ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]));