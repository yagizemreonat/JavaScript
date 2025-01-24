function townPopulation(input) {
    const townRegistry = {};

     for (const line of input) {
        const [town, population] = line.split(" <-> ");

        if (!townRegistry[town]) {
            townRegistry[town] = 0;
        }
        
        townRegistry[town] += Number (population);
     }
     for (const town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);  
        }
}

// townPopulation(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344','Mexico City <-> 23401925','Istanbul <-> 1000'])


// Town Population

// You have been tasked to create a registry for different towns and their population.

// Input
// The input comes as array of strings. 
// Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.

// Output
// As output, you must print all the towns and their population.
  
// Input           ['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'] 
// Output          Sofia : 1200000 Montana : 20000 New York : 10000000 Washington : 2345000 Las Vegas : 1000000

// Input           ['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344','Mexico City <-> 23401925','Istanbul <-> 1000'] 
// Output          Istanbul : 101000 Honk Kong : 2100004 Jerusalem : 2352344 Mexico City : 23401925