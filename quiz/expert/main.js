const data = require("./data")

const binarySearch = (arr, toFind) => {
    const restrucData = (dt) => {
        let result = []
        dt.forEach(item => {
            if (typeof toFind == "number" && typeof item == "number") {
                result.push(item)
            } else if (typeof toFind == "string" && typeof item == "string") {
                result.push(item.toUpperCase())
            } else if (typeof item == "object") {
                result = result.concat(restrucData(item))
            }
        })        
        if (typeof toFind == "number") {
            result.sort((a,b) => a-b)
        } else {
            result.sort()
        }
        return result
    }
    arr = restrucData(arr)

    let left = 0 
    let right = arr.length - 1
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

const main = (toFind) => {
    let resIndex = binarySearch(data, toFind)
    console.log(resIndex > -1 ? `Data ${toFind} terdapat pada sumber data` : "Data tidak di temukan")
}

main("BENEATH RUSH")
main(25)