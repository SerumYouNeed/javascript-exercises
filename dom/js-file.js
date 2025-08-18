const inpt = document.querySelector("input");
const btn = document.querySelector("button");
const lst = document.querySelector("ul");


btn.addEventListener("click", beClicked)
function beClicked() {
    const val = inpt.value;
    inpt.value = "";

    const isidelistItem = document.createElement("li");
    const inisdeBtn = document.createElement("button");
    const insideSpan = document.createElement("span");
    
    inisdeBtn.textContent = "Delete"
    insideSpan.textContent = val
    isidelistItem.appendChild(insideSpan);
    isidelistItem.appendChild(inisdeBtn);

    lst.appendChild(isidelistItem);

    inisdeBtn.addEventListener("click", () => lst.removeChild(isidelistItem));

    inpt.focus();
}
btn.style.background = "red";
