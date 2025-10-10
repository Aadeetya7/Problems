/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 0) return ""

    let minLengthStr = strs[0].length
    for (let str of strs) {
        if (str.length < minLengthStr) minLengthStr = str.length
    }

    for (let i = 0; i < minLengthStr; i++) {
        let word = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== word) {
                return strs[0].slice(0, i)
            }
        }
    }
    return strs[0].slice(0, minLengthStr)

    // if (strs.length === 0) return ""

    // let minLength = strs[0].length;

    // for (let s of strs) {
    //     if (s.length < minLength) minLength = s.length
    // }

    // for (let i = 0; i < minLength; i++) {
    //     let word = strs[0][i];
    //     for (let j = 1; j < strs.length; j++) {
    //         if (strs[j][i] !== word) {
    //             return strs[0].slice(0, i)
    //         }
    //     }
    // }

    // return strs[0].slice(0, minLength)

};
