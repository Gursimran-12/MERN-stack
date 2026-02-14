function validateForm()
{
  let userName = document.getElementById("userName").value;
  if(userName === "")
  {
    console.log("Username should not be empty");
    alert("Kindly Fill the Username");
  }
}

