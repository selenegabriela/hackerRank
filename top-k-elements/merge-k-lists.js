//[[1,4,5],[1,3,4],[2,6],[3,4,5],[5,6,7]]
// [][1,4,5]
// [1,4,5]
// orderedArray = [1,4,5]
// merging(orderedArray,nums[i])

var mergeKLists = function(lists) {
    const orderedArray = []

    return merge(orderedArray,lists)
};

const merge = (orderedArray,lists) => {
    for(let i = 0; i < lists.length; i++){
        orderedArray = mergingLists(orderedArray,lists[i]);
    }
    return orderedArray;
}

const mergingLists = (left,right) => {
    let r = 0, l = 0;
    const result = []

    while(l < left.length && r < right.length){
        if(left[l]<right[r]){
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value)
        if(this.size===0){
            this.size++
            return this.head = node;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    remove(){
        if(this.size===0) return null;
        const value = this.head.value;

        if(this.size===1) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
        return value;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(5);
linkedList1.append(7);
const linkedList2 = new LinkedList();
linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
linkedList2.append(4);
linkedList2.append(5);
const linkedList3 = new LinkedList();
linkedList3.append(3);
linkedList3.append(3);
linkedList3.append(3);
linkedList3.append(7);
linkedList3.append(8);
linkedList3.append(9);
const linkedList4 = new LinkedList();
linkedList4.append(2);
linkedList4.append(4);
linkedList4.append(5);
linkedList4.append(6);
linkedList4.append(7);
linkedList4.append(8);

// console.log(linkedList1.head.next.next);

const mergeKLinkedLists = (lists) => {
    if(lists.length===1) return lists[0]
    else if(lists.length===0) return new LinkedList()

    const left = mergeKLinkedLists(lists.slice(0,Math.floor(lists.length)/2))
    const right = mergeKLinkedLists(lists.slice(Math.floor(lists.length)/2))

    return merging(left,right);
}

const merging = (left,right) => {
    const mergedLists = new LinkedList();

    while(left.size || right.size){
        if(!right.head || left.head?.value < right.head.value){
            mergedLists.append(left.remove());
        } else if(!left.head || left.head?.value >= right.head.value){
            mergedLists.append(right.remove());
        }
    }
    return mergedLists;

}



// Definición del nodo de lista enlazada
// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// Función principal
// var mergeKLists = function(lists) {
//     if (!lists.length) return null;
//     return divideAndMerge(lists, 0, lists.length - 1);
// };

// // Divide las listas en mitades y las mergea recursivamente
// function divideAndMerge(lists, left, right) {
//     if (left === right) return lists[left]; // caso base: una sola lista
//     const mid = Math.floor((left + right) / 2);
//     const l1 = divideAndMerge(lists, left, mid);
//     const l2 = divideAndMerge(lists, mid + 1, right);
//     return mergeTwoLists(l1, l2);
// }

// // Une dos listas ordenadas (igual que el clásico "merge" de merge sort)
// function mergeTwoLists(l1, l2) {
//     const dummy = new ListNode(0); // nodo ficticio (no forma parte del resultado final)
//     let current = dummy;

//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }

//     // Conecta los nodos restantes
//     current.next = l1 || l2;

//     // Retorna la cabeza real (saltando el dummy)
//     return dummy.next;
// }








//      0         1            2             3
// [[1,2,5,7],[1,2,3,4,5],[3,3,3,7,8,9],[2,4,5,6,7,8]]
//    L
//                R
//    M
// L(arr,L=0,R=m=0)
// mergingFunc([1,2,5,7],[1,2,3,4,5])
// R(arr,L=M+1=1,R=1)
// L(arr,L=0,R=M=0)

// R(arr,L=M+1=2,R=3)

// [2,5,7],[3,4,5]
// {
//    val: 1,
//    next: {
//       val: 2,
//       next: {
    //       val: 5,
    //       next: {
    //
    //       }
//       }
//    }
//  }
// dummy = new Node(0)
// {value: 0, next:{val: 1, next{val:1,next{val:2,next{}}}}}
// current: dummy
// while(left && right) {
//      if(left.val < right.val){
//           curret.next = left
//           left = left.next
//       } else {
//            current.next = rigth;
//            right = right.next
//        }
//        current = current.next
//}


class ListNode {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

function buildList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

const list1 = buildList([1,2,5,7])
const list2 = buildList([1,2,3,4,5])
const list3 = buildList([3,3,3,7,8,9])
const list4 = buildList([2,4,5,6,7,8])
const list5 = buildList([4,9,10])



const mergeKListsInput = (lists) => {
    if(!lists.length) return null;

   return dividingLists(lists,0,lists.length-1)
}

const dividingLists = (lists,left,right) => {
    if(left===right) return lists[left];
    const middle = Math.floor((left+right)/2);
    const leftList = dividingLists(lists,left,middle);
    const rightList = dividingLists(lists,middle+1,right);

    return mergingLeftRightLists(leftList,rightList);
}

const mergingLeftRightLists = (leftList,rightList) => {
    let dummy = new ListNode(0);
    let current = dummy;

    while(leftList && rightList){
        if(leftList.val < rightList.val){
            current.next = leftList;
            leftList = leftList.next;
        } else {
            current.next = rightList;
            rightList = rightList.next;
        }
        current = current.next;
    }
    current.next = leftList || rightList;

    return dummy.next;
}
//      0          1              2                          3            4
//[[1,2,5,7],[1,2,3,4,5],     [3,3,3,7,8,9],              [2,4,5,6,7,8],[1,4,9,10]]
//    L
//                              R  
//                  M                                                                       
//                                    (first iteration)     
// M (L+R) / 2 = 2
// left (arr,L=0,R=M=2)
// 
//                                                  right (first iteration) (arr,L=M+1=3,R=4)
//         (Second iteration)
// M (L+R) / 2 = 1
// left (arr,L=0,R=M=1)
//                       right (arr,L=M+1=2,R=M=2) -> [3,3,3,7,8,9]
// M (L+R) / 2 = 0
// left (arr,L=0,R=M=0) -> [5,7]
                                 // right (arr,L=M+1=1,R=M=1) -> []
// list = [1,2,2,3,4,5,5,7]
// left && right:
    // left.val < right.val: 
    // else: 
// list [1]

const mergeKListsLast = (lists) => {

    if(!lists.length) return null;
    return divideAndConquer(lists,0,lists.length-1)
}

const divideAndConquer = (lists,l,r) => {
    if(l===r) return lists[l]
    const m = Math.floor((r+l)/2)
    const leftList = divideAndConquer(lists,l,m);
    const rightList = divideAndConquer(lists,m+1,r);

    return mergingBothLists(leftList,rightList);
}

const mergingBothLists = (leftList,rightList) => {
    const dummy = new Node(0);
    let current = dummy;

    while(leftList && rightList){
        if(leftList.val < rightList.val){
            current.next = leftList;
            leftList = leftList.next;
        } else {
            current.next = rightList;
            rightList = rightList.next;
        }
        current = current.next;
    }

    current.next = leftList || rightList;
    return dummy.next;
}

const mergeLIstsReviewII = (lists) => {

    if(!lists.length) return null;
    return devideLists(lists,0,lists.length-1)
}
// 0    1      2  3     4  5  6
//[l1  ,l2    ,l3,l4   ,l5,l6,l7]
const devideLists = (lists,l,r) => {
    if(l===r) return lists[l];
    const mid = Math.floor((l+r) / 2);
    const left = devideLists(lists,l,mid);
    const right = devideLists(lists,mid+1,r);
    return joinLists(left,right);
}

const joinLists = (left,right) => {
    const dummyNode = new ListNode(0);
    let current = dummyNode;

    while(left && right) {
        if(left.val < right.val){
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    current.next = left || right;
    return dummyNode.next;

}


//      0          1              2                          3            4
//[[1,2,5,7],[1,2,3,4,5],     [3,3,3,7,8,9],              [2,4,5,6,7,8],[1,4,9,10]]


// low = 0
// high = 4
// m 2 
// left(low,m)
// [1,2,5,7],[1,2,3,4,5],     [3,3,3,7,8,9],
// low = 0
// high = 2
// left(low,m)  
// right(m+1,high)
// [2,4,5,6,7,8],[1,4,9,10]




const mergeLIstsReviewIII = (lists,low=0,high=lists.length-1) => {
    if(low>=high) return lists[low];
    const middle = Math.floor((low+high)/2);

    const left = mergeLIstsReviewIII(lists,low,middle);
    const right = mergeLIstsReviewIII(lists,middle+1,high);

    return joiningLists(left,right);
}

const joiningLists = (left,right) => {
    const dummy = new Node(0);
    let current = dummy;

    while(left && right){
        if(left.val < right.val){
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    current.next = left || right;
    return dummy.next;
}



console.log(mergeLIstsReviewIII([list1,list2,list3,list4,list5]));