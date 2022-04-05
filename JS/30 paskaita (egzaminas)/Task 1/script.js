/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];
const inputEl = document.getElementById("search");
const divEl = document.getElementById("output");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  inputElValue = inputEl.value;
  const svarai = svaruSkaiciavimas(inputElValue);
  const gramai = gramuSkaiciavimas(inputElValue);
  const uncijos = uncijosSkaiciavimas(inputElValue);
  divEl.innerHTML = `
  <h2>Jusu ivedet : <span>${inputElValue} </span>kg </h2>
  <h2>Jusu svoris svarais yra: <span>${svarai}</span>  lb</h2>
    <h2>Jusu svoris gramais yra: <span>${gramai}</span> g</h2>
    <h2>Jusu svoris uncijom yra: <span>${uncijos}</span> oz</h2>`;

  inputEl.value = "";
});

function svaruSkaiciavimas(kg) {
  return kg * 2.2046;
}
function gramuSkaiciavimas(kg) {
  return kg / 0.001;
}
function uncijosSkaiciavimas(kg) {
  return kg * 35.274;
}
