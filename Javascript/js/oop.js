// oop => Object Oriented Programming

// Constructor function
// function Team(p1, p2, p3, p4, nation) {
//     this.p1 = p1;
//     this.p2 = p2;
//     this.p3 = p3;
//     this.p4 = p4;
//     this.nation = nation;
// }

// let Aur = new Team('Dok', 'Top', 'Zyoll', 'Refus', 'Mangolia');
// let S2G = new Team('Solkay', 'Hamsig', 'Lost', 'Kamikazi', 'Turkey');
// let Ngx = new Team('Rauof', 'Koops', 'Satan', 'Lord', 'Bahrian');
// let Tian = new Team('Eagle', 'Qzz', 'Milu', 'Aching', 'China');

// console.log(`${Aur.p1} - ${Aur.p2} - ${Aur.p3} - ${Aur.p4}`);
// console.log(`${S2G.p1} - ${S2G.p2} - ${S2G.p3} - ${S2G.p4}`);
// console.log(`${Ngx.p1} - ${Ngx.p2} - ${Ngx.p3} - ${Ngx.p4}`);
// console.log(`${Tian.p1} - ${Tian.p2} - ${Tian.p3} - ${Tian.p4}`);

// class Team {
//     constructor(p1, p2, p3, p4) {
//         this.p1 = p1;
//         this.p2 = p2;
//         this.p3 = p3;
//         this.p4 = p4;
//     }
// }

// let Aur = new Team('Dok', 'Top', 'Zyoll', 'Refus');
// console.log(Aur);
// console.log(Aur instanceof Team);
// console.log(Aur.constructor === Team);


// class Team {
//     constructor(p1, p2, p3, p4) {
//         this.p1 = p1;
//         this.p2 = p2;
//         this.p3 = p3;
//         this.p4 = p4;
//     }
//     introduction() {
//         return (`${Aur.p1} - ${Aur.p2} - ${Aur.p3} - ${Aur.p4}`);
//     }
// }

// let Aur = new Team('Dok', 'Top', 'Zyoll', 'Refus');

// console.log(Aur.introduction); // native code
// console.log(Aur.introduction());

/*
    update properties
    built in constructor
    new String('')
*/

// static keyword

// Inheritance
// Class derived extends parent{}
// super keyword

// Example on Inheritance and super

// class Team {
//     constructor(nation, coach) {
//         this.n = nation;
//         this.c = coach;
//     }
// }

// class Aur extends Team {
//     constructor(nation, coach, igl) {
//         super(nation, coach);
//         this.igl = igl;
//     }
// }

// class AurPlayer extends Aur {
//     #e;
//     constructor(nation, coach, igl, p2, p3, p4) {
//         super(nation, coach, igl)
//         this.p2 = p2;
//         this.p3 = p3;
//         this.p4 = p4;
//     }
// }
// let team = new Team('Mon', 'Archer');
// let aur = new Aur('Mon', 'Archer', 'DOK');
// let aurora = new AurPlayer('Mon', 'Archer', 'DOK', 'TOP', 'ZYOLL', 'REFUS');
// console.log(aurora);

// Encapsulation
// #var => private

// prototype

// Object neta data

// const myObj = {
//     a: 1,
//     b: 2,
// };

// Object.defineProperty(myObj, "c", {
//     writable: true, // can write on it
//     enumerable: true, // can iterate on it
//     configurable: true, // can delete it or redefine it
//     value: 3
// });

// for (let prop in myObj) {
//     console.log(prop, myObj[prop]);
// }
// console.log(delete myObj.c);
// for (let prop in myObj) {
//     console.log(prop, myObj[prop]);
// }

const myObj = {
    a: 1,
    b: 2,
};

Object.defineProperties(myObj, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    },
});

console.log(Object.getOwnPropertyDescriptors(myObj));
console.log(Object.getOwnPropertyDescriptor(myObj, "d"));