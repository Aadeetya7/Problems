/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]
        }
        else {
            map[num] = i;
        }
    }
}

    //  sorting and finding(using the two pointers)brute force approach

    // for(let i = 0 ; i < nums.length ; i++){
    //     for(let j = i + 1 ; j < nums.length ; j++){
    //            if(nums[i] + nums[j] === target){
    //             return [i , j]
    //            }
    //     }
    // }
