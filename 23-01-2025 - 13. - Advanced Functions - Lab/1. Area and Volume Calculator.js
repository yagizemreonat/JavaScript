function solve(area, vol, input) {
    const data = JSON.parse(input);
    const result = [];

    for (const line  of data) {
        // console.log(line);
        
        result.push({
            area: area.call(line),
            volume: vol.call(line),
        });
    }

    // console.log(JSON.stringify(result));
    
    return result;
}
     
function area() {
return Math.abs(this.x * this.y);
};
 
function vol() {
return Math.abs(this.x * this.y * this.z);
};
 
solve(
    area, 
    vol, 
    `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`
);


 


// Area and Volume Calculator

// Write a function that calculates the area and the volume of a figure, which is defined by its coordinates (x, y, z).

// area()
// function area() {
// return Math.abs(this.x * this.y);
// };

// vol()
// function vol() {
// return Math.abs(this.x * this.y * this.z);
// };

// solve()
// function solve(area, vol, input) {
// //ToDo....
// }

// Input
// You will receive 3 parameters - the functions area and vol and a string, which contains the figures' coordinates.
// For more information check the examples.

// Output
// The output should be returned as an array of objects. Each object has two properties: the figure's area and volume.

// [
// { area: ${area1}, volume: ${volume1} },
// { area: ${area2}, volume: ${volume2} },
// . . .
// ]

// Note:
// Submit only the solve function.
 
// Input       area, vol, `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]` 
// Output      [ { area: 2, volume: 20 }, { area: 49, volume: 490 }, { area: 10, volume: 100 } ]

// Input       area, vol, `[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]` 
// Output      [ { area: 220, volume: 2200 },{ area: 329, volume: 1645 },{ area: 440, volume: 0 },{ area: 10000, volume: 1000000 },{ area: 4400, volume: 1100000 } ]