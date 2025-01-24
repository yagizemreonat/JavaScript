function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
 
console.log(getDaysInMonth(1, 2012)); // Output: 31
console.log(getDaysInMonth(2, 2021)); // Output: 28


// Days in a month

// Write a JavaScript function to get the number of days in a month.
// The input comes as two numeric parameters. The first element is the month, the second is the year.
// The output must return the number of days in a month for a given year.
 
// Input       Output
// 1, 2012     31
// 2, 2021     28

// Hints
// · Use Date()