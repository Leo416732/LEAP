const rootELement = document.querySelector("#root");

function Profiles(user) {
  console.log(user);
  rootELement.innerHTML = `<card>
    <h1>${user}</h1>
    </card>`;
}

fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then(Profiles());
