// function declaration
function add(num1, num2){
    return num1 + num2;
}

// function expression
const add2 = function(num1, num2){
    return num1 + num2;
}

// arrow function
const add3 = (num1, num2) => num1 + num2;
const multiplay = (a, b) => a * b;
const isFirstBig = (a, b) => a > b;

const result = add3(20, 30);
const mult = multiplay(5, 4);
const isBig = isFirstBig(10, 5);
console.log(isBig);