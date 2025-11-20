/**
 * 
 * @param {number[]} nums 
 * @returns {number}
 */

const sumOfUnique = (nums) => {
    const map = new Map();
    for (let num of nums) {
        map.set(num , (map.get(num) || 0) + 1)   
    }
    let sum = 0;
    for (let [key, value] of map) {
        sum += value === 1 ? key : 0
    }
    return sum
}


console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1])); // 0
console.log(sumOfUnique([1, 2, 3, 4, 5])); // 15
console.log(sumOfUnique([5, 5, 5, 5, 5, 6])); // 6