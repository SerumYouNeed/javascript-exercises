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

// EXAMINE THE DOCUMENT OBJECT
console.dir(document);
console.dir(document.domain);
console.dir(document.URL);

// SELECTORS
let header = document.getElementById("header")
header.textContent = "Hello"; // to zmienia sam text, nie zwraca uwagi na styl
header.innerText = "hej"; // zmienia tekst ale uważa na styl
header.innerHTML = "<h3>jo!</h3>" // to osadza cały tag h3 w header;
let listIt = document.getElementsByClassName("li-elements"); // elements, to zwraca nodelist więc jak chcę coś zrobić dla całości to iteruj jak dla jednostki to indeksy
let alllistIt = document.getElementsByTagName("li-elements"); // elements, to zwraca nodelist więc jak chcę coś zrobić dla całości to iteruj jak dla jednostki to indeksy

// PARENTS
let parent1 = header.parentNode; // po kropce można dojść do głównego rodzica
let parent2 = header.parentElement; // właściwie można tego używać zamiennie

// CHILDREN
let chold1 = parent1.childNodes; // to zwraca nodelist, uwaga na text node - to są np. break line pomiędzy elementami które znajdą się w liście
let chold2 = parent2.children; // to zwraca HTML collection więc bez tych textów
chold1.firstElementChild // te metody zwrócą pierwszy element html
chold1.lastElementChild

// SIBLING
console.log(chold1.nextElementSibling);
console.log(chold1.previousElementSibling);

// CREATE
let newDiv = document.createElement("div");
let txt = document.createTextNode("Hello world");
newDiv.appendChild(txt)

