let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=1008cat=topics';
let urll1 = 'elzero.academy';
let urll2 = 'http://elzero.com';
let urll3 = 'https://elzero.net';
let urll4 = 'https://www.elzero.io';
let urll5 = 'https://www.elzero.info:8080/articles.php?id=1008cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.(org|io|info|com|net|academy)(:[0-9]{4}\/[a-z]+.[a-z]+\?id=[0-9]{4}[a-z]{3}=[a-z]+)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

console.log('====================');

console.log(urll1.match(re));
console.log(urll2.match(re));
console.log(urll3.match(re));
console.log(urll4.match(re));
console.log(urll5.match(re));