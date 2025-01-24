const cars = ["BMW", "Mercedes", "Audi", "Toyata", "Audi", "Alfa",];

// Join         ne yazarsan array icerisine ekliyor

const list = cars.join (" <=> ");       
// console.log(list);                  //BMW <=> VW <=> Toyata <=> Mercedes

// Concat       iki array i birlestiriyor

const moreCars = ["Porsche", "Lambo", "Ferrari"];
const allCars = cars.concat(moreCars);
// console.log(allCars);                   //['BMW', 'Mercedes', 'Audi', 'Toyata', 'Audi', 'Alfa', 'Porsche', 'Lambo', 'Ferrari']

// Slice
const firstCars = cars.slice(0, 3);
const lastCars = cars.slice(3);
const carsCopy = cars.slice();          //copy with different reference
// const refToCars = cars;                 //the same reference

// refToCars === cars // true
// carsCopy === cars //false

console.log(cars);          //['BMW', 'Mercedes', 'Audi', 'Toyata', 'Audi', 'Alfa']
console.log(firstCars);     //['BMW', 'Mercedes', 'Audi']
console.log(lastCars);      //['Toyata', 'Audi', 'Alfa']
console.log(carsCopy);      //['BMW', 'Mercedes', 'Audi', 'Toyata', 'Audi', 'Alfa']   copy with different reference

// Includes
const hasCar = cars.includes("BMW");
console.log(hasCar);

// IndexOf              var mi varsa kacinci 
console.log(cars);                      // ['BMW', 'Mercedes', 'Audi', 'Toyata', 'Audi', 'Alfa']
console.log(cars.indexOf("Audi"));      //true

const indexOfCar = cars.indexOf("Audi");        //2
if (indexOfCar < 0) {
    console.log("Cannot find this car");        //cars.indexOf("bmw") - Cannot find this car
} else {
    console.log(`Car is found at index ${indexOfCar}`);     //Car is found at index 2
}