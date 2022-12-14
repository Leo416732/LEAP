let score = 0;

let rootElement = document.getElementById("root");
let rootSec = document.getElementById("root");
rootSec.style.display = "flex";
rootSec.style.flexWrap = "wrap";
rootSec.style.width = "440px";
let randomNum = Math.floor(Math.random() * 16 + 1);
let colorID;
function startGame() {
  for (i = 0; i < 16; i++) {
    let randomR = Math.floor(Math.random() * 255 + 1);
    let randomG = Math.floor(Math.random() * 255 + 1);
    let randomB = Math.floor(Math.random() * 255 + 1);
    let newDiv = document.createElement("div");
    let g = rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    let different = i == randomNum;
    newDiv.addEventListener("click", function () {
      if (different) {
        score += 1;
        console.log(score);
      } else {
        score = 0;
      }
    });
    if (different) {
      newDiv.style.backgroundColor = `rgb(${randomR},${randomB},${randomG})`;
    } else {
      newDiv.style.backgroundColor = `rgb(${randomR},${randomB},${randomG})`;
    }
  }
}
startGame();
