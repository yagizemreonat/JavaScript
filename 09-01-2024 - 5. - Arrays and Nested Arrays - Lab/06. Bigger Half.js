function biggerHalf(input) {
    input.sort((a,b) => a - b);
    const halfLength = Math.floor(input.length / 2);
    return input.splice(halfLength);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);


// Bigger Half

// You are given an array of numbers. Write a JS function that sorts the array in ascending order and
//  returns a new array, containing only the second half of the input. 
//  If there is an odd number of elements in the input, always take the bigger half. 
//  For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3.

// The input comes as an array of number elements.

// The output is the return value of the function and should be an array of numbers.
  
// Input                       Output
// [4, 7, 2, 5]                [5, 7]
// [3, 19, 14, 7, 2, 19, 6]    [7, 14, 19, 19]