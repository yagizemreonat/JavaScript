function sortingNumbers(array) {
    array = array.sort((a, b) => a - b);

    let result = [];

    while (array.length !== 0) {
        
        result.push(array.shift());

        if(array.length !== 0 ) {
            result.push(array.pop());
        }

    } 

return result;
}

console.log(sortingNumbers ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers ([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])); 


// Code explanation
// The sort method is used with a comparator (a, b) => a - b to arrange the array in ascending numerical order.
// For example, the input [1, 65, 3, 52, 48, 63, 31, -3, 18, 56] becomes [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65].
// The result array will store the reordered elements.
// Explanation of the Loop:
// The loop runs until the array is empty.
// Smallest Element:
// array.shift() removes and returns the first (smallest) element from the array. This is added to the result array.
// Largest Element:
// array.pop() removes and returns the last (largest) element from the array. This is added to the result array.
// This alternation ensures that the elements are added in the desired pattern: smallest, largest, second smallest, second largest, and so on.
// The reordered array is returned as the output.

// Sorting Numbers

// Write a function that sorts an array of numbers so that the first element is the smallest one, 
// the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.
// Return the resulting array.
 
// Input                                       Output
// [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]      [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
// [22, 9, 63, 3, 2, 19, 54, 11, 21, 18]       [2, 63, 3, 54, 9, 22, 11, 21, 18, 19]