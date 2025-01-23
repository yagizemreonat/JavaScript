function heroicInverntory(arr) {
    let heroes = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].trim() === ''){
            continue;
        }
        let [name, level, items] = arr[i].split (' / ');

        level = Number(level);

        items = items ? items.split(', '): [];

        heroes.push({
            name,
            level,
            items
        });
    }

    return JSON.stringify(heroes);
}
console.log(heroicInverntory(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest,DestructionSword','Hes / 1 / Desolator, Sentinel, Antara']));
console.log(heroicInverntory(['Jake / 1000 / Gauss, HolidayGrenade']));



// Heroic Inventory

// In the era of heroes, every hero has his items that make him unique. 
// Create a function that creates a register for the heroes, with their names, level, and items, if they have such. 
// The register should accept data in a specified format, and return it presented in a specified format.

// Input
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

// Output
// The output is a JSON representation of the data for all the heroes you’ve stored. 
// The data must be an array of all the heroes. Check the examples for more info.
 
// Input   ['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest,DestructionSword','Hes / 1 / Desolator, Sentinel, Antara'] 
// Output  [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

// Input   ['Jake / 1000 / Gauss, HolidayGrenade'] 
// Output  [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]

// Hints
// · We need an array that will hold our hero data. That is the first thing we create.

// · Next, we need to loop over the whole input and process it. Let’s do that with a simple for loop.

// · Every element from the input holds data about a hero, however, the elements from the data we need are separated by some delimiter, 
// so we just split each string with that delimiter.

// · Next, we need to take the elements from the string array, which is a result of the string split, and by destructuring assignment syntax, 
// we assign the array properties. 
// Don’t forget to parse the number.

// · However, here we remember there is something special about the items, so read the problem definition again, 
// you will notice that there might be a case where the hero has no items; 
// in that case, using destructuring is ok and when there are no items, 
// our property items will be undefined and trying to spit it will throw an error. 
// That is why we need to perform a simple check using the ternary operator.

// · If there are any items in the input, the variable will be set to the split version of them. If not, it will just be set to an empty array.

// · We have now extracted the needed data – we have stored the input name in a variable, we have parsed the given level to a number, 
// and we have also split the items that the hero holds by their delimiter, which would result in a string array of elements. 
// By definition, the items are strings, so we don’t need to process the array we’ve made anymore.

// · Now what is left is to add that data into an object and add that object to the array.

// · Lastly, we need to turn the array of objects we have made, into a JSON string, which is done by the JSON.stringify() function