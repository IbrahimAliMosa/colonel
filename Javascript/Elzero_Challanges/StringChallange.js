let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

console.log(a.charAt(13).toUpperCase().repeat(8));

console.log(a.slice(a.indexOf("E"), a.indexOf(" ")).split());

console.log(`${a.substr(a.indexOf("E"), a.indexOf(" "))} ${a.substr(a.indexOf("S"),)}`);

console.log(a[0].toLowerCase() + a.slice(0, a.length - 1).toUpperCase() + a[a.length - 1].toLowerCase());