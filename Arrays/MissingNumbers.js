// Find All Numbers Disappeared in an Array

// Solution
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n


// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

nums = [1, 1]

// const findDisappearedNumbers = (nums) => { 
//     let sorted =  [...new Set(nums)].sort((a,b) => a-b)
//     let counter = 0
//     let missing = []
//     for (i = 0; i < sorted.length; i++){
//         counter++
//         console.log(counter,sorted[i])
//         if(sorted[i] !== counter){
//             missing.push(counter)
//         } 
//     }
//     return missing
// };

const findDisappearedNumbers = (nums) => {
    let range = nums.length
    let newArr = []
    let missing = []
    for (let i = 1; i < range + 1; i++) {
        newArr.push(i)
        console.log(newArr)
    }
    newArr.map(item => {
        if (!nums.includes(item)) {
            missing.push(item)
        }
    })
    return missing
};

console.log(findDisappearedNumbers(nums))