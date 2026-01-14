const longestConsecutive = (nums) => {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // Solo iniciar secuencia si no existe num - 1
        if (!set.has(num - 1)) {
            let length = 1;
            let next = num + 1;

            while (set.has(next)) {
                length++;
                next++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};

const longestConsecutiveIII = (nums) => {
    const set = new Set(nums);
    let longest = 0;

    for(let num of set){
        if(!set.has(num-1)){
            let size = 1;
            let next = num + 1;

            while(set.has(next)){
                size++;
                next++;
            }
        longest = Math.max(longest,size);
        }
    }
    return longest;
}


console.log(longestConsecutiveIII([100,4,200,1,3,2]));
