function largestNumber(num1, num2, num3) {
    
    let result;

    if (num1 > num2 && num1 > num3) {
        result = num1
    } else if (num2 > num1 &&  num2 > num3){
        result = num2
    } else if (num3 > num1 && num3 > num2){
        result = num3
    }

console.log(`The largest number is ${result}.`)
}

largestNumber (5, -3, 16);
largestNumber (-3, -5, -22.5);

// Largest Number

// Write a function that takes three number arguments as input and finds the largest of them. 
// Print the following text on the console: `The largest number is {number}.`.

// The input comes as three number arguments passed to your function.

// The output should be printed to the console.

// Input            Output
// 5, -3, 16        The largest number is 16.
// -3, -5, -22.5    The largest number is -3.

// Hints
// · Write a function that receives three number arguments.
// · Declare a variable named result that will keep the result.
// · Make several checks to find out the largest of the three numbers. Start with num1.
// · Do the same for the others.
// · Print the result on the console.