// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

nums = [-7,-3,2,3,11]

const sortedSquares = (nums)=> {
    return nums.map(num => num * num).sort((a, b) => a - b);
};

console.log(sortedSquares(nums))