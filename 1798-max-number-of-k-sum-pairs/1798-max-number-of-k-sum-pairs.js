/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let obj = {};
    let op = 0;
    for (let num of nums) {
        let complement = k - num
        if (obj[complement] > 0) {
            op++;
            obj[complement]--
        } else {
            obj[num] = (obj[num] || 0) + 1
        }
    }
    return op
};