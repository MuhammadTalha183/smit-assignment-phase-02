// Level 1 - Beginner (Understand the Basics)
// map()
// Q1

// Given an array of numbers:

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(num => num * num );
console.log(squareNumbers); // Output: [1, 4, 9, 16, 25]

// Convert every string into uppercase.

const fruits = ["apple","banana","mango"];

const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "MANGO"]

// Q3

// Add "Mr." before every name.

const names = ["Ali","Ahmed","Talha"];

const mrName = names.map(name => `MR.${name}`)

console.log(mrName)

// Q4

// Extract only student names.

const students = [
    {name:"Ali", age:20},
    {name:"Ahmed", age:22},
    {name:"Sara", age:19}
];

const extractName = students.map(name => name.name);

console.log(extractName)

// Q5

// Convert prices into dollars.

const prices = [100,200,300];

const dollers = prices.map(price => (price / 280).toFixed(2));

console.log(dollers)