// import xyz from './module1.mjs'
// import {b, a, pl as func} from './module1.mjs'
// import * as utils from './module1.mjs'


// console.log(utils.a);
// console.log(utils.b);
// console.log(utils.pl());
// console.log(utils.default);


// object
// const user = {
//     name: "Max",
//     age: 34,
//     great() {
//         console.log("Hello!");
//     }
// };

// console.log(user.name);
// user.great();


// Destructuring objects
// const {name: userName, age,} = {
//     name: "Aman",
//     age : 23
//   }
// console.log(userName);
// console.log(age);
// object


// class(blueprint)
// class User{
//     constructor(username, age){
//         this.age = age,
//         this.name = username
//     }

//     great() {
//         console.log("hi!");
//     }
// }

// const user1  = new User("Aman", 23);
// console.log(user1);
// user1.great();

//class


// array
// const hobbies = ["Sport","Cooking", "Reading"];
//  hobbies.push("Working");
// console.log(hobbies); 

// const index = hobbies.findIndex((item)=> item === "Sport");
// console.log(index);

// const newHobbies = hobbies.map((item) => item + "!");
// console.log(newHobbies);

// const hobbiesObject = hobbies.map((item) => ({ text: item}));
// console.log(hobbiesObject);

// // Destructuring array

// const [firstName, lastName] = ["Amanuel", "Fenthaun"];
// console.log(firstName);
// console.log(lastName);
// // array

// spread operator 

// const hobbies = ["Sport","Working"];
// console.log(...hobbies);
// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies,...newHobbies];
// console.log(mergedHobbies);

// spread




// control statement 

// const password  = prompt("your password!");

// console.log(password);
// const hobbies = ["Sport", "Reading"];

// for (const hobby of hobbies){
//     console.log(hobby);
// }


// using function as a value

// function handleTimeOut1() {
//     console.log("Time out");
// }
// function handleTimeOut2(){
//     console.log("Time Out ... again!");
// }

// setTimeout(handleTimeOut1, 2000);
// setTimeout(handleTimeOut2, 3000);
// setTimeout(() => {
//     console.log("More Time out .... again!");
// }, 4000);

// function great(greatFn){
//     greatFn();
// }

// great(() => {
//     console.log("hi!");
// })


