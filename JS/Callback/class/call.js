let rootEl = document.getElementById("root");
rootEl.style.width = "150px";
rootEl.style.color = "white";
rootEl.style.borderRadius = "10px";
rootEl.style.backgroundColor = "blue";
rootEl.style.display = "flex";
rootEl.style.justifyContent = "center";
rootEl.style.textAlign = "center";
rootEl.style.cursor = "pointer";
rootEl.style.padding = "5px";

window.addEventListener("scroll", () => {
  console.log(window.scrollY); // == 1001
  console.log(innerHeight); // == screen * vh -iin ehnii too
  let perc = document.querySelector("#percentage");
  perc.innerText = `${Math.floor(
    (window.scrollY * 100) /
      (document.querySelector("body").clientHeight - window.innerHeight)
  )} %`;
});
