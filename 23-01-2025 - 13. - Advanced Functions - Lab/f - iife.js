// IIFE
// (function () {
//     console.log("Hello, world!");
// })();                                       //Hello, world!   () IIFE

// More Complex IIFE
const result = (function (name) {
    console.log("Hello, " + name + "!");        //Hello, Pesho!
    return `Mr. ${name}`;
})("Pesho");                                    
    // console.log(result);                     //Mr. Pesho

// IIAF - Immediately Invoked Arrow Function

(() => console.log("JS is the best!"))();       // JS is the best!
