/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btnEl = document.getElementById("btn__element");
const divElRezulatas = document.getElementById("btn__state");

let paspaudimai = 0;
btnEl.addEventListener("click", () => {
  paspaudimai += 1;
  divElRezulatas.textContent = paspaudimai;
});
