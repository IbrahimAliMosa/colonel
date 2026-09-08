let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log((Math.max(... new Set(n1, n2))) * (n1.concat(n2).length)); // => 210

console.log(210); // => 210