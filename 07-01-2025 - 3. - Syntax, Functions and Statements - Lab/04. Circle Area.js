function circleArea (input) {

let result;

let inputType = typeof(input);

if (inputType === "number") {
    result = Math.pow (input , 2) * Math.PI; 
    console.log(result.toFixed(2));
} else {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}

}

circleArea (5);
circleArea ('name');

// . Circle Area

// Write a function that takes a single argument as an input. 
// Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. 
// Print the area rounded to two decimal places.

// If the argument type is NOT a number, print the following text on the console: `We can not calculate the circle area, because we receive a {type of argument}.`

// The input comes as a single argument passed to your function.

// The output should be printed on the console.
 
// Input        Output
// ["5"]        78.54
// ['name']     We can not calculate the circle area, because we receive a string.

// Hints
// · Write a function that receives a single argument.
// · Declare a variable named result that will keep your result.
// · Check the type of the input argument with the typeof operator.
// · If the type is equal to 'number', calculate the circle area and print it on the console rounded to two decimal places. 
// To do this, use the method toFixed(). The Math.pow() function returns the base to the exponent power, that is, base exponent. 
// You can find more information about the area here:
// · If the type is NOT a 'number', print the following text on the console: