// score
let score = 0;
let scored = document.getElementById("score");
scored.innerHTML = `Easy mode:`;
scored.innerHTML = `Score: ${score}`;
scored.style.color = "white";
scored.style.textAlign = "center";
scored.style.padding = "30px 0";
scored.style.fontSize = "30px";
//root
let rootElement = document.getElementById("root");
let rootSec = document.getElementById("root");
document.querySelector("body").style.backgroundColor = "#001f24";
rootSec.style.display = "flex";
rootSec.style.margin = "auto";
rootSec.style.gap = "7px";
rootSec.style.flexWrap = "wrap";
rootSec.style.width = "430px";
rootSec.style.border = "2px solid black";
rootElement.style.padding = "5px";

//start game
function startGame() {
  let randomR = Math.floor(Math.random() * 255);
  let randomG = Math.floor(Math.random() * 255);
  let randomB = Math.floor(Math.random() * 255);
  let randomNum = Math.floor(Math.random() * 16);
  rootElement.innerHTML = "";
  // for loop
  for (i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    let colorChange =
      (newDiv.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`);
    let different = i == randomNum;

    // different
    if (different) {
      if (randomR > 100) {
        colorChange = newDiv.style.backgroundColor = `rgb(${randomR - 40},${
          randomG - 40
        },${randomB - 40})`;
      } else if (randomR < 100 && randomR > 0) {
        colorChange = newDiv.style.backgroundColor = `rgb(${randomR + 40},${
          randomG + 40
        },${randomB + 40})`;
      }
    }
    // click
    newDiv.addEventListener("click", function () {
      if (different) {
        score += 1;
        startGame();
        scored.innerHTML = `Score: ${score}`;
        if (score > 10 && different) {
          colorChange = newDiv.style.backgroundColor = `rgb(${
            randomR - 20
          },${randomG},${randomB - 20})`;
          console.log(colorChange);
        } else if (score > 20 && different) {
          colorChange =
            newDiv.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
        }
      } else {
        score = 0;
        scored.innerHTML = `Score: ${score}`;
      }
    });
  }
}
startGame();
