const cars = ["BMW", "VW", "Toyata","Mercedes",];

// Pop                  //son elementi kaldiriyor
const lastElement = cars.pop();
// console.log(cars);                  // ['BMW', 'VW', 'Toyata']
// console.log(lastElement);           //Mercedes

// Push                 //son elemente ekleme yapiyor
// const x = cars.push("Ferrari", "a", "b", "c");
// console.log(cars);      //['BMW', 'VW', 'Toyata', 'Ferrari', 'a', 'b', 'c']
// console.log(x);         //4    lenght

// Shift                 //ilk elementi kaldiriyor 
cars.shift();
// console.log(cars);      //['VW', 'Toyata', 'Ferrari']

// Unshift              //ilk element ekliyor
cars.unshift("Hyundai");
// console.log(cars);              //['Hyundai', 'VW', 'Toyata', 'Ferrari', 'a', 'b', 'c']

// Splice
// console.log(cars);
const removedElements = cars.splice(1,2);
// console.log("---------");

// console.log(removedElements);    // ['VW', 'Toyata']        1 2 olan vw toyatayi kaldirdi
// console.log(cars);                  //['Hyundai', 'Ferrari', 'a', 'b', 'c']
cars.splice(1, 0, "Cat", "Mouse");
// console.log(cars);                  //['Hyundai', 'Cat', 'Mouse', 'Ferrari', 'a', 'b', 'c']

// Fill
const nums = [1,2,3,4,5];
// console.log(nums);          //[1, 2, 3, 4, 5]
nums.fill(0, 2, 4);               // parantez icine yazdigini belirtiyor, birsey belirtmezsen undefined
// console.log(nums);          //[1, 2, 0, 0, 5]

const empty = [];       
empty.length = 20;
console.log(empty);         //[…]
empty.fill(0);
console.log(empty);         //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
empty[13] = 123412312;
console.log(empty);         //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123412312, 0, 0, 0, 0, 0, 0]



// Reverse              tersine cevirme
// console.log(nums);          //[1, 2, 0, 0, 5]
// const x = nums.reverse();
// console.log(x);             //[5, 0, 0, 2, 1]
