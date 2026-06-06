// sort arr greater than 300

// let arr = [100,250,500,700];
// let newArr = []
// arr.forEach(function (elem){
//     if(elem >= 300) newArr.push(elem);
// })
// console.log(newArr);

// Average of array

// let marks = [80,90,70,85,95]
// let sum = marks.reduce((acc,val) => {
//     return acc+val
// })
// let average = sum / marks.length
// console.log(average);

// Most Frequent Number
// let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

// let count = {};
// for (let i = 0; i <= numbers.length; i++) {
//   let num = numbers[i];
//   if (count[num]) {
//     count[num] = count[num] + 1;
//   } else {
//     count[num] = 1;
//   }
// }
// // console.log(count);
// let frequency = 0;
// let mostFrequent;
// for (let key in count) {
//   if (count[key] > frequency) {
//     frequency = count[key];
//     mostFrequent = key;
//   }
// }

// console.log(mostFrequent);

//  Updating values


// let user = {
//     name: "Ritik",
//     age: 20
// };
// user.age = 21;
// console.log(user);

// let user = {
//     name: 'Ritik',
//     age: 20,
//     city: 'Bhopal'
// };
// for (const [key, value] of Object.entries(user)) {
//     console.log(key,value);
// }

// Higest Paid Employee

// Calculate discount 

// Dynamic sum function 

// function sum(...num){
//     return num.reduce((acc,val) => {
//         return acc+val;
//     },0)
// }
// console.log(sum(1,2,3,4,5))


// Find Adult Users 

let users = [
    {name: 'Ritik', age:20},
    {name: 'Aman', age:16},
    {name: 'Priya', age:25}
]

function getAdults(users){
    return users.filter((users) => {
        if(users.age>=18) return user
    })
}
console.log(getAdults(users))


