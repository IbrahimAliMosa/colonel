let dateNow = new Date();
// console.log(date);
// console.log(Date.now()); // time in millisecondes from 1970

// let birthday = new Date("Apr 19,2006");
// let dateDiff = dateNow - birthday;
// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// Get Time
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth()); // jan => 0 dec => 11
// console.log(dateNow.getDay()); // sun => 0 fri => 7
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

// Set Time
// dateNow.setTime(0); // access the time with milliseconds
// dateNow.setDate(1); // day of the month
// dateNow.setFullYear(2026, 11); // year , month => option , day => option
// dateNow.setMonth(10); // [0-11] , day [1-31] => option
// dateNow.setHours(5); // [0-23]
// dateNow.setMinutes(5); // [0-59]
// dateNow.setSeconds(5); // [0-59] , ms [0-999] => option


/*
    new Date(timestamp)
    new Date(Date string)
    new Date(Numeric Values)

    Format => 19 april 2006
    "Apr 19 2006"
    "19/04/2006"
    "2006-04-19" => ISO International Standdard
    "2006 4"
    "2006"
    "06"
    2006, 3, 19, 2, 10, 0 => year, month(index), day, hrs, min, sec
    2006, 3, 19 => year, month(index), day
    "2006-04-19T06:10:00Z" => Date T time Z=> timezone

    Date.parse("String") => Read date from string  to milliseconds
*/

// Track operation time put start and end
// performance.now();
// performance.mark();

// generator function

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

// delegate generator functiion

function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
}

function* generateAll() {
    yield* generateNumbers();
    yield* generateLetters();
    yield* [4, 5, 6];
}

// .return() => stop the generator


// infinte numbers

// Modules [Export,Import]
// make the file type in the script tag module
// export { things to export "can use alias to rename it"}

// in the other file import{ things to import "can use alias to rename it"}
// named export vs default export
// import all => import * as name form "./fileName.js"
