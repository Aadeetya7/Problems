/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    // OPtimal 
    let object = {};
    for(let a of magazine){
        object[a] = (object[a] || 0) + 1;
    }

    for(let b of ransomNote){
        if(!object[b]){
            return false;
        }
        object[b]--;
    }
    return true

    // BRUTE FORCE 
    // ransomNote = ransomNote.split("");
    // magazine = magazine.split("")

    // for (let i = 0; i < ransomNote.length; i++) {
    //     if (magazine.includes(ransomNote[i])) {
    //         let index = ransomNote.indexOf(ransomNote[i])
    //         magazine.splice(index, 1)
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // return true
};