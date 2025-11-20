/**
 * param {number[]} nums
 * return boolean
 * 
 */


function checkSubarraySum(nums, k) {
    let sum = nums[0];
    let map = new Map();
    map.set(sum % k, 0)
    for (let i = 1; i < nums.length; i++){
        sum += nums[i]
        let mod = sum % k
        if (map.has(mod)) {
            return true
        }
        map.set(mod,i)
    }
    return false
}