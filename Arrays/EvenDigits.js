// Given an array nums of integers, return how many of them contain an even number of digits.

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

// actual digits does not matter, only length of index
// 1. find the length of each index
//  a. turn each index into an array

let nums = [12,345,2,6,7896, 349123]


const findNumbers = (num) => {
    let count = 0
    num.map(item => {
        let str = item.toString()
        console.log("string:",str)
        let arr = [...str]
        console.log(arr)
        if (arr.length % 2 === 0) {
            return count++
        }
    }
    )
    return count
};
// let nums = [555,901,482,1771]
console.log(findNumbers(nums))
// console.log([...nums.toString()])