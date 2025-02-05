class Rectangle {
    constructor (w, h, c) {
        this._width = w;
        this._height = h;
        this._color = c;
    }
        get width() {
            return this._width;
        }

        get height() {
            return this._height;
        }

        get color() {
            return this._color.charAt(0).toLocaleUpperCase() + this._color.slice(1);
        }
     
    calcArea = () => this._width * this._height;
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

// Rectangle

// Write a class Rectangle for a rectangle object. 
// It needs to have a width (Number), height (Number), and color (String) properties, 
// which are set from the constructor, and a calcArea() method, that calculates and returns the rectangle’s area.

// Input
// The constructor function will receive valid parameters.

// Output
// The calcArea() method should return a number.

// Submit the class definition as is, without wrapping it in any function.
 
// Input                                               Output                
// let rect = new Rectangle(4, 5, 'Red');              
// console.log(rect.width);                            4
// console.log(rect.height);                           5
// console.log(rect.color);                            Red
// console.log(rect.calcArea());                       20