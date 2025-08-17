const inpt = document.querySelector("input");
const btn = document.querySelector("button");
const lst = document.querySelector("ul");


btn.addEventListener("click", beClicked)
function beClicked() {
    const val = inpt.value;
    inpt.value = "";
    
}
btn.style.background = "red";
