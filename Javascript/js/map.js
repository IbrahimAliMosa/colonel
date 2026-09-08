// let mymap = new Map();
// the key can be anything 
// mymap.set(1, "Top");
// console.log(mymap);
// console.log(mymap.get(1));

// methods

// add

// mymap.set(2, "DOK");

let mynewmap = new Map([
    [1, 'Top'],
    [2, 'Dok'],
    [3, 'Zyoll'],
    [4, 'Refus'],
]);

console.log(mynewmap);

// to get the value
mynewmap.get(1);

//size
console.log(mynewmap.size);

console.log(mynewmap.delete(2));
console.log(mynewmap.size);
// mynewmap.clear();

console.log(mynewmap.has(3));


// weakmap

let wm = new WeakMap(); // key can object only