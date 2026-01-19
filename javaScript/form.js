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
        console.log(`Invalid user name`);
        if(password === passcode) {
            console.log(`Valid password, but Invalid email`);
            alert(`Sorry ${user}! you will not be able to login as email is not valid`);
        }

        else {
            console.log(`Both Email and password are Incorrect`);
            alert(`Sorry ${user}! you won't be able to login as both email and password are invalid`);
        }
    }
}