function sorting(array) {
    
    array.sort ((a,b) => {
        let first = a.length - b.length;
        let second = a.localeCompare(b, undefined, {sensitivity: "base"});
        return first || second;
    });

    console.log(array.join('\n'));
}

sorting(['alpha','beta','gamma']);
sorting(['==================']);
sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sorting(['==================']);
sorting(['test', 'Deny', 'omen', 'Default']);

// Sort an Array by 2 Criteria

// Write a function that orders a given array of strings, by a length in ascending order as primary criteria, 
// and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line.

// Input                                                   Output
// ['alpha','beta','gamma']                                beta alpha gamma 
// ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']      Jack Isacc George Theodor Harrison 
// ['test', 'Deny', 'omen', 'Default']                     Deny omen test Default

// Hints
// · An array can be sorted by passing a comparing function to the Array.sort() function.
// · Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, 
// if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function. 
// If the two items are the same by the main criteria (the result of the comparison is 0), 
// we need to compare by the second criteria and the result of that comparison is the result of the comparing function. 
// · You can check more about Array.sort() here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort