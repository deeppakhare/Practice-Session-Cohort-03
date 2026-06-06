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
let numbers = [1, 2, 3, 2,2,2,2,2,2, 4, 2, 5, 1, 1, 1];

let count = {};
for (let i = 0; i <= numbers.length; i++) {
  let num = numbers[i];
  if (count[num]) {
    count[num] = count[num] + 1;
  } else {
    count[num] = 1;
  }
}
// console.log(count);
let frequency = 0;
let mostFrequent;
for (let key in count) {
  if (count[key] > frequency) {
    frequency = count[key];
    mostFrequent = key;
  }
}

console.log(mostFrequent);
