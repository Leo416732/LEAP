let body = document.querySelector("body");

// title
let title = document.getElementById("first");
title.innerHTML = "Todo List App";

// clock
const date = new Date();
let clockElement = document.getElementById("clock");
clockElement.innerHTML = date;

// input
let inputElement = document.getElementsByClassName("input")[0];

// button
let button = document.querySelector("#btn");

// div
let div = document.getElementsByClassName("div")[0];

// click
button.addEventListener("click", function () {
  let crt;
  let click;
  if (inputElement.value == "") {
  } else {
    crt = document.createElement("div");
    crt.innerHTML = `${inputElement.value}<img class ='image close' src = 'https://cdn-icons-png.flaticon.com/128/1828/1828843.png'> <img class='image' src='https://cdn-icons-png.flaticon.com/128/5290/5290999.png'/> <img class='image pen' src='https://cdn-icons-png.flaticon.com/128/1250/1250615.png'/>`;
    click = crt.className = "click";
  }
  if (inputElement.value == inputElement.value) {
    inputElement.value = "";
  }
  body.appendChild(crt);
  let crtClick = document.getElementsByClassName("click");
  console.log(document.querySelector("div")[0]);
  let close = document.getElementsByClassName("image close");
  let pen = document.getElementsByClassName("image pen");

  //close
  function myClick(some) {
    for (i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        crt[i].style.display = "none";
      });
    }
  }
  myClick();

  // let newDiv;
  // for (i = 0; i < close.length; i++) {
  //     pen[i].addEventListener("click" ,function() {
  //         crt.innerHTML = `<input class='imageInput' value='${"f"}'><img class ='image close' src = 'https://cdn-icons-png.flaticon.com/128/1828/1828843.png'> <img class='image' src='https://cdn-icons-png.flaticon.com/128/5290/5290999.png'/> <img class='image pen' src='https://cdn-icons-png.flaticon.com/128/1250/1250615.png'/>`
  // });

  // }
});
