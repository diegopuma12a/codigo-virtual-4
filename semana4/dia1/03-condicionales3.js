/**
 * Calcular el mayor de 3 números (asumiendo que son diferentes todos)
 * Y mostrarlo en la consola
 * Los números pueden ser ingresados por el usuario o declarados al inicio
 * del programa
 */

const nro1 = 20;
const nro2 = 23;
const nro3 = 10;

if (nro1 > nro2) {
  //el nro1 es mayor que nro2
  if (nro1 > nro3) {
    //el nro1 tambien es mayor que el nro3
    console.log(`El número mayor es ${nro1}`);
  } else {
    console.log(`El número mayor es ${nro3}`);
  }
} else {
  if (nro2 > nro3) {
    console.log(`El número mayor es ${nro2}`);
  } else {
    console.log(`El número mayor es ${nro3}`);
  }
}
