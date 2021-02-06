const data = require("./data")

const binarySearch = (data, toFind) => {
    const a = data[0]
    const b = data[1] - a
    const result = ((toFind-((b*-1)+a))/b) - 1
    return result
}

const main = () => {
    const toFind = 15
    const resIndex = binarySearch(data, toFind)
    console.log(resIndex > -1 ? `Data ${toFind} ada di index: ${resIndex}` : "Data tidak di temukan")
}

main()