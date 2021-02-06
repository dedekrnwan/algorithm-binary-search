module.exports = (arr, toFind) => {
    let mid = Math.floor((left + right) / 2);
    if (arr.length === 1 && arr[0] != toFind) {
        return -1;
    }
    if (toFind === arr[mid]) {
        return true;
    } else if (toFind < arr[mid]) {
        return this(n, arr.slice(0, mid));
    } else if (toFind > arr[mid]) {
        return this(toFind, arr.slice(mid));
    }
}
