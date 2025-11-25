/***
 * @param {number} nums
 * @returns {number}
 */


const findMin = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};


// Input: nums = [3,4,5,1,2]

console.log(findMin([3, 4, 5, 1, 2]));