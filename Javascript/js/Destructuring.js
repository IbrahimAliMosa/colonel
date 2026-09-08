// Destructuring

// let names = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
// console.log(names[3][2][1])
// let [, , , [a, , [, b]]] = names;

// console.log(a); //Shady
// console.log(b); //Gamal


// const user = {
//     theName: "Ibrahim",
//     theAge: 39,
//     theCountry: "Egypt",
//     theTitle: "Colonel",
// };

// // const { theName, theAge, theCountry, theTitle } = user;
// const { theName :name, theAge: age, theCountry, theTitle } = user;

// console.log(name);
// console.log(age);
// console.log(theCountry);
// console.log(theTitle);

// const user = {
//     theName: "Ibrahim",
//     theAge: 39,
//     theCountry: "Egypt",
//     theTitle: "Colonel",
//     skills: {
//         Html: 50,
//         Css: 70,
//     }
// };

// const { theName :name, theAge: age, theCountry, theTitle, skills: {Html:h, Css:cs}} = user;

// const {html:skillone,css:skilltwo} = user.skills;

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     skills: ["HTML", "CSS", "JavaScript"],
//     addresses: {
//         cairo: "ElAbour",
//         giza: "October",
//     },
// };

// const { theName, theAge, skills: [H, , JS], addresses: { giza } } = user;

// console.log((`You Are ${theName}, Your Age is ${theAge}, You have ${H}, ${JS}, You live in ${giza}`));
