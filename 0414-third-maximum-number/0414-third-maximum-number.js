/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    // Recursion
    // function helper(index, distinctSet) {
    //     if (index === nums.length) {
    //         let sorted = Array.from(distinctSet).sort((a, b) => b - a)
    //         return sorted.length >= 3 ? sorted[2] : sorted[0];
    //     }
    //     distinctSet.add(nums[index]);

    //     return helper(index + 1, distinctSet)
    // }

    // return helper(0, new Set())
    
    // Optimal Sol
    let first = null, second = null, third = null;


    for (let num of nums) {
        if (num === first || num === second || num === third) {
            continue;
        }

        if (first === null || num > first) {
            third = second;
            second = first;
            first = num;
        }
        else if (second === null || num > second) {
            third = second;
            second = num
        }
        else if (third === null || num > third) {
            third = num;
        }
    }

    return third === null ? first : third;


    // // Brute Force
    // function findMax(nums) {
    // // Remove duplicates using Set
    // let distinct = [...new Set(nums)];
    
    // // Sort in descending order
    // distinct.sort((a, b) => b - a);
    
    // // If less than 3 distinct numbers, return the max
    // if (distinct.length < 3) {
    //     return distinct[0];
    // }
    
    // // Return third maximum
    // return distinct[2];
// }
};