const listItems = document.querySelectorAll("li");
// store ref to the <h1>
const heading = document.querySelector("h1");
const image = document.querySelector("img");

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
image.addEventListener("click", () => {
    const src = image.getAttribute("src");
    if (src == "images/headshots/kel&nelson.png") {
        image.setAttribute("src", "images/gosling factor.jpg");
    } else {
        image.setAttribute("src", "images/headshots/kel&nelson.png");
    }
});