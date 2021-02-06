const iterativeBinarySearch = require("./iterative")
const recuresiveBinarySearch = require("./iterative")

const main = () => {
    //int 
    let data = [3,5,8,9,10,12,14,16,19,21,22,25,26,27,31,50]
    let toFind = 31
    let resIndex = iterativeBinarySearch(data, toFind)
    console.log(resIndex > -1 ? `Data ${toFind} ada di index: ${resIndex}` : "Data tidak di temukan")

    //string
    data = [
        "ACADEMY DINOSAUR",
        "ACE GOLDFINGER",
        "ADAPTATION HOLES",
        "AFFAIR PREJUDICE",
        "BENEATH RUSH",
        
        "BERETS AGENT",
        "BETRAYED REAR",
        "BEVERLY OUTLAW",
        "BIKINI BORROWERS",
        "YENTL IDAHO",
        
        "YOUNG LANGUAGE",
        "YOUTH KICK",
        "ZHIVAGO CORE",
        "ZOOLANDER FICTION",
        "ZORRO ARK"
    ];
    toFind = "YENTL IDAHO"
    resIndex = recuresiveBinarySearch(data, toFind)
    console.log(resIndex > -1 ? `Data ${toFind} ada di index: ${resIndex}` : "Data tidak di temukan")
}

main()