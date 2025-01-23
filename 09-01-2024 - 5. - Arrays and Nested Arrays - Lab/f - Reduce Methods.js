const numbers = [1, 2, 3, 4, 5];

// Sum with reduce
const sum = numbers.reduce((accumulator, current, index , array) => {
    
    console.log(index, array);

    return accumulator + current;
}, 0);


const shortSum = numbers.reduce((accumulator, current) => accumulator + current, 0);
