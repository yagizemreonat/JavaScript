function sayHi (name, age) {
    console.log(`-Hello, my name is ${name} and I am ${age} y/o. \n -Hi my name is ${this.name}!`
    );
}

// Use call
const newContext = {
    name: "Mariya",
};

const argumentLists = ["Ivan", 43];
sayHi.call(newContext, ...argumentLists);
//-Hello, my name is Ivan and I am 43 y/o. 
//  -Hi my name is Mariya!

console.log("==================================================");

// Use Apply
sayHi.apply(newContext, argumentLists); 
//-Hello, my name is Ivan and I am 43 y/o. 
//  -Hi my name is Mariya!

console.log("==================================================");

// Bind
const modifiedSayHi = sayHi.bind(newContext);
modifiedSayHi("Gosho", 32);
//-Hello, my name is Gosho and I am 32 y/o. 
//  -Hi my name is Mariya!