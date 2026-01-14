export class ListNode {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

// [1,2,3,4,5]
/* 
{   
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                 val: 5,
                 next: null,
                }
            }
        }
    }
}

prev = null
current = head [1,2,3,4,5,null]

next = current.next [2,3,4,5,null]
current.next = prev [1,null]
prev = current [1,null]
current = next [2,3,4,5,null]

next = current.next [3,4,5,null]
current.next = prev [2,1,null]
prev = current [2,1,null]
current = next [3,4,5,null]

next = current.next [4,5,null]
current.next = prev [3,2,1,null]
prev = current [3,2,1,null]
current = next [4,5,null]

next = current.next [5,null]
current.next = prev [4,3,2,1,null]
prev = current [4,3,2,1,null]
current = next [5,null]

next = current.next [null]
current.next = prev [5,4,3,2,1,null]
prev = current [5,4,3,2,1,null]
current = next [null]

[1,2,3,4,5]

1 -> 2 -> 3 -> 4 -> 5

prev = null
current = 1 -> 2 -> 3 -> 4 -> 5

while(current)
    next = current.next = null
    current.next = prev = 5 -> 4 -> 3 -> 2 -> 1 -> null
    prev = current = 5 -> 4 -> 3 -> 2 -> 1 -> null
    current = next null


*/

export function buildList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

const list1 = buildList([1,2,3,4,5])

// 

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};












const reverseListReviewII = (head) => {

    let prev = null;
    let current = head;

    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

const reverseListReviewIII = (head) => {
    let current = head;
    let prev = null;

    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

//console.log(reverseListReviewIII(list1));