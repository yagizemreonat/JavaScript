function calorieObject(input) {
    let object = {};

    for (let i = 0; i < input.length; i+=2) {
        let food = input[i];
        let calories = input[i+1];
        
        calories = Number(calories);
        object[food] = calories;
    }
    return object;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52']));
console.log(calorieObject(['Potato', '93', 'Skyr', '63','Cucumber', '18', 'Milk', '42']));

// Calorie Object

// Write a function that composes an object by given properties. 
// The input comes as an array of strings. Every even index of the array represents the name of the food. 
// Every odd index is a number that is equal to the calories in 100 grams of the given product. 
// Assign each value to its corresponding property, and finally print the object.
// The input comes as an array of string elements.
// The output should be printed on the console.

// Input Output

// Input   ['Yoghurt', '48', 'Rise', '138','Apple', '52'] 
// Output  { Yoghurt: 48, Rise: 138, Apple: 52 }

// Input   ['Potato', '93', 'Skyr', '63','Cucumber', '18', 'Milk', '42'] 
// Output  { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }