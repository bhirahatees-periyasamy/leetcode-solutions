/**
 * / @param {number[]} arr
 * / @return {number}
 * / Brute force approach
 */

// const sumOddLengthSubarrays = (nums) => {
//   let totalSum = 0;
//   const length = nums.length;
//     for (let left = 0; left < length; ++left) {
//     for (let right = left; right < length; ++right) {
//         let result = []
//         if ((right - left + 1) % 2 === 1) {
//           let sum = 0;
//           for (let current = left; current < right + 1; current++) {
//               sum += nums[current];
//               result.push(nums[current])
//             }
//             totalSum += sum;
//       }
//     }
//   }
//     return totalSum;
// };

/**
 * / @param {number[]} arr
 * / @return {number}
 * / Concurrence approach
 */

const sumOddLengthSubarrays = (arr) => {
  const length = arr.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    let left = i;
    let right = length - i - 1;
    let leftOdd = Math.floor((left + 1) / 2);
    let leftEven = Math.floor(left / 2) + 1;
    let rightOdd = Math.floor((right + 1) / 2);
    let rightEven = Math.floor(right / 2) + 1;
    sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
