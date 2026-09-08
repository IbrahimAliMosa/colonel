// Set
let nums = [1, 1, 1, 2, 2, 2, 2, 3, 4,];
let unique = new Set(nums);

// console.log(unique);
// console.log(unique.size);
// console.log('=================');

// unique.add(11);
// console.log(unique);
// console.log(unique.size);
// console.log('=================');

// unique.delete(10);
// console.log(unique);
// console.log(unique.size);
// console.log('=================');

// console.log(unique.has(8));
// console.log('=================');

// unique.clear();
// console.log(unique);
// console.log(unique.size);
// console.log('=================');

// let iterator = unique.keys();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// unique.forEach((el) => console.log(el));
// Set vs WeakSet

// let ws = new WeakSet([{ A: 1 }, { B: 2 }]); // only accsept objects
// No size
// No values , Keys, entries
// No for each