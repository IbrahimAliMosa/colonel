// RegularExpression

// let n1 = "Hello ahmed , AHMED";
// let pattern = /ahmed/igm;

// console.log(n1.match(pattern));

/* Modifers
    i => case insenstive
    g => global
    m => multi lines
*/

// return null if no matching
// can use new RegExp("pattern","modifer(s)")

// ranges

// let tld = "Com Net Org Io Code Info";
// let tldRe = /(info|org |io)/ig;
// console.log(tld.match(tldRe));

// let nums = "0123456789";
// let notnums = "0123456789";
// let numsRe = /[0-2]/g;
// let notnumsRe = /[^0-2]/g;

// console.log(nums.match(numsRe));
// console.log(notnums.match(notnumsRe));


//[a-z]
//[^a-z]
//[A-Z]
//[^A-Z]
//[0-9]
//[^0-9]

/* Character classes

    . => matches any character except the new line
    \w => matches word character [0-9] [a-z] [A-Z] underscores
    \W => negation of \w
    \d => matches digits [0-9]
    \D => negation of \d
    \s => white space characters
    \S => negation of \s
    \b => matches at the begging or the end of a word
    \B => negation of \b
*/

// Test method
// patter.test(input) => return true or false


// Quantifires
/*
    n+ => one or more
    n* => zero or more
    n? => one or zero

    n{x} => number of
    n{x,y} => range
    n{x,} => at least x

    $ => end with something
    ^ => start with something
    ?= => followed by something
    ?! => not followed by something
*/

// with replace and replaceAll
// form validation