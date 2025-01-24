function rotateArray(array, num) {
    
for ( let i = 0; i < num; i++) {
    array.unshift(array.pop());
}
    console.log(array.join(" "));
}

rotateArray (['1','2','3','4'],2);
rotateArray (['Banana', 'Orange', 'Coconut', 'Apple'], 15);

// Code Explanation
// array.pop(): Removes the last element of the array and returns it.
// array.unshift(value): Inserts value at the start of the array.
// Each iteration explanation:
// array.pop(): Removes the last element of the array.
// array.unshift(...): Inserts the removed element at the beginning of the array.
// array.join(" "): Converts the array to a string, where each element is separated by a space.
// Example: ['3', '4', '1', '2'] becomes "3 4 1 2".

// Rotate Array

// Write a JS function that rotates an array. 
// The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.

// The input comes as two parameters – an array of strings and a number. 
// The second parameter is the amount of rotation you need to perform.

// The output is the resulting array after the rotations. 
// The elements should be printed on one line, separated by a single space.
  
// Input                                           Output 
// ['1','2','3','4'],2                             3 4 1 2 
// ['Banana', 'Orange', 'Coconut', 'Apple'], 15    Orange Coconut Apple Banana

// Hints
// · Check if there is a built-in function for inserting elements at the start of the array.