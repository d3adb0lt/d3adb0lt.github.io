const listItems = document.querySelectorAll("li");
// store ref to the <h1>
const heading = document.querySelector("h1");
const headshot = document.querySelector(".headshot");

function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}
listItems.forEach((item) => {
    item.addEventListener("mouseenter", toggleDone);
});
listItems.forEach((item) => {
    item.addEventListener("mouseleave", toggleDone);
});
headshot.addEventListener("click", () => {
    const src = headshot.getAttribute("src");
    if (src == "images/headshots/kel&nelson.png") {
        headshot.setAttribute("src", "images/gosling factor.jpg");
    } else {
        headshot.setAttribute("src", "images/headshots/kel&nelson.png");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});