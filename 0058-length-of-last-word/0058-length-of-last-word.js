/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // return s.trim().split(" ").pop().length;


    //    More optimal here array is not created so less space complexity 
    let i = s.length - 1;
    let length = 0;

    while (i >= 0 && s[i] === " ") i--;

    while (i >= 0 && s[i] !== " ") {
        length++
        i--
    }

    return length
};