// Task#01

let numbers1 = [];
let sum1 = 0;
for (let i = 0; i < 5; i++) {
  let val = Number(prompt("Enter a number"));
  numbers1[i] = val;
  sum1 += numbers1[i];
}
console.log(`sum of numbers is ${sum1}`);

// Task#02

function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

let arr = [2, 5, 11, 99, 56];
let maxNum = findMax(arr);
console.log(`The maximum number in the array is ${maxNum}`);

// Task#03

let string = prompt("Enter a sentence ");
let test = [];
for (let i = 0; i < string.length; i++) {
  test[i] = string[i];
}
console.log(`Length of the sentence is : ${test.length}`);

// Task # 04

let numbers = [];
let sum = 0;
let avg = 0;
for (let i = 0; i < 5; i++) {
  let val = Number(prompt("Enter a number"));
  numbers[i] = val;
  sum += numbers[i];
}
avg = sum / numbers.length;
console.log(`average of array elements  is ${avg}`);

// Task#05

function checkMultiples(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 || array[i] % 5 === 0) console.log(array[i]);
  }
}

let elements = [3, 6, 15, 21, 29, 31];
console.log("The Numbers which are multiple of 3  or 5 are : ");

checkMultiples(elements);

// Objects Challenge
// Task#01

let Car1 = { Make: "Honda", Model: "Civic", Year: 2019 };

let Car2 = { Make: "Toyota", Model: "Camry", Year: 2020 };
let Car3 = { Make: "Ford", Model: "mustang", Year: 2021 };

console.log(Car1);
console.log(Car2);
console.log(Car3);

// Task#02  Part 1

let Book = {
  Title: prompt("Enter the title of book : "),
  Author: prompt("Enter the Author of book : "),
  numOfPages: Number(prompt("Enter the number of pages of book : ")),
};

console.log(Book);

// Task#02 Part 2

const findOldestPerson = (arr) => {
  let oldestAge = -1;
  let oldName = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > oldestAge) {
      oldestAge = arr[i].age;
      oldName = arr[i].personName;
    }
  }
  return oldName;
};

const Persons = [
  { personName: "Ali", age: 22 },
  { personName: "Shafqat", age: 21 },
  { personName: "Ahmad", age: 16 },
];
console.log(Persons);

let Oldest = findOldestPerson(Persons);
console.log(Oldest);

// Task#2   Part 3

let Movies = [];

for (let i = 0; i < 3; i++) {
  let Movie = {
    Title: prompt("Enter title of movie : "),
    Director: prompt("Enter name of Director"),
    Year: prompt("Enter Year : "),
  };
  Movies.push(Movie);
}

Movies.sort((a, b) => a.Year - b.Year);

console.log("Movie Details (Sorted by Year):");
for (let i = 0; i < Movies.length; i++) {
  console.log(`Title: ${Movies[i].Title}`);
  console.log(`Director: ${Movies[i].Director}`);
  console.log(`Year: ${Movies[i].Year}`);
  console.log("----------");
}

// Task#2   Part 4

const calculateTotalPrice = (items) => {
  let totalPrice = 0;
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  return totalPrice;
};

const Products = [
  { name: "Laptop", price: 100000 },
  { name: "Mobile", price: 50000 },
  { name: "Tablet", price: 70000 },
];

const Total = calculateTotalPrice(Products);
console.log(`Total price of Products is = ${Total}`);
