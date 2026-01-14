const binarySearch = (arr,num) => {

    let mid = Math.floor(arr.length / 2)

    while(num >= arr[mid]){
        if(num===arr[mid]){
            return true
        } else {
            mid = arr.length - (mid/2)
        }
    }
}