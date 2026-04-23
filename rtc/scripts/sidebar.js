let button = document.getElementById("newtabbutton");
let slide = document.getElementById("newtab")
let value = -99.9

button.addEventListener("click", ()=> {
    value = (value === -99.9) ? -20 : -99.9;
    slide.style.right = String(value) + "%";
    console.log(slide.style.right)
    console.log(value)
});