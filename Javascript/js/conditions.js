// // 1. if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if...else statement
if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are too young to vote.");
}

// 3. if...else if...else statement
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// 4. switch statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

// 5. ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// 6. nested if statement
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot.");
} else {
    if (temperature >= 20) {
        console.log("It's warm.");
    } else {
        console.log("It's cold.");
    }
}