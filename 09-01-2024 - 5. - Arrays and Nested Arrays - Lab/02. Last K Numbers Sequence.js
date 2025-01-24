function lastKNumbersSequence(n, k) {
    // Initialize the sequence with the first element as 1
    let sequence = [1];
    
    // Generate the sequence
    for (let i = 1; i < n; i++) {
        // Sum the last k elements or as many as exist
        let startIndex = Math.max(0, i - k);
        let sum = sequence.slice(startIndex, i).reduce((acc, curr) => acc + curr, 0);
        
        // Add the new element to the sequence
        sequence.push(sum);
    }
    
    // Return the sequence
    return sequence;
}

// Input Output
console.log(lastKNumbersSequence(6, 3)); 
// Output: [1, 1, 2, 4, 7, 13]
console.log(lastKNumbersSequence(8, 2)); 
// Output: [1, 1, 2, 3, 5, 8, 13, 21]

//Explanation:
// Corrected Summation Logic:

// In the original logic, a manual for loop was used to sum the last k elements, but it was more verbose and prone to errors.
// The new version uses slice to extract the last k elements (or as many as exist), followed by reduce to compute their sum.

// let startIndex = Math.max(0, i - k);
// let sum = sequence.slice(startIndex, i).reduce((acc, curr) => acc + curr, 0);

// Math.max(0, i - k) ensures the starting index doesn't go below 0.

// Simplified and Cleaned Loop:
// The for loop generates elements starting from 1 until n.
// Each iteration calculates the sum of the relevant previous k elements and appends it to the sequence.

// Output the Result as an Array:
// The function directly returns the array as required.

// Edge Case Handling:
// The code handles cases where k is larger than the current index (i), summing only the elements available.




// Last K Numbers Sequence

// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// · The first element is 1
// · Every following element equals the sum of the previous k elements
// · The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.
 
// Input   Output 

// 6, 3    [1, 1, 2, 4, 7, 13] 
// 8, 2    [1, 1, 2, 3, 5, 8, 13, 21]

// Explanation
// The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that. 
// The third element is the sum of the first 2 (1 and 1) and the 4th – the sum of 1, 1, and 2. 
// The 5th element is the sum of the 2nd, 3rd, and 4th (1, 2, and 4) and so on.