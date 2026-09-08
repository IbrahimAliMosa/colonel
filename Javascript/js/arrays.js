// Arrays in JavaScript
// This file shows common array methods, iteration, and the spread/rest operators.

let numbers = [1, 2, 3, 4, 5];

// 1. Access and update
console.log("Original array:", numbers);
numbers[0] = 10;
console.log("Updated first element:", numbers);

// 2. Length
console.log("Array length:", numbers.length);

// 3. Add and remove elements
numbers.push(6); // add to the end
numbers.pop(); // remove from the end
numbers.unshift(0); // add to the beginning
numbers.shift(); // remove from the beginning
console.log("After push/pop/unshift/shift:", numbers);

// 4. Search and index
console.log("Index of 3:", numbers.indexOf(3));
console.log("Does the array include 3?", numbers.includes(3));

// 5. Iteration
for (let i = 0; i < numbers.length; i++) {
    console.log("For loop:", numbers[i]);
}

for (let number of numbers) {
    console.log("For...of:", number);
}

numbers.forEach(function (number) {
    console.log("forEach:", number);
});

// 6. Transform an array
let doubled = numbers.map(function (number) {
    return number * 2;
});
console.log("Mapped array:", doubled);

let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log("Filtered array:", evenNumbers);

let sum = numbers.reduce(function (total, number) {
    return total + number;
}, 0);
console.log("Reduced sum:", sum);

let found = numbers.find(function (number) {
    return number > 3;
});
console.log("Found value:", found);

let foundIndex = numbers.findIndex(function (number) {
    return number === 3;
});
console.log("Found index:", foundIndex);

let someAreEven = numbers.some(function (number) {
    return number % 2 === 0;
});
let allArePositive = numbers.every(function (number) {
    return number > 0;
});
console.log("Some are even:", someAreEven);
console.log("All are positive:", allArePositive);

// 7. Sorting
let sortedNumbers = [...numbers].sort(function (a, b) {
    return a - b;
});
let reversedNumbers = [...numbers].reverse();
console.log("Sorted numbers:", sortedNumbers);
console.log("Reversed numbers:", reversedNumbers);

// 8. Slice, splice, concat, join
let sliced = numbers.slice(1, 4);
console.log("Sliced array:", sliced);

let copyArray = [...numbers];
copyArray.splice(2, 1, 99);
console.log("Spliced array:", copyArray);

let letters = ["a", "b", "c"];
let digits = [1, 2, 3];
let combined = letters.concat(digits);
console.log("Concatenated array:", combined);

console.log("Joined string:", numbers.join(" - "));

// 9. Spread operator
let lettersCopy = [...letters];
console.log("Copied letters:", lettersCopy);

let men = ["John", "Paul", "George", "Ringo"];
let women = ["Yoko", "Linda", "Pattie", "Maureen"];
let allPeople = [...men, ...women];
console.log("Combined people:", allPeople);

console.log("Maximum value:", Math.max(...numbers));

// 10. Rest parameters
function sumAll(...values) {
    let total = 0;
    for (let value of values) {
        total += value;
    }
    return total;
}

console.log("Sum with rest parameters:", sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));