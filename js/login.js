// add button eventListener

document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;

  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  if (userEmail == "my@bap.com" && userPassword == "baba") {
    window.location.href = "banking.html";
  } else {
    alert("Invalid son. Toi ki amr chele?????");
  }
  emailField.value = "";
  passwordField.value = "";
});
