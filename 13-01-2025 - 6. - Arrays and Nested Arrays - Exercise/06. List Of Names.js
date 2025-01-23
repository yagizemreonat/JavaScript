function listOfNames(names) {

    names.sort((a,b) => a.localeCompare(b));                

    for (let i = 0; i < names.length; i++) {
        console.log(`${i +1}.${names[i]}`);
    }

}

listOfNames (["John","Bob","Christina","Ema"]);

// Code Explanation
// names.sort() sorts the array in place.
// The localeCompare method is used for case-insensitive and locale-sensitive string comparison. It ensures that strings are sorted alphabetically in ascending order.
// For the input ["John", "Bob", "Christina", "Ema"], after sorting, the array becomes ["Bob", "Christina", "Ema", "John"].
// A for loop iterates over the sorted names array.
// The console.log statement formats the output as 1.Name, 2.Name, etc.
// ${i + 1}: Adds 1 to the current index i to display the position starting from 1 instead of 0.
// ${names[i]}: Inserts the name at index i from the array.
// The input array ["John", "Bob", "Christina", "Ema"] is passed to the listOfNames function.

// List of Names

// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

// Input                               Output
// ["John","Bob","Christina","Ema"]    1.Bob 
//                                     2.Christina 
//                                     3.Ema 
//                                     4.John

// Hints
// · The sort function rearranges the array in ascending order