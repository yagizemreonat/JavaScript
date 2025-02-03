function walking (arg1, arg2, arg3){

let stepsNumber = Number (arg1);
let strideMeters = Number (arg2);
let studentSpeed = Number (arg3); 

let distanceMeters = stepsNumber * strideMeters; //distance to walk

let speedMeterSec = studentSpeed / 3.6;

let time = distanceMeters / speedMeterSec; 

let rest = Math.floor(distanceMeters / 500); 

let timeMin = Math.floor(time /60);
let timeSec = Math.round(time%60);
let timeHr = Math.floor(time / 3600);

let totalMinutes = timeMin + rest;

if (totalMinutes >= 60) {
    timeHr += Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60; 
}
console.log(
    (timeHr < 10 ? "0" : "") + timeHr + ":" + (totalMinutes <10 ? "0" : "") + totalMinutes + ":" + (timeSec < 10 ? "0" : "") + timeSec
);

}
walking(4000, 0.60, 5);
walking(2564, 0.70, 5.5);

// Time to Walk

// Write a function that calculates how long it takes a student to get to university. The function takes three numbers:
// · The first is the number of steps the student takes from their home to the university
// · The second number is the length of the student's footprint in meters
// · Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.

// Input           Output              Input               Output
// 4000, 0.60, 5   00:32:48            2564, 0.70, 5.5     00:22:35