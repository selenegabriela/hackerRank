// function bomberMan(n, grid) {
//     // There are actually 5 states: 0, 1, 2, 3 and X (bomb filled state)
//     // State-0 and State-1 only occurs one time at the beginning
//     // The rest loops between 2, 3, and X
//     //   - cagils
//     // STATES:
//     // sec 0 = STATE-0 initial state
//     // sec 1 = STATE-0 initial state
//     // sec 2 = STATE-X filled with bombs
//     // sec 3 = STATE-1 initial state bombs explode (fill others with bombs)
//     // sec 4 = STATE-X filled with bombs
//     // sec 5 = STATE-2 State-1 bombs explode (fill others with bombs)
//     // sec 6 = STATE-X filled with bombs
//     // sec 7 = STATE-3 State-2 bombs explode (fill others with bombs)
//     // sec 8 = STATE-X
//     // sec 9 = STATE-2
//     // sec 10= STATE-X
//     // sec 11= STATE-3
//     // sec 12= STATE-X

//     let setChar = (i, j, c) => grid[i] = grid[i].slice(0, j) + c + grid[i].slice(j+1)
    
//     let setOff = (i, j) => {
//         let x = [ [i-1, j], [i+1, j], [i, j-1], [i, j+1] ]
//         setChar(i, j, '_')
//         for (let [_i, _j] of x)
//             grid[_i] && grid[_i][_j] && (grid[_i][_j] !== 'O') && setChar(_i, _j, '_')
//     }

//     let detonate = (r) => {
//         if (r === 'X') return grid.map(s => 'O'.repeat(s.length))
//         while (r--) {
//             for (let i = 0; i < grid.length; i++)
//                 for (let j = 0; j < grid[0].length; j++)
//                     if (grid[i][j] === 'O') setOff(i, j)
//                     else if (grid[i][j] !== '_') setChar(i, j, 'X')
//             grid = grid.map(s => s.replace(/X/g, 'O').replace(/_/g, '.'))
//         }
//         return grid
//     }
    
//     let state = n < 2 ? 0 : n === 3 ? 1 : !(n % 2) ? 'X' : (((n-1)/2)%2 === 0) ? 2 : 3    
//     return detonate(state)
// }

// recursive explosion function
// @run - The number of times you want the function to run
function explosion(grid, run = 1) {
    
    // base case for recursion
    if (run === 0) return grid;
    
    // create 2d array filled with bombs
    let invert = new Array(grid.length).fill('O'.repeat(grid[0].length)).map(x=>x.split(''));
    
    // update 2d bomb array according to detonation logic
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 'O') {
          try {
            invert[i][j] !== undefined ? invert[i][j] = '.' : null
          } catch {
            null
          };
          try {
            invert[i + 1] !== undefined ? invert[i + 1][j] = '.' : null
          } catch {
            null
          };
          try {
            invert[i - 1] !== undefined ? invert[i - 1][j] = '.' : null
          } catch {
            null
          };
          try {
            invert[i][j + 1] !== undefined ? invert[i][j + 1] = '.' : null
          } catch {
            null
          };
          try {
            invert[i][j - 1] !== undefined ? invert[i][j - 1] = '.' : null
          } catch {
            null
          };
        }
      }
    }
    
    // recursion
    return explosion(invert.map(x => x.join('')), run - 1)
  }
  
  
  function bomberMan(n, grid) {
    // less than 2 seconds, nothing happens
    if (n < 2) return grid
    
    // seconds % 4 gives us the state:
      // 0, filled with bombs
      // 1, state after two explosions
      // 2, filled with bombs
      // 3, state after one explosion
    const state = n % 4;
    
    // 0|2, filled with bombs
    if (state === 0 || state === 2) {
      return grid.fill('O'.repeat(grid[0].length))
    }
    
    // 1, simulate two rounds of explosions
    if (state === 1) {
      return explosion(grid, 2);
    }
    
    // 3, simulate one round of explosion
    if (state === 3) {
      return explosion(grid, 1);
    }
  }

function bomberMan2(n,grid){
    console.log(grid);
    if(n < 2) return grid
    const state = n % 4

    if(state===0 || state===2){
        return grid.fill('O'.repeat(grid[0].length))
    }
    return grid
}

const grid = [
    ['O..O.'],
    ['..O..'],
    ['.OO..'],
]
console.log(bomberMan2(2,grid));