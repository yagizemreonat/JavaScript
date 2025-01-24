function equalNeighbors(matrix) {
    let count = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (col + 1 < matrix[row].length && matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }
            if (row + 1 < matrix.length && matrix[row][col] === matrix[row + 1][col]){
                count ++;
            }  
        }       
    }
    return count;
}

console.log(equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']
]));
console.log(equalNeighbors([
['test', 'yes', 'yo', 'ho'], 
['well', 'done', 'yo', '6'], 
['not', 'done', 'yet', '5']
]));


// Equal Neighbors

// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs you find and return it.

// Input                               Output

// [['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]          1 

// [['test', 'yes', 'yo', 'ho'], 
// ['well', 'done', 'yo', '6'], 
// ['not', 'done', 'yet', '5']]        2