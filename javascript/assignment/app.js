// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights

// ************************************ Code ***************************
//var city= prompt("Enter your city name ")

// if (city == "karachi"){
//     console.log("Welcome TO  City OF Lights")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// ************************************ Code ***************************

// var gender = prompt("Enter you Gender")

// if (gender == "male"){
//     console.log("Good Morinig sir ")
// }else{
//     console.log("Good morning Madam ")
// }

// ************************************ Code ***************************
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
// 4. Write 

// var traficsignal = prompt("Enter a trafic signal color ")

// if (traficsignal == "red"){
//     console.log("Must Stop")
// }
// else if (traficsignal == "Yellow "){
// console.log("Ready to go")
// }
// else if(traficsignal == "green"){
//     console.log("Moved NOw ")
// }
// else{
//     console.log("Enter the valid color ")
// }

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// ************************************ Code **************************
// let fuel = prompt("Enter your fuel in remaing (In leters ) ")
// if (fuel <= 0.25){
//     console.log("Please Refuel your Car ")
// }

// . Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// ************************************ Code **************************

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// ************************************ Code **************************
let sub1 = Number ( prompt("Enter you subject 1 marks"))
let sub2 = Number (prompt("Enter you subject 2 marks"))
let sub3 = Number (prompt("Enter you subject 3 marks"))

let total_marks = 300
let marks_obtained = sub1 + sub2 +sub3

let percentage = (marks_obtained / total_marks ) * 100

if (percentage >= 80){
    console.log(`Marks Sheet \n \n \n Total Marks : ${total_marks} \n
        Marks Obtained : ${marks_obtained} \n 
        Percentage : ${percentage} \n 
        Grade : A-one \n 
        Remarks : Excellent `)
}else if (percentage >= 70){
console.log(`Marks Sheet \n \n \n Total Marks : ${total_marks} \n
        Marks Obtained : ${marks_obtained} \n 
        Percentage : ${percentage} \n 
        Grade : A-one \n 
        Remarks : Good `)

}else if (percentage >= 60){
   console.log(`Marks Sheet \n \n \n Total Marks : ${total_marks} \n
        Marks Obtained : ${marks_obtained} \n 
        Percentage : ${percentage} \n 
        Grade : A-one \n 
        Remarks : You need to improve `)

}else{
   console.log("Fail")
}