/**
 * O(n) time complexity
 * O(1) space complexity
 */

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// function findProducts(nums) {
//   let prefixProducts = [];
//   let prefixProduct = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       prefixProducts[i] = prefixProduct;
//     } else {
//       prefixProduct *= nums[i - 1];
//       prefixProducts[i] = prefixProduct;
//     }
//   }
//   return prefixProducts;
// }

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// function productExceptSelf(nums) {
//   let prefixProducts = findProducts(nums);
//   let suffixProducts = findProducts(nums.reverse()).reverse();
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = prefixProducts[i] * suffixProducts[i];
//   }
//   return result;
// }


// Optimize Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
    let length = nums.length
    let result = [];

    let prefixProduct = 1;
    for (let i = 0; i < length; i++){
        result[i] = prefixProduct
        prefixProduct *= nums[i]
    }

    let suffixProduct = 1;
    for (let i = length - 1; i >= 0; i--){
        result[i] *= suffixProduct
        suffixProduct *= nums[i]
    }
    return result
}


let nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
