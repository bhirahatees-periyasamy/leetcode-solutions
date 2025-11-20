/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subarray = [];
    for (let j = i; j < arr.length; j++) {
      subarray.push(arr[j]);
    }
    console.log(subarray);
    sum += Math.min(...subarray);
  }
  return sum;
};

console.log(sumSubarrayMins([3, 1, 2, 4])); // 17