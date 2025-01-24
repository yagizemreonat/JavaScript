// *Orbit

// You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.

// You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 
// 1. Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 
// 2. After which you must set the values of the next surrounding cells to 
// 3 and so on. Check the pictures for more information.

// For example, we are given a matrix that has 5 rows and 5 columns, and the star is at coordinates - 0, 0. Then the following should happen:

// If the coordinates of the star are somewhere in the middle of the matrix for example - 2, 2, then it should look like this:

// The input comes as an array of 4 numbers [width, height, x, y] which represents the dimensions of the matrix and the coordinates of the star.

// The output is the filled matrix, with the cells separated by a space, each row on a new line.


// Input Output
// [4, 4, 0, 0] 1 2 3 4 
//              2 2 3 4 
//              3 3 3 4 
//              4 4 4 4 

// [5, 5, 2, 2] 3 3 3 3 3 
//              3 2 2 2 3 
//              3 2 1 2 3 
//              3 2 2 2 3 
//              3 3 3 3 3 

// [3, 3, 2, 2] 3 3 3 
//              3 2 2 
//              3 2 1

// Hints
// · Check if there is some dependency or relation between the position of the numbers and the rows and columns of those positions