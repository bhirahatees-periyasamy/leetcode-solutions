/**
 * @param {number[]} nums
 * @returns {nums[][]}
 */


const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const result = []

    for (let i = 0; i < nums.length; i++){
        
        if(i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum < 0) {
                left++
            } else if (sum > 0) {w
                right--
            } else {
                result.push([nums[i], nums[left], nums[right]])
                
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--
                
                left++
                right--
            }
            
        }

    }
    return result
}



console.log(threeSum([-1, 0, 1, 2, -1, -4]));

console.log(
  threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
);