function outer () {
    const name = "Ivan";

    return function () {
        const age = 20;
        console.log(name + " - " + age);
        
    };
}
const inner = outer();
inner ();