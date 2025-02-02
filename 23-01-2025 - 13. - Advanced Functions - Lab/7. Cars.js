function commandProcessorIIFE(commands) {
    
    let commandProcessor = (function () {
        let arr = [];

        return {

            create: (name, inherit, otherName) => {

                if (inherit === 'inherit') {

                    let element = arr.find(x => x.name === otherName);

                    let newElement = Object.create(element);

                    newElement.name = name;

                    arr.push(newElement);

                } else {

                    let newElement = new Foo(name);
                    arr.push(newElement);
                }

            },
            set: (name, property, value) => {
                let element = arr.find(x => x.name === name);
                
                element [property] = value;
            },
            print: (name) => {
                let element = arr.find(x => x.name === name);
                let messages = [];
                for (let propName in element) {
                    if (propName !== 'name') {
                        let propValue = element[propName];
                        let message = `${propName}:${propValue}`;
                        messages.push(message);
                    }
                }
                console.log(messages.join(','));
                
            }
        };
    })();

    for (let cmd of commands) {
        let [cdmName, name, property, value] = cmd.split(' ');
        commandProcessor[cdmName](name,property,value);
    }

    function Foo(name) {
        this.name = name;
    }

}

commandProcessorIIFE(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']);
// Output      color:red model:new,color:red


// Cars

// Write a closure that can create and modify objects. All created objects should be kept and be accessible by name. 
// You should support the following functionality:

// · create <name> - creates an object with the supplied <name>
// · create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
// · set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
// · print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - 
//     the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.

// Input
// The input will come as an array of strings - each string represents a command to be executed from your closure.

// Output
// For every print command - you should print on the console all properties of the object in the above-mentioned format.

// Constraints
// · All commands will always be valid, there will be no nonexistent or incorrect input.

// Input       ['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']
// Output      color:red model:new,color:red