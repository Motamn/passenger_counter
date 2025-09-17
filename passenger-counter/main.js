let counter = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  counter = counter + 1;
  countEl.textContent = counter;
}

function decrement() {
  if (counter > 0) {
    counter = counter - 1;
  }
  countEl.textContent = counter;
}

function save() {
  let countStr = counter + " - ";
  saveEl.textContent += countStr;
  counter = 0
  countEl.textContent = counter
}

function reset() {
  saveEl.innerText = "Previous Entries:";
}
