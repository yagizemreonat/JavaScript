const cars = ["BMW", "Mercedes", "Audi", "Toyata", "Audi", "Alfa",];

// ForEach

cars.forEach((car, index) => {
    // console.log(`${index +1} - ${car}`);
});

// Map -> Transformer
// const allCarsToLower = cars.map((car) => car.toLowerCase());
// const allCarsToUpper = cars.map((car) => car.toUpperCase());

// console.log(allCarsToLower);  // ['bmw', 'mercedes', 'audi', 'toyata', 'audi', 'alfa']
// console.log(allCarsToUpper);  // ['BMW', 'MERCEDES', 'AUDI', 'TOYATA', 'AUDI', 'ALFA']

// Some

// console.log(cars);
// const hasCarWithMe = cars.some((car) => car.startsWith("Me"));      // me true xme false
// console.log(hasCarWithMe);                                          //true


// Find

// const carStartWithA = cars.find((car) => car.startsWith("A"));
// console.log(cars);                                                  //['BMW', 'Mercedes', 'Audi', 'Toyata', 'Audi', 'Alfa']
// console.log(carStartWithA);                                        //Audi

// Filter

const carStartWithA = cars.filter((car) => car.startsWith("A"));
console.log(cars);                                                  //['BMW', 'Mercedes', 'Audi', 'Toyata', 'Audi', 'Alfa']
console.log(carStartWithA);                                        //['Audi', 'Audi', 'Alfa']
