/**
 * Calcular el índice de masa corporal
 * e indicar si una persona se encuentra con sobrepeso
 * de acuerdo a la siguiente tabla
 */
/**
 * 15 o menos	Delgadez
 * 15 y 25	Peso ideal
 * 25 a mas	sobrepeso
 */
/**
 * FORMULA DE IMC
 * IMC = peso(kg)/altura al cuadrado(m)
 */

let peso = +prompt("Ingrese su peso en Kgs");
let altura = +prompt("Ingrese su altura en Mts");
const imc = peso / (altura * altura);
console.log(imc);
if (imc <= 15) {
  console.log("El paciente presenta delgadez 💀");
} else {
  if (imc > 25) {
    console.log("El paciente presenta sobrepeso 🐷");
  } else {
    console.log("El paciente presenta un peso ideal 😁");
  }
}
