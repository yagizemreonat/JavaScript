function smallestTwoNumbers(array) {
    array.sort((a, b) => a - b);
    let smallestTwo = array.slice(0, 2);
    console.log(smallestTwo.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);



// Explanation:

// Sorting the Array:
// array.sort((a, b) => a - b) sorts the array in ascending numerical order.
// For example, [30, 15, 50, 5] becomes [5, 15, 30, 50].

// Extracting the Two Smallest Numbers:
// After sorting, the smallest two numbers will be at the first two indices (0 and 1).
// array.slice(0, 2) extracts these two numbers into a new array.

// Output:
// The join(" ") method is used to convert the array into a string with elements separated by a single space.
// Efficiency:
// Sorting the array has a time complexity of 𝑂(𝑛log ⁡𝑛), and slicing takes 𝑂(1)O(1).
// The overall time complexity is dominated by sorting.



// Smallest Two Numbers

// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

// Input                Output
// [30, 15, 50, 5]      5 15 
// [3, 0, 10, 4, 7, 3]  0 3