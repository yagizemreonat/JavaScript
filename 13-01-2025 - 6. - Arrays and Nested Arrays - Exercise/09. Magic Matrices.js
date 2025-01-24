function magicMatrices(matrix) {
    
    let totalSum = matrix[0].reduce((a,b) => a + b);

    for (let row = 0; row < matrix.length; row++) {
        
        let sumRow = 0;
        let sumCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumRow += matrix[col][row];
            sumCol += matrix[row][col];

        }
        if (totalSum != sumRow || totalSum != sumCol) {
            return false;
        }

    }

    return true;
}

console.log(magicMatrices([
[4, 5, 6],
[6, 5, 4],
[5, 5, 5]
]));

console.log("-----");

console.log(magicMatrices([
[11, 32, 45], 
[21, 0, 1], 
[21, 1, 1]
]));

console.log("-----");

console.log(magicMatrices([
[1, 0, 0], 
[0, 0, 1], 
[0, 1, 0]
]));

// Magic Matrices

// Write a function that checks if a given matrix of numbers is magical. 
// A matrix is magical if the sums of the cells of every row and every column are equal.
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

// Input                                       Output 
// [[4, 5, 6],[6, 5, 4],[5, 5, 5]]             true 
// [[11, 32, 45], [21, 0, 1], [21, 1, 1]]      false 
// [[1, 0, 0], [0, 0, 1], [0, 1, 0]]           true