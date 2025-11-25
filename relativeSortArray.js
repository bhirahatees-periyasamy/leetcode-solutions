/***
 * 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */



const relativeSortArray = (arr1, arr2) => {
    const max = Math.max(...arr1);
    const count = new Array(max + 1).fill(0);
    const result = [];

    // Count occurrences of each number in arr1
    for (let num of arr1) {
        count[num]++;
    }
    
    // Add elements from arr2 in the order they appear
    for (let num of arr2) {
        while (count[num] > 0) {
            result.push(num);
            count[num]--;
        }
    }

    // Add remaining elements not in arr2, in ascending order
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }
    return result;
}


console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); // [2,2,2,1,4,3,3,9,6,7,19]
