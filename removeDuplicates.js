/**
 * @param {number[]} nums
 * @returns {number}
 */


const removeDuplicates = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] !== nums[i + 1]) {
            nums[++count] = nums[i + 1]
        }
    }
    return count
}