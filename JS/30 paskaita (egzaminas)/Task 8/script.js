/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (num1, num2) {
    return num1 + num2;
  };
  this.subtraction = function (num1, num2) {
    return num1 - num2;
  };
  this.multiplication = function (num1, num2) {
    return num1 * num2;
  };
  this.division = function (num1, num2) {
    return num1 / num2;
  };
}

// const calc = new Calculator();
// const sum = calc.sum(10, 20);
// console.log("sum ===", sum);
// const atimtis = calc.subtraction(10, 20);
// console.log("atimtis ===", atimtis);
// const daugyba = calc.multiplication(10, 20);
// console.log("daugyba ===", daugyba);
// const dalyba = calc.division(10, 20);
// console.log("dalyba ===", dalyba);
