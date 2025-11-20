// /**
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
//     this.nums = nums;
// };

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (left, right) {
//   let sum = 0;
//   for (let i = left; i < right; i++) {
//     sum += nums[i];
//   }
// };

// /**
//  * Your NumArray object will be instantiated and called as such:
//  * var obj = new NumArray(nums)
//  * var param_1 = obj.sumRange(left,right)
//  */

/**
 * \@param {number[]} nums
 * \ TIme Complexity: O(1)
 */

function NumArray(nums) {
  this.prefixSums = [0];
  for (let num of nums) {
    this.prefixSums.push(this.prefixSums[this.prefixSums.length - 1] + num);
  }
}

/**
 * / @param {number} left
 * / @param {number} right
 * / @return {number}
 *
 **/

NumArray.prototype.sumRange = function (right, left) {
  return this.prefixSums[right + 1] - this.prefixSums[left];
};
// /**
//  * Your NumArray object will be instantiated and called as such:
//  * var obj = new NumArray(nums)
//  * var param_1 = obj.sumRange(left,right)
//  */
