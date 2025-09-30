/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    // Optimal solution using two pointer 

    let i = s.length - 1;
    let j = t.length - 1;
    let skipS = 0;
    let skipT = 0;

    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] == "#") {
                skipS++;
                i--;
            }
            else if (skipS > 0) {
                skipS--;
                i--
            }
            else {
                break;
            }
        }

        while (j >= 0) {
            if (t[j] == "#") {
                skipT++;
                j--;
            }
            else if (skipT > 0) {
                skipT--;
                j--
            }
            else{
                break
            }
        }

        const charS = i >= 0 ? s[i] : null;
        const charT = j >= 0 ? t[j] : null;
        if(charS !== charT) return false;

        i--;
        j--; 
    }
    return true


    // SOLVED UISNG STACK AS I was learning stack but this is not the optimal solution
    // function build(str) {
    //     let stack = [];
    //     for (let char of str) {
    //         if (char !== "#") {
    //             stack.push(char)
    //         }
    //         else if (stack.length > 0) {
    //             stack.pop();
    //         }
    //     }
    //     return stack.join("")
    // }
    // return build(s) === build(t)
};