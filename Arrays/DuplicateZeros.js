// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

let arr = [1,0,2,3,0,4,5,0]

const duplicateZeros = (arr) => {
    let initialLength = arr.length;
    let indexes = []
    arr.forEach((item, index) => {
        if (item === 0 ){
            indexes.push(index)
        }
    })
    indexes.forEach((item, index) => {
        arr.splice((item+index), 0, 0)
        arr.pop()
    })
};
duplicateZeros(arr)

console.log((arr))


// var duplicateZeros = function(arr) {
//     const initialLength = arr.length;
//     let indexes = [];
//     arr.forEach((item, index) => {
//         if (item === 0){
//             indexes.push(index)
//         }
//     })
//     indexes.forEach((item, index)=> {
//         arr.splice((item+index), 0, 0)
//     })
//     arr.splice(initialLength, indexes.length)
// };