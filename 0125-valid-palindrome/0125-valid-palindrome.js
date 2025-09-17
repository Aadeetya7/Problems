/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let filytered = ""
    for (let char of s) {
        if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9")) {
            filytered += char.toLowerCase();
        }
    }

    return filytered === filytered.split("").reverse().join("")
};