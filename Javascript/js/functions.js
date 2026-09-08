//Functions
// No parameters , No return
function sum() {
    let a = 5;
    let b = 10;
    console.log(a + b);
}
sum();

//parameters , No return
function sum2(a, b) {
    console.log(a + b);
}
sum2(5, 10);

//parameters , return
function sum3(a, b) {
    return a + b;
}
console.log(sum3(5, 10));

// No parameters , return
function sum4() {
    let a = 5;
    let b = 10;
    return a + b;
}
console.log(sum4());

//Anonymous function || Function expression
let sum5 = function (a, b) {
    return a + b;
}
console.log(sum5(5, 10));

//Arrow function
let sum6 = (a, b) => a + b;
console.log(sum6(5, 10));

//IIFE (Immediately Invoked Function Expression)
(function (a, b) {
    console.log(a + b);
})(5, 10);

//Function constructor
let sum7 = new Function('a', 'b', 'return a + b');
console.log(sum7(5, 10));

//Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

//Default parameters
function sum8(a = 5, b = 10) {
    return a + b;
}

//Rest parameters
function sum9(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

//Callback function
function sum10(a, b, callback) {
    let result = a + b;
    callback(result);
}

//Function hoisting
console.log(sum11(5, 10));

function sum11(a, b) {
    return a + b;
}

//Function closure
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}
let closure = outerFunction(5);
console.log(closure(10));

//Function currying
function sum12(a) {
    return function (b) {
        return a + b;
    };
}
let curriedSum = sum12(5);
console.log(curriedSum(10));

//Function overloading
function sum13(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}

//Function overriding
class Parent {
    sum(a, b) {
        return a + b;
    }
}

class Child extends Parent {
    sum(a, b) {
        return super.sum(a, b);
    }
}

//Function composition
function sum14(a, b) {
    return a + b;
}