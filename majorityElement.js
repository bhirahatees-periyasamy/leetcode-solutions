/**
 * @param {number[]} nums
 * @returns {number}
 */



const majorityElement = (nums) => {
    let count = 0;
    let element = 0;
    for (let num of nums) {
        if (count === 0) element = num
        count += (element === num) ? 1 : -1
    }
    return count
}