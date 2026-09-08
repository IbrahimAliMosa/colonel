// Random argument
/*
    Hello name, Your age is age, You are available for hire
    Hello name, Your age is age, You are not available for hire
*/
// typeof(arg) String  => Name
// typeof(arg) Number  => Age
// typeof(arg) Boolean  => Status

// function showDetails(a, b, c) {
//     let Name, Age, Status;
//     typeof a === "string" ? (Name = a) : typeof b === "string" ? (Name = b) : (Name = c);
//     typeof a === "number" ? (Age = a) : typeof b === "number" ? (Age = b) : (Age = c);
//     typeof a === "boolean" ? (Status = a) : typeof b === "boolean" ? (Status = b) : (Status = c);
//     console.log(`Hello ${Name}, Your age is ${Age}, You are ${Status ? "available" : "not available"} for hire`);
// }

// showDetails(35, true, "ibrahim");


// 2nd chall

// let names = function (...names) {
//     return `String [${names.join("], [")}] => Done!`;
// }
// let names = (...names) => `String [${names.join("], [")}] => Done !`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + +nums;

// console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

// let calcRegular = function (one, two, ...nums) {
//   return one + two + +nums;
// };

// console.log(calcRegular(10, myNumbers[0], myNumbers[1])); // 80

// 3rd chall

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
    .split(",")
    .filter((ele) => isNaN(ele))
    .map((ele) => (ele === "_" ? " " : ele))
    .join("")
    .slice(true, -isNaN(myString));

console.log(solution); // Elzero Web School