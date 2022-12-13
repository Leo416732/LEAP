let rootElement = document.getElementById("root");
let rootSec = document.getElementById("root");
rootSec.style.display = "flex";
rootSec.style.flexWrap = "wrap";
rootSec.style.width = "450px";
let randomR = Math.floor(Math.random() * 255 + 1);
let randomG = Math.floor(Math.random() * 255 + 1);
let randomB = Math.floor(Math.random() * 255 + 1);
let randomNum = Math.floor(Math.random() * 16 + 1);
for (i = 0; i < 16; i++) {
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black";
  newDiv.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    if (i == randomNum) {
    newDiv.style.backgroundColor = `rgb(${randomR - 30},${randomG},${randomB})`;
  }
}

