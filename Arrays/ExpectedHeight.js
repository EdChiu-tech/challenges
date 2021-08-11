// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.


// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100
//    Hide Hint #1  
// Build the correct order of heights by sorting another array, then compare the two arrays.

heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]

const heightChecker = (heights) => {
   let expected = heights.slice().sort((a,b) => a-b)
   let sameCounter = 0
   console.log(expected)
   console.log(heights)
   for (i = 0; i < heights.length; i++) {
      if (heights[i] !== expected[i]) {
         sameCounter++
      }
   }
   return sameCounter
};

console.log(heightChecker(heights))