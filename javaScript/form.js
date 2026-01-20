console.log(`Hey! How are you ?`);

// Function defination here
function loginCredentials() {

    // let us assume, these are the stored details of the user
    let username = "sam@gmail.com";
    let password = "xyz";

    // getting the input from the user through dom

    let user = document.getElementById("user").value;
    let passcode = document.getElementById("passcode").value;

    // Applying the conditions here
    if (username === user){
        console.log(`Valid user name`);
        if(password === passcode) {
            console.log(`Both Email and password are valid`);
            alert(`Welcome! ${user}, as both email and password are valid`);
        }
        else {
            console.log(`Valid Email, but Invalid password`);
            alert(`Sorry ${user}! you will not be able to login as password is incorrect`);
        }
    }
    else{
        console.log(`Invalid username, so you won't be able to login`);
        alert(`Sorry! you won't be able to login`)
    }
}



/*
// Implementing the switch statement
// Getting input from user
let a = parseInt(prompt(`Enter the first number`));
let b = parseInt(prompt(`Enter the second number`));

// For storing the value of c
let c;
let num = prompt(`Enter any operator (+,-,*,/)`);

//Starting the switch block
switch(num)
{
    case "+": //Addition
    {
        c = a + b;
        alert(`The Addition of ${a} and ${b} is ${c}`);
        break;
    }

    case "-": //Subtraction
    {
        c = a - b;
        alert(`The Subtraction of ${a} and ${b} is ${c}`);
        break;
    }

    case "*": // Multiplication
    {
        c = a * b;
        alert(`The product of ${a} and ${b} is ${c}`);
        break;
    }

    case "/": // Division
    {
        c = a / b;
        alert(`The result for the division is ${c}`);
        break;
    }

    default: // Invalid Result
    {
        alert(`Invalid operations`);
    }
}
*/