/**
 * una función es un conjunto de lineas de código
 * que se ejecutarán cuando sean invocados, no antes, no después
 */
function tablaDel5() {
  for (let c = 0; c <= 10; c++) {
    console.log(`${c} x 5  = ${c * 5}`);
  }
}
/**
 * OBS: Una función no se ejecuta hasta que se la invoque
 */

tablaDel5();

/**
 * la ventaja de una función es que puede ser invocada N veces
 */
console.log("--------");
tablaDel5();
console.log("--------");
tablaDel5();

/**
 * Otra ventaja de una función es que el código puede ser reutilizable
 */
