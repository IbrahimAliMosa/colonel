// let myPromise = new Promise((resolve, reject) => {
//     let connect = true;
//     if (connect) {
//         resolve("connection Established");
//     }
//     else {
//         reject("Conection Failed");
//     }
// }).then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// const myPromise = new Promise((resolve, reject) => {
//     let employees = ['A', 'B', "C", 'D'];
//     employees.length === 4 ? resolve(employees) : reject(Error("Number of Emplyees is not 4"));
// });

// myPromise
//     .then((resolveValue) => {
//         resolveValue.length = 2;
//         return resolveValue;
//     })
//     .then((resolveValue) => {
//         resolveValue.length = 1;
//         return resolveValue;
//     })
//     .then((resolveValue) => {
//         console.log(`The choosen Employee is ${resolveValue}`);
//     })
//     .catch((rejectedReason) => console.log(rejectedReason))
//     .finally(console.log("Done!"));

// const getData = (apiLink) => {
//     return new Promise((resolve, reject) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function () {
//             if (this.readyState === 4 & this.status === 200) {
//                 resolve(JSON.parse(this.responseText));
//             }
//             else {
//                 reject(Error("No Data Found"));
//             }
//         };
//         myRequest.open("GET", apiLink);
//         myRequest.send();
//     });
// };

// getData("https://api.github.com/users/elzerowebschool/repos").then((result) => {
//     result.length = 10;
//     return result;
// }).then((result) => console.log(result[0].name)).catch((reject) => console.log(reject));


fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
    let myData = result.json();
    return myData;
}).then((myDta) => {
    myDta.lenght = 10;
    return myDta;
}).then((myData) => {
    console.log(myData[0].name);
})


/*
  Promise
  - All
  - All Settled
  - Race
*/

// const myFirstPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam The First Promise");
//     }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Iam The Second Promise");
//     }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam The Third Promise");
//     }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// async function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No Users Found");
//   }
// }

// console.log(getData());

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Iam The Good Promise");
//         reject(Error("Iam The Bad Promise"));
//     }, 3000);
// });

// async function readData() {
//     console.log("Before Promise");
// myPromise.then((resolvedValue) => console.log(resolvedValue));
// console.log(await myPromise);
//     console.log(await myPromise.catch((err) => err));
//     console.log("After Promise");
// }

// readData();

/*
  Async & Await With Try, Catch, Finally
*/

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Iam The Good Promise");
//     }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

// async function fetchData() {
//     console.log("Before Fetch");
//     try {
//         let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
//         console.log(await myData.json());
//     } catch (reason) {
//         console.log(`Reason: ${reason}`);
//     } finally {
//         console.log("After Fetch");
//     }
// }

// fetchData();