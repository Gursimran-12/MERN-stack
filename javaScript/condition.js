/*
// Using the if statement

let num = parseInt(prompt(`Enter any number from 1 to 100`))
if(num >40) {
    console.log(`The number is ${num}`);
}

// using if-else statement

let marks = parseInt(prompt(`Enter the marks here: `))
if(marks >=60) {
    console.log(`You have passed the exam!`);
}
else {
    alert(`You have failed the exam!`);
}

// using if-else-if statement

let color = prompt("Enter any color, starting with the capital letter");
if(color == "Red"){
    console.log(`Stop, as the color is ${color}`);
}
else if(color == "Yellow"){
    console.log(`Be Ready to Go, as the color is ${color}`);
}
else if(color == "Green") {
    console.log(`Go, as the color is ${color}`);
}
else {
    alert(`Invalid color`);
}
*/

// Authentication using the conditional statements

// Let us assume, following data shows the stored username and password of the user.

let username = "Gursimran";
let password = "abc@123#";

//Getting the values from the user 

let user = prompt(`Enter the username here`);
let passcode = prompt(`Enter the password here`);

// Checking, if they will be able to login or not

if(username == user && password == passcode) { // Checking both username and password 
    console.log(`Welcome!, ${user}`);
}
else {
    alert(`Invalid username or password`); // Alert, if we enter wrong username and password 
}

