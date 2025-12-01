/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Optimal
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;

    }
    return true
    function isAlphanumeric(char) {
        return ((char >= "a" && char <= "z")
            || (char >= "A" && char <= "Z")
            || (char >= "0" && char <= "9"))
    }




    // BRUTE
    // let filytered = ""
    // for (let char of s) {
    //     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9")) {
    //         filytered += char.toLowerCase();
    //     }
    // }

    // return filytered === filytered.split("").reverse().join("")
};