/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArrayByParityII = (nums) => {
    const length = nums.length
    let i = 0, j = 1;

    while (i < length && j < length) {
        if (nums[i] % 2 === 0) i += 2
        else if (nums[j] % 2 === 1) j += 2
        else {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i += 2
            j += 2
        }
    }
    return nums
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
console.log(sortArrayByParityII([2,3]))