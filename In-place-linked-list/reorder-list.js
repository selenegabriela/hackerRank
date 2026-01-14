import { buildList, ListNode } from "./linked-list-reversal.js";

const list = buildList([1,2,3,4,5,6])

/* 
1 -> 5 -> 2 -> 4 -> 3 -> null
1 -> 2 -> 3 -> 4 -> 5 -> null

half = 3
prev = null
current = 4 -> 5 -> null

next = current.next = null
current.next = prev = 5 -> 4 -> null
prev = current = 5 -> 4 -> null
current = next = null

prev = 5 -> 4 -> null

dummy = NodeList(0)
current = head
current && prev
dummy.next = current 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
dummy.next = current.val
            
1 -> 2 -> 3          4 -> 5 -> null
                     5 -> 4 -> null
1 -> 5 -> 2 -> 4 -> 3 -> null
size = 5
half = 3


*/

var reorderList = function(head) {
 let slow = head, fast = head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null;
    let prev = null

    while(second){
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    second = prev;
    let first = head;

    while(second){
        let nextFirst = first.next;
        let nextSecond = second.next;

        first.next = second;
        second.next = nextFirst;

        first = nextFirst;
        second = nextSecond;
    }
    return head;
}

// 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 12
// 1 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 23

// 1 -> 6 -> 2 -> 5 -> 3 -> 4
// 1 -> 2 -> 3 -> 4 -> 5 -> 6

// 1 -> 2 -> 3
// 6 -> 5 -> 4
// 1 -> 6 -> 2 -> 5 -> 3 -> 4

// slow = head = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// fast = head = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

// while(fast.next && fast.next.next)
    // slow = slow.next = 2 -> 3 -> 4 -> 5 -> 6 -> null
    // fast = fast.next.next = 3 -> 4 -> 5 -> 6 -> null

// slow = slow.next = 3 -> 4 -> 5 -> 6 -> null
// fast = fast.next.next = 5 -> 6 -> null

// second = slow.next = 4 -> 5 -> 6 -> null   ( // head = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null)
// slow.next = null = 3 -> null               (// head = 1 -> 2 -> 3 -> null)

// prev = null;

// while (second)
    // next = second.next; 5 -> 6 -> null 
    // second.next = prev = 4 -> null
    // prev = second = 4 -> null
    // second = next 5 -> 6 -> null 

    // next = second.next; 6 -> null 
    // second.next = prev = 5 -> 4 -> null
    // prev = second = 5 -> 4 -> null
    // second = next 6 -> null 

    // next = second.next; null 
    // second.next = prev = 6 -> 5 -> 4 -> null
    // prev = second = 6 -> 5 -> 4 -> null
    // second = next null

// head = 1 -> 2 -> 3 -> null
// first = head = 1 -> 2 -> 3 -> null
// second = prev = 6 -> 5 -> 4 -> null

// while(second)
    // temp1 = first.next 2 -> 3 -> null
    // temp2 = first.next 5 -> 4 -> null
    // firs.next = second  (head = 1 -> 6 -> 5 -> 4 -> null)
    // second.next = temp1 (head = 1 -> 6 -> 2 -> 3 -> null)
    // first = temp1 = 2 -> 3 -> null
    // second = temp2 = 5 -> 4 -> null

    // temp1 = first.next 3 -> null
    // temp2 = first.next 4 -> null
    // firs.next = second  (head = 1 -> 6 -> 2 -> 5 -> 4 -> null)
    // second.next = temp1 (head = 1 -> 6 -> 2 -> 5 -> 3 -> null)
    // first = temp1 = 3 -> null
    // second = temp2 = 4 -> null

    // temp1 = first.next null
    // temp2 = first.next null
    // firs.next = second  (head = 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null)
    // second.next = temp1 (head = 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null)
    // first = temp1 = null
    // second = temp2 = null

// 


const reorderListReviewII = (head) => {

    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null; 

    let prev = null;

    while(second){
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    second = prev;

    let current = head;
    while(second){
        let aux1 = current.next;
        let aux2 = second.next;

        current.next = second;
        second.next = aux1;

        current = aux1;
        second = aux2;
    }
    return head;
}


// 1 -> 2 -> 3 
// 6 -> 5 -> 4
// 1 -> 6 -> 2 -> 5 -> 3 -> 4

const reorderListReviewIII = (head) => {

    let slow = head;
    let fast = head;

     while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
     }

     let second = slow.next;
     slow.next = null;

     let prev = null;
     while(second){
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
     }

     second = prev;
     let first = head;

     while(second){

        let curr1 = first.next;
        let curr2 = second.next;

        first.next = second;
        second.next = curr1;

        first = curr1;
        second = curr2;

     }

     return head;

}

console.log(reorderListReviewIII(list));