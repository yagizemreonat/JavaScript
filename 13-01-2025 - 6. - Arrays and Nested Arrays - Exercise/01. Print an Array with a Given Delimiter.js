function print(words, delimiter) {

    let result = words.join(delimiter);
    console.log(result);
    
}

print (['One','Two','Three','Four','Five'],'-');
print (['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');

// Print an Array with a Given Delimiter

// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.

// Input                                                       Output 
// ['One','Two','Three','Four','Five'],'-'                     One-Two-Three-Four-Five 
// ['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_'     How about no?_I_will_not_do_it!