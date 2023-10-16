// when click on the first button in the form will hide the first form and show the second form



const form1SubmitBtn = document.querySelector('.btn-form-one-send');
const form1 = document.querySelector('.form-one-main');
const form2 = document.querySelector('.form-two-main');

console.log(form1SubmitBtn);
console.log(form1);
console.log(form2);

form1SubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    form1.style.display = "none";
    form2.style.display = "block";
});

