// string methods
const name = "Ibrahim Ali Mosa";

console.log(name.charAt(0)); // returns the character at index 0
console.log(name.indexOf("i")); // returns the index of the first occurrence of "i"
console.log(name.lastIndexOf("i")); // returns the index of the last occurrence of "i"
console.log(name.length); // returns the length of the string
console.log(name.trim()); // returns the string with whitespace removed
console.log(name.toUpperCase()); // returns the string in uppercase
console.log(name.toLowerCase()); // returns the string in lowercase
console.log(name.repeat(2)); // returns the string repeated 2 times
console.log(name.startsWith("I")); // returns true if the string starts with "I"
console.log(name.startsWith("A")); // returns true if the string starts with "A"
console.log(name.endsWith("a")); // returns true if the string ends with "a"
console.log(name.includes("a")); // returns true if the string includes "a"
console.log(name.includes("c")); // returns true if the string includes "c"
console.log(name.replace(" ", "-")); // returns the string with spaces replaced by hyphens
console.log(name.replaceAll(" ", "-")); // returns the string with all spaces replaced by hyphens
console.log(name.padStart(20, "*")); // returns the string padded at the start with "*" to a total length of 20
console.log(name.padEnd(20, "*")); // returns the string padded at the end with "*" to a total length of 20

let first_name = name.slice(0, 7); // returns a substring from index 0 to 6
console.log(first_name); // Output: Ibrahim
let last_name = name.slice(8, 11); // returns a substring from index 8 to 10
console.log(last_name); // Output: Ali
let full_name = name.slice(0, 11); // returns a substring from index 0 to 10
console.log(full_name); // Output: Ibrahim Ali
let family_name = name.slice(12); // returns a substring from index 12 to the end
console.log(family_name); // Output: Mosa
let first_char = name.slice(0, 1); // returns the first character of the string
console.log(first_char);
let last_char = name.slice(-1); // returns the last character of the string
console.log(last_char);
let name2 = name.slice(0, name.indexOf(" ")); // returns the first name
let name3 = name.slice(name.indexOf(" ") + 1); // returns the last name
console.log(name2);
console.log(name3);
let name4 = name.split(" "); // splits the string into an array of substrings
console.log(name4); // Output: [ 'Ibrahim', 'Ali', 'Mosa' ]


// Method chaining : calling multiple methods on the same string
let name5 = name.trim().toUpperCase().replaceAll(" ", "-").padStart(20, "*").padEnd(30, "*");
console.log(name5); // Output: ********IBRAHIM-ALI-MOSA********

// + Concatenation : joining two or more strings together
let firstName = "Ibrahim";
let lastName = "Ali";
let fullName = firstName + " " + lastName;