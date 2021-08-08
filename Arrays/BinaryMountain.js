// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

arr = [0, 1, 2, 3, 4, 1, 2]

// const validMountainArray = (arr) => {
//     let a = Math.max(...arr)
//     if(arr.length >= 3){
//         console.log("array length is", arr.length)
//         console.log("max number is", a)
//         for(i = 0; i < a; i++){
//             if(arr[i]<arr[i+1]){
//                 for(i=a; a<arr.length; i++){
//                     if(arr[i]>arr[i+1]){
//                         return true
//                     }
//                 }
//             }
//         }
//     }
//     return false
// };

var validMountainArray = function (arr) {
    if (arr.length < 3) return false
    let up = true
    let wentUp = false

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false

        if (up) {
            if (arr[i] <= arr[i - 1]) {

                up = false
            } else wentUp = true


        } else if (arr[i] >= arr[i - 1]) return false
    }

    return up === false && wentUp


};

console.log(validMountainArray(arr))