/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // let groups = {}
    // for(let str of strs ){
    //     let sorted = str.split("").sort().join("")

    //     if(!groups[sorted]){
    //         groups[sorted] = []
    //     }

    //     groups[sorted].push(str)
    // }

    // return Object.values(groups)

    const map = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");

        if (!map.has(sorted)) {
            map.set(sorted, [])
        }

        map.get(sorted).push(str)

    }
    return Array.from(map.values())

};