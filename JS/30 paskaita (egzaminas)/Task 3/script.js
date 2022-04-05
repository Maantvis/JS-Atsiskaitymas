/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const divElOutput = document.getElementById("output");
const messageEl = document.getElementById("message");
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
  divElOutput.innerHTML = "";
  messageEl.remove();
  divElOutput.className = "card-container";
  getUsers();
});

async function getUsers() {
  try {
    const res = await fetch(ENDPOINT);
    const result = await res.json();
    generationCards(result);
  } catch (error) {
    console.log(error);
  }
}

function generationCards(arr) {
  messageEl.remove();
  arr.forEach((cObj) => {
    cardCreating(cObj);
  });
}
function cardCreating(usersObj) {
  const divEl = document.createElement("div");
  divEl.className = "card";
  divEl.innerHTML = `<img src="${usersObj.avatar_url}" alt="${usersObj.login}" />
  <h3>${usersObj.login}</h3>`;
  divElOutput.append(divEl);
}
