/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let first = 0
    let last = s.length - 1;
    let temp;

    while(first < last){
        temp = s[first];
        s[first] = s[last];
        s[last] = temp
        first++
        last--
    }
    return s
};