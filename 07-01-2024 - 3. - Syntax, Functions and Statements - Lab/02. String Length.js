function stringLength(arr1, arr2, arr3) {
    
    let sumLength;
    let avarageLength;
    let firstArgumentLength = arr1.length;
    let secondArgumentLength = arr2.length;
    let thirdArgumentLength = arr3.length;

sumLength = (firstArgumentLength + secondArgumentLength + thirdArgumentLength );
avarageLength = Math.floor(sumLength / 3);
console.log(sumLength);
console.log(avarageLength);

}


stringLength ('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');

// String Length

// Write a JS function that takes three string arguments as an input. 
// Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.

// The input comes as three string arguments passed to your function.

// The output should be printed on the console in two lines.
 
// Input                                Output
// 'chocolate', 'ice cream', 'cake'     22 
//                                      7
// 'pasta', '5', '22.3'                 10 
//                                      3

// Hints
// · Write a function that receives three string arguments.
// · Declare two variables named sumLength and averageLength that will keep the mathematical results.
// · Calculate the length of the strings using the length property.
// · Calculate the sum of the three lengths.
// · Calculate the average length of the strings rounded down to the nearest integer. Use the Math.floor() function.
// · Print the results on the console.