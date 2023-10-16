// Add tabs-list-item-active class to the current button (highlight it and remove the active class from the other buttons)
const tabsContainer = document.querySelector(".tabs-list");

const tabs = tabsContainer.querySelectorAll(".tabs-list-item");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("tabs-list-item-active");
    current[0].className = current[0].className.replace(
      " tabs-list-item-active",
      ""
    );
    this.className += " tabs-list-item-active";
  });
}

console.log("tabsContainer", tabsContainer);
console.log("tabs", tabs);
