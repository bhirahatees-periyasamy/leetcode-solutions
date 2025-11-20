// Brute Force
// function subarraySum(nums, k) {
//   let count = 0;
//   for (let start = 0; start < nums.length; start++) {
//     let sum = 0;
//       for (let end = start; end < nums.length; end++) {
//           sum += nums[end]
//           if(sum === k ) count++
//     }
//   }
//     return count
// }


// Hashmap

function subarraySum(nums, k) {
    let sum = 0;
    let count = 0;
    let hashmap = new Map();
    hashmap.set(0, 1)
    for (let i = 0; i < nums.length; i++){
        sum += nums[i]
        if (hashmap.get(sum - k)) {
            count += hashmap.get(sum - k)
        }
        hashmap.set(sum, (hashmap.has(sum) ? hashmap.get(sum) : 0) + 1);
    }
    return count
}

const nums = [1, 2, 3];
const k = 3;

console.log(subarraySum(nums, k));
