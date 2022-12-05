function validateForm() {

  var email = document.getElementById("email");
  var error = document.getElementById("emailError");
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    error.innerHTML = "Please enter a valid email address";
    return false;
  }

  error.innerHTML = "";
  return true;
}