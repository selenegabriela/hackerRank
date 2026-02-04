/*
Dinoco is implementing a new feature to suggest purchases based on your friends.
Create a function that returns the purchases made by your friends,
excluding your own purchases.
Return the list in descending order.
Use the following methods:

getFriendsList: returns the list of your friends.
getPurchases: returns the list of purchases made by a user.

Example:
Your purchases: "A", "V", "M", "X"
friend = ['1','2','3']
Friends' purchases:
{  "1":"A", "C", "D", "F"
  "2":"C", "D", "E", "X"
  "3": "C", "F", "V"}
Result: ['C', 'D', 'F', 'E'] or ['C', 'D', 'E', 'F'] 


*/


const recommendationPurchases = (id) => {
    const freqPurchases = {}
    let maxFreq = 0;
    const myPurchases = getPurchases(id)
    const setMyPurchases = new Set(myPurchases)

    for(let friendId of getFriendList(id)){
        for(let purchase of getPurchases(friendId)){
            if(!setMyPurchases.has(purchase)) {
                freqPurchases[purchase] = !freqPurchases[purchase] ? 1 : freqPurchases[purchase] + 1
                maxFreq = Math.max(maxFreq, freqPurchases[purchase])
            }
        }
    }

    const reversedBucketFreq = Array.from({length: maxFreq+1}, () => [])

    for(let [key,value] of Object.entries(freqPurchases)){
        reversedBucketFreq[value].push(key)
    }

    const decendingOrderPurchases = []
    for(let i = reversedBucketFreq.length-1; i >= 1; i--){
        for(let j = 0; j < reversedBucketFreq[i].length; j++){
            console.log(reversedBucketFreq[i][j]);
            decendingOrderPurchases.push(reversedBucketFreq[i][j])
        }
    }

    return decendingOrderPurchases;


}





// const recommendationPurchasesII = (id) => {
//     const recommendations = []
//     const myFriends = getFriendList(id);
//     const myPurchases = getPurchases(id);
//     const myPurchasesSet = new Set(myPurchases);
//     let mostFreq = 0;
//     const freqPurchases = {};


//     for(let idFriend of myFriends){
//         for(let friendPurchase of getPurchases(idFriend)){
//             if(!myPurchasesSet.has(friendPurchase)){
//                 freqPurchases[friendPurchase] = freqPurchases[friendPurchase] ? freqPurchases[friendPurchase] + 1 : 1;
//                 mostFreq = Math.max(mostFreq,freqPurchases[friendPurchase])
//             }
//         }
//     }
    
//     const bucket = Array.from({length: mostFreq+1}, () => [])

//     for(let [key,value] of Object.entries(freqPurchases)){
//         bucket[value].push(key);
//     }

//     for(let i = bucket.length-1; i > 0; i--){
//         for(let j = 0; j < bucket[i].length; j++){
//             recommendations.push(bucket[i][j]);
//         }
//     }
//     return recommendations;
// }





const getFriendList = (id) => {
    const friendList = {
        "4": ['1','2','3'],
        "5": ['1','2','3','6']
    }

    return friendList[id]
}

const getPurchases = (id) => {
    const purchases = {
        "4": ["A", "V", "M", "X"],
        "1": ["A", "C", "D", "F"],
        "2": ["C", "D", "E", "X"],
        "3": ["C", "F", "V"],
    } 
    return purchases[id];
}



const recommendationPurchasesIII = (id) => {
    const myPurchases = getPurchases(id);
    const mySetPurchases = new Set(myPurchases)
    const myFriends = getFriendList(id);
    const mapFreqPurchases = {}
    let mostFreq = 0;

    for(let friendId of myFriends){
        for(let purchase of getPurchases(friendId)){
            if(!mySetPurchases.has(purchase)){
                mapFreqPurchases[purchase] = mapFreqPurchases[purchase] ? mapFreqPurchases[purchase] + 1 : 1;
                mostFreq = Math.max(mostFreq,mapFreqPurchases[purchase]);
            }
        }
    }


    const buckets = Array.from({length: mostFreq+1},()=>[]);

    for(let [key,value] of Object.entries(mapFreqPurchases)){
        buckets[value].push(key);
    }

    const orderedResults = []
    for(let i = buckets.length-1; i > 0; i--){
        for(let j = 0; j < buckets[i].length; j++){
            orderedResults.push(buckets[i][j]);
        }
    }

    return orderedResults;
}

