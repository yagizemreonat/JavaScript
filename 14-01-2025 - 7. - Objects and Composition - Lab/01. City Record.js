function cityRecord(name, population, treasury) {
    
const result = {
    name: name,
    population: population,
    treasury: treasury,
};
    return result;
}

console.log(cityRecord('Tortuga',7000,15000));
console.log(cityRecord('Santo Domingo',12000,23500));

// City Record

// You will receive a city’s name (string), 
// population (number), 
// and treasury (number) as arguments, 
// which you will need to set as properties of an object and return it.

// Input                                   Output
// 'Tortuga',7000,15000                    { name: 'Tortuga', population: 7000, treasury: 15000 }
// 'Santo Domingo',12000,23500             { name: 'Santo Domingo', population: 12000, treasury: 23500 }