var groupAnagrams = function(strs) {
    const map = new Map();

    for(let i = 0; i < strs.length; i++){
        
        const key = strs[i].split("").sort().join("");

        if(!map.get(key)) map.set(key,[]);
        map.get(key).push(strs[i]);
    }

    return Array.from(map.values());
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
