const numbers = [12, -11, 0, 1, 65, 23, 2, 4, 2, 7, 11]

// Default sorting -> Sorting by ASCII chars
numbers.sort();
// console.log(numbers);       //numaralari 01234 diye siralamiyor 1 11 12 2 gibi ascii ye gore siraliyor

// Sort numer by ascending order 

// numbers.sort((a,b) =>{
//     if (a>b) {
//         return 1;
//     } else if (a < b) {
//         return - 1;
//     }else {
//         return 0;
//     }
// });
// console.log(numbers);           //[-11, 0, 1, 2, 2, 4, 7, 11, 12, 23, 65] 1234 normal siralama yapiyor

// Shorter syntax - ASC
numbers.sort((a,b) => a - b);
// console.log(numbers);               //[-11, 0, 1, 2, 2, 4, 7, 11, 12, 23, 65] normal siralama

//Shorter syntax - DESC order
numbers.sort((a,b) => b - a);
// console.log(numbers);               //[65, 23, 12, 11, 7, 4, 2, 2, 1, 0, -11]  tersten siralama

// Sorting Strings - ASC order

const cars = ["BMW", "VW", "Toyata","Mercedes",];
console.log(cars);      //['BMW', 'VW', 'Toyata', 'Mercedes'] normal

cars.sort((a,b) => a.localeCompare(b));
console.log(cars); 

// Sorting Strings - DESC order
cars.sort((a,b) => b.localeCompare(a));
console.log(cars);          //['BMW', 'Mercedes', 'Toyata', 'VW']  
