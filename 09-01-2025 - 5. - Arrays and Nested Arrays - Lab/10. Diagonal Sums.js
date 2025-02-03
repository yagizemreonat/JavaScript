function diagonalSums(input) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < input.length; i++) {
        leftDiagonalSum += input[i][i];
        rightDiagonalSum += input[input.length - 1 -i][i];
    }
console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}

diagonalSums ([
    [20, 40], 
    [10, 60]
]);

diagonalSums (
    [[3, 5, 17], 
    [-1, 7, 14], 
    [1, -8, 89]
]);

// Diagonal Sums

// A square matrix of numbers comes as an array of arrays, each array holding numbers. 
// Write a function that finds the sum at the main and the secondary diagonals.

// The input comes as an array of arrays, containing number elements (2D matrix of numbers).

// The output is printed on the console, on a single line separated by space. 
// First print the sum at the main diagonal, then the sum at the secondary diagonal.
 
// Input                                       Output 
// [[20, 40], [10, 60]]                        80 50 
// [[3, 5, 17], [-1, 7, 14], [1, -8, 89]]      99 25