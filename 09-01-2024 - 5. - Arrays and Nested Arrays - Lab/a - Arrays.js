// Array
const names = ["Ani", "Pesho", "Martin", "Yoanna"];


// // Don't use
// // Mixed Array
// const mixed = [0.1123, true, {name: "Pesho"}, [7354]];
// console.log(mixed);
// console.log(names);

// // Sparse array
// const sparseArray = [];
// sparseArray.length = 100; 
// console.log(sparseArray);
// sparseArray[0] = "Pesho";
// sparseArray[80] = "Ani";
// console.log(sparseArray);

// // Dense array
// const denseArray = [undefined, undefined, 1, undefined, 23];
// console.log(denseArray);

// // Get the first and the last element
// const firstElement = names[0]; 
// const lastElement = names[names.length - 1];
// names.push("Mariq");
// console.log(firstElement);
// console.log(lastElement);
// console.log(names.length);
// console.log(names[names.length - 1]);

// // Accessing non-existing index
// console.log(names[true]);
// console.log(names["Dog"]);
// console.log([-123]);

// For-of
for (const name of names) {
    // console.log(name); 
}

// Iterator - Non-mandatory
const iterator = names[Symbol.iterator]();
    // console.log(iterator.next()); //{value: 'Ani', done: false}
    // console.log(iterator.next()); //{value: 'Pesho', done: false}
    // console.log(iterator.next()); //{value: 'Martin', done: false}
    // console.log(iterator.next()); //{value: 'Yoanna', done: false}
    // console.log(iterator.next()); //{value: undefined, done: true}

    let result = iterator.next();

    while (!result.done) {                  //Ani
        // console.log(result.value);          //Pesho
        result = iterator.next();           //Martin
    }                                       //Yoanna

// Arra destructuring
const [firstName, secondName] = names;
// console.log(firstName);                      //Ani
// console.log(secondName);                     //Pesho

//Array destructuring with rest operator
const [fName, sName, ... others] = names;       //... olmazsa martini ekliyor yoannayi eklemiyor
console.log(fName);                             //Ani
console.log(sName);                             //Pesho
console.log(others);                            // ['Martin', 'Yoanna']