/**
 * @param {number[]} nums
 * @return {number}
 */
function findMiddleIndex(nums) {
  let prefixSum = nums.reduce((current, total) => (total += current), 0);
    let suffixSum = 0;
    for (let i = 0; i < nums.length; i++){
        prefixSum -= nums[i]
      if (prefixSum === suffixSum) { 
          return i
      }
      suffixSum += nums[i]
  }
   return -1
};


console.log(findMiddleIndex([2, 3, -1, 8, 4])) // 3
console.log(findMiddleIndex([1, -1, 4])) // 2  
console.log(findMiddleIndex([2, 5])) // -1
console.log(findMiddleIndex([1])) // 0
console.log(findMiddleIndex([1, 2, 3])) // -1