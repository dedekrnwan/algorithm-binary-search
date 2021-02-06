module.exports = (arr, toFind) => {
    let left = 0 
    let right = arr.length - 1

    if (arr.length === 1 && arr[0] != toFind) {
        return -1;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] == toFind) {
            return mid
        }else if(toFind < arr[mid]) { 
            right = mid-1
        }else {
            left = mid+1
        }
    }
    return -1
}
