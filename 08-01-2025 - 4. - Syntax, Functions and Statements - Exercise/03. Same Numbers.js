function sameNumbers(number1) {
    // Convert the number to a string to access individual digits
    const digits = number1.toString().split('');
            
    // Check if all digits are the same
    const allSame = digits.every((digit) => digit === digits[0]);
            
    // Calculate the sum of all digits
    const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
            
    // Print the results
    console.log(allSame);
    console.log(sum);
}
    
    sameNumbers(2222222); // true, 14
    sameNumbers(1234);    // false, 10


    //Explanation:
// Convert Number to String:

// const digits = input.toString().split('');
// input.toString() converts the number to a string.
// .split('') creates an array of individual digits (e.g., 2222222 becomes ['2', '2', '2', '2', '2', '2', '2']).

// Check if All Digits Are the Same:
// const allSame = digits.every((digit) => digit === digits[0]);
// The .every() method checks if all elements in the array satisfy the condition: digit === digits[0].
// If all digits are the same, allSame is true; otherwise, it is false.
// Calculate the Sum of Digits:

// const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
// The .reduce() method calculates the sum of all digits.
// acc is the accumulator (the running total).
// digit is the current element being processed.
// Number(digit) converts the string digit back to a number.

// Print Results:
// console.log(allSame);
// console.log(sum);
// The results are printed on separate lines as required.

    
// Same Numbers

// Write a function that takes an integer number as an input and checks if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line, print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

// Input       Output      Input   Output
// 2222222     true        1234    false
//             14                  10