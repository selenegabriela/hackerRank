function gridChallenge(grid) {
    // Write your code here
    const grid2 = []
    let ordered = 'YES'
    for(let i = 0; i < grid.length; i++){
        grid2.push([])
        for(let j = 0; j < grid[i].length; j++){
            grid2[i].push(grid[i][j])
        }
    }

    console.log(grid2);

    for(let i = 0; i < grid2.length; i++){
        grid2[i].sort((a, b) => (a < b ? -1 : 1));
    }

    for(let i = 1; i < grid2.length; i++){
        for(let j = 0; j < grid2.length; j++){
            if(grid2[i][j] < grid2[i-1][j]) ordered = 'NO'
        }
    }

    return ordered

}

function gridChallenge2(grid) {
    // Write your code here
    let ordered = 'YES'
    for(let i = 0; i < grid.length; i++){
        const txt = grid[i]
        grid[i] = []
        for(let j = 0; j < txt.length; j++){
            grid[i].push(txt[j])
        }
    }


    for(let i = 0; i < grid.length; i++){
        grid[i].sort((a, b) => (a < b ? -1 : 1));
    }

    for(let i = 1; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            if(grid[i][j] < grid[i-1][j]) ordered = 'NO'
        }
    }
    return 'YES'
    

}

function gridChallengeL(grid) {
    // Write your code here
        // Write your code here
    for(let i = 0; i < grid.length; i++){
        const txt = grid[i]
        grid[i] = txt.split('')
    }

    for(let i = 0; i < grid.length; i++){
        grid[i].sort((a, b) => (a < b ? -1 : 1));
    }

    for(let i = 0; i < grid[0].length; i++){
        for(let j = 1; j < grid.length; j++){
            if(grid[j][i] < grid[j-1][i]) return 'NO'
        }
    }

    return 'YES'

}

function gridChallenge3(grid) {
    // Write your code here
    for(let i = 0; i < grid.length; i++){
        const txt = grid[i]
        grid[i] = txt.split('').sort((a, b) => (a < b ? -1 : 1))
    }

    for(let i = 0; i < grid[0].length; i++){
        for(let j = 1; j < grid.length; j++){
            if(grid[j][i] < grid[j-1][i]) return 'NO'
        }
    }

    return 'YES'

}




function gridChallengeR(grid) {
    // Write your code here
    for(let i =  0; i < grid.length; i++){
        grid[i] = grid[i].split('').sort((a,b) => a < b ? -1 : 1)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 1; j < grid.length; j++) {
            let item2 = grid[j][i]
            let item1 = grid[j-1][i]
            if(item2 < item1) return 'NO'            
        }        
    }

    return 'YES'

}




console.log(gridChallengeR(['zcb','dae','efg']))