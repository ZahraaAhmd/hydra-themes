var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    console.log('tabs', x)
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    // if (n == 0) {
    //     document.getElementById("prevBtn").style.display = "none";
    // } else {
    //     document.getElementById("prevBtn").style.display = "inline";
    // }
    // if (n == (x.length - 1)) {
    //     document.getElementById("nextBtn").innerHTML = "Submit";
    // } else {
    //     document.getElementById("nextBtn").innerHTML = "Next";
    // }
    // ... and run a function that displays the correct step indicator:
    // fixStepIndicator(n)
}



// when checked any rating radio buttons show the next question
const checkRadioBtns = document.querySelectorAll('.btn-check')
console.log("checked btns", checkRadioBtns)
console.log("heqweqw")
function nextPrev(event, n) {
    event.preventDefault()
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");

    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}


