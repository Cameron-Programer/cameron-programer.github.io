let button = document.getElementById("newtabbutton");
let slide = document.getElementById("newtab")
let value = -99.9

button.addEventListener("click", ()=> {
    value = (value === -99.9) ? -40 : -99.9;
    /*if (value == -99.9) {
        value = -10
    } else {
        value = -99.9
    }*/
    slide.style.right = String(value) + "%";
    console.log(slide.style.right)
    console.log(value)
});