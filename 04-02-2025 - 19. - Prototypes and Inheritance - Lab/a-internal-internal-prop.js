const car = {
    name: "VW"
};

// define internal property
Object.defineProperty(car, "model", {
    value: "Golf",
    enumerable: true,
});


// car.model = "G0lf 2";

// Check if property is enumerable
const internalProperty = Object.getOwnPropertyDescriptor(car, "model");
console.log(internalProperty);

// Set property with enumerable false
Object.defineProperty(car, "hidden", {
    value: "secret",
    enumerable: false, //hides from iterator
});

// Hidden property doesn't iterate
for(const propName in car){
    console.log(propName);
}

// Get Keys (without the hidden property)

const keys = Object.keys(car);
console.log(keys);

// convert to JSON (without hidden property)
console.log(JSON.stringify(car, null, 4));

// Shows all properties
console.log(car);

