//for loop : iterates a specific number of times
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop : continues as long as a specified condition is true
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
// do while loop : executes the block at least once, then continues as long as a specified condition is true
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//for...in loop : iterates over the enumerable properties of an object
const person = { fname: "John", lname: "Doe", age: 25 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//for...of loop : iterates over the values of an iterable object
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

//forEach loop : executes a provided function once for each array element
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit) {
    console.log(fruit);
});

//break statement : terminates the loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue statement : skips the current iteration and continues with the next one
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//labelled statement : allows you to label a loop and use break or continue with that label
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

//nested loops : a loop inside another loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

//infinite loop : a loop that never ends (use with caution)
while (true) {
    console.log("This will run forever!");
}
