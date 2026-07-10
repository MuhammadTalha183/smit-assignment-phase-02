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

const num = [2,5,7,15,20];


const greaterTen = num.find(n => n > 10);

console.log(greaterTen); // Output: 15

// Q12

// Find the student whose name is "Sara".

const findStudent = studentss.find(name => name.name === "Sara");

console.log(findStudent); // Output: {name: "Sara", age: 18}


// Q13

// Find the first expensive product (>5000).

const expensiveProduct = products.find(product => product.price > 5000);

console.log(expensiveProduct); // Output: {name: "Laptop", price: 90000}

// Q14

// Find the first even number.

const firstEven = num.find(n => n % 2 === 0);

console.log(firstEven); // Output: 2

// Q15

// Find the first user whose account is active.

const firstActiveUser = users.find (u => u.active === true);

console.log(firstActiveUser); // Output: {name: "Ali", active: true}


// reduce()
// Q36

// Find maximum number.

const maximumNumber = num.reduce((max, current ) => {
    return current > max ? current : max;
})
console.log(maximumNumber); // Output: 20

// Q37

// Find minimum number.

const minimumNumber = num.reduce((min, current)=>{
    return current < min ? current : min 
})

console.log(minimumNumber); // Output: 2


// Q38

// Calculate average marks.


const marks = [80, 90, 70, 85, 95];

const averageMarks = marks.reduce((avg , current )=> {
    return avg + current  / marks.length
} , 0)

console.log(averageMarks); // Output: 84

// Q39

// Count total students.

const myStudents = [
    {name:"Ali",age:20},
    {name:"Ahmed",age:22},
    {name:"Sara",age:19}
];

const totalStudents = myStudents.reduce((total , current )=> {

    // console.log(total)
    // console.log(current)
    return total + 1
} , 0)

console.log(totalStudents); // Output: 3

// Q40

// Create one string.

const arr = ["I","Love","JavaScript"]

const string = arr.reduce((acc, current) => {
    // console.log(acc)
    // console.log(current)
    return acc + " " + current;
}, "");

console.log(string); // Output: "I Love JavaScript"


// "
// 🔴 Level 3 - Advanced
// map()
// Q41

// Flatten users into only emails.

const userss = [
    {name:"Ali",email:"a@gmail.com"},
    {name:"Ahmed",email:"b@gmail.com"},
    {name:"Sara",email:"c@gmail.com"}
];

const emails = userss.map(user => user.email);
console.log(emails); // Output: ["a@gmail.com", "b@gmail.com", "c@gmail.com"]

// Q42

// Convert products into invoice format.

const productss = [
    {name:"Laptop",price:90000},
    {name:"Mouse",price:800},
    {name:"Keyboard",price:1500}
];

const invoice = productss.map(product => `${product.name}: $${product.price}`);
console.log(invoice); // Output: ["Laptop: $90000", "Mouse: $800", "Keyboard: $1500"]   


// Q43

// Generate usernames

const userList = [
    {firstName:"Ali",lastName:"Khan"},
    {firstName:"Ahmed",lastName:"Ali"},
    {firstName:"Sara",lastName:"Ahmed"}
];  

const usernames = userList.map(user => `${user.firstName}_${user.lastName}`);   
console.log(usernames); // Output: ["Ali_Khan", "Ahmed_Ali", "Sara_Ahmed"]