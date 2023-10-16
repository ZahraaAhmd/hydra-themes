// Toggle the show/hide password icon on click

const passwordInput = document.getElementById("exampleInputPassword1");
const showPassIcon = document.querySelector(".showPassIcon");
const hidePassIcon = document.querySelector(".hidePass");

console.log(passwordInput.type);
console.log(showPassIcon);
console.log(hidePassIcon);

//show password when show icon is clicked
hidePassIcon.addEventListener("click", () => {
  passwordInput.type = "text";
  hidePassIcon.style.display = "none";
  showPassIcon.style.display = "inline-block";
});

//hide password when hide icon is clicked
showPassIcon.addEventListener("click", () => {
  passwordInput.type = "password";
  showPassIcon.style.display = "none";
  hidePassIcon.style.display = "inline-block";
});