const recommendationPurchasesIV = (id) => {
    const myPurchases = getPurchases(id);
    const myPurchasesMap = new Set(myPurchases);
    const myFriendsId = getFriendList(id);
    const mapFreqPurchases = {};
    let freq = 0;

    const results = [];

    for(let friendId of myFriendsId){
        for(let purchase of getPurchases(friendId)){
            if(!myPurchasesMap.has(purchase)){
                mapFreqPurchases[purchase] = mapFreqPurchases[purchase] ? mapFreqPurchases[purchase] + 1: 1;
                freq = Math.max(freq, mapFreqPurchases[purchase]);
            }
        }
    }


    const buckets = Array.from({length: freq + 1}, () => []);

    for(let [key,value] of Object.entries(mapFreqPurchases)){
        buckets[value].push(key);
    }
    
    for(let i = buckets.length - 1; i > 0; i--){
        for(let j = 0; j < buckets[i].length; j++){
            results.push(buckets[i][j]);
        }
    }

    return results;

}

console.log(recommendationPurchasesIII(4));





















// const getFriendsList = (id) => {
//     const objFriends = {
//         "4": ['1','2','3']
//     }
//     return objFriends[id]
// }

// const getPurchases = (id) => {
//     const purchases = {
//         "1": ["A", "C", "D", "F"],
//         "2": ["C", "D", "E", "X"],
//         "3": ["C", "F", "V"],
//         "4": ["A", "V", "M", "X"],
//     }
//     return purchases[id]
// }

// const purchasesDescendingOrder = (id) => {
//     const myFriendsList = getFriendsList(id)
//     const myPurchases = new Set(getPurchases(id))
//     const freqPurchases = {}
//     let maxFreq = 0
//     const results = []

//     for(let myFriendId of myFriendsList){
//         for(let purchase of getPurchases(myFriendId)){
//             if(!myPurchases.has(purchase)){
//                 freqPurchases[purchase] = freqPurchases[purchase] ? freqPurchases[purchase] + 1 : 1
//                 maxFreq = Math.max(maxFreq, freqPurchases[purchase])
//             }
//         }
//     }

// //   {
// //    C: 3,
// //    D: 2,
// //    F: 2,
// //    E: 1,
// //   }

// // Bucket sort()

//     const bucketsSorted = Array.from({length: maxFreq+1}, () => [])

//     for(let [key,value] of Object.entries(freqPurchases)){
//         bucketsSorted[value].push(key)
//     }

//     for(let i = bucketsSorted.length-1; i >= 0; i--){
//         for(let j = 0; j < bucketsSorted[i].length; j++){
//             results.push(bucketsSorted[i][j])
//         }
//     }

//     return results


// }

// console.log(purchasesDescendingOrder(4));
















































// let myId = '4'
// let myFriendsIds = getFriendsList(myId)
// let myPurchases = getPurchases(myId)
// let maxFreq = 0


// const purchasesDescending = () => {
//     const results = []
//     const myPurchasesFriends = []
//     const mySetPurchases = new Set(myPurchases)
//     const purchasesFreq = {}
//     for(let id of myFriendsIds){
//         const myPurchasesFriend = getPurchases(id)
//         for(let myPurchaseFriend of myPurchasesFriend){
//             myPurchasesFriends.push(myPurchaseFriend)
//         }

//     }

//     for(let purchase of myPurchasesFriends){
//         if(!mySetPurchases.has(purchase)){
//             if(!purchasesFreq[purchase]) {
//                 purchasesFreq[purchase] = 1
//             } else {
//                 purchasesFreq[purchase] = purchasesFreq[purchase] +1
//             }
//             maxFreq = Math.max(maxFreq, purchasesFreq[purchase])
//         }
        
//     }
//     const bucketArr = Array.from({length: maxFreq+1}, () => [])

//     for(let key in purchasesFreq){
//         bucketArr[purchasesFreq[key]].push(key);
//     }

//     for(let i = bucketArr.length-1; i >= 0; i--){
//         for(let j = 0; j < bucketArr[i].length; j++){
//             results.push(bucketArr[i][j])
//         }
//     }


// return results;
// }

//console.log(purchasesDescending())