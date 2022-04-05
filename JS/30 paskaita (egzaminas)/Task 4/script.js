/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const divElApending = document.getElementById("output");
async function getCars() {
  try {
    const res = await fetch(ENDPOINT);
    const result = await res.json();
    generationCard(result, divElApending);
  } catch (error) {
    console.log(error);
  }
}
getCars();

function generationCard(arr, directino) {
  arr.forEach((obj) => {
    directino.append(card(obj));
  });
}

function card(arr) {
  const divEl = document.createElement("div");
  divEl.className = "card";
  divEl.innerHTML = ` <h2>${arr.brand}</h2>
  <h3>Modeliai:</h3>
  <p>${arr.models}</p>`;
  return divEl;
}
