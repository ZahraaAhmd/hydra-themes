const passwordInput = document.querySelector(".login_password_input");
const showPassIcon = document.querySelector(".showPassIcon");
const hidePassIcon = document.querySelector(".hidePass");

console.log("pass input sign in", passwordInput);
console.log("show pass icon", showPassIcon);
console.log("hide pass icon", hidePassIcon);

//show password when show icon is clicked
hidePassIcon.addEventListener("click", () => {
  // alert("hide pass");
  passwordInput.type = "password";
  hidePassIcon.style.display = "none";
  showPassIcon.style.display = "inline-block";
});

//hide password when hide icon is clicked
showPassIcon.addEventListener("click", () => {
  // alert("show pass");
  passwordInput.type = "text";
  showPassIcon.style.display = "none";
  hidePassIcon.style.display = "inline-block";
});


