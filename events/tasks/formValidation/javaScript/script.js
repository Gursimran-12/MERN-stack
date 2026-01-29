function validateForm() {
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const emailId = document.getElementById("emailId").value;
    const uPassword = document.getElementById("uPassword").value;
    const error = document.getElementsByClassName("error");

    if (username == " ") {
        console.log("Name field is required");
        return false
    }

    return true;
}


