function printStars(count=5) {
    for (let i = 0; i < count; i++) {
        console.log("* ".repeat(count).trim());
    }
}

    printStars(1);
    printStars(2);
    printStars(5);
    printStars(7);


// Square of Stars

// Write a function that prints a rectangle made of stars with variable size, depending on an input parameter. 
// If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.

// The input comes as a single number argument.

// The output is a series of lines printed on the console, forming a rectangle of variable size.
 
// Input Output        Input Output        Input   Output        Input Output

// 1       *           2       * *         5       * * * * *     7     * * * * * * *
//                             * *                 * * * * *           * * * * * * *
//                                                 * * * * *           * * * * * * *
//                                                 * * * * *           * * * * * * *
//                                                 * * * * *           * * * * * * *
//                                                                     * * * * * * * 
//                                                                     * * * * * * *  