/**
 * @param {number[]} pref
 * @return {number[]}
 */

const findArray = (pref) => { 
    const arr = []
    arr[0] = pref[0]
    for (let i = 1; i < pref.length; i++){
        arr[i] = pref[i] ^ pref[i - 1]
    }
    return arr
}


console.log(findArray([5, 2, 0, 3, 1])); // [5,7,2,3,2]
console.log(findArray([1, 3]));
console.log(findArray([4, 4, 4, 4, 4])); // [4,0,4,0,4]
console.log(findArray([13])); // [13]