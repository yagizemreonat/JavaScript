function solve(array) {
    
    let num = 1;
    let result = [];

        array.forEach(element => {                  // Add the current number to the array
            if (element === "add") {
                result.push(num);                   // Remove the last number from the array
            } else if (element === "remove") {
                result.pop();
            }

            num++;                                  // Increment the current number for the next command

        });

        if (result.length >= 1 ) {
            console.log(result.join("\n"));         // Combines array elements into a single string where each element is separated by a newline (\n).
        } else {
            console.log("Empty");       
    }
}

solve (['add','add','add','add']);
solve (['add', 'add', 'remove', 'add', 'add']);
solve (['remove', 'remove', 'remove']);


// Add and Remove Elements

// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove".
// The initial number is 1.
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// Each input command should increase that number, regardless of what it is.
// The input comes as an array of strings. Each element holds a command.
// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".

// Input                                   Output

// ['add','add','add','add']               1
//                                         2
//                                         3
//                                         4

// ['add', 'add', 'remove', 'add', 'add']  1 
//                                         4 
//                                         5 

// ['remove', 'remove', 'remove']          Empty