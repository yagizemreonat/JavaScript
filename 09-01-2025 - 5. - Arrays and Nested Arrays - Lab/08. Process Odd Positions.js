// function processOddPositions(input) {
//     const oddPossitions = input.filter((el, index) => index % 2 !== 0);
//     const doubledElements = oddPossitions.map((el) => el * 2);
//     const reversedElements = doubledElements.reverse();
//     return reversedElements;
// }


// FANCY WAY
function processOddPositions(input) {
    const result = input.filter((el, index) => index % 2 !== 0).map((el) => el * 2).reverse();
    return result.join(" ");
}

processOddPositions ([10, 15, 20, 25]);
processOddPositions ([3, 0, 10, 4, 7, 3]);


// Process Odd Positions

// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.

// Input                   Output
// [10, 15, 20, 25]        50 30 
// [3, 0, 10, 4, 7, 3]     6 8 0