import { buildList, ListNode } from "./linked-list-reversal.js";

const list = buildList([1,2,3,4,5,6,7,8,9,10,11])

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7      k = 2

// current = head 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
// while current 
//      counter === k;

// rest = current.next
// current.next = null

//current = head 1 -> 2 -> null
// prev = null;
// while(current.next)
//   next = curren.next = 2 -> null
//   current.next = prev = 1 -> null
//   prev = current = 1 -> null
//   current = next 2 -> null
    // outside
//   next = curren.next = null
//   current.next = prev = 2 ->  1 -> null
//   prev = current = 2 -> 1 -> null
//   current = next null
//   
//   current.next = func(rest,k)

// var reverseKGroup = function(head, k) {
//     if(!head) return null

//     let current = head;
//     let counter = 0

//     while(current && counter < k-1){
//         counter++;
//         current = current.next;
//     }

//     if(!current && counter===1) return head;
//     const pending = current?.next || null;

//     if(pending) current.next = null;
//     current = head;
//     let prev = null;

//     while(current){
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next; 
//     }
//     head = prev;
//     current = head;
//     counter = 0;
//     while(current && counter < k-1){
//         counter++;
//         current = current.next;
//     }

//     if(current) current.next = reverseKGroup(pending,k)
//     return head;
// };

const findingKNode = (current,k) => {
    let counter = 0;
    while(current && counter < k-1){
        current = current.next;
        counter++; // 2
    }
    return current;
}
var reverseKGroup = function(head, k) {
   let current = head; // 1
   
   // k = 3
   //counter = 2
   //              c     
   // 10 -> 11 -> null
    current = findingKNode(current,k)

    if(!current) return head;

    const second = current.next;
    current.next = null;
    current = head;
    let prev = null;

    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
    current = head;

    current = findingKNode(current,k)
    current.next = reverseKGroup(second,k)
    return head;
};
//                          p
//                          c
//                                     n.
// 2 -> 1 -> null 3 -> 2 -> 1 -> null null        4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> null   k = 3
// 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 9 -> 8 -> 9 -> 10 -> 11
// pendingGroup = 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11
// firstGroup = 1 -> 2 -> 3 
// firstGroup = 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 9 -> 8 -> 7 -> 10 -> 11 
//pendingGroup = 7 -> 8 -> 9 -> 10 -> 11
// firstGRoup = 4 -> 5 -> 6
// firstGRoup = 6 -> 5 -> 4 -> 9 -> 8 -> 7 -> 10 -> 11 
// pendingGroup = 10 -> 11
// firstGroup = 7 -> 8 -> 9 
// firstGroup = 9 -> 8 -> 7 -> 10 -> 11 
// return head = 10 -> 11


const printingList = (list) => {
    const listArr = [];

    let current = list;

    while(current){
        listArr.push(current.val);
        current = current.next;
    }
    return listArr;
}











const reverseKGroupReviewII = (head,k) => {
    if(!head || k===1) return head;
    let current = head;
    let counter = 0;
// 1 2 3 4
//   c
    while(current && counter < k-1){
        current = current.next;
        counter++; //1
    }

    if(!current) return head;

    let second = current.next;
    current.next = null;

    current = head;

    let prev = null;
    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
    current = head;
    counter = 0;

    while(current && counter < k-1){
        current = current.next;
        counter++;
    }
    current.next = reverseKGroupReviewII(second,k)
    return head;
}

const findingCurrPart = (head,k) => {
    let current = head;
    let counter = 0;
    // 1 - 2 - 3 - 4 - 5 - 6
    //0
    while(counter < k-1){
        current = current.next;
        counter++;
    }
    return current;
}

const reverseKGroupReviewIII = (head,k) => {

    let current = findingCurrPart(head,k);
    
    if(!current) return head;

    const pending = current.next;
    current.next = null;

    current = head;
    let prev = null;

    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    current = findingCurrPart(head,k);
    if(current) current.next = reverseKGroupReviewIII(pending,k)
    
    return head;
}

console.log(printingList(reverseKGroupReviewIII(list,2)));
