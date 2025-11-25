/**
 * @param {number[]} arr
 * @return {number}
 * / Brute force approach
 */
// const sumSubarrayMins = (arr) => {
//   let n = arr.length;
//   let result = 0; 
//   for (let start = 0; start < n; start++) {
//     for (let end = start; end < n; end++) {
//       let min = 0;
//       for (let k = start; k <= end; k++) {
//          min = k === start ? arr[k] : Math.min(min, arr[k]);
//       }
//       result += min;
//     }
//   }
//   return result % (1e9 + 7);
// };


/**
 * @param {number} arr
 * @return {number}
 * 
 */


var sumSubarrayMins = function (arr) {
  const stack = [0];
  arr.splice(0, 0, -Infinity); // sentinel at start
  arr.push(-Infinity); // sentinel at end

  let res = 0;

  console.log("Initial array:", arr);
  console.log("----------------------------------");

  for (let i = 1; i < arr.length; i++) {
    console.log(`\n🔹 i = ${i}, arr[i] = ${arr[i]}`);
    console.log(
      "Current stack:",
      stack.map((idx) => `${idx}(${arr[idx]})`)
    );

    // While top of stack is greater than current element
    while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
      const mid = stack.pop(); // index being processed
      const left = mid - stack[stack.length - 1];
      const right = i - mid;

      console.log(`  ➤ POP mid = ${mid} (value = ${arr[mid]})`);
      console.log(
        `    left = ${left}  (mid - stackTop = ${mid} - ${
          stack[stack.length - 1]
        })`
      );
      console.log(`    right = ${right} (i - mid = ${i} - ${mid})`);
      console.log(
        `    Contribution = left * right * arr[mid] = ${left} * ${right} * ${
          arr[mid]
        } = ${left * right * arr[mid]}`
      );

      res += left * right * arr[mid];
    }

    console.log(`  ➤ PUSH i = ${i} (value = ${arr[i]})`);
    stack.push(i);
  }

  console.log("\nFinal result before mod:", res);
  return res % (10 ** 9 + 7);
};


console.log(sumSubarrayMins([3, 1, 2, 4])); // 17
console.log(sumSubarrayMins([11, 81, 94, 43, 3])); // 444
console.log(sumSubarrayMins([1, 2, 3])); // 10
console.log(sumSubarrayMins([5, 4, 3, 2, 1])); // 35
console.log(sumSubarrayMins([2, 9, 7, 8, 3, 4, 6, 1])); // 129