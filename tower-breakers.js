function towerBreakers(n, m) {
    // Write your code here
    
    if(n%2===0 || m===1) return 2
    else return 1

}


function towerBreakers(n, m) {
    // Write your code here
    
    const towers = n;
    const heigth = m;

    return towers%2===0 || heigth===1 ? 2 : 1

}

console.log(towerBreakers(100001,1));