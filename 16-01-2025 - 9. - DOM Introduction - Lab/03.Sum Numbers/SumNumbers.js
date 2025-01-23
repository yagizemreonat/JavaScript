function calc(num1,num2) {

const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const sumEl = document.getElementById("sum");

const fistNum = Number(num1El.value);
const secondNum = Number(num2El.value);

sumEl.value = fistNum + secondNum;
}
