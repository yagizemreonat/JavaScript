function solve(input) {
    let result = "";
    
    for (let i = 0; i < input.length; i++) {
        const el = input[i];
        if (i % 2  === 0) {
            result += `${el} `;
        }
    }
    console.log(result.trim());  //20 40 60    60'dan sonra bosluk oluyor trimle o boslugu siliyor
}

solve(['20', '30', '40','50', '60']);
solve(['5', '10']);

// Even Position Element

// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

// Input                               Output  
// ['20', '30', '40','50', '60']       20 40 60 
// ['5', '10']                         5