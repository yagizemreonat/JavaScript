// Array
// const number = [2541, 1554792, -543, 41];
// // const name = ['yagiz', 'ivana', 'mine'];
// console.log(number);
// console.log(number[0]);


// const person = {                        // key - value pair = name key = value pair niki   - name niki property
//     name: "Niki",
//     age: 21,
//     city: "Sofia",
// };

// console.log(person);
// console.log(person["name"]);
// console.log(person.name);


// const cat = {
//     name: "Future",
//     gender: "Male",
//     age: 1,
//     furColor: "Cappuccino",
//     eyeColor: "Blue"
// };

// How to modify property value 
// cat.eyeColor = "Blue";

// //Shorthand syntax
// let firstName= "Pesho";
// const person = {
//     firstName,
//     age: 21,
// };
// console.log(person);                        //{firstName: 'Pesho', age: 21}

// or

// let firstName= "Pesho";
// let age = 21;
// const person = {
//     firstName,
//     age,
// };
// console.log(person);                     //{firstName: 'Pesho', age: 21}


// Access property with dot notation
// console.log(person.firstName);              //Pesho

// Access property with bracket notation
// console.log(person["age"]);           //21

// Access to access property dynamically in bracket notation
// let dynamicPropertyKey = "firstName";
// console.log(person[dynamicPropertyKey]);

// Set property name by different rules
// const employee = {
    // "first-name": "Nikolay",
// };
// console.log(employee);          //{first-name: 'Nikolay'}

// How to access the property of employee?
// console.log(employee["first-name"]);        //Nikolay

// Access non-existing property
// console.log(employee.lastName);     //undefined

// Object Destructuring Assignment
// const {name} = cat;
// const arr = [1,2,3];
// const {gender, name} = cat;
// console.log(name,gender);
 
// Rest operator
// const {furColor, name, age, ...others} = cat;
// console.log(furColor, name, age,);      //Cappuccino Future 1
// console.log(others);                    //{gender: 'Male', eyeColor: 'Blue'}


// Delete property
// let myObject = {first:1, second:2, third:3};
// delete myObject.first;          // iki yontemde ayni isi goruyor
// delete myObject["second"];      //  ``
// console.log(myObject);          //{third: 3}

// Reference Value

// let myOtherObject = myObject;                       
// const myObject2 = {second: 2, third: 3};                

// myOtherObject.age = 123;                            
// console.log("myObject: ", myObject);                  //myObject:  {second: 2, third: 3, age: 123}
// console.log("myOtherObject: ", myOtherObject);        //myOtherObject:  {second: 2, third: 3, age: 123}  
// console.log(myObject === myOtherObject);              //true
// console.log("myObject2: ", myObject2);                //myObject2:  {second: 2, third: 3}
// console.log(myObject === myObject2);                  //false  

// Use dynamic property name in object literal

const propName = "isEco";
const house = {
    color: "White",
    sqMeter: 300,
    [propName]: true,
};
console.log(house);     //{color: 'White', sqMeter: 300, isEco: true}

const { color } = house;
console.log(color);     //White

// Rename destructured variables
const { color: colorFromHouse } = house;
console.log(colorFromHouse);        ////White
 
