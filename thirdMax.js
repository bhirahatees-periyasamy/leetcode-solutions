/***
 * @param {number[]} nums
 * @return {number}
 * 
 */


const thirdMax = function (nums) { 
    let first = -Infinity, second = -Infinity, third = -Infinity;

    for(let num of nums) {
        if(num > first) {
            third = second;
            second = first;
            first = num;
        } else if(num > second && num < first) {
            third = second;
            second = num;
        } else if(num > third && num < second) {
            third = num;
        }
    }

    return third === -Infinity ? first : third;
}


console.log(thirdMax([3, 2, 1])); // Output: 1
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1])); // Output: 1
console.log(thirdMax([1, 2, -2147483648]));
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // Output: 2

