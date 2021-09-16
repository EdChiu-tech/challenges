// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

nums = [1, 2, 3, 4];

//Time = O(n^2)
//Space = O(1)
// Much slower but saved on memory (only 2 constants a & b)

// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let a = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       let b = nums[j];
//       if (a === b) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

//Time = O(n)
//Space = O(n)
// Much faster but takes more memory as you are saving a and object

// var containsDuplicate = function (nums) {
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     let a = nums[i];
//     if (obj[`${a}`] === undefined) {
//       obj[`${a}`] = true;
//       console.log(obj);
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  const obj = new Set();
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    if (!obj.has(a)) {
      obj.add(a);
      console.log(obj);
    } else {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate(nums));
