// grading system 

let name = prompt("Enter your Name:");
let urdu = Number(prompt("Enter marks for Urdu:"));
let eng = Number(prompt("Enter marks for English:"));
let math = Number(prompt("Enter marks for Math:"));
let isl = Number(prompt("Enter marks for Islamiat:"));
let phy = Number(prompt("Enter marks for Physics:"));

let totalMarks = 500;
let obtainedMarks = urdu + eng + math + isl + phy;

let percentage = (obtainedMarks / totalMarks) * 100;

let grade = "";

// grading logic
if (percentage > 100 || percentage < 0) {
    console.log("Enter valid marks!");
} 
else if (percentage >= 80) {
    grade = "A+";
} 
else if (percentage >= 70) {
    grade = "A";
} 
else if (percentage >= 60) {
    grade = "B";
} 
else if (percentage >= 50) {
    grade = "C";
} 
else if (percentage >= 40) {
    grade = "D";
} 
else {
    grade = "F";
}

// display result in browser
document.writeln(`
    <h2>Result Sheet</h2>
    <h3>Name: ${name}</h3>

    <table border="1" cellpadding="10">
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
        <tr><td>Urdu</td><td>${urdu}</td></tr>
        <tr><td>English</td><td>${eng}</td></tr>
        <tr><td>Math</td><td>${math}</td></tr>
        <tr><td>Islamiat</td><td>${isl}</td></tr>
        <tr><td>Physics</td><td>${phy}</td></tr>
        <tr><th>Total</th><th>${obtainedMarks} / 500</th></tr>
        <tr><th>Percentage</th><th>${percentage.toFixed(2)}%</th></tr>
        <tr><th>Grade</th><th>${grade}</th></tr>
    </table>
`);