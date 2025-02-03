function upperCase(input) {

const arr = [];
const pattern = /\w+/g;

while(valid = pattern.exec(input)) {
    arr.push(valid[0].toUpperCase());
}
console.log(arr.join(", "));
}

upperCase('Hi, how are you?');
upperCase('hello');
 
// *Words Uppercase

// Write a program that extracts all words from a passed-in string and converts them to upper case. 
// The extracted words in the upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.

// Input                   Output
// 'Hi, how are you?'      HI, HOW, ARE, YOU 
// 'hello'                 HELLO

// Hints · You may need to use a Regular Expression or check for all delimiters that can be found in a sentence 
// (ex. ",", " ", "!", "?" and so on).