function echoFunction(input) {
    console.log(input.length); // Print the length of the input string
    console.log(input);        // Print the input string itself
}

echoFunction ("Hello, JavaScript!");
echoFunction ("strings are easy");

// Echo Function

// Write a JS function that takes one string parameter and prints on two lines the length of the parameter and then the unchanged parameter itself.

// Input                    Output
// 'Hello, JavaScript!'     18 
//                          Hello, JavaScript!
// 'strings are easy'       16 
//                          strings are easy

// Hints
// · Write a function that receives a single parameter.
// · Use the console.log function to print text on the console. Each call prints a newline automatically.
// · The string's length property is used to determine how many characters are in a given string