const passwordInput = document.querySelector(".password__input");
const showPassIcon = document.querySelector(".showPassIcon");
const hidePassIcon = document.querySelector(".hidePass");

console.log("pass input sign up", passwordInput);
console.log("show pass icon", showPassIcon);
console.log("hide pass icon", hidePassIcon);
//show password when show icon is clicked
hidePassIcon.addEventListener("click", () => {
  passwordInput.type = "password";
  hidePassIcon.style.display = "none";
  showPassIcon.style.display = "inline-block";
});

//hide password when hide icon is clicked
showPassIcon.addEventListener("click", () => {
  passwordInput.type = "text";

  showPassIcon.style.display = "none";
  hidePassIcon.style.display = "inline-block";
});
