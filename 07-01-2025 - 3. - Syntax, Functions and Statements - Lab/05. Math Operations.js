function mathOperations(num1, num2, operator) {
    
let result;

switch (operator) {
    case '+': result = num1 + num2; break; 
    case '-': result = num1 - num2; break; 
    case '*': result = num1 * num2; break; 
    case '/': result = num1 / num2; break; 
    case '%': result = num1 % num2; break; 
    case '**': result = num1 ** num2; break; 
 }
console.log(result);
}

mathOperations (5, 6, '+');
mathOperations (3, 5.5, '*');

// Math Operations

// Write a JS function that takes two numbers and a string as an input.

// The string may be one of the following: '+', '-', '*', '/', '%', '**'.

// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.

// The input comes as two numbers and a string argument passed to your function.

// The output should be printed on the console.

// Input           Output
// 5, 6, '+'       11
// 3, 5.5, '*'     16.5

// Hints
// · Write a function which receives three arguments:
// · Declare a variable named result that will keep your mathematical result.
// · Write down the switch command that will take the string from your input and depending on it, perform the mathematical logic between the two numbers.
// · Print the result on the console.