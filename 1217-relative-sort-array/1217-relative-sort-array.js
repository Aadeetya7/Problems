/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {


    // Optimal
    let count = {};

    for (let num of arr1) {
        count[num] = (count[num] || 0) + 1;
    }

    let result = [];
    for (let key of arr2) {
        for (let i = 0; i < count[key]; i++) {
            result.push(key)
        }
        delete count[key]
    }

    let leftovers = [];

    for (let num in count) {
        let key = Number(num);
        for (let i = 0; i < count[num]; i++) {
            leftovers.push(key)
        }
    }

    leftovers.sort((a, b) => a - b);

    result = result.concat(leftovers);

    return result;


    // Recursion This could be more optimized for now it is giving time limit excedded error
    //     function helper(remainingArr1, remainingArr2, result) {
    //         if (arr2.length === 0) {
    //             return result.concat(remainingArr1.sort((a, b)=> a - b));
    //         }

    // let current = remainingArr2[0];

    // let matching = remainingArr1.filter((item) => item === current);
    // let remaining = remainingArr1.filter((item) => item != current);

    // return helper(remaining, remainingArr2.slice(1) , result.concat(matching));

    //     }

    // return helper(arr1, arr2, [])








    // Brute Force 
    //   let result = [];
    //    for(let i = 0 ; i < arr2.length ; i++){
    //     for(let j = 0 ; j < arr1.length ; j++){
    //         if(arr2[i] === arr1[j]){
    //             result.push(arr2[i])
    //         }
    //     }
    //    }
    //    let leftover = [];
    //    for(let i = 0 ; i < arr1.length ; i++){
    //     if(!arr2.includes(arr1[i])){
    //         leftover.push(arr1[i])
    //     }
    //    }
    //    leftover.sort((a,b)=> a - b);
    //    result = result.concat(leftover)
    //    return result
};
