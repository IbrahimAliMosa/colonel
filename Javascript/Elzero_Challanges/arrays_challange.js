let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();
my.reverse();
console.log(my);

console.log(my.slice(++zero, counter));

console.log(my[counter - 1].replace("Ma", "El"));

console.log(my[counter - 1].charAt(counter + 1) + my[counter - 1].charAt(counter + 2).toUpperCase());