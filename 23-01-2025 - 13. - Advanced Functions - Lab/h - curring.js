//  Sum of 3 numbers
const sum = (a,b,c) => a + b + c;
// console.log(sum (1,2,3));                   //6

// Sum Curried
const currySum = (a) => (b) => (c) => a + b + c;
// console.log(currySum(1)(2)(3));             //6

// Desctructured currying
// const currySumA = currySum(1);
// const currySumB = currySumA(2);
// const currySumC = currySumB(3);
// console.log(currySumC);                     //6

// Memoization

    const results = new Map();



// Recursive Function
const factorial = (num) => {

    if (results.has(num)){
        return results;
    }
    
    if (num === 1) {
        return 1;
    }

    const result = num * factorial(num-1)
    console.log(result);
    
    return result;
};

const result = factorial(5);
console.log(result);            //120       5 * 4 * 3 * 2 * 1 
