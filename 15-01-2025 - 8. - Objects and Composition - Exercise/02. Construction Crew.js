function constructionCrew(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
        worker.dizziness = false;
    }
    return worker;
}

console.log(constructionCrew({ weight: 80,experience: 1,levelOfHydrated: 0,dizziness: true }));
// Output  { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

console.log(constructionCrew({ weight: 120,experience: 20,levelOfHydrated: 200,dizziness: true }));
// Output  { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

console.log(constructionCrew({ weight: 95,experience: 3,levelOfHydrated: 0,dizziness: false }));
// Output  { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }

// Construction Crew

// Write a program that receives a worker object as a parameter and modifies its properties. 
// Workers have the following structure:

// {
// weight: Number,
// experience: Number,
// levelOfHydrated: Number,
// dizziness: Boolean  
// }

// Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. 
// If you receive a worker whose dizziness property is set to true it means he needs to intake some water to be able to work correctly. 
// The required amount is 0.1ml per kilogram per year of experience. 
// The required amount must be added to the existing amount (to the levelOfHydrated). 
// Once the water is administered, change the dizziness property to false.

// Workers who do not have dizziness should not be modified in any way. Return them as they were.

// Input
// Your function will receive a valid object as a parameter.

// Output
// Return the same object that was passed in, modified as necessary.

// Input Output

// Input   { weight: 80,experience: 1,levelOfHydrated: 0,dizziness: true } 
// Output  { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

// Input   { weight: 120,experience: 20,levelOfHydrated: 200,dizziness: true } 
// Output  { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

// Input   { weight: 95,experience: 3,levelOfHydrated: 0,dizziness: false } 
// Output  { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }