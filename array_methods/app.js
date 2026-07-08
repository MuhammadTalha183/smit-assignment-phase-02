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


// ************************* filter() ********************************
// Q6

// Keep only even numbers.

const numberss = [2,5,8,9,12,15];

const evenNumbers = numberss.filter(even => even % 2 == 0);

console.log(evenNumbers)


// Q7

// Keep only students older than 20.

const studentss = [
{name:"Ali",age:20},
{name:"Ahmed",age:23},
{name:"Sara",age:18}
];

const maxAge = studentss.filter(age => age.age > 20);

console.log(maxAge);


// Q8

// Filter products that cost more than 1000.

const products=[
{name:"Laptop",price:90000},
{name:"Mouse",price:800},
{name:"Keyboard",price:1500}
];


const expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);


// Q9

// Filter only active users.

const users=[
{name:"Ali",active:true},
{name:"Ahmed",active:false},
{name:"Sara",active:true}
];

const activeuser = users.map(active => active.active == true);

console.log(activeuser)


// Q10

// Keep only words longer than 5 characters.

const words=["cat","elephant","car","computer","pen"];

const char = words.filter(char => char.length > 5);

console.log(char);

// find()
// Q11

// Find the first number greater than 10.

const numbers=[2,5,7,15,20];