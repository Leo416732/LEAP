let root = document.querySelector(".root");
let input = document.querySelector(".input");
let btn = document.querySelector(".button");

fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((data) => users(data));

function users(data) {
  data.map((user) => {
    root.innerHTML += `<h1>${user.name}</h1>
    <p>${user.balance}</p>`;
  });
}

btn.addEventListener("click", () => {
  console.log(input.value);
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((data) => q(data));
});

function q(data) {
  root.innerHTML = "";
  let count;
  let money;
  data.map((user) => {
    money = user.balance;
    for (i = 0; i < input.value; i++) {
      if (user.balance_type) {
        count = Math.round(money * 0.1 + money);
      } else {
        count = Math.round(money * 0.01 + money);
      }
      money = count;
    }
    root.innerHTML += `<h1>${user.name}</h1>
      <p>${count}</p>`;
  });
}
