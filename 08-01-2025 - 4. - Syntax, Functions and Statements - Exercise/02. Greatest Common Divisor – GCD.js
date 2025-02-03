function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y); 

    while(y) {
        var t = y;

        y = x % y;

        x = t;
    }
    console.log(x);
}

gcd (15, 5);
gcd (2154, 458);

// Greatest Common Divisor - GCD

// Write a function that takes two positive numbers as input and computes the greatest common divisor.
// The input comes as two positive integer numbers.
// The output should be printed on the console.
 
// Input       Output              Input           Output
// 15, 5       5                   2154, 458       2