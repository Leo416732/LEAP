//chess
let rootElement = document.getElementById("root");
let rootSecondELement = document.getElementById("root");
rootSecondELement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "800px";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "90px";
    newDiv.style.height = "90px";
    newDiv.style.border = "1px solid black";
    if ((i + j) % 2 == 0) {
      newDiv.style.backgroundColor = "grey";
    }
  }
}
