let body = document.querySelector("body");
body.style.backgroundColor = "#001f24";
// title
let title = document.getElementById("first");
title.innerHTML = "Todo List App";
title.style.textAlign = "center";
title.style.fontSize = "50px";
title.style.paddingTop = "50px";
title.style.paddingBottom = "30px";
title.style.color = "rgb(245, 245,245)";
// clock
const date = new Date();
let clockElement = document.getElementById("clock");
clockElement.innerHTML = date;
clockElement.style.textAlign = "center";
clockElement.style.color = "rgb(250,240,230)";
// input
let inputElement = document.getElementsByClassName("input")[0];
inputElement.style.width = "85%";
inputElement.style.height = "20px";
inputElement.style.fontSize = "18px";
inputElement.style.padding = "8px";
inputElement.style.marginTop = "0px";
inputElement.style.backgroundColor = "rgb(250,240,230)";
// button
let button = document.querySelector("#btn");
button.style.margin = "0";
button.style.width = "50px";
button.style.padding = "10px";
button.style.backgroundColor = "rgb(255,140,0)";
// div
let div = document.getElementsByClassName("div")[0];
div.style.textAlign = "center";
div.style.display = "flex";
div.style.width = "500px";
div.style.margin = "auto";
div.style.marginTop = "20px";
div.style.borderBottom = "2px solid rgb(255,140,0)";

// click
button.addEventListener("click", function () {
  let crt;
  let click;
  if (inputElement.value == "") {
  } else {
    crt = document.createElement("div");
    crt.innerHTML = `<div class='crtDiv'>${inputElement.value}<img class ='image close' src = 'https://cdn-icons-png.flaticon.com/128/1828/1828843.png'> <img class='image' src='https://cdn-icons-png.flaticon.com/128/5290/5290999.png'/> <img class='image pen' src='https://cdn-icons-png.flaticon.com/128/1250/1250615.png'/></div>`;
    click = crt.className = "click";
  }
  if (inputElement.value == inputElement.value) {
    inputElement.value = "";
  }
  body.appendChild(crt);
  let crtClick = document.getElementsByClassName("crtDiv");
  console.log(crtClick);
  let close = document.getElementsByClassName("image close");
  let pen = document.getElementsByClassName("image pen");
  for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      crtClick[i].style.display = "none";
    });
  }
  // let newDiv;
  // for (i = 0; i < close.length; i++) {
  //     pen[i].addEventListener("click" ,function() {
  //         crt.innerHTML = `<input class='imageInput' value='${"f"}'><img class ='image close' src = 'https://cdn-icons-png.flaticon.com/128/1828/1828843.png'> <img class='image' src='https://cdn-icons-png.flaticon.com/128/5290/5290999.png'/> <img class='image pen' src='https://cdn-icons-png.flaticon.com/128/1250/1250615.png'/>`
  // });

  // }
});
//save click
