// First class function
function execute (operation, operandA, operandB) {
    const result = operation(operandA, operandB);

    console.log(result);
    
}

const sum = (a,b) => a + b;
const subtract = (a,b) => a - b;

// execute (sum, 3, 2);
// execute (subtract, 3, 2);

// Higher order function
function greetingBuilder(solution, title){
    return (name) => {
        console.log(`${solution} ${title} ${name}`);
    };
}

const formalGreeting = greetingBuilder("Hello", "Mr.");
// formalGreeting("Pesho");         //Hello Mr. Pesho
// formalGreeting("Gosho");         //Hello Mr. Gosho

const informalGreeting = greetingBuilder("Merhaba", "brato");
// informalGreeting("Pesho");       //Merhaba brato Pesho
// informalGreeting("Gosho");       //Merhaba brato Gosho

// Function Predicate

function isEven(number){
    return number % 2 === 0;
}
// console.log(isEven(3));      //false
// console.log(isEven(50));     //true

// Pure Function

function sumTwoNums(a, b) {
    return a + b;
}
// console.log(sumTwoNums(3, 4));

//Non-Pure Function   EX:1
function sumTwoRandomNumber(toWhichNum) {
    const a = Math.floor(Math.random(toWhichNum) * 100);
    const b = Math.floor(Math.random(toWhichNum) * 100);
    return (a + b);
}
// console.log(sumTwoRandomNumber());


//Non-Pure Function   EX:2
let personName = "Kircho";

function greeting() {
    console.log(`Hello, ${personName}!`);
}

setTimeout(() => {
    personName = "Ivan";
    greeting();
}, 3000);

greeting();

// Referential Transperancy
const add = (a,b) => a + b;
const mult = (a,b) => a * b;

// const result = add(2, mult(3,4));
const result = add(2, 3*4);

console.log(result);
