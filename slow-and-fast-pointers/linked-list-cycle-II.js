import { ListNode } from "../In-place-linked-list/linked-list-reversal.js"; 

let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;


node4.next = node3;

var detectCycle = function(head) {
    if(!head) return null;
    let slow = head, fast = head;
    let isCycle = false;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            isCycle = true;
            break;
        }
    }

    if(isCycle){
        let ptr1 = head;
        let ptr2 = slow;
    
        while(ptr1 !== ptr2){
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
        return ptr1;
    }
    return null;

};

// [3,2,0,-4,3,2,0-4,3,2,0,-4]
// [3,2,0,-4,3,2,0-4,3,2,0,-4]
//           s
//                   f
//           1
//  2

// [3,2,0,-4,2,0-4,0,2,-4]
// [3,2,0,-4,2,0-4,0,2,-4]
//         s
//               f
//           1
//    2

// [3,2,0,-4,0-4,0-4]
// [3,2,0,-4,0-4,0-4]
//      s
//           f
//           1
//      2

// [3,2,0,-4-4,-4]
// [3,2,0,-4-4,-4,4]
//         s
//                f
//              1
//        2


const detectCycleII = (head) => {
    let slow = head;
    let fast = head;
    let isCycle = false;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            isCycle = true;
            break;
        }
    }

    if(!isCycle) return null;

    let p1 = slow;
    let p2 = head;

    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}

console.log(detectCycleII(node1));