function calculator() {

    const html = {
        s1 : "",
        s2: "",
        output: ""
    };

    function calc (a, b , sign) {
        const signs = {
            "+": (a,b) => a + b,
            "-": (a,b) => a - b
        };

        return signs[sign] (Number(a), Number(b));
    }
    return {
        init:(a,b,c) => {
            html.s1 = document.querySelector(a);
            html.s2 = document.querySelector(b);
            html.output = document.querySelector(c);
        },
        add:() => {
            html.output.value = calc(html.s1.value, html.s2.value, "+");
        },
        subtract: () => {
            html.output.value = calc(html.s1.value, html.s2.value, "-");
        }
    };
}

// const calculate = calculator ();
// calculate.init ('#num1', '#num2', '#result');


// Simple Calculator

// Create a function calculator which returns an object that can modify the DOM. 
// The returned object should support the following functionality:
// · init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors.
// · add () - adds the numerical value of the element corresponding to selector1 to the numerical value of the element
//  corresponding to selector2 and then writes the result in the element corresponding to resultSelector.
// · subtract () - subtracts the numerical value of the element corresponding to selector1 from 
// the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.

// Input
// There will be no input your function must only provide an object.

// Output
// Your function should return an object that meets the specified requirements.

// Constraints
// · All commands will always be valid, there will be no nonexistent or incorrect input.
// · All selectors will point to single textbox elements.
// · Use the given skeleton to solve this problem.

// Sample execution
// const calculate = calculator ();
// calculate.init ('#num1', '#num2', '#result');