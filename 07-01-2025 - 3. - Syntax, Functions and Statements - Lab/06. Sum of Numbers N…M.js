function sumOfNumbersNM(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;
    
        for (let i = num1; i <= num2; i++){
            result += i;
        }
    return result;
}
    console.log(sumOfNumbersNM('1', '5'));      // Output: 15
    console.log(sumOfNumbersNM('-8', '20'));    // Output: 174
 
// Sum of Numbers N…M

// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.
 
// Input           Output
// '1', '5'        15
// '-8', '20'      174

// Hints
// · Write a function that receives two string arguments and parse them as numbers. Use Number(string) function to parse the input.
// · Declare a variable named result that will keep the mathematical results.
// · Write a for loop from num1 to num2 and every turn of the cycle, until it’s completed, add the current value.
// · Finally, return the result.