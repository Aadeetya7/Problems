/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return 0;

    return  x === +x.toString().split("").reverse().join("")
};