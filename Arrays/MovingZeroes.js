// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?
//    Show Hint #1  
//    Show Hint #2  

nums = [0, 0, 0, 1, 0]

// const moveZeroes = (nums) => {
//     let zeroIndex = []
//     for (i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             zeroIndex.push(i)
//         }
//     }
//     for (i = 0; i < nums.length; i++) {
//             nums.splice((zeroIndex[i], 1))
//             nums.push(0)
//     }
//     return nums
// };

const moveZeroes = (nums) => {
    let indexes = []
    nums.forEach((item, index) => {
        if (item === 0 ){
            indexes.push(index)
        }
    })
    indexes.forEach((item, index) => {
        nums.splice((item-index), 1)
        nums.push(0)
    })
    return nums
};

console.log(moveZeroes(nums))