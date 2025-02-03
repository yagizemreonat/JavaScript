function sumFirstLast(input) {
    
    const firstElement = Number(input[0]);
    const lastElement = Number(input[input.length -1]);

    console.log(firstElement + lastElement);
}


// //second method
// function sumFirstLast(input) {
//     const firstElement = Number(input.shift());
//     const lastElement = Number(input.pop());

//     console.log(firstElement + lastElement);
// }

sumFirstLast (['20', '30', '40']);
sumFirstLast (['5', '10']);


// Sum First Last

// Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is the return value of your function and should be a number.
 
// Input                   Output 
// ['20', '30', '40']      60 
// ['5', '10']             15