function increaseTheNum(arr) {
    
let result = [];

let biggest = Number.MIN_SAFE_INTEGER;          // Keeps track of the largest number found so far.

for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] >= biggest) {
        result.push(arr[i]);                    // Add the number to the result if it’s >= biggest

        biggest = arr[i];                       // Update the biggest number
    }
}

return result;
} 

console.log(increaseTheNum ([1,3,8,4,10,12,3,2,24]));
console.log(increaseTheNum ([1, 2, 3, 4]));
console.log(increaseTheNum ([20, 3, 2, 15, 6, 1]));


// Extract Increasing Subset from Array

// Write a function that extracts only those numbers that form a non-decreasing subset. 
// In other words, you start from the first element and continue to the end of the given array of numbers. 
// Any number which is LESS THAN the current biggest one is ignored, 
// alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number.
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subset. 
// Return the array of numbers.

// Input                           Output
// [1,3,8,4,10,12,3,2,24]          [1, 3, 8, 10, 12, 24] 
// [1, 2, 3, 4]                    [1, 2, 3, 4] 
// [20, 3, 2, 15, 6, 1]            [20]

// Hints
// · The Array.reduce() built-in function might help you a lot with this problem.