function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a +b);
    aggregate(elements, 0, (a, b) => a +1 / b);
    aggregate(elements, '', (a, b) =>a + b);

    function aggregate(arr, initVal, func) {
    let val = initVal;
    for (let i = 0; i < arr.length; i++)
    val = func(val, arr[i]);
    console.log(val);
    }
}

aggregateElements ([1, 2, 3]);
aggregateElements ([2, 4, 8, 16]);


// Aggregate Elements

// Write a program that performs different operations on an array of elements. Implement the following operations:

// · Sum(ai) - calculates the sum of all elements from the input array
// · Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// · Concat(ai) - concatenates the string representations of all elements from the array

// The input comes as an array of number elements.

// The output should be printed on the console on a new line for each of the operations.

// Input       Output                      Input               Output

// [1, 2, 3]   6                           [2, 4, 8, 16]       30      
//             1.8333333333333333                              0.9375
//             123                                             24816