function negativePositiveNumbers(input) {
    const result = [];

    for (const number of input) {
        if (number < 0) {
            result.unshift(number);         //negative
        } else {
            result.push(number);            //positive
        }
    }
    for (const number of result) {
        console.log(number);

    }
}


negativePositiveNumbers ([7, -2, 8, 9]);
negativePositiveNumbers ([3, -2, 0, -1]);

// Negative / Positive Numbers

// Write a JS function that processes the elements in an array one by one and produces a new array. 
// If the current element is a negative number you must add it to the front of the array (as the first element of the array). 
// Otherwise, if the current element is a positive number (or 0), you must add it to the end of the array (as the last element of the array).

// The input comes as an array of number elements.
// The output is printed on the console, each element on a new line.

// Input           Output
// [7, -2, 8, 9]   -2 7 8 9 
// [3, -2, 0, -1]  -1 -2 3 0

// Hints
// · Write a function that receives an array as an argument.
// · Declare variable named result that will keep the array.
// · You can use for loop to go around the items one by one.
// · If the current element is a negative number, you can use the unshift method to add the number at the beginning of the array.
// · Otherwise, if the current element is a positive number (or 0), use a push method to add the number to the end of the array.
// · Print on the console, each element of the array on a new line.