/**
 * @param {number} nums
 * @returns {number}
 */


const containsDuplicate = (nums) => {
    let set = new Set()
    for (let num of nums) {
        if (set.has(num)) return true
        set.add(num)
    }
    return false
}


console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))