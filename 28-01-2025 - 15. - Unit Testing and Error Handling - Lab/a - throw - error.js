// cosnt x = 5;        Uncaught SyntaxError ...
// const x = 5;        


function riskyOperation(num) {
    if (num < 50) {
        throw new Error("Task has failed!");        //Uncaught Error Error: Task has failed!
    }

    return "Task passed succesfully!";
}

try {
    const result = riskyOperation(13);
    console.log(result);
    
} catch (err) {
    // Error handling here
    console.error(err.message);     //Task has failed!
}

console.log(riskyOperation(51));    //Task passed succesfully!
